<template>
    <aside id="aside" class="widget-area">
        <div class="widget widget_search">
            <SearchForm />
        </div>
        <template v-if="isUser">
            <button class="btn btn-primary w-100 mb-5" @click="startProgram">Start Program</button>
        </template>
        <Categories />

        <TagCloud />
    </aside>
</template>

<script>
    import SearchForm from '~/components/Forms/SearchForm';
    import Categories from '~/components/blocks/sidebar/Categories';
    import RecentEntries from '~/components/blocks/sidebar/RecentEntries';
    import RecentComments from '~/components/blocks/sidebar/RecentComments';
    import TagCloud from '~/components/blocks/sidebar/TagCloud';

    export default {
        name: 'Sidebar',
        props: {
          protocolId: {
              type: Number,
              default: 0
          }
        },
        components: {
            SearchForm,
            Categories,
            RecentEntries,
            RecentComments,
            TagCloud
        },
        computed: {
            isUser(){
                return !!this.$store.state.authData.id;
            },
            formErrors() {
                return this.$store.state.errors
            },
        },
        methods: {
            async startProgram(){
                 const program = await this.post(`protocol/start-protocol`, {id: this.$route.query.id});
                if(!program && Object.keys(this.formErrors).length) {
                    this.flashMessage.show({
                        status: 'error',
                        title: 'Program Error',
                        message: [...this.formErrors['id']].shift(),
                        time: 5000,
                        blockClass: 'notify-error'
                    });
                }else{
                   await this.$router.push({ name: "account" })
                }

            }
        }
    };
</script>
