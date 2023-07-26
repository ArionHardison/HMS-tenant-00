<template>
  <div class="row">
    <div class="col-12">
      <template v-if="challengeTasks">
        <template v-for="(task, index) in challengeTasks">
          <template v-if="challengeType === 'task'">
            <TaskChallenge :challenge-task="task" @finish="setResult" />
          </template>
          <template v-if="challengeType === 'picture'">
            <PictureUpload :challenge-task="task" @finish="setResult" />
          </template>
        </template>
      </template>
    </div>
  </div>
</template>
<script>
import api from "@/mixins/api";
import PictureUpload from "@/components/Program/components/challenge/PictureUpload.vue";
import TaskChallenge from "@/components/Program/components/challenge/TaskChallenge.vue";

export default {
  name: "RunningChallenge",
  components: {
    TaskChallenge,
    PictureUpload,
  },
  mixins: [api],
  props: {
    recurring: {
      type: Boolean,
      default: false,
    },
    challenge: {
      type: Number,
      default: 0,
    },
    challengeType: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      multipartFormData: true,
      challengeTasks: null,
    };
  },
  async beforeMount() {
    const challengeTasks = await this.get(
      `challenge/${
        this.recurring ? "get-challenge-global-tasks" : "get-challenge-tasks"
      }/${this.challenge}/${
        this.recurring ? this.$route.params.id : this.$route.query.id
      }`
    );
    this.challengeTasks = this.getCurrentTask(challengeTasks);
  },
  methods: {
    getCurrentTask(tasks) {
      let currentTaskFound = false;
      return tasks.map((task) => {
        if (task.result || currentTaskFound) {
          task.isCurrent = false;
        } else {
          currentTaskFound = true;
          task.isCurrent = true;
        }
        return task;
      });
    },
    async setResult(result, taskFinished = 1) {
      console.log("SET RESULT");
      console.log({
        task_finished: taskFinished,
        task_result: result.taskData ? result.taskData : null,
      });
      const updatedTasks = await this.post(
        `challenge/set-result/${result.task}`,
        {
          task_finished: taskFinished,
          task_result: result.taskData ? result.taskData : null,
        }
      );
      if (updatedTasks) {
        this.challengeTasks = this.getCurrentTask(updatedTasks);
      }
    },
  },
};
</script>

<style scoped></style>
