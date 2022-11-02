<template>
  <div class="widget widget_categories">
    <h6 class="widget-title">Categories</h6>

    <ul>
      <li
        v-for="categoriesItem in categories"
        :key="categoriesItem.id"
        class="cat-item"
      >
        <nuxt-link
          :title="categoriesItem.category_name"
          :to="{
            path: '/search-results',
            query: { category: categoriesItem.id },
          }"
          >{{ categoriesItem.category_name }}</nuxt-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Categories",
  data() {
    return {
      categories: [],
    };
  },
  async created() {
    this.categories = await this.get("public/get-program-categories");
  },
};
</script>
