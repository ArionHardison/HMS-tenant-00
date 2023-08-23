<template>
  <div class="row">
    <div class="col-12">
      <client-only>
        <component
          :is="currentStep.module"
          :item="
                  currentStep.module_item_id
                    ? currentStep.module_item_id
                    : currentStep.target
                "
          :resource="currentStep.module"
          @continueProgram="continueProgram"
        ></component>
      </client-only>
    </div>
  </div>
</template>

<script>
import Assessment from "@/components/Program/components/Assessment.vue";
import FollowUp from "@/components/Program/components/FollowUp.vue";
import Wait from "@/components/Program/components/Wait.vue";
import Challenge from "@/components/Program/components/Challenge.vue";
import Activity from "@/components/Program/components/Activity.vue";
export default {
  name: "ProgramRunningComponent",
  components: {
    Assessment,
    FollowUp,
    Challenge,
    Wait,
    Activity
  },
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
