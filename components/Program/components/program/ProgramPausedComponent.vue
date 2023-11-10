<template>
  <div class="row">
    <div class="col-12 text-center">
      Before proceeding with the program, ensure to complete the tasks listed in the associated tasks section.
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgramPausedComponent",
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
    startProgram() {
      this.$emit("start");
    },
  },
};
</script>

<style scoped></style>
