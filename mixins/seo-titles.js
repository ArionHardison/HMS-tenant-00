export default {
    head() {
        return {
            title: this.$store.state.layout.items.projectName,
            meta: [
                { hid: 'description', name: 'description', content: this.$store.state.layout.items.description },
                { hid: 'og:title', property: 'og:title', content: this.$store.state.layout.items.projectName},
                { hid: 'og:description', property: 'og:description', content: this.$store.state.layout.items.description },
                { hid: 'og:image', property: 'og:image', content: this.$imageUrl(this.$store.state.layout.items.logo, 'sm', true) }
            ],
            link: [
              {
                rel: 'icon',
                type: 'image/png',
                href: this.$imageUrl(this.$store.state.layout.items.logo, 'sm', true),
                hid: 'favicon'
              }
            ]
        };
    },
};
