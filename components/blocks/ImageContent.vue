<template>
  <picture>
    <img :src="`https://web.codifyhealthcare.com/public/files/${this.size}/${this.src}/${this.tenant ? this.tenantId + '/' : ''}`">
  </picture>
</template>

<script>
export default {
  name: "ImageContent",
  props: ["src", 'size', "tenant"],
  computed: {
    tenantId() {
      return this.$store.state.initializedId;
    },
  },
}
</script>

<style scoped>

</style>
