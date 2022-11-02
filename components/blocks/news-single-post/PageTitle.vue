<template>
    <div id="page-title">
        <div class="wrapper text-center">
            <h1 class="large">{{name}}</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PageTitle',
        props: {
            name: {
                type: String,
                default: "Program"
            }
        }
    };
</script>
