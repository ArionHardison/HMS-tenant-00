<template>
  <fragment>
    <transition
      @enter="startTransitionModal"
      @after-enter="endTransitionModal"
      @before-leave="endTransitionModalLeave"
      @after-leave="startTransitionModalLeave"
    >
      <div
        v-show="showSearchModal"
        ref="modal"
        class="modal fade"
        id="search-modal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="search-modal"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-full" role="document">
          <div class="wrapper">
            <div class="modal-content">
              <div class="modal-header modal-header-top">
                <div
                  class="header-content d-flex justify-content-between w-100"
                >
                  <div class="header-left align-self-center">
                    <div class="links">
                      <div class="links-items">

                      </div>
                    </div>
                  </div>

                  <div class="header-center align-self-center">
                    <Logo logoColor="dark" />
                  </div>

                  <div class="header-right d-flex justify-content-end">
                    <div class="d-flex align-items-center">
                      <div class="search-close-toggle">
                        <button
                          @click="toggleSearchModal"
                          type="button"
                          class="btn btn-lg btn-before-horbar btn-link border-0 p-0 min-w-auto"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          Close search
                        </button>
                      </div>
                    </div>

                    <Actions />
                  </div>
                </div>
              </div>

              <div class="modal-body modal-body-centered">
                <SearchForm />
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
import { Fragment } from "vue-fragment";
import { mapMutations } from "vuex";

import Logo from "~/components/blocks/header/HeaderLogo";
import SearchForm from "../Forms/SearchForm";
import Actions from "~/components/blocks/General/Actions";

export default {
  name: "Search-Modal",
  components: {
    Logo,
    SearchForm,
    Actions,
    Fragment,
  },
  computed: {
    showSearchModal() {
      return this.$store.state.showSearchModal;
    },
  },
  methods: {
    ...mapMutations(["toggleSearchModal"]),
    startTransitionModal() {
      if (!this.$refs.backdrop.classList.contains("d-block")) {
        this.$refs.backdrop.classList.add("d-block");
      }

      if (!this.$refs.modal.classList.contains("d-block")) {
        this.$refs.modal.classList.add("d-block");
      }
    },
    startTransitionModalLeave() {
      if (this.$refs.backdrop.classList.contains("d-block")) {
        this.$refs.backdrop.classList.remove("d-block");
      }
    },
    endTransitionModal() {
      if (!this.$refs.backdrop.classList.contains("show")) {
        this.$refs.backdrop.classList.add("show");
      }

      if (!this.$refs.modal.classList.contains("show")) {
        this.$refs.modal.classList.add("show");
      }
      if (process.client) {
        if (!document.body.classList.contains("modal-open")) {
          document.body.classList.add("modal-open");
        }
      }
    },
    endTransitionModalLeave() {
      if (this.$refs.backdrop.classList.contains("show")) {
        this.$refs.backdrop.classList.remove("show");
      }

      if (this.$refs.modal.classList.contains("show")) {
        this.$refs.modal.classList.remove("show");
      }
      if (process.client) {
        if (document.body.classList.contains("modal-open")) {
          document.body.classList.remove("modal-open");
        }
      }

      if (this.$refs.modal.classList.contains("d-block")) {
        this.$refs.modal.classList.remove("d-block");
      }
    },
  },
  beforeDestroy() {
    if (process.client) {
      if (document.body.classList.contains("modal-open")) {
        document.body.classList.remove("modal-open");
      }
    }

    this.$store.commit("variablesNull");
  },
};
</script>
<style>
#search-modal {
  z-index: 9999999;
}
</style>
