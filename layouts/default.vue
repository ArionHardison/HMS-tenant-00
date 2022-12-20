<template>
  <div :style="{ '--primary-color': primaryColor }">
    <template v-if="!isNotVerifiedUser">
      <nuxt/>
    </template>
  </div>
</template>
<script>
export default {
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
