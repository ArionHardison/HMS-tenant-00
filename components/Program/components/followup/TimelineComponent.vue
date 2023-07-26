<template>
  <div class="timeline">
    <template v-for="timelineItem in timeline">
      <span :class="{
        'is-previos': timelineItem.current===0,
        'is-current': timelineItem.current===1,
        'is-next': timelineItem.current===2,
      }" class="btn btn-default w-100 mb-2">{{ timelineItem.step_name }}</span>
    </template>
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
  methods: {}
}
</script>

<style scoped>
.is-previos {
  background-color: #929292;
  color: #fff;
}

.is-current {
  background-color: #5dee76;
  color: #fff;
}

.is-next {
  background-color: #508ff6;
  color: #fff;
}
</style>
