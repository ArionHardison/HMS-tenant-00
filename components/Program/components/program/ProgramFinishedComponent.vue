<template>
  <div class="row">
    <div class="col-12">
      <template v-if="currentStep.is_attached">

        Congratulations! Daily task for program was successfully finished!

        <nuxt-link :to="`/follow-program?id=${currentStep.is_attached_to}`"
        >Back to Main Program
        </nuxt-link
        >
      </template>
      <template v-else>
        <div class="col-12">
          <h4 class="text-center">Congratulations! Program was successfully finished!</h4>
          <Testimonial :program="currentStep.program_id"/>
              <nuxt-link to="/account" class="mt-4 btn btn-primary">Back to My Account</nuxt-link>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Testimonial from "@/components/Program/components/Testimonial.vue";

export default {
  name: "ProgramFinishedComponent",
  components: {Testimonial},
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
