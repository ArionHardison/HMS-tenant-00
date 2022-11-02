<template>
  <div>
    <div v-if="!productList.length" class="my-5 text-center no-updates">
      <span class="btn-block mb-3">
        <ImageMultiple :size="75" class="ico-no-result" />
      </span>
      <h4 class="font-weight-light">No Product yet</h4>
    </div>

    <CardProduct
      v-else
      v-for="(card, index) of productList"
      :key="index"
      :card-info="card"
    />
  </div>
</template>
<script>
import api from "~/mixins/api";
import CardProduct from "~/components/cards/card-product.vue";
import ImageMultiple from "vue-material-design-icons/ImageMultiple.vue";

export default {
  components: { CardProduct, ImageMultiple },
  mixins: [api],
  data() {
    return {
      productList: [],
    };
  },
  mounted() {
    this.getProductLists();
  },
  methods: {
    async getProductLists() {
      const { data } = await this.get(
        `program-sale/list-by-author/${this.$route.params.username}`
      );
      this.productList = data;
    },
  },
};
</script>
