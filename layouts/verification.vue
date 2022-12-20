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
    isVerifiedUser() {
      return this.$store.state.authData.accessToken && this.$store.state.authData.email_verified_at !== null
    }
  },
  mounted() {
    if (this.isVerifiedUser) {
      this.$router.push("/")
    }
  }
};
</script>

<style>

</style>
