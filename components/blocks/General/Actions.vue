<template>
  <div class="actions">
    <div class="actions-items">
      <a class="actions-item" :href="url">
        <span>Clinic</span>
      </a>
      <template v-if="isGuest">
        <nuxt-link class="actions-item" :to="{ name: 'sign-in' }">
          <span>Sign In</span>
        </nuxt-link>
        <nuxt-link class="actions-item" :to="{ name: 'sign-up' }">
          <span>Sign up</span>
        </nuxt-link>
      </template>
      <template v-else>
        <nuxt-link class="actions-item" :to="{ name: 'account' }">
          <span>My Account</span>
        </nuxt-link>
        <a href="javascript:void(0)" class="actions-item" @click="signOut">
          <span>Sign out</span>
        </a>
      </template>
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
      this.url = `https://clinic.codify.health`;
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
