<template>
  <div class="row">
    <template v-if="followUp">
      <div class="col-12">
        <h2 class="text-center">Follow Up</h2>
      </div>
      <div class="col-12 mt-4 text-center">
        <template v-if="!followUp.follow_up_scheduled">

            <p>
              Wait unti <b>{{ followUp.author }}</b> will set time for meeting.
              You will get message to your email <b>{{ followUp.email }}</b>
            </p>

        </template>
        <template v-else>
          <template v-if="followUp.follow_up_finished">
            <p>FollowUp was finished</p>
          </template>
          <template v-else-if="showFollowUp">
            <FollowUpMeeting
              :followUp="followUp"
              @followUpFinished="continueProgram"
            />
          </template>
          <template v-else>
            <CountDown
              @timerStopped="startFollowUp"
              :end-date="followUp.schedule.schedule_start"
            />
          </template>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
import CountDown from "./followup/CountDown.vue";
import FollowUpMeeting from "./followup/FollowUpMeeting.vue";
import time from "@/mixins/time";
import serverEvents from "@/components/Program/mixins/server-events";
import api from "@/mixins/api";

export default {
  name: "FollowUp",
  mixins: [time, serverEvents, api],
  components: {FollowUpMeeting, CountDown },
  props: {
    item: {
      type: Object,
      default: 0,
    },
    resource: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      currentQuestion: 0,
      followUp: null,
      showFollowUp: false,
    };
  },
  async mounted() {
    await this.getFollowUp();
  },
  methods: {
    async getFollowUp() {
      this.followUp = await this.get(
        `${this.resource}/run/${this.$route.query.id}`
      );
      if (
        this.followUp.follow_up_scheduled &&
        !this.followUp.follow_up_finished
      ) {
        const distance = Math.max(
          this.parse(this.followUp.schedule.schedule_start)
            .diff(this.now())
            .toObject().milliseconds,
          0
        );
        if (distance === 0 && !this.showFollowUp) {
          this.showFollowUp = true;
        }
      }
    },
    async startFollowUp() {
      this.showFollowUp = true;
    },
    continueProgram() {
      this.$emit("continueProgram");
    },
  },
};
</script>

<style scoped></style>
