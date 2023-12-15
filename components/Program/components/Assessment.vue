<template>
  <div class="col-12">
    <template v-if="assessment">
      <div class="col-12">
        <h2 class="text-center">{{ assessment.title }}</h2>
        <template v-if="assessment.questions.length">
          <p class="text-center" v-html="assessment.description"></p>
        </template>
      </div>
      <div
        class="col-12"
      >

        <client-only>

        <template v-for="question in assessment.questions">
          <template v-if="currentQuestion.id === question.id">
          <Question
              :question="question"
              :attendee="assessment.attendee_id"
              :key="`question_${question.id}`"
              @nextQuestion="runNextQuestion"
            />
          </template>
        </template>
        </client-only>
      </div>
    </template>
  </div>
</template>

<script>
import api from "@/mixins/api";

export default {
  mixins: [api],
  name: "Assessment",

  components: {
    [process.client && "Question"]: () =>
      import("@/components/Program/components/assessment/Question.vue"),
  },
  props: {
    recurring: {
      type: Boolean,
      default: false,
    },
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
      currentQuestion: 0,
      assessment: null,
    };
  },
  async mounted() {
    this.assessment = await this.get(
      `${this.resource}/${this.recurring ? "run-global" : "run"}/${this.item}/${this.recurring ? this.$route.params.id : this.$route.query.id}`
    );
    this.currentQuestion = [...this.assessment.questions].shift();
  },
  methods: {
    continueProgram() {
      this.$emit("continueProgram");
    },
    runNextQuestion() {
      this.assessment.questions = this.assessment.questions.filter(
        (question) => question.id !== this.currentQuestion.id
      );
      this.currentQuestion = [...this.assessment.questions].shift();
      if (!this.assessment.questions.length) {
        this.continueProgram();
      }
    },
  },
};
</script>

<style scoped></style>
