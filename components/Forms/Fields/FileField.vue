<template>
  <div class="custom-file mt-3">
    <input
      :id="`${name}-input`"
      type="file"
      class="custom-file-input"
      lang="en"
      :accept="accept"
      :name="name"
      v-on="listeners"
      autocomplete="off"
    />
    <label :for="`${name}-input`" class="custom-file-label">{{
      fileSelected ? fileName : label
    }}</label>
    <InvalidFeedback :state="errorFields.includes(name)">
      {{ formErrors[name] ? [...formErrors[name]].shift() : "" }}
    </InvalidFeedback>
  </div>
</template>

<script>
import InvalidFeedback from "@/components/forms/InvalidFeedback";

export default {
  name: "FileField",
  components: { InvalidFeedback },
  props: {
    accept: String,
    name: String,
    label: String,
  },
  data() {
    return {
      fileSelected: false,
      fileName: "",
    };
  },
  computed: {
    errorFields() {
      return this.$store.state.api.errorFields;
    },
    formErrors() {
      return this.$store.state.api.errors;
    },
    listeners() {
      return {
        ...this.$listeners,
        change: this.fileChange,
      };
    },
  },
  methods: {
    fileChange(evt) {
      const uploadedFiles = evt.target.files;
      if (uploadedFiles.length) {
        this.fileName = uploadedFiles[0].name;
        this.fileSelected = true;
        this.$emit("change", { file: uploadedFiles[0], name: this.name });
        this.$store.commit("api/HIDE_ERROR", this.name ? this.name : null);
      } else {
        this.fileSelected = false;
      }
    },
  },
};
</script>

<style scoped>
label {
  min-height: 18px;
}
</style>
