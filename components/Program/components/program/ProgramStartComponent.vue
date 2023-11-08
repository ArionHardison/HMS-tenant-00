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
      <Onboarding @start="startProgram"/>
    </div>
  </div>
</template>

<script>
import Onboarding from "@/components/Program/components/Onboarding.vue";
export default {
  name: "ProgramStartComponent",
  components: {
    Onboarding
  },
  props: {
    currentStep: {
      type: Object,
      default: {}
    }
  },
  methods: {
    startProgram(onboarding) {
      this.$emit("start", onboarding);
    },
  },
};
</script>

<style scoped></style>
