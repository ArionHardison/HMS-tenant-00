<template>
  <div class="menu-item menu-list-item">
    <b-row class="align-items-center">
      <b-col sm="6" class="mb-2 mb-sm-0">
        <h6 class="mb-0">{{ item.name }}</h6>
        <span class="text-muted text-sm">{{ item.description }}</span>
      </b-col>
      <b-col sm="6" class="text-sm-right">
        <span class="text-md mr-4 item-price">
          <span class="text-muted">from</span>
          ${{ item.price }}
        </span>
        <MenuButton
          size="sm"
          variant="outline-secondary"
          @click="showModal({ item: item, mode: 'ADD' })"
          >Add to cart</MenuButton
        >
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import MenuButton from "~/components/blocks/menu/MenuButton.vue";

/**
 * Menu list item
 */
export default {
  name: "MenuListItem",
  components: {
    MenuButton,
  },
  props: {
    /**
     * Menu item data
     * @type {Object}
     */
    item: {
      type: Object,
    },
  },
  methods: {
    ...mapActions("cart", ["showModal"]),
  },
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Poppins|Roboto");
@import "assets/sass/config";

@font-face {
  font-family: "Menu Item";
  font-style: normal;
  font-weight: 300;
  src: local(".SFNSText-Light"), local(".HelveticaNeueDeskInterface-Light"),
    local(".LucidaGrandeUI"), local("Ubuntu Light"), local("Segoe UI Symbol"),
    local("Roboto-Light"), local("DroidSans"), local("Tahoma");
}
h6 {
  font-size: 1.1rem;
  font-weight: 500;
  font-family: "Helvetica Neue", "Raleway", sans-serif;
}
.item-price {
  color: #000000;
}
.menu-list-item {
  padding: 1.25rem 1.5rem;
  line-height: 1.2;

  @include media("<=xs") {
    padding: 1rem;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #efefef;
  }
}
</style>
