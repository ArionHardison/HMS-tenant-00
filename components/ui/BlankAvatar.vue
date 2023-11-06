<template>
  <div class="blank-avatar mt-1 mb-1">
    <img src="~/static/img/blank_avatar.png" :style="{width: `${size}px`, height: `${size}px`}" class="profile-avatar blank-avatar">
  </div>
</template>

<script>
export default {
  name: "BlankAvatar",
  props: {
    size: {
      type: Number,
      default: 50
    }
  }
};
</script>

<style scoped>
.blank-avatar{
  display: inline;
  margin:10px;
}
.blank-avatar img {
  border-radius: 50%;
}
</style>
