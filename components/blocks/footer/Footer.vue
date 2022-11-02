<template>
  <fragment>
    <footer id="footer" class="site-footer">
      <div class="wrapper">
        <div class="footer">
          <div class="d-flex flex-column">
            <div class="align-self-center">
              <div class="copyright">
                <p>
                  © {{ new Date().getFullYear() }}
                  <template v-if="copyRight">
                    {{ copyRight }}
                  </template>
                </p>
              </div>
            </div>

            <div class="align-self-center">
              <FooterMenuSecondary />
            </div>
          </div>
        </div>
      </div>
    </footer>

    <div id="modals">
      <SearchModal />
    </div>
  </fragment>
</template>

<script>
import { Fragment } from "vue-fragment";

import FooterMenuSecondary from "./FooterMenuSecondary";
import SearchModal from "~/components/Modal/SearchModal";

export default {
  name: "Footer",
  components: {
    Fragment,
    SearchModal,
    FooterMenuSecondary,
  },
  data() {
    return {
      homePage: true,
    };
  },
  methods: {
    selectModalMenu: function () {
      if (this.currentPage === "/") {
        this.homePage = true;
      } else {
        this.homePage = false;
      }
    },
  },
  mounted() {
    this.selectModalMenu();
  },
  computed: {
    currentPage() {
      return this.$route.path;
    },
  },
};
</script>
<style scoped>
@media (max-width: 992px) {
  #modals {
    padding-bottom: 121px;
  }
}
</style>
