<template>
  <div class="row">
    <div class="col-12">
      <h3 class="text-center">Items</h3>
      <el-table
          :data="items"
          class="table-responsive align-items-center table-flush table-striped"
          header-row-class-name="thead-light"
      >
        <el-table-column
            prop="name"
            label="Name"
        >
          <template #default="{ row }">
            <div class="d-flex justify-content-center">
              {{row.name}}
            </div>
          </template>
        </el-table-column>
        <el-table-column
            prop="amount"
            label="Amount"
        >
          <template #default="{ row }">
            <div class="d-flex justify-content-center">
              {{row.amount}}
            </div>
          </template>
        </el-table-column>
        <el-table-column label="IMAGE">
          <template #default="{ row }">
            <div class="d-flex justify-content-center align-items-center">
              <template v-if="row.item_photo">
                <img
                    v-src-main-tenant="
                    formatMainImg(row.item_photo, 'md')
                  "
                    class="img-fluid"
                    style="height: 200px;"
                />
              </template>
              <template v-else>
                <img src="~/static/no-image.svg" style="height: 200px"/>
              </template>
            </div>
          </template>
        </el-table-column>
        <el-table-column
            label="Have item"
        >
          <template #default="{ row }">
            <div class="d-flex justify-content-center">
              <CheckboxField
                  :checked="insideResults(row.id)"
                  :name="`collection-${collection}-item-${row.id}`"
                  @input="haveItem(collection, row.id)"
              >
              </CheckboxField>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>

import {Table, TableColumn} from "element-ui";
import CheckboxField from "~/components/forms/CheckboxField.vue";
import api from "@/mixins/api";

export default {
  name: "OrderItemsComponent",
  mixins: [api],
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
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
