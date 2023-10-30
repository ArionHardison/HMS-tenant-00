<template>
  <nav class="menu-primary">
    <ul class="nav">
      <li @click="closeOnSameRoute" :class="[( currentPage === '/' ) ? activeClass : '', 'nav-item']">
        <router-link title="Home" to="/">Home</router-link>
      </li>

      <li @click="closeOnSameRoute" :class="[currentPage.includes('programs-list') ? activeClass : '', 'nav-item']">
        <router-link title="Programs" to="/programs-list">Programs</router-link>
      </li>
      <template v-if="isGuest">
        <li @click="closeOnSameRoute" :class="[currentPage.includes('sign-in') ? activeClass : '', 'nav-item']">
          <router-link title="Sign In" to="/sign-in">Sign In</router-link>
        </li>

        <li @click="closeOnSameRoute" :class="[currentPage.includes('sign-up') ? activeClass : '', 'nav-item']">
          <router-link title="Sign Up" to="/sign-up">Sign Up</router-link>
        </li>
        <li @click="closeOnSameRoute" :class="[currentPage.includes('clinic') ? activeClass : '', 'nav-item']">
          <router-link title="Clinic" to="/sign-in">Clinic</router-link>
        </li>
      </template>
      <template v-else>
        <li @click="closeOnSameRoute" :class="[currentPage.includes('account') ? activeClass : '', 'nav-item']">
          <router-link title="Account" to="/account">Account</router-link>
        </li>

        <li @click="signOut" class="nav-item">
          <router-link title="Programs" to="/">Sign Out</router-link>
        </li>
      </template>
      <li @click="closeOnSameRoute" :class="[currentPage.includes('contacts') ? activeClass : '', 'nav-item']">
        <router-link title="Contacts" to="/contacts">Contacts</router-link>
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
