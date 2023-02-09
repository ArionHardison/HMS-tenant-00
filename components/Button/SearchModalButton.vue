<template>

        <button @click="toggleSearchModal"
                type="button"
                class="btn btn-lg btn-before-horbar btn-link border-0 p-0 min-w-auto"
                data-toggle="modal"
                data-target="#search-modal">Search</button>

</template>

<script>
    export default {
        name: 'SearchModalButton',
        methods: {
            toggleSearchModal: function( event ) {
                this.$store.commit( 'toggleSearchModal' )
            }
        }
    };
</script>
