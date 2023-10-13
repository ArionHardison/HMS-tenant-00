<template>
  <div class="mt-2">
    <label :for="`${name}-input`" class="form-control-label">{{ label }}</label>
    <textarea
        :id="`${name}-input`"
        v-model="content"
        :class="errorFields.includes(name) ? 'is-invalid' : null"
        :error="formErrors[name] ? [...formErrors[name]].shift() : ''"
        :name="name"
        :placeholder="placeholder"
        :resize="resize"
        :rows="rows"
        class="custom-textarea"
        @input="valueChanged($event)"
        @click="sendCursorPosition($event)"
    >{{ content }}</textarea
    >
    <template v-if="content && showCounter">
      <i class="message-length small">
        <span
            :class="{
            'characters-limit': content.length > max || content.length < min,
          }"
        >{{ content.length }}</span
        >/{{ max }}</i
      >
    </template>
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
  components: { InvalidFeedback },
  mixins: [formField],
  props: {
    value: [Number, String],
    name: String,
    placeholder: String,
    showCounter: Boolean,
    min: {
      type: Number,
      default: 100,
    },
    max: {
      type: Number,
      default: 500,
    },
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
  methods: {
    valueChanged(event) {
      this.content = this.content.replace(/\n/g, ' '); // Replace line breaks with spaces
      if (this.content.length > this.max) {
        this.content = this.content.substring(0, this.max);
      }
      this.sendCursorPosition(event);
      this.changeModelValue();
    },
    sendCursorPosition(event){
      this.$emit('cursor', event);
    }
  },
};
</script>

<style scoped>
.characters-limit {
  color: #fb6340 !important;
}

label {
  min-height: 18px;
}
</style>
