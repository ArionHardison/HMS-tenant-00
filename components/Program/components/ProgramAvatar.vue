<template>
  <nuxt-link
    :to="link ? `/${userInfo.username}` : $route.fullPath"
    :style="{
      width: width + ' !important',
      height: height + ' !important',
    }"
    tag="a"
    class="avatar-backgroun"
  >
    <img
      v-if="avatar"
      :style="{
        width: width + ' !important',
        height: height + ' !important',
      }"
      v-src="avatar"
      class="img-user-small avatar-full-width"
      :alt="alt"
      :class="className"
      @error="replaceByDefault"
    />
    <div
      class="show-avatar-name avatar-full-width"
      :style="{
        'font-size': size,
      }"
      v-else
    >
      {{ firstLetter }}
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    userInfo: {
      required: true,
      type: Object,
    },
    link: {
      type: Boolean,
      default: true
    },
    width: {
      required: false,
      type: String,
    },
    height: {
      required: false,
      type: String,
    },
    className: {
      required: false,
      type: String,
    },
    alt: {
      required: false,
      type: String,
    },
    size: {
      required: false,
      type: String,
    },
  },
  data() {
    return {
      firstLetter: "",
      avatar: this.userInfo?.profile_picture,
    };
  },
  watch: {
    userInfo(img) {
      this.avatar = img.profile_picture;
    },
  },
  mounted() {
    let  name = this.userInfo.full_name;
    if(this.userInfo.name){
        name = this.userInfo.name;
    }
    this.firstLetter = name.charAt(0);
  },
  methods: {
    replaceByDefault(e) {
      this.avatar = "";
    },
  },
};
</script>

<style scoped>
.avatar-backgroun:hover {
  color: #4d4d4d4d;
}
.avatar-backgroun {
  background-color: #3d3d3d3d;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 50%;
  font-size: 30px;
  font-weight: 700;
  transition: all ease 0.3s;
  border: 2px solid white;
}
.show-avatar-name {
}
.avatar-full-width {
  object-fit: cover;
}
</style>
