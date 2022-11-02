export default {
  data() {
    return {
      content: this.value ? this.value : null,
      booleanVal: false,
    };
  },
  watch: {
    value() {
      this.content = this.value;
    },
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
        this.booleanVal ? (this.content ? 1 : 0) : this.content
      );
      this.$store.commit("hideError", this.name ? this.name : null);
    },
  },
};
