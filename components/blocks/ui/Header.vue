<template>
    <header id="header" class="site-header">
        <div class="wrapper">
            <div class="header-content d-flex justify-content-between">
                <div class="header-left align-self-center"></div>

                <div class="header-center align-self-center">
                    <div class="header-logo">
                        <nuxt-link class="logo logo-primary transform-scale-h" title="Logo" to="/">
                            <img src="img/logo/logo-dark.svg" alt="Logo">
                        </nuxt-link>
                    </div>
                </div>

                <div class="header-right d-flex justify-content-end"></div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header'
    };
</script>
