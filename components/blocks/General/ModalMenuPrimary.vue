<template>
  <nav class="menu-primary">
    <ul class="nav">
      <li @click="closeOnSameRoute" :class="[( currentPage === '/' ) ? activeClass : '', 'nav-item']">
        <nuxt-link title="Home" to="/">Home</nuxt-link>
      </li>

      <li @click="closeOnSameRoute" :class="[currentPage.includes('programs-list') ? activeClass : '', 'nav-item']">
        <nuxt-link title="Programs" to="/programs-list">Programs</nuxt-link>
      </li>
      <template v-if="isGuest">
        <li @click="closeOnSameRoute" :class="[currentPage.includes('sign-in') ? activeClass : '', 'nav-item']">
          <nuxt-link title="Sign In" to="/sign-in">Sign In</nuxt-link>
        </li>

        <li @click="closeOnSameRoute" :class="[currentPage.includes('sign-up') ? activeClass : '', 'nav-item']">
          <nuxt-link title="Sign Up" to="/sign-up">Sign Up</nuxt-link>
        </li>
        <li @click="closeOnSameRoute" :class="[currentPage.includes('clinic') ? activeClass : '', 'nav-item']">
          <nuxt-link title="Clinic" to="/sign-in">Clinic</nuxt-link>
        </li>
      </template>
      <template v-else>
        <li @click="closeOnSameRoute" :class="[currentPage.includes('account') ? activeClass : '', 'nav-item']">
          <nuxt-link title="Account" to="/account">Account</nuxt-link>
        </li>
        <li @click="getClinicLink" :class="[currentPage.includes('clinic') ? activeClass : '', 'nav-item']">
          <nuxt-link title="Clinic" :to="$route.fullPath">Clinic</nuxt-link>
        </li>
        <li @click="signOut" class="nav-item">
          <nuxt-link title="Programs" to="/">Sign Out</nuxt-link>
        </li>
      </template>
      <li @click="closeOnSameRoute" :class="[currentPage.includes('contacts') ? activeClass : '', 'nav-item']">
        <nuxt-link title="Contacts" to="/contacts">Contacts</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'ModalMenuPrimary',
  data() {
    return {
      activeClass: 'current-nav-item'
    }
  },
  methods: {
    async getClinicLink(event){
      if (process.browser) {
        this.closeOnSameRoute(event);
        if(this.isGuest){
          return this.$router.push("/sign-in")
        }
        const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
        if (!this.isGuest) {
          const tokenData = await this.get("user/get-token");
          window.location.href = `${protocol}://clinic.${window.location.hostname}?token=${tokenData.token}`;
        } else {
          window.location.href = `${protocol}://clinic.${window.location.hostname}`;
        }
      }
    },
    async signOut(event){
        await this.get(`user/sign-out`);
        this.$store.commit("signOut");
        this.closeOnSameRoute(event)
    },
    closeOnSameRoute: function( event ) {
      const clickTargetHref = event.target.getAttribute( 'href' );

      if ( clickTargetHref === this.$route.path ) {
        this.toggleMenuModal();
      }
    },
    toggleMenuModal: function( event ) {
      this.$store.commit( 'toggleMenuModal' );
      this.$store.commit( 'variablesNull' );
    }
  },
  computed: {
    currentPage() {
      return this.$route.path;
    },
    isGuest() {
      return this.$store.state.authData.accessToken === null;
    },
  }
};
</script>
