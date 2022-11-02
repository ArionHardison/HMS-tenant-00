<template>
  <div class="mt-2">
    <label class="form-control-label">{{ label }}</label>
    <template v-if="options">
      <div class="input-group">
        <slot></slot>
        <select
          :id="`${name}-input`"
          v-model="content"
          class="form-control"
          :error="formErrors[name] ? [...formErrors[name]].shift() : ''"
          :name="name"
          :disabled="disabled || options.length === 0"
          :state="null"
          @change="changeModelValue"
        >
          <template v-for="option in options">
            <template v-if="option">
              {{ option }}
              <option
                :key="
                  `${name}_` +
                  (valueField
                    ? option[valueField]
                    : option.id
                    ? option.id
                    : option)
                "
                :value="
                  valueField
                    ? option[valueField]
                    : option.id
                    ? option.id
                    : option
                "
                :disabled="option.disabled"
                v-html="
                  textField
                    ? option[textField]
                    : option.name
                    ? option.name
                    : option
                "
              ></option>
            </template>
          </template>
        </select>
      </div>
      <InvalidFeedback :state="errorFields.includes(name)">
        {{ formErrors[name] ? [...formErrors[name]].shift() : "" }}
      </InvalidFeedback>
    </template>
  </div>
</template>

<script>
import InvalidFeedback from "@/components/Forms/Fields/InvalidFeedback";
import formField from "@/mixins/components/formField";
export default {
  name: "SelectField",
  components: { InvalidFeedback },
  mixins: [formField],
  props: {
    value: [Number, String],
    name: String,
    type: String,
    placeholder: String,
    valueField: String,
    textField: String,
    disabled: Boolean,
    options: {
      type: Array,
      data: () => {
        return [];
      },
    },
    label: String,
  },
  data() {
    return {
      content: this.value ? this.value : null,
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
  methods: {
    changeModelValue() {
      this.$emit(
        "input",
        this.content.id !== undefined ? this.content.id : this.content
      );
      this.$store.commit("api/HIDE_ERROR", this.name ? this.name : null);
    },
  },
};
</script>

<style scoped>
.form-control-label {
  text-transform: capitalize;
}
</style>
