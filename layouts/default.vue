<template>
  <div :style="{ '--primary-color': primaryColor }">
    <scroll-to-top/>
    <template v-if="!isNotVerifiedUser">
      <nuxt/>
    </template>
  </div>
</template>
<script>
import ScrollToTop from '@/components/ui/ScrollToTop.vue';
export default {
  components: {
    ScrollToTop,
  },
  computed: {
    colors(){
      return  this.$store.state.colors;
    },
    isNotVerifiedUser() {
      return this.$store.state.authData.accessToken && this.$store.state.authData.email_verified_at === null
    }
  },
  mounted() {
    if (this.isNotVerifiedUser) {
      this.$router.push("/verification")
    }else{
      this.addDynamicStyles();
    }
  },
  methods: {
    addDynamicStyles() {
      const styles = this.colors
        .filter(c => c.container_color)
        .map(c => `.${c.container_call} *:not(.btn)  { color: ${c.container_color} !important; }`)
        .join(' ');

      const styleSheet = document.createElement('style');
      styleSheet.type = 'text/css';
      styleSheet.innerText = styles;
      document.head.appendChild(styleSheet);
    }
  }
};
</script>
<style>

</style>
