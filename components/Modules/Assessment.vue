<template>
  <div class="row">
    <template v-if="assessment">
      <div class="col-12">
        <h2 class="text-center">{{ assessment.title }}</h2>
        <template v-if="assessment.questions.length">
          <p class="text-center" v-html="assessment.description"></p>
        </template>
      </div>
      <div
        class="col-12"
        :style="{ backgroundColor: assessment.background_color }"
      >
        <template v-for="question in assessment.questions">
          <template v-if="currentQuestion.id === question.id">
            <Question
              :question="question"
              :attendee="assessment.attendee_id"
              :button-color="assessment.button_color"
              :color="assessment.button_text_color"
              :key="`question_${question.id}`"
              @nextQuestion="runNextQuestion"
            />
          </template>
        </template>
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
      import("@/components/Modules/assessment/Question"),
  },
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
      currentQuestion: 0,
      assessment: null,
    };
  },
  async mounted() {
    this.assessment = await this.get(
      `${this.resource}/run/${this.item}/${this.$route.query.id}`
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
