<template>
  <button
    v-if="showButton"
    class="btn btn-primary scroll-to-top"
    @click="scrollToHeader"
  >
    <ArrowUpIcon :size="24" />
  </button>
</template>

<script>
import ArrowUpIcon from 'vue-material-design-icons/ArrowUp.vue';

export default {
  components: {
    ArrowUpIcon,
  },
  data() {
    return {
      showButton: false,
    };
  },
  mounted() {
    if(process.client) {
      window.addEventListener('scroll', this.handleScroll);
      this.handleScroll();
    }
  },
  beforeDestroy() {
    if(process.client) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  },
  methods: {
    handleScroll() {
      this.showButton = window.scrollY > 100 && !this.isMobile();
    },
    scrollToHeader() {
      const header = document.getElementById('header');
      if (header) {
        header.scrollIntoView({ behavior: 'smooth' });
      }
    },
    isMobile() {
      return window.innerWidth <= 768;
    },
  },
};
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 50px;
  z-index: 1000;
}
</style>
