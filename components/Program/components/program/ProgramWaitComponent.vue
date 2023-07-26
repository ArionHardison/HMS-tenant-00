<template>
  <div class="row">
    <div class="col-12 text-center">
      <h1 class="text-center mt-3 mb-3">Next step will be available soon</h1>
      <CountDown
        :end-date="endDate"
        class="mt-4"
        @timerStopped="continueProgram"
      />
    </div>
  </div>
</template>

<script>
import CountDown from "@/components/Program/components/followup/CountDown.vue";

export default {
  name: "ProgramWaitComponent",
  components: {CountDown},
  props: {
    endDate: {
      type: String,
      default: null
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
