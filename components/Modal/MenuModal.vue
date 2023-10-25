<template>
  <fragment>
    <transition @enter="startTransitionModal" @after-enter="endTransitionModal" @before-leave="endTransitionModalLeave" @after-leave="startTransitionModalLeave">
      <div v-show="showMenuModal" ref="modal" class="modal fade" id="menu-modal" tabindex="-1" role="dialog" aria-labelledby="menu-modal" aria-hidden="true">
        <div class="modal-dialog modal-full" role="document">
          <div class="wrapper">
            <div class="modal-content">
              <div class="modal-header modal-header-top">
                <div class="header-content d-flex justify-content-between w-100">
                  <div class="header-left align-self-center">
                    <SearchModalButton />
                  </div>

                  <div class="header-center align-self-center">
                    <Logo logoColor='dark'/>
                  </div>

                  <div class="header-right d-flex justify-content-end">
                    <div class="d-flex align-items-center">
                      <div class="menu-close-toggle">
                        <button @click="toggleMenuModal" type="button" class="btn btn-lg btn-before-horbar btn-link border-0 p-0 min-w-auto" data-dismiss="modal" aria-label="Close">Close menu</button>
                      </div>
                    </div>

                    <Actions />
                  </div>
                </div>
              </div>

              <div class="modal-body modal-body-centered">
                <div class="animated fadeinright w-100">
                  <ModalMenuPrimary />

                  <div class="modal-text">
                    <p>©  {{ new Date().getFullYear() }}  {{copy}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <div class="modal-backdrop fade d-none" ref="backdrop"></div>
  </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import { mapMutations } from 'vuex';

import SearchModalButton from '../Button/SearchModalButton';
import Logo from "@/components/blocks/header/HeaderLogo.vue";
import Actions from "@/components/blocks/General/Actions.vue";
import ModalMenuPrimary from "@/components/blocks/General/ModalMenuPrimary.vue";


export default {
  name: 'Menu-Modal',
  props: {
    copy: {
      type: String,
      default: ""
    }
  },
  components: {
    SearchModalButton,
    Logo,
    Actions,
    ModalMenuPrimary,
    Fragment
  },
  computed: {
    showMenuModal () {
      return this.$store.state.showMenuModal
    }
  },
  methods: {
    ...mapMutations([
      'toggleMenuModal'
    ]),
    startTransitionModal() {
      if ( ! this.$refs.backdrop.classList.contains( 'd-block' ) ) {
        this.$refs.backdrop.classList.add( 'd-block' );
      }

      if ( ! this.$refs.modal.classList.contains( 'd-block' ) ) {
        this.$refs.modal.classList.add( 'd-block' );
      }
    },
    startTransitionModalLeave() {
      if ( this.$refs.backdrop.classList.contains( 'd-block' ) ) {
        this.$refs.backdrop.classList.remove( 'd-block' );
      }

      if ( this.$refs.modal.classList.contains( 'd-block' ) ) {
        this.$refs.modal.classList.remove( 'd-block' );
      }
    },
    endTransitionModal() {
      if ( ! this.$refs.backdrop.classList.contains( 'show' ) ) {
        this.$refs.backdrop.classList.add( 'show' );
      }

      if ( ! this.$refs.modal.classList.contains( 'show' ) ) {
        this.$refs.modal.classList.add( 'show' );
      }

      if ( ! document.body.classList.contains( 'modal-open' ) ) {
        document.body.classList.add( 'modal-open' )
      }
    },
    endTransitionModalLeave() {
      if ( this.$refs.backdrop.classList.contains( 'show' ) ) {
        this.$refs.backdrop.classList.remove( 'show' );
      }

      if ( this.$refs.modal.classList.contains( 'show' ) ) {
        this.$refs.modal.classList.remove( 'show' );
      }

      if ( document.body.classList.contains( 'modal-open' ) ) {
        document.body.classList.remove( 'modal-open' )
      }
    }
  },
  beforeDestroy() {
    if ( document.body.classList.contains( 'modal-open' ) ) {
      document.body.classList.remove( 'modal-open' )
    }

    this.$store.commit( 'variablesNull' );
  }
};
</script>
