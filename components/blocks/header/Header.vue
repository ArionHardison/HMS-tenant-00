<template>
  <header id="header" class="site-header">
    <div class="wrapper">
      <div class="header-content d-flex justify-content-between">
        <div class="header-left align-self-center">
          <div class="links">
            <div class="links-items">
              <div class="links-item">
              </div>
            </div>
          </div>

          <SearchModalButton />
        </div>

        <div class="header-center align-self-center">
          <HeaderLogo :logoColor="logoColor" />
        </div>

        <div class="header-right d-flex justify-content-end">
          <div class="d-flex align-items-center">
            <template v-if="isGuest">
                <nuxt-link class="btn btn-lg btn-link border-0 p-0 min-w-auto" to="/programs-list">
                  Programs</nuxt-link>
            </template>
            <template v-else>
              <nuxt-link class="actions-item" :to="{ name: 'account' }">
                <span>My Account</span>
              </nuxt-link>
              <a href="javascript:void(0)" class="actions-item" @click="signOut">
                <span>Sign Out</span>
              </a>
            </template>
          </div>

          <Actions />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import HeaderLogo from './HeaderLogo';
import SearchModalButton from '~/components/Button/SearchModalButton';
import MenuModalButton from '~/components/Button/MenuModalButton';
import Actions from '../General/Actions';

export default {
  name: 'Header',
  props: ['logoColor'],
  components: {
    HeaderLogo,
    SearchModalButton,
    MenuModalButton,
    Actions
  },
  computed: {
    isGuest() {
      return this.$store.state.authData.accessToken === null;
    },
    userId() {
      return this.$store.state.authData.id;
    },
  },
  methods: {
    async signOut() {
      this.$store.commit("signOut");
      await this.get(`public/auth/sign-out`);
    },
  },
};
</script>
<style scoped>
.site-header {
  z-index: 998;
}
</style>
