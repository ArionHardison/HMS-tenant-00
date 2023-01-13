<template>
  <client-only>
    <div class="mt-2 mb-2 text-center col-12 question quetion-container">
      <template v-if="question.image">
      <div
        v-bg-img-tenant="$formatImg(question.image, 'lg')"
        class="quetion-image"
      ></div>
      </template>
      <div
        class="question-text mb-4 mt-4 text-center bold-text"
        v-html="question.text"
      ></div>
      <!-- {{ question.image }} -->

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
        <client-only>
          <vue-slider
            v-model="selectedValue"
            :min="question.attributes.minimum_value"
            :max="question.attributes.maximum_value"
          />
        </client-only>
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
        <client-only>
          <star-rating v-model="selectedValue" :show-rating="false" />
        </client-only>
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
        :style="{ backgroundColor: '#1A2853', color: color }"
        @click="saveAnswer"
      >
        Next Question
      </button>
    </div>
  </client-only>
</template>

<script>
// import Multiselect from "vue-multiselect";
// import StarRating from "vue-star-rating";
// import { Datetime } from "vue-datetime";
import { Settings } from "luxon";

// import "vue-datetime/dist/vue-datetime.css";

import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";

import { validate, extend, localize } from "vee-validate";

import api from "~/mixins/api";
import * as rules from "vee-validate/dist/rules";

export default {
  mixins: [api],
  name: "Question",
  components: {
    // Multiselect,
    // datetime: Datetime,
    [process.client && "VueSlider"]: () => import("vue-slider-component"),
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
  created() {
    const dictionary = {
      en: {
        messages: {
          required: () => "Response for this question is required!",
        },
      },
    };

    localize("en", dictionary.en);

    Object.keys(rules).forEach((rule) => {
      extend(rule, rules[rule]);
    });
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
      validate(answer, this.getRules(), {
        name: "Response",
      }).then(async (result) => {
        if (result.valid) {
          const resp = await this.sendAnswer(answer);
          if (resp) {
            this.$emit("nextQuestion");
          }
          this.errors = [];
        } else {
          this.errors = result.errors;
        }
      });
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
}
.yes-or-no-active {
  background: #1a2853;
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
