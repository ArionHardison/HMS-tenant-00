<template>
  <div class="row">
    <div class="col-12">
      <h3 class="text-center">Items</h3>
      <!-- Bootstrap Table -->
      <div class="table-responsive">
        <table class="table align-items-center table-flush table-striped">
          <thead class="thead-light">
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>IMAGE</th>
              <th>Have item</th>
            </tr>
          </thead>
          <tbody>
          <tr v-for="item in items" :key="item.id">
            <td >
              {{ item.name }}
            </td>
            <td >
              {{ item.amount }}
            </td>
            <td >
              <img
                v-if="item.item_photo"
                :src="$imageUrl(item.item_photo, 'md', false)"
                class="img-fluid"
                style="height: 200px;"
              />
              <img
                v-else
                src="~/static/no-image.svg"
                style="height: 200px"
              />
            </td>
            <td >
              <CheckboxField
                :checked="insideResults(item.id)"
                :name="`collection-${collection}-item-${item.id}`"
                @input="haveItem(collection, item.id)"
              ></CheckboxField>
            </td>
          </tr>
          </tbody>
        </table>
      </div>

    </div>
  </div>
</template>

<script>

import CheckboxField from "@/components/Forms/Fields/CheckboxField.vue";
import api from "@/mixins/api";

export default {
  name: "OrderItemsComponent",
  mixins: [api],
  components: {
    CheckboxField
  },
  props: {
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
      default: ()=>{},
    },
    collection: {
      type: Number,
      default: 0,
    },
    items: {
      type: Array,
      default: ()=>[],
    },
  },
  methods: {
    insideResults(item){
      const exists = this.checklist.results.find((result)=>{
        return result.item_id===item && result.collection_id===this.collection;
      })
      return !!exists;
    },
    haveItem(collection, item){
      this.post("order/got-item", {
          order: this.order,
          chain: this.chain,
          task: this.task,
          collection_id: collection,
          item_id: item,
      })
    }
  }
};
</script>

<style scoped></style>
