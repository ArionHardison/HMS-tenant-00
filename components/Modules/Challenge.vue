<template>
  <div class="row">
    <div class="col-12">
      <h2 class="text-center">Challenge</h2>
      <template v-if="challengeData.challenge">
        <template v-if="challengeData.challenge.challenge_video">
          <youtube
            ref="youtube"
            :video-id="challengeData.challenge.challenge_video"
          ></youtube>
        </template>
        <template v-if="challengeData.challenge.challenge_text">
          <div v-html="challengeData.challenge.challenge_text"></div>
        </template>
      </template>
      <div class="row">
        <div class="col-12 text-center">
          <template v-if="challengeData.runningChallenge">
            <CountUp :end-date="challengeData.runningChallenge.created_at"/>
            <button class="btn btn-success" @click="finishChallenge">
              FINISH CHALLENGE
            </button>
          </template>
          <template v-else>
            <button class="btn btn-success" @click="startChallenge">
              START CHALLENGE
            </button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/mixins/api";
import time from "@/mixins/time";
import CountUp from "@/components/Modules/challenge/CountUp";

export default {
  components: {CountUp},
  mixins: [api, time],
  name: "Challenge",
  props: {
    item: {
      type: Number,
      default: 0,
    },
    resource: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      challengeData: {
        challenge: null,
        runningChallenge: null,
      },
    };
  },
  async mounted() {
    this.challengeData = await this.get(
      `${this.resource}/get-challenge/${this.item}/${this.$route.query.id}`
    );
  },
  methods: {
    async startChallenge() {
      this.challengeData.runningChallenge = await this.post(
        `${this.resource}/run/${this.item}/${this.$route.query.id}`,
        {
          challenge_id: this.item,
          personal_chain_id: this.$route.query.id,
        }
      );
    },
    async finishChallenge() {
      const finished = await this.get(
        `${this.resource}/finish/${this.challengeData.runningChallenge.id}`
      );
      if (finished) {
        this.$emit("continueProgram");
      }
    },
  },
};
</script>

<style scoped></style>
