<template>
    <div class="description clearfix" v-html="desc"></div>
</template>

<script>
    export default {
        name: 'Description',
        props: ['desc']
    };
</script>
