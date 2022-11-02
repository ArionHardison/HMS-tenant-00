<template>
  <div class="mt-2 row">
    <div class="col-12">
      <label :for="`${name}-input`" class="form-control-label">{{
        label
      }}</label>
    </div>
    <div class="col-lg-1 col-2">
      TODO: ADD COLOR PICKER
    </div>
    <div class="col-lg-11 col-10">
      <input
        :id="`${name}-input`"
        v-model="content"
        :error="formErrors[name] ? [...formErrors[name]].shift() : ''"
        :name="name"
        :placeholder="label"
        type="text"
        class="form-control"
        :class="errorFields.includes(name) ? 'is-invalid' : null"
        @input="changeModelValue"
      />
    </div>
    <div class="col-12">
      <InvalidFeedback :state="errorFields.includes(name)">
        {{ formErrors[name] ? [...formErrors[name]].shift() : "" }}
      </InvalidFeedback>
    </div>
  </div>
</template>

<script>
import InvalidFeedback from "@/components/forms/InvalidFeedback";
import formField from "@/mixins/components/formField";


export default {
  name: "ColorField",
  components: { InvalidFeedback },
  mixins: [formField],
  props: {
    value: [String],
    name: String,
    label: String,
  },
};
</script>

<style scoped>
label {
  min-height: 18px;
}
</style>
