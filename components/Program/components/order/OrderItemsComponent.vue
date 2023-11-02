<template>
  <div class="row" id="order-module">
    <div class="col-12">
      <h3 class="text-center">Items</h3>
      <!-- Bootstrap Table -->
      <div class="table-responsive d-none d-md-block">
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
      <div class="d-block d-md-none">
        <div v-for="item in items" :key="item.id" class="mb-4">
          <div class="d-flex justify-content-between mb-2">
            <strong>Name</strong>
            <span>{{ item.name }}</span>
          </div>
          <div class="d-flex justify-content-between mb-2">
            <strong>Amount</strong>
            <span>{{ item.amount }}</span>
          </div>
          <div class="d-flex justify-content-between mb-2">
            <strong>IMAGE</strong>
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
          </div>
          <div class="d-flex justify-content-between mb-2">
            <strong>Have item</strong>
            <CheckboxField
              :checked="insideResults(item.id)"
              :name="`collection-${collection}-item-${item.id}`"
              @input="haveItem(collection, item.id)"
            ></CheckboxField>
          </div>
        </div>
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
<style scoped>

#order-module .table-responsive {
  overflow-x: auto;
}

#order-module .table {
  border-collapse: collapse;
}

#order-module .table thead {
  background-color: #f5f7fa;
}

#order-module .table th, #order-module  .table td {
  padding: 12px 15px;
  border: 1px solid #e4e7ea;
}

#order-module  .table td img {
  max-width: 100%;
  height: auto;
}

#order-module .d-flex {
  align-items: center;
  border-bottom: 1px solid #e4e7ea;
  padding: 10px 0;
}

#order-module .d-flex:last-child {
  border-bottom: none;
}

#order-module .d-flex strong {
  font-weight: 600;
  margin-right: 20px;
}
</style>

