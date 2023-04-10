<template>
  <div class="card p-3">
    <h6>{{ task.program }}</h6>
    <p class="module-task">{{ task.itemName }} - {{ task.description }}</p>
    <span class="text-right d-inline-block mt-2 time-desc">{{
        task.created_at
      }}</span>

    <nuxt-link
      class="btn btn-success"
      :to="`/account/task/${task.id}`"
    >
      Start
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "GlobalModuleTask",
  props: {
    task: {
      type: Object,
      default: () => null,
    },
  },
};
</script>

<style scoped>
.module-task:first-letter {
  text-transform: capitalize;
}
.module-task {
  margin: 0;
}
.time-desc {
  color: #ccc !important;
}
</style>
