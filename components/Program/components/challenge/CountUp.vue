<template lang="html">
  <div class="row mt-3 mb-3">
    <div class="col-3 text-center">Days</div>
    <div class="col-3 text-center">Hours</div>
    <div class="col-3 text-center">Minutes</div>
    <div class="col-3 text-center">Seconds</div>
    <div class="col-3 mt-3 mb-3 follow-up-countdown text-center">
      {{ Math.floor(counter.days) }}
    </div>
    <div class="col-3 mt-3 mb-3 follow-up-countdown text-center">
      {{ Math.floor(counter.hours) }}
    </div>
    <div class="col-3 mt-3 mb-3 follow-up-countdown text-center">
      {{ Math.floor(counter.minutes) }}
    </div>
    <div class="col-3 mt-3 mb-3 follow-up-countdown text-center">
      {{ Math.floor(counter.seconds) }}
    </div>
  </div>
</template>

<script>
import time from "@/mixins/time";

export default {
  name: "CountUp",
  mixins: [time],
  props: {
    endDate: {
      type: String,
    },
  },
  data() {
    return {
      counter: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
    };
  },

  mounted() {
    if (process.browser) {
      this.tick();
      this.timer = setInterval(this.tick.bind(this), 1000);
    }
  },
  methods: {
    tick() {
      this.counter = this.difference(this.endDate);
    },
  },

  destroy() {
    clearInterval(this.timer);
  },
};
</script>
<style scoped>
.follow-up-countdown {
  font-size: 5em;
  color: #000;
}
</style>
