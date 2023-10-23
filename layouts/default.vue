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
    isNotVerifiedUser() {
      return this.$store.state.authData.accessToken && this.$store.state.authData.email_verified_at === null
    }
  },
  mounted() {
    if (this.isNotVerifiedUser) {
      this.$router.push("/verification")
    }
  }
};
</script>
