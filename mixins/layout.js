export default {
  computed: {
    logo() {
      if(this.$store.state.layout.items) {
        return this.$imageUrl(this.$store.state.layout.items.logo, 'sm', true);
      }else{
        return null;
      }
    },
    logoDark() {
      if(this.$store.state.layout.items) {
        if(this.$store.state.layout.items.logoDark) {
          return this.$imageUrl(this.$store.state.layout.items.logoDark, 'sm', true);
        }
      }
      return null;
    },
    primaryColor() {
      return this.$store.state.layout.items ? this.$store.state.layout.items.primaryColor : '#ff0000';
    },
    projectName() {
      return this.$store.state.layout.items ? this.$store.state.layout.items.projectName  : "New Project";
    },
    twitter() {
      return this.$store.state.layout.items ? this.$store.state.layout.items.twitter : "Not set";
    },
    copyRight() {
      return this.$store.state.layout.items  ? this.$store.state.layout.items.copy : "Not set";
    },
  },
};
