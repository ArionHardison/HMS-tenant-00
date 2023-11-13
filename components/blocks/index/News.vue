<template>
  <section id="news" class="block spacer p-top-xl mb-4">
    <div class="wrapper">
      <div class="title">
        <h2 class="hr">News</h2>
      </div>
      <b-overlay
        :show="slidesLoad"
        rounded
        opacity="1"
        spinner-small
        spinner-variant="primary"
        class="d-block"
      >
      <div class="with-pb-lg">
        <template v-if="items.data.length">
        <button @click="prevSlide" class="prev-btn"> <ChevronLeft :size="40"/> </button>
        <button @click="nextSlide" class="next-btn"> <ChevronRight :size="40"/> </button>

        <agile :options="sliderOptions" ref="news">
        <div
          v-for="article in items.data"
          :key="article.id"
          class="news-slide"
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
                      >{{ article.category}}</span
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
        </agile>
        </template>
      </div>
      </b-overlay>
    </div>
  </section>
</template>

<script>
import ImageContent from "@/components/blocks/ImageContent";
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue';
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue';
import homepageSlider from "@/mixins/homepage-slider";
import api from "@/mixins/api";
export default {
  name: "News",
  mixins: [api, homepageSlider],
  components: {ImageContent, ChevronRight, ChevronLeft},
  data() {
    return {
      sliderName: "news",
    }
  },
  async mounted() {
    this.items = await this.get("public/get-news");
  },

};
</script>
<style scoped>
.card-title{
  min-height: 80px;
}
.news-slide {
  padding: 20px;
}
.cut-news-text {
  display: -webkit-box;
  width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 5px;
  min-height: 100px;
}
.next-btn, .prev-btn {
  border: 0;
  outline: 0;
  font-size: 3rem;
  background: transparent;
  position: absolute;
  top: 50%;
  margin-top: -100px;
  bottom: 0;
  z-index: 999;
  height: 40px;
  color:#446ccd;
}
.next-btn {
  right: -20px;
}
.prev-btn {
  left: -20px;
}
</style>
