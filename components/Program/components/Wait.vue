<template>
  <div class="row">
    <div class="col-12">
      <h2>Wait</h2>
      <template v-if="Object.keys(item).length">
        <p>
          <img :src="item.profile_picture" />
          Action required from {{ item.full_name }}. You need to wait when
          {{ item.full_name }} will finish actions, then you will be able to
          continue program
        </p>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: "Wait",
  props: {
    item: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
};
</script>

<style scoped></style>
