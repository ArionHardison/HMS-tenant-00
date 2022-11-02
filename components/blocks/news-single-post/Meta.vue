<template>
    <div class="meta">
        <p>
            <span class="category"><nuxt-link :title="category" to="/news"></nuxt-link></span>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'Meta',
        props: ['category']
    };
</script>
