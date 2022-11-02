<template>
  <div class="mt-2">
    <label v-if="label" :for="`${name}-input`" class="form-control-label">{{
      label
    }}</label>
    <div class="input-group">
      TODO ADD DATEPICKER
    </div>
    <InvalidFeedback :state="errorFields.includes(name)">
      {{ formErrors[name] ? [...formErrors[name]].shift() : "" }}
    </InvalidFeedback>
  </div>
</template>

<script>

import InvalidFeedback from "@/components/forms/InvalidFeedback";
import formField from "@/mixins/components/formField";

export default {
  mixins: [formField],
  name: "DatepickerField",
  components: {
    InvalidFeedback,
  },
  props: {
    value: [Number, String],
    name: String,
    label: String,
    format: {
      type: String,
      default: "MM/dd/yyyy",
    },
    PickerOptions: Object,
  },
};
</script>

<style scoped>
.custom-datepicker {
  display: block;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  height: 46px;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
</style>
