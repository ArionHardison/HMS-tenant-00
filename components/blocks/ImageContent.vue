<template>
  <picture>
    <source :srcset="webpSrc" type="image/webp">
    <source :srcset="jpgSrc" type="image/jpeg">
    <img :src="jpgSrc">
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
  data() {
    return {
      webpSrc: null,
      jpgSrc: null
    }
  },
  beforeMount() {
    this.webpSrc = `https://codify.solutions/public/files/${this.size}/${this.src}.webp/${this.tenant ? this.tenantId + '/' : ''}`
    this.jpgSrc = `https://codify.solutions/public/files/${this.size}/${this.src}.jpg /${this.tenant ? this.tenantId + '/' : ''}`
  }
}
</script>

<style scoped>

</style>
