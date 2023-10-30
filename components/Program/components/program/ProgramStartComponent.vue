<template>
  <div class="row">
    <div class="col-12 text-center">
      <h2>{{ currentStep.program_name }}</h2>
      <template v-if="currentStep.auto_fail">
        <BaseAlert type="warning protocol-error-msg">
          Warning! First step should be finished in
          <b
          >{{ currentStep.auto_fail.period }}
            {{ currentStep.auto_fail.in }}</b
          >! Otherwise program going to be <b>failed</b>.
        </BaseAlert>
      </template>
      <p>
        If you are ready to start program click - start program button
      </p>
      <button class="btn btn-primary text-white" @click="startProgram">
        Start Program
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgramStartComponent",
  props: {
    currentStep: {
      type: Object,
      default: {}
    }
  },
  methods: {
    startProgram() {
      this.$emit("start");
    },
  },
};
</script>

<style scoped></style>
