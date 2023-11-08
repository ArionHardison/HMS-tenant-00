<template>
  <div class="mt-2 mb-2 text-center col-12 question quetion-container">
    <client-only>
      <template v-if="question.image">
        <div
          :style="{backgroundImage: $imageUrl(question.image, 'lg', false)}"
          class="quetion-image"
        ></div>
      </template>
      <div
        class="question-text mb-4 mt-4 text-center bold-text"
        v-html="question.text"
      ></div>

      <template
        v-if="
          (question.type === 'multi' &&
            question.attributes.multiple_selectable) ||
          (question.type === 'dropdown' &&
            question.attributes.multiple_selectable)
        "
      >
        <multiselect
          v-model="selectedValue"
          :options="question.choices"
          :multiple="true"
          track-by="id"
          label="choice"
        ></multiselect>
      </template>
      <template
        v-if="
          question.type === 'dropdown' &&
          !question.attributes.multiple_selectable
        "
      >
        <select v-model="selectedValue">
          <option
            v-for="(option, index) in question.choices"
            :key="index"
            :value="option.choice"
          >
            {{ option.choice }}
          </option>
        </select>
      </template>
      <template v-if="question.type === 'phone' || question.type === 'number'">
        <input v-model="selectedValue" type="number" class="form-control" />
      </template>
      <template v-if="question.type === 'email'">
        <input v-model="selectedValue" type="email" class="form-control" />
      </template>
      <template v-if="question.type === 'slider'">
        <vue-slider
          v-model="selectedValue"
          :min="question.attributes.minimum_value"
          :max="question.attributes.maximum_value"
        />
      </template>
      <template
        v-if="question.type === 'shortText' || question.type === 'longText'"
      >
        <textarea
          v-model="selectedValue"
          class="form-control form-lg"
          cols="45"
          rows="4"
        ></textarea>
      </template>
      <template v-if="question.type === 'yesOrNo'">
        <div>
          <span
            v-for="(choice, index) in question.choices"
            :key="`label_${index}`"
          >
            <label
              class="yes-or-no m-0"
              :class="{ 'yes-or-no-active': selectedValue === choice.choice }"
              :for="`input${index}`"
            >{{ choice.choice }}</label
            >
            <input
              hidden
              :id="`input${index}`"
              :key="`input${index}`"
              type="radio"
              name="yesOrNo"
              v-model="selectedValue"
              :value="choice.choice"
            />
          </span>
        </div>
      </template>
      <template v-if="question.type === 'rating'">

        <star-rating v-model="selectedValue" :show-rating="false" />

      </template>
      <template v-if="question.type === 'date'">
        <input type="date" format="yyyy-MM-dd" v-model="selectedValue" />
      </template>
      <template v-if="question.type === 'fileUpload'">
        <b-form-file
          @change="setFileValue"
          placeholder="Choose a file or drop it here..."
          drop-placeholder="Drop file here..."
        ></b-form-file>
      </template>
      <div
        class="invalid-feedback"
        :style="errors.length ? { display: 'block' } : ''"
      >
        {{ [...this.errors].shift() }}
      </div>
      <hr />
      <button
        class="btn mt-2 mb-2 col-12"
        :style="{ backgroundColor: 'var(--primary-color)', color: color }"
        @click="saveAnswer"
      >
        Next Question
      </button>
    </client-only>
  </div>
</template>

<script>


import "vue-slider-component/theme/antd.css";
import api from "~/mixins/api";

export default {
  mixins: [api],
  name: "Question",
  components: {
    [process.client && "VueSlider"]: () => import("vue-slider-component"),
    [process.client && "StarRating"]: () => import("vue-star-rating"),
    [process.client && "Multiselect"]: () => import("vue-multiselect"),
  },
  props: {
    attendee: {
      type: Number,
    },
    buttonColor: {
      type: String,
    },
    color: {
      type: String,
    },
    question: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      errors: [],
      selectedValue: null,
      validationError: null,
      fileUploadData: null,
      multipartFormData: false,
    };
  },
  methods: {
    setFileValue(evt) {
      const uploadedFiles = evt.target.files;
      if (uploadedFiles.length) {
        this.fileUploadData = uploadedFiles[0];
        this.multipartFormData = true;
      }
    },
    async saveAnswer() {
      const answer = this.prepareAnswer();
      const resp = await this.sendAnswer(answer);
      if (resp) {
        this.$emit("nextQuestion");
      }
    },
    async sendAnswer(answer) {
      const resp = await this.post("response/store", {
        question_id: this.question.id,
        survey_id: this.question.survey_id,
        attendee_id: this.attendee,
        response: answer,
      });
      if (resp) {
        this.$emit("nextQuestion");
      }
    },
    prepareAnswer() {
      if (this.question.type === "fileUpload") {
        this.selectedValue = this.fileUploadData;
      }
      if (this.selectedValue === "" || this.selectedValue === null) {
        return null;
      }
      if (
        this.question.type === "multi" ||
        this.question.attributes.multiple_selectable
      ) {
        return this.selectedValue.map((answer) => answer.choice).join(",");
      }
      return this.selectedValue;
    },
    getRules() {
      let rules = [];
      const attributes = this.question.attributes;
      if (attributes.is_required) {
        rules.push("required");
      }
      if (attributes.maximum_characters) {
        rules.push(`max:${attributes.maximum_characters}`);
      }
      if (this.question.type === "phone" || this.question.type === "number") {
        rules.push("numeric");
      }
      if (this.question.type === "email") {
        rules.push("email");
      }
      return rules.join("|");
    },
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
.quetion-image {
  height: 250px;
  width: 100%;
  margin-bottom: 15px;
  border-radius: 15px;
}
.yes-or-no {
  padding: 10px 25px;
  border-radius: 20px;
  text-align: center;
  transition: all 200ms linear;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  margin-left: 2.5px;
  margin-right: 2.5px;
  margin: 0 10px !important;
  box-shadow: 0 8px 30px rgb(0 0 0 / 5%) !important;
  padding-top: 20px;
}
.yes-or-no-active {
  background: var(--primary-color);
  color: white;
}
.bold-text {
  font-size: 1rem;
  color: #5f5f5f !important;
  font-weight: 600;
}
.quetion-container {
  border-radius: 15px;
  background-color: #fff !important;
  border: 1px solid rgba(111, 111, 111, 0.125) !important;
  padding: 1.5rem;
  box-shadow: 0 8px 30px rgb(0 0 0 / 5%) !important;
}
</style>
