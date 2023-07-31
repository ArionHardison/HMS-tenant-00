<template>
    <transition appear leave-active-class="animated slideOutRight">
        <div class="loading" ref="loading" v-show="showPreloader && requestRunning">
            <div class="wrapper h-100">
                <template v-if="logo">
                    <div class="d-flex justify-content-center align-items-center h-100">
                        <div class="loading-content">

                                <div class="logo logo-primary">
                                    <transition appear>
                                        <img class="animated zoomIn" :src="logo" alt="Logo">
                                    </transition>
                                </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'Loading',
        computed: {
            requestRunning() {
                return this.$store.state.axiosCalls > 0;
            },
            showPreloader() {
                return this.$store.state.showPreloaderOnRequest;
            },
        },
    };
</script>
<style scoped>
    .loading {
      z-index: 999999 !important;
    }
</style>
