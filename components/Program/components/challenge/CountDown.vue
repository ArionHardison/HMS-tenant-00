<template lang="html">
  <div class="row mt-3 mb-3">
    <div class="col-3 text-center">Days</div>
    <div class="col-3 text-center">Hours</div>
    <div class="col-3 text-center">Minutes</div>
    <div class="col-3 text-center">Seconds</div>
    <div class="col-3 mt-3 mb-3 follow-up-countdown text-center">
      {{ finished ? 0 : Math.floor(counter.days) }}
    </div>
    <div class="col-3 mt-3 mb-3 follow-up-countdown text-center">
      {{ finished ? 0 : Math.floor(counter.hours) }}
    </div>
    <div class="col-3 mt-3 mb-3 follow-up-countdown text-center">
      {{ finished ? 0 : Math.floor(counter.minutes) }}
    </div>
    <div class="col-3 mt-3 mb-3 follow-up-countdown text-center">
      {{ finished ? 0 : Math.floor(counter.seconds) }}
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
    timeLimit: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      finished: false,
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
      this.counter = this.differenceDown(this.endDate, this.timeLimit);
      if (!this.counterFinished()) {
        this.timer = setInterval(this.tick.bind(this), 1000);
      }
    }
  },
  methods: {
    tick() {
      this.counter = this.differenceDown(this.endDate, this.timeLimit);
      if(this.counterFinished()){
          this.stopCounter();
          this.$emit("finished");
      }
    },
    counterFinished() {
      for (const key in this.counter) {
        if (Math.round(this.counter[key]) > 0) {
          return false;
        }
      }
      this.finished = true;
      return true;
    },
    stopCounter(){
      clearInterval(this.timer);
    }
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
