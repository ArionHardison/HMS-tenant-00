<template>
  <div class="row">
    <div class="col-12">
        <h3 class="text-center">Collections</h3>
        <template v-for="collection in collections">
          <h4 class="text-center mt-2 mb-2">{{ collection.name }}</h4>
          <p class="mb-2">{{collection.note}}</p>
          <template v-if="collection.items.length">
            <OrderItemsComponent :items="collection.items" :checklist="checklist" :collection="collection.id" :order="order" :task="task" :chain="chain" />
          </template>
        </template>
    </div>
  </div>
</template>

<script>

import OrderItemsComponent from "~/components/Program/components/order/OrderItemsComponent";

export default {
  name: "OrderCollectionsComponent",
  components: {OrderItemsComponent},
  props:{
    order: {
      type: Number,
      default: 0,
    },
    task: {
      type: Number,
      default: 0,
    },
    chain: {
      type: Number,
      default: 0,
    },
    checklist: {
      type: Object,
      default:  ()=>{},
    },
    collections: {
      type: Array,
      default: ()=>[],
    },
  },
};
</script>

<style scoped></style>
