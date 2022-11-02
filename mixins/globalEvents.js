export default {
  methods: {
    listenFor(event, cbFn) {
      if (process.client) {
        this.$bus.$off(event);
        this.$bus.$on(event, cbFn);
      }
    },
    stopListening(event) {
      this.$bus.$off(event);
    },
  },
};
