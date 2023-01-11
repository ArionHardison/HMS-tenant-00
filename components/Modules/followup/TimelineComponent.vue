<template>
  <div class="timeline">
    {{ timeline }}
  </div>
</template>

<script>
export default {
  name: "TimelineComponent",
  props: {
    timeline: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
