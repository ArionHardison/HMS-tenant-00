<template>
    <header id="header" class="site-header">
      <MobileMenuComponent class="d-block d-lg-none d-xl-none"/>
        <div class="wrapper d-none d-lg-block d-xl-block">
            <div class="header-content d-flex justify-content-between">


                <div class="header-left align-self-center">
                    <div class="links">
                        <div class="links-items">
                          <client-only>
                            <div class="links-item">
                                <nuxt-link class="btn btn-lg btn-before-horbar btn-link border-0 p-0 min-w-auto" to="/programs-list">All Programs</nuxt-link>
                            </div>
                            <div class="links-item">
                              <SearchModalButton />
                            </div>
                          </client-only>
                        </div>
                    </div>
                </div>

                <div class="header-center align-self-center">
                    <HeaderLogo :logoColor="logoColor"/>
                </div>

                <div class="header-right d-flex justify-content-end">
                    <div class="d-flex align-items-center">

                      <client-only>
                        <template v-if="isGuest">
                          <SignInButton/>
                          <SignUpButton/>
                        </template>
                        <template v-else>
                          <MyAccountButton/>
                          <SignOutButton/>
                        </template>
                      </client-only>
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
    import MyAccountButton from '~/components/Button/MyAccountButton';
    import SignOutButton from '~/components/Button/SignOutButton';
    import SignUpButton from '~/components/Button/SignUpButton';
    import SignInButton from '~/components/Button/SignInButton';
    import MenuModalButton from '~/components/Button/MenuModalButton';
    import Actions from '../General/Actions';
    import MobileMenuComponent from "@/components/ui/MobileMenuComponent.vue";

    export default {
        name: 'Header',
        props: [ 'logoColor' ],
        components: {
            HeaderLogo,
            SearchModalButton,
            MenuModalButton,
            Actions,
            SignUpButton,
            MyAccountButton,
            SignOutButton,
            SignInButton,
            MobileMenuComponent
        },
      computed: {
        isGuest() {
          return this.$store.state.authData.accessToken === null;
        },
      },
    };
</script>
<style scoped>
    .site-header {
        z-index: 998;
    }
</style>
