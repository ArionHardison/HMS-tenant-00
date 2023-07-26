import api from "@/mixins/api";

export default {
  mixins: [api],
  data() {
    return {
      taskData: {
        id: this.challengeTask.result.id,
        image: null,
        file: null,
        result: null,
      },
    };
  },
  methods: {
    async finishTask() {
      this.$emit("taskFinished", this.challengeTask.id);
      await this.patch("challenge/set-result");
    },
    async startTask() {
      await this.post("challenge/start-task", {
        attached_challenge_id: this.challengeTask.challenge_id,
        challenge_task_id: this.challengeTask.id,
      });
    },
  },
};
