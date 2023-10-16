<template>
  <div class="row">
    <div class="col-12 text-center">
      Program was failed! To run the program again, you need to purchase it again on the "All Programs" page
      <nuxt-link to="/account">To Account</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgramFailedComponent",
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
