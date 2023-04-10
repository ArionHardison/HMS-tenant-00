<template>
  <div class="mt-4 mb-4 custom-control custom-checkbox">
    <input
      :id="`${name}-checkbox`"
      :name="`${name}-checkbox`"
      v-model="content"
      class="custom-control-input"
      type="checkbox"
      :checked="checked"
      :required="required"
      @change="changeModelValue"
    />
    <label :for="`${name}-checkbox`" class="custom-control-label">
      <slot></slot>
    </label>
    <InvalidFeedback :state="errorFields.includes(name)">
      {{ formErrors[name] ? [...formErrors[name]].shift() : "" }}
    </InvalidFeedback>
  </div>
</template>

<script>
import InvalidFeedback from "@/components/Forms/Fields/InvalidFeedback";
import formField from "@/mixins/components/formField";
export default {
  name: "CheckboxField",
  components: { InvalidFeedback },
  mixins: [formField],
  props: {
    value: [Boolean, Number],
    name: String,
    checked: Boolean,
    required: Boolean,
    errorMessage: String,
  },
  data() {
    return {
      booleanVal: true,
    };
  },
  mounted() {
    this.handleErrorMessage();
  },
  watch: {
    content: {
      immediate: false,
      handler() {
        this.handleErrorMessage();
      },
    },
  },
  methods: {
    async handleErrorMessage() {
      if (process.browser) {
        const checkbox = await document.querySelector(
          `input[name=${this.name}-checkbox]`
        );
        if (this.errorMessage && !this.content && checkbox) {
          checkbox.setCustomValidity(this.errorMessage);
        } else {
          checkbox.setCustomValidity("");
        }
      }
    },
  },
};
</script>

<style scoped></style>
