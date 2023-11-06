<template>
    <transition appear leave-active-class="animated slideOutRight">
        <div class="loading" ref="loading" v-show="showPreloader && requestRunning || showAtRender">
            <div class="wrapper h-100">
                <template v-if="logoDark">
                    <div class="d-flex justify-content-center align-items-center h-100">
                        <div class="loading-content">

                                <div class="logo logo-primary">
                                    <transition appear>
                                        <img class="animated zoomIn" :src="logoDark" alt="Logo">
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
        data(){
          return {
            showAtRender: true
          }
        },
        created() {
          setTimeout(()=>{
            this.showAtRender = false
          }, 500)
        }
    };
</script>
<style scoped>
    .loading {
      z-index: 999999 !important;
    }
</style>
