<template>
  <div class="custom-avatar">
    <img :src="$imageUrl(src, 'sm', false)" :alt="alt" :style="avatarStyle" class="img" />
  </div>
</template>

<script>
export default {
  name: "Avatar",
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: "Avatar",
    },
    size: {
      type: Number,
      default: 50,
    },
  },
  computed: {
    avatarStyle() {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`,
      };
    },
  },
};
</script>

<style scoped>
.custom-avatar img {
  border-radius: 50%;
  object-fit: cover;
}
</style>
