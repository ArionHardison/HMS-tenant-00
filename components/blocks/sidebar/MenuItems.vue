<template>
    <div class="widget widget_categories">
        <h6 class="widget-title">Items</h6>

        <ul>
            <li  class="cat-item">
                <nuxt-link title="Burgers" to="/">Burgers</nuxt-link>
            </li>
            <li  class="cat-item">
                <nuxt-link title="Burgers" to="/">Pizza</nuxt-link>
            </li>
            <li  class="cat-item">
                <nuxt-link title="Burgers" to="/">Sushi</nuxt-link>
            </li>
            <li  class="cat-item">
                <nuxt-link title="Burgers" to="/">Pasta</nuxt-link>
            </li>
            <li  class="cat-item">
                <nuxt-link title="Burgers" to="/">Desserts</nuxt-link>
            </li>
            <li  class="cat-item">
                <nuxt-link title="Burgers" to="/">Drinks</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
 
    export default {
        name: 'MenuItems',
        data() {
            return {
                categories: []
            }
        },
        async created() {
            this.categories = await this.get("public/get-program-categories");
        }
    };
</script>
