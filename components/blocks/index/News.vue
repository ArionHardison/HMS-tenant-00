<template>
  <section id="news" class="block spacer p-top-xl mb-4">
    <div class="wrapper">
      <div class="title">
        <h2 class="hr">News</h2>
      </div>

      <div class="row gutter-width-sm with-pb-lg">
        <div
          v-for="article in news.data"
          :key="article.id"
          class="col-xl-4 col-lg-4 col-md-4 col-sm-12"
        >
          <div class="card card-post">

            <div class="card-top position-relative">
              <a
                :href="article.link"
                target="_blank"
              >
                <div class="img object-fit overflow-hidden">
                  <div class="object-fit-cover transform-scale-h">
                    <ImageContent :src="article.image" size="md" class="card-top-img" :tenant="true"/>
                  </div>
                </div>
              </a>
            </div>

            <div class="card-body">
              <div class="card-meta">
                <p>
                  <span
                    ><span
                      class="btn btn-lg btn-before-horbar btn-link border-0 p-0 min-w-auto link-no-space"
                      >{{ article.category.category_name }}</span
                  ></span>
                </p>
              </div>

              <h4 class="card-title">
                <a :href="article.link"
                   target="_blank"
                  :title="article.title"
                  >{{ article.title }}</a
                >
              </h4>

              <p class="card-text cut-news-text" v-html="article.short_description"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ImageContent from "@/components/blocks/ImageContent";
export default {
  name: "News",
  components: {ImageContent},
  data() {
    return {
      news: {
        data: []
      },
    };
  },
  async mounted() {
    this.news = await this.get("public/get-news");
  },
};
</script>
<style scoped>
.cut-news-text {
  display: -webkit-box;
  width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 5px;
}
</style>
