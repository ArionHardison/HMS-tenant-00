<template>
  <div class="card p-3">
    <h6>{{ task.program }}</h6>
    <p>1
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

<style scoped></style>
