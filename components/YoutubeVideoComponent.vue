<template>
  <div class="youtube-video-container" v-if="videoId">
    <iframe
      :src="videoUrl"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <div class="overlay"></div>

  </div>
</template>

<script>
export default {
  name: "YoutubeVideoComponent",
  props: {
    videoId: {
      type: String,
      default: '',
    },
  },
  computed: {
    videoUrl() {
      return `https://www.youtube.com/embed/${this.videoId}?autoplay=1&mute=1&loop=1&rel=0&controls=0&showinfo=0&playlist=${this.videoId}`;
    },
  },
};
</script>

<style scoped>
.youtube-video-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  overflow: hidden;
}

.youtube-video-container iframe {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: auto;
  min-height: 100%;
  transform: translateY(-50%);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(128, 128, 128, 0.5);
}
</style>
