/**
 * Mixin to listen backend events (Laravel Echo - realtime)
 */
export default {
  data() {
    return {
      coreId: null,
      multipartFormData: false
    }
  },

  beforeMount() {
    if (this.userId) {
      this.listen();
    }
  },
  computed: {
    listening() {
      return this.$store.state.listening;
    },
    evenChanelPrefix() {
      return this.$store.state.initializedId;
    },
    userId() {
      return this.$store.state.authData.id;
    },
  },
  methods: {
    listen() {
      if (process.client && !this.listening) {
        this.$store.commit("setEventListening", true);
        window.Echo.private(`${this.evenChanelPrefix}-user-${this.userId}`).listen(
          ".NewEvent",
          (event) => {
            console.log("NEW EVENT!");
            this.$bus.$emit(event.component, event.data);
          }
        );
      }
    },
  },
};
