<template>
  <div class="mt-2">
    <label :for="`${name}-input`" class="form-control-label">{{ label }}</label>
    <textarea
      :id="`${name}-input`"
      v-model="content"
      :error="formErrors[name] ? [...formErrors[name]].shift() : ''"
      :placeholder="placeholder"
      :name="name"
      class="form-control"
      :class="errorFields.includes(name) ? 'is-invalid' : null"
      :rows="rows"
      :resize="resize"
      @input="changeModelValue"
      >{{ content }}</textarea
    >
    <InvalidFeedback :state="errorFields.includes(name)">
      {{ formErrors[name] ? [...formErrors[name]].shift() : "" }}
    </InvalidFeedback>
  </div>
</template>

<script>

import InvalidFeedback from "@/components/Forms/Fields/InvalidFeedback";
import formField from "@/mixins/components/formField";
export default {
  name: "TextareaField",
  components: {InvalidFeedback },
  mixins: [formField],
  props: {
    value: [Number, String],
    name: String,
    placeholder: String,
    label: String,
    resize: {
      type: String,
      default: "auto",
    },
    rows: {
      type: [Number, String],
      default: 4,
    },
  },
};
</script>

<style scoped>
label {
  min-height: 18px;
}
</style>
