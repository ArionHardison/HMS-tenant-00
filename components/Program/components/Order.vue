<template>
  <div class="row">
    <template v-if="orderData">
      <div class="col-12">
        <h1 class="text-center">{{orderData.title}}</h1>
        <div class="text-center col-12">To continue program you should have/purchase the items below</div>
      </div>
      <template v-if="orderData.items.length">
        <div class="col-12">
          <OrderItemsComponent :items="orderData.items" :checklist="orderData.checklist" :order="this.item" :task="parseInt($route.params.id)" :chain="parseInt($route.query.id)" />
        </div>
      </template>
      <template v-if="orderData.collections.length">
        <div class="col-12">
        <OrderCollectionsComponent :collections="orderData.collections" :checklist="orderData.checklist" :order="this.item" :task="parseInt($route.params.id)" :chain="parseInt($route.query.id)" />
        </div>
      </template>
      <div class="text-center col-12">
        <InvalidFeedback
            :state="errorFields.includes('order')"
        >
          {{ formErrors['order'] ? [...formErrors['order']].shift() : "" }}
        </InvalidFeedback>

        <button class="btn btn-primary text-white mt-3 mb-5" @click="finishStep">I have/bought this items</button>
      </div>
    </template>
  </div>
</template>

<script>
import api from "@/mixins/api";
import OrderItemsComponent from "~/components/Program/components/order/OrderItemsComponent";
import OrderCollectionsComponent from "~/components/Program/components/order/OrderCollectionsComponent";
import InvalidFeedback from "~/components/Forms/Fields/InvalidFeedback.vue";


export default {
  name: "Order",
  components: {InvalidFeedback, OrderCollectionsComponent, OrderItemsComponent},
  mixins: [api],
  props: {
    item: {
      type: Number,
      default: 0,
    },
    recurring: {
      type: Boolean,
      default: false,
    },
    resource: {
      type: String,
      default: "",
    },
  },
  computed: {
    errorFields() {
      return this.$store.state.errorFields;
    },
    formErrors() {
      return this.$store.state.errors;
    },
  },
  data() {
    return {
      orderData: null,
    };
  },
  async mounted() {
    await this.getOrder();
  },
  methods: {
    async getOrder() {
      this.orderData = await this.get(
        `${this.resource}/${this.recurring ? "run-global" : "run"}/${this.item}/${this.recurring ? this.$route.params.id : this.$route.query.id}`
      );
    },
    async finishStep(){
      const result = await this.post("order/finish", {id: this.item, chain: this.$route.query.id, task: this.$route.params.id});
      if(result){
        this.continueProgram();
      }
    },
    continueProgram() {
      this.$emit("continueProgram");
    },
  },
};
</script>

<style scoped></style>
