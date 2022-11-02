<template>
  <div class="texteditor-field">
    <client-only>
  <!--    <HtmlEditor
        v-model="content"
        :name="name"
        :label="label"
        @input="changeModelValue"
      ></HtmlEditor> TODO: Add html editor here -->

    </client-only>
  </div>
</template>

<script>

import formField from "@/mixins/components/formField";

export default {
  name: "TextEditorField",
  mixins: [formField],
  props: {
    value: [String],
    name: {
      type: String,
    },
    label: {
      type: String,
    },
  },
};
</script>

<style>
.ql-clipboard {
  display: none;
}
</style>
