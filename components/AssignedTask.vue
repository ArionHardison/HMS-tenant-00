<template>
  <div class="card p-3 task-card">
    <h6>{{ task.program }}</h6>
    <p :title="task.module_item ? task.module_item + ' - ' : '' + task.task_description">
      {{ task.module_item ? task.module_item + " - " : "" }}
      {{ task.task_description }}
    </p>
    <template v-if="task.schedule_run">
      <CountDown :end-date="task.schedule_run" />
    </template>
    <template v-else>
      <template v-if="task.should_schedule">
        Please select date and time comfortable for you
      </template>
    </template>

    <nuxt-link
      class="btn btn-success"
      :to="`follow-program?id=${task.id}`"
    >
      <template v-if="task.should_schedule && !task.schedule_run">
        Setup date and time
      </template>
      <template v-else> Start </template>
    </nuxt-link>
  </div>
</template>

<script>
import CountDown from "@/components/Program/components/followup/CountDown.vue";
export default {
  name: "AssignedTask",
  components: {
    CountDown
  },
  props: ["task"],
  beforeMount() {
    if (this.target) {
      console.log("has to generate token");
    }
  },
};
</script>

<style scoped>
.task-card {
  height: 270px;
  display: flex;
  flex-direction: column;
}

.task-card h6 {
  margin-bottom: 0.5em;
}

.task-card p {
  flex-grow: 1;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
}

.task-card .btn {
  margin-top: auto;
}

</style>
