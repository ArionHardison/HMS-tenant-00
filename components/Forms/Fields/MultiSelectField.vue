<template>
  <div class="mt-2">
    <label :for="`${name}-multiselect`" class="form-control-label">{{
      label
    }}</label>
    <Multiselect
      :id="`${name}-multiselect`"
      v-model="content"
      :error="formErrors[name] ? [...formErrors[name]].shift() : ''"
      :track-by="trackByName"
      :multiple="true"
      :options="options"
      :label="dataLabel"
      :class="errorFields.includes(name) ? 'is-invalid' : null"
      :group-values="groupValues"
      :group-label="groupLabel"
      :group-select="groupSelect"
      @select="selectEvent"
      @remove="removeEvent"
    ></Multiselect>
    <InvalidFeedback :state="errorFields.includes(name)">
      {{ formErrors[name] ? [...formErrors[name]].shift() : "" }}
    </InvalidFeedback>
  </div>
</template>

<script>
import InvalidFeedback from "@/components/forms/InvalidFeedback";
import formField from "@/mixins/components/formField";
import Multiselect from "vue-multiselect";

export default {
  name: "MultiSelectField",
  components: { InvalidFeedback, Multiselect },
  mixins: [formField],
  props: {
    value: [Array],
    options: [Array],
    name: String,
    groupValues: null,
    groupLabel: null,
    groupSelect: false,
    dataLabel: String,
    trackByName: String,
    label: String,
  },
  methods: {
    selectEvent(data) {
      this.$emit("select", data);
    },
    removeEvent(data) {
      this.$emit("remove", data);
    },
  },
};
</script>

<style scoped>
label {
  min-height: 18px;
}
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
