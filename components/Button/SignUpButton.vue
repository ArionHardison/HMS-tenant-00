<template>
    <div class="menu-toggle">
        <nuxt-link class="btn btn-lg btn-before-horbar btn-link border-0 p-0 min-w-auto" :to="{ name: 'sign-up' }">Register</nuxt-link>
    </div>
</template>

<script>
    export default {
        name: 'SignUpButton',
    };
</script>
