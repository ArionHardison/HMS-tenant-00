<template>
  <div class="error mt-2 lh mb-2">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "InvalidFeedback",
};
</script>

<style scoped>
.error {
  color: #fb6340;
  font-size: 14px;
}
.lh {
  line-height: 1 !important;
}
</style>
