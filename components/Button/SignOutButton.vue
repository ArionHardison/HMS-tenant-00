<template>
  <div class="menu-toggle">
    <button class="btn btn-lg btn-before-horbar btn-link border-0 p-0 min-w-auto" @click="signOut">Sign Out</button>
  </div>
</template>

<script>
export default {
  name: 'SignOutButton',
  methods: {
    async signOut() {
      this.$store.commit("signOut");
      await this.get(`public/auth/sign-out`);
    },
  }
};
</script>
