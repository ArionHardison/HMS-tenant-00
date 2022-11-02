<template>
  <div class="tags">
    <p>
      <template v-for="(tag, index) in tags">
        <nuxt-link
          :key="index"
          :title="tag.tag_name"
          :to="{
            path: '/search-results',
            query: { tag: tag.tag_name.toLowerCase() },
          }"
          >{{ tag.tag_name }}</nuxt-link
        >
      </template>
    </p>
  </div>
</template>

<script>
export default {
  name: "Tags",
  props: {
    tags: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
