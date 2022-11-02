<template>
  <div class="bg-image" :style="{ 'background-image': `url(${image})` }" />
</template>

<script>
/**
 * Background image component
 */
export default {
  name: "MenuBgImage",
  props: {
    /**
     * Image's object to display
     */
    image: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.bg-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 0;

  &.transparent {
    opacity: 0.4;
  }
}
</style>
