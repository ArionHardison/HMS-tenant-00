<template>
  <div class="custom-avatar">
    <img
      v-if="src"
      :src="$imageUrl(src, 'sm', false)"
      :alt="alt"
      :style="avatarStyle"
      class="img"
      @error="onImageError"
    />
    <img
      v-else
      src="@/assets/user.jpg"
      :alt="alt"
      :style="avatarStyle"
      class="img"
    />
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
  methods: {
    onImageError(e) {
      e.target.src = require('@/assets/user.jpg'); // Use require for webpack to resolve the path correctly
    }
  }
};
</script>

<style scoped>
.custom-avatar img {
  border-radius: 50%;
  object-fit: cover;
}
</style>
