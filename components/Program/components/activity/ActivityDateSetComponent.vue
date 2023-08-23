<template>
  <div class="col-12">
    <form role="form" @submit.prevent>
      <div class="text-center">
        <template v-for="day in days">
          <button
              class="btn day-btn"
              :class="scheduleDay === day ? 'btn-success' : 'btn-outline-success'"
              @click="setDay(day)"
          >
            {{ day.toLocaleString({ weekday: "short" }) }}
          </button>
        </template>
      </div>
      <div class="row">
        <div class="col-6 offset-3 text-center mt-2">
          <template v-if="itemData.schedule_start !== null">
            <div class="mt-2">
              <label class="form-control-label">Start Time</label>
              <div>
                <el-time-picker
                    v-model="scheduleTime"
                    format="hh:mm A"
                    class="w-100"
                    placeholder="Select time"
                    @change="parseTime"
                >
                </el-time-picker>
              </div>
            </div>
          </template>

            <div class="text-center col-12">
              <button
                  type="submit"
                  class="btn btn-primary mt-4 text-white"
                  @click="setupActivityTime"
              >
                Set Time
              </button>
            </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { TimePicker } from "element-ui";
import time from "@/mixins/time";
import cloneDeep from "lodash.clonedeep";

export default {
  meta: {
    layout: "MarketplaceIsAuthedMain",
  },
  layout: "MarketplaceGuardLayout",
  name: "ActivityDateSetComponent",
  components: {
    [TimePicker.name]: TimePicker,
  },
  mixins: [time],
  data() {
    return {
      scheduleTime: null,
      scheduleDay: null,
      days: [],
      itemData: {
        scheduled_to: null,
      },
    };
  },
  async created() {
    this.getNextSevenDays();
  },
  methods: {
    parseTime() {
      this.itemData.scheduled_to = this.parseFromJs(this.scheduleTime);
    },
    setDay(day) {
      this.scheduleDay = day;
      this.itemData.scheduled_to = this.parseFromJs(day);
    },
    async setupActivityTime() {
      const item = cloneDeep(this.itemData);
      item.scheduled_to = this.getDateTime(item.scheduled_to);
      this.$emit("book", this.itemData);
    },
    getNextSevenDays() {
      let date = this.now();
      this.days.push(cloneDeep(date));
      for (let i = 0; i < 6; i++) {
        date = date.plus({ days: 1 });
        this.days.push(date);
      }
    },
  },
};
</script>
<style scoped>
.day-btn {
  display: inline-block;
  min-width: 10%;
  border:1px solid #cccccc;
}
</style>
