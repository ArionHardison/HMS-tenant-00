<template>
  <div class="error mt-2 lh">
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
  font-size: 12px;
}
.lh {
  line-height: 1 !important;
}
</style>
