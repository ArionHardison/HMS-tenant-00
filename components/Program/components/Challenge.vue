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
          <div class="row">
            <div class="col-12 mt-3 mb-3" v-html="challengeData.challenge.challenge_text"></div>
          </div>
        </template>
        <template
          v-if="
            challengeData.challenge.task_mandatory ||
            challengeData.challenge.time_limited
          "
        >
          <template v-if="challengeData.runningChallenge">
            <RunningChallenge
              :challenge="challengeData.runningChallenge.id"
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
            <InvalidFeedback
              :state="errorFields.includes('attached')"
              class="mt-2 mb-3"
            >
              {{ formErrors['attached'] ? [...formErrors['attached']].shift() : "" }}
            </InvalidFeedback>

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
import CountUp from "@/components/Program/components/challenge/CountUp.vue";
import CountDown from "@/components/Program/components/challenge/CountDown.vue";
import ChallengeRules from "@/components/Program/components/challenge/ChallengeRules.vue";
import RunningChallenge from "@/components/Program/components/challenge/RunningChallenge.vue";
import InvalidFeedback from "@/components/Forms/Fields/InvalidFeedback.vue";

export default {
  name: "Challenge",
  components: {
    InvalidFeedback,
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
  computed: {
    errorFields() {
      return this.$store.state.errorFields;
    },
    formErrors() {
      return this.$store.state.errors;
    },
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
