<template>
  <div class="widget widget_tag_cloud">
    <h6 class="widget-title">Tags</h6>

    <div class="tagcloud">
      <nuxt-link
        v-for="tag in tags"
        :key="tag.id"
        :title="tag.tag_name"
        :to="{
          path: '/search-results',
          query: { tag: tag.tag_name.toLowerCase() },
        }"
        class="tag-cloud-link"
      >
        {{ tag.tag_name }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecentEntries",
  data() {
    return {
      tags: [],
    };
  },
  async created() {
    this.tags = await this.get("public/get-program-tags");
  },
};
</script>
