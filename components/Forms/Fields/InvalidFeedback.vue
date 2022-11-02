<template>
  <div class="error">
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
  font-size: 80%;
}
</style>
