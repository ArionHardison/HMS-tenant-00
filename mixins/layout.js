export default {
    computed: {
        logo() {
            return "https://codify.solutions/public/files?path="+this.$store.state.initializedId+"/sm/"+this.$store.state.layout.items.logo+".webp";
        },
        primaryColor() {
            return this.$store.state.layout.items.primaryColor || '';
        },
        projectName() {
            return this.$store.state.layout.items.projectName;
        },
        twitter() {
            return this.$store.state.layout.items.twitter;
        },
        copyRight() {
            return this.$store.state.layout.items.copy;
        },
    },
};
