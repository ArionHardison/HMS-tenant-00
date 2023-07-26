<template>
  <div class="row">
    <div class="col-12 text-center">
      Apologies for the inconvenience, but the program is currently inaccessible due to some errors. Please wait until the author has resolved these issues, then try again later.
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgramErrorComponent",
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
