<template>
  <picture>
    <img :src="$imageUrl(src, size, tenant)">
  </picture>
</template>

<script>
export default {
  name: "ImageContent",
  props: {
    tenant: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: "sm"
    },
    src: {
      type: String,
      default: "",
    },
  }
}
</script>

<style scoped>

</style>
