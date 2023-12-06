<template>
  <div class="row">
    <div class="col-12 text-center">
      Now <b>{{currentStep.until.now}}</b> but protocol is paused until <b>{{currentStep.until.next}}</b>.
      {{moduleActions[currentStep.module]}}!
    </div>
  </div>
</template>

<script>
export default {
  name: "ProtocolFrozenMessageComponent",
  props: {
    currentStep: {
      type: Object,
      default: {}
    }
  },
  data(){
    return {
      moduleActions: {
        nudge: "You will receive message once step will be available",
        assessment: "You will be able to fill assessment once step will be available"
      }
    }
  },
};
</script>

<style scoped></style>
