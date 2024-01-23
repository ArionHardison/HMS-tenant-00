<template>
  <div class="row">
    <div class="col-12 text-center">
      <b>{{currentStep.program_name}}</b> was failed! To run the program again, you need to purchase it again on the "Programs" page
      <div class="row">
        <div class="col-6 text-left">
          <nuxt-link to="/programs-list" class="mt-4 btn btn-primary">Programs</nuxt-link>
        </div>
        <div class="col-6 text-right">
          <nuxt-link to="/account" class="mt-4 btn btn-primary">My Account</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgramFailedComponent",
  props: {
    currentStep: {
      type: Object,
      default: {
        program_name: "Program"
      }
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
