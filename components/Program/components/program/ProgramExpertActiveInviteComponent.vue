<template>
  <div class="row">
    <div class="col-12">
      <h2>
        {{ currentStep.invited }}
      </h2>

      Congratulations! You invited
      {{ currentStep.name }}
      to be your personal {{ currentStep.setup_started.role.name }}!
      {{ currentStep.name }}
      has 1 day to accept your invite, in case if
      {{ currentStep.name }}
      will not accept it, you should choose someone else!

      <h2 class="mt-4 text-center">Time left to accept</h2>
      <CountDown
        :end-date="currentStep.setup_started.endTime"
        class="mt-4"
        @timerStopped="continueProgram"
      />
    </div>
  </div>
</template>

<script>
import CountDown from "@/components/Program/components/followup/CountDown.vue";

;

export default {
  name: "ProgramExpertActiveInviteComponent",
  components: {CountDown},
  props: {
    currentStep: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      currentQuestion: 0,
      assessment: null,
    };
  },
  methods: {
    continueProgram() {
      this.$emit("continue");
    },
  },
};
</script>

<style scoped></style>
