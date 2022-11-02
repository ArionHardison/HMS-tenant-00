<template>
  <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12">
    <div class="row gutter-width-sm with-pb-lg">
      <div
        v-for="newsItem in newsItems"
        :key="newsItem.id"
        class="col-xl-6 col-lg-6 col-md-6 col-sm-12"
      >
        <div class="card card-post">
          <div class="card-top position-relative">
            <nuxt-link :title="newsItem.title" :to="newsItem.link">
              <div class="img object-fit overflow-hidden">
                <div class="object-fit-cover transform-scale-h">
                  <img
                    class="card-top-img"
                    :src="newsItem.imgSrc"
                    :alt="newsItem.title"
                  />
                </div>
              </div>
            </nuxt-link>
          </div>

          <div class="card-body">
            <div class="card-meta">
              <p>
                <span
                  ><nuxt-link
                    class="btn btn-lg btn-before-horbar btn-link border-0 p-0 min-w-auto link-no-space"
                    :to="newsItem.categoryLink"
                    >{{ newsItem.category }}</nuxt-link
                  ></span
                >
              </p>
            </div>

            <h4 class="card-title">
              <nuxt-link :title="newsItem.title" :to="newsItem.link">{{
                newsItem.title
              }}</nuxt-link>
            </h4>

            <p class="card-text">{{ newsItem.description }}.</p>
          </div>
        </div>
      </div>
    </div>

    <LoadMore />
  </div>
</template>

<script>
import LoadMore from "~/components/Loadmore/Loadmore";

export default {
  name: "Blog",
  components: {
    LoadMore,
  },
  data() {
    return {
      newsItems: NewsData.newsData,
    };
  },
};
</script>
