<template lang="html">
  <div class="row">
    <div class="col-3">Days</div>
    <div class="col-3">Hours</div>
    <div class="col-3">Minutes</div>
    <div class="col-3">Seconds</div>
    <div class="col-3 mt-3 mb-3 follow-up-countdown">
      {{ days }}
    </div>
    <div class="col-3 mt-3 mb-3 follow-up-countdown">
      {{ hours }}
    </div>
    <div class="col-3 mt-3 mb-3 follow-up-countdown">
      {{ minutes }}
    </div>
    <div class="col-3 mt-3 mb-3 follow-up-countdown">
      {{ seconds }}
    </div>
  </div>
</template>

<script>
import time from "~/mixins/time";

export default {
  mixins: [time],
  props: {
    endDate: {
      type: String,
    },
  },
  data() {
    return {
      days: null,
      hours: null,
      minutes: null,
      seconds: null,
    };
  },
  methods: {
    updateRemaining(distance) {
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    },
    tick() {
      const distance = Math.max(
        this.parse(this.endDate).diff(this.now()).toObject().milliseconds,
        0
      );
      this.updateRemaining(distance);
      if (distance === 0) {
        clearInterval(this.timer);
        this.$emit("timerStopped");
      }
    },
  },

  mounted() {
    console.log(this.endDate);
    this.tick();
    this.timer = setInterval(this.tick.bind(this), 1000);
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
