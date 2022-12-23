<template>
  <div class="actions">
    <div class="actions-items">
      <a class="actions-item" :href="url">
        <span>Admin</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Actions",
  computed: {
    isGuest() {
      return this.$store.state.authData.accessToken === null;
    },
    userId() {
      return this.$store.state.authData.id;
    },
  },
  data() {
    return {
      url: "",
    };
  },
  created() {
    if (process.client) {
      this.url = `admin.` + location.host;
    }
  },
  methods: {
    async signOut() {
      this.$store.commit("signOut");
      await this.get(`public/auth/sign-out`);
    },
  },
};
</script>
