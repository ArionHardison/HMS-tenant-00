<template>
  <b-navbar toggleable="lg"  class="t-navbar">
    <b-navbar-brand href="/">
      <template v-slot:default>
        <img :src="logo"  alt="Logo" class="logo"/>
      </template>
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse" class="custom-toggler"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="nav-container">
        <b-nav-item href="/programs-list" class="nav-item">All Programs</b-nav-item>
        <b-nav-item href="#" class="nav-item" @click="showSearchModal">Search</b-nav-item>
        <template v-if="isGuest">
          <b-nav-item href="/sign-in" class="nav-item">Sign In</b-nav-item>
          <b-nav-item href="/sign-up" class="nav-item">Register</b-nav-item>
        </template>
        <template v-else>
          <b-nav-item href="/account" class="nav-item">Account</b-nav-item>
          <b-nav-item href="#" class="nav-item" @click="goToClinic">Clinic</b-nav-item>
          <b-nav-item href="#" class="nav-item" @click="signOut">Sign Out</b-nav-item>
        </template>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import layout from "~/mixins/layout";
export default {
  mixins: [layout],
  name: 'MobileMenuComponent',
  computed: {
    isGuest() {
      return this.$store.state.authData.accessToken === null;
    },
  },
  methods: {
    showSearchModal(e){
      e.preventDefault();
      this.$store.commit( 'toggleSearchModal' )
    },
    async signOut(e) {
      e.preventDefault();
      await this.get(`user/sign-out`);
      this.$store.commit("signOut");
    },
    async goToClinic(e){
      e.preventDefault();
      if (process.browser) {
        const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
        if (this.userId) {
          const tokenData = await this.get("user/get-token");
          window.location.href = `${protocol}://clinic.${window.location.hostname}?token=${tokenData.token}`;
        } else {
          window.location.href = `${protocol}://clinic.${window.location.hostname}`;
        }
      }
    }
  }
}
</script>

<style scoped>
.logo {
  height: 40px;
}

.t-navbar {
  background-color: var(--primary-color);
  color:#fff;
  padding-bottom: 15px;
  position: fixed;
  width: 100%;
}

.nav-container {
  margin-top: 15px;
  margin-bottom: 15px;
}

.nav-item {
  color: white !important;
  font-size: 18px;
  font-weight: bold;
  padding: 10px 15px;
  border-bottom: 1px solid white;
}

.nav-item:last-child {
  border-bottom: none;
}
</style>

<style>
.nav-item {
  list-style-type: none;
}
.t-navbar .navbar-toggler {
  float:right;
  border-color: #ffffff;
}

.t-navbar .navbar-toggler .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}
.t-navbar a {
  color: #fff !important;
  margin: 0;
  padding: 0;
}
.t-navbar ul {
  list-style-type: none !important;
  width: 100%;
}
.t-navbar li::before {
  display: none;
}
</style>
