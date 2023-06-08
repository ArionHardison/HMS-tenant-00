<template>
  <picture>
    <img :src="$imageUrl(this.src, this.size, true)">
  </picture>
</template>

<script>
export default {
  name: "ImageContent",
  props: ["src", 'size', "tenant"],
}
</script>

<style scoped>

</style>
