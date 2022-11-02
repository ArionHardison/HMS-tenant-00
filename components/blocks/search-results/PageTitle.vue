<template>
    <div id="page-title">
        <div class="wrapper text-center">
            <h1 class="large">Search results for: <span class="text-secondary">{{searchQuery}}</span></h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PageTitle',
        props: ['searchQuery']
    };
</script>
