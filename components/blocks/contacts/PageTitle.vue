<template>
    <div id="page-title">
        <div class="wrapper text-center">
            <h1 class="large">{{container.formTitle }}</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PageTitle',
        props: {
          container: {
            type: Object,
            default: {}
          }
        }
    };
</script>
