<template>
  <div :style="{ '--primary-color': primaryColor }">
    <template v-if="!isVerifiedUser">
      <nuxt/>
    </template>
  </div>
</template>

<script>
export default {
  computed: {
    colors(){
      return  this.$store.state.colors;
    },
    isVerifiedUser() {
      return this.$store.state.authData.accessToken && this.$store.state.authData.email_verified_at !== null;
    }
  },
  mounted() {
    if (this.isVerifiedUser) {
      this.$router.push("/");
    } else {
      this.addDynamicStyles();
    }
  },
  methods: {
    addDynamicStyles() {
      const styles = this.colors
        .filter(c => c.container_color)
        .map(c => `.${c.container_call} { color: ${c.container_color} !important; }`)
        .join(' ');

      const styleSheet = document.createElement('style');
      styleSheet.type = 'text/css';
      styleSheet.innerText = styles;
      document.head.appendChild(styleSheet);
    }
  }
};
</script>
