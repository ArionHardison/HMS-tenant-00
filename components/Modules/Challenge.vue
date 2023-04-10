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
        <template
          v-if="
            challengeData.challenge.task_mandatory ||
            challengeData.challenge.time_limited
          "
        >
          <template v-if="challengeData.runningChallenge">
            <RunningChallenge
              :challenge="item"
              :recurring="recurring"
              :challenge-type="challengeData.challenge.challenge_type"
            />
          </template>
          <template v-else>
            <ChallengeRules :challenge="challengeData.challenge" />
          </template>
        </template>
      </template>
      <div class="row">
        <div class="col-12 text-center">
          <template v-if="challengeData.runningChallenge">
            <template v-if="challengeData.challenge.time_limited">
              <CountDown
                :end-date="challengeData.runningChallenge.created_at"
                :time-limit="challengeData.challenge.time_limit"
                @finished="failChallenge"
              />
            </template>
            <template v-else>
              <CountUp :end-date="challengeData.runningChallenge.created_at" />
            </template>
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
import CountDown from "@/components/Modules/challenge/CountDown";
import ChallengeRules from "@/components/Modules/challenge/ChallengeRules";
import RunningChallenge from "@/components/Modules/challenge/RunningChallenge";

export default {
  name: "Challenge",
  components: {
    CountDown,
    RunningChallenge,
    ChallengeRules,
    CountUp,
  },
  mixins: [api, time],
  props: {
    item: {
      type: Number,
      default: 0,
    },
    resource: {
      type: String,
      default: "",
    },
    recurring: {
      type: Boolean,
      default: false,
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
  mounted() {
    this.getChallenge();
  },
  methods: {
    async failChallenge() {
      await this.getChallenge();
      this.$emit("continueProgram");
    },
    async getChallenge() {
      this.challengeData = await this.get(
        `${this.resource}/${
          this.recurring ? "get-global-challenge" : "get-challenge"
        }/${this.item}/${
          this.recurring ? this.$route.params.id : this.$route.query.id
        }`
      );
    },
    async startChallenge() {
      let challengeData = {
        challenge_id: this.item,
      };
      if (this.recurring) {
        challengeData.task_id = this.$route.params.id;
      } else {
        challengeData.personal_chain_id = this.$route.query.id;
      }

      this.challengeData.runningChallenge = await this.post(
        `${this.resource}/${this.recurring ? "run-global" : "run"}`,
        challengeData
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
