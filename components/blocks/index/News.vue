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
        <template v-if="news.data.length">
        <button @click="prevSlide" class="prev-btn"> <ChevronLeft :size="40"/> </button>
        <button @click="nextSlide" class="next-btn"> <ChevronRight :size="40"/> </button>

        <agile :options="sliderOptions" ref="news">
        <div
          v-for="article in news.data"
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
import cloneDeep from "lodash.clonedeep";
export default {
  name: "News",
  components: {ImageContent, ChevronRight, ChevronLeft},
  data() {
    return {
      slidesLoad: false,
      sliderOptions: {
        autoplay: false,
        centerMode: true,
        dots: false,
        navButtons: false,
        infinite: false,
        initialSlide: 1,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 200,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
            }
          },

          {
            breakpoint: 900,
            settings: {
              slidesToShow: 3,
            }
          }
        ]
      },
      news: {
        data: []
      },
    }
  },
  async mounted() {
    this.news = await this.get("public/get-news");
  },
  methods: {
    scrollIsAllowed(){
      const currentSlide = this.$refs.news.currentSlide;
      const slidesLeft = this.$refs.news.countSlides - currentSlide;
      const breakpoint = this.$refs.news.getCurrentBreakpoint()
      if(slidesLeft<3 && breakpoint>=600){
        return false;
      } else if(slidesLeft===1 && breakpoint<600){
        return false;
      }
      return true;
    },
    async nextSlide(){
      this.$store.commit("setPreloaderState", false);
      if(!this.scrollIsAllowed()){
        const currentSlide = this.$refs.news.currentSlide;
        if(this.news.meta.current_page<this.news.meta.last_page){
          this.slidesLoad = true;
          const loadedPrograms = cloneDeep(this.news.data);
          this.news.data = [];
          const nextPage = this.news.meta.current_page+1;
          const newSlides = await this.get(`public/get-news?page=${nextPage}`);
          this.sliderOptions.initialSlide = currentSlide+1;
          this.news.meta = newSlides.meta;
          this.news.data = loadedPrograms.concat(newSlides.data);
          setTimeout(()=>{
            this.slidesLoad = false;
          }, 300)
        }
        this.$store.commit("setPreloaderState", true);
      }else{
        this.$refs.news.goToNext()
      }
    },
    prevSlide(){
      if(this.isSlideExists()){
        this.$refs.news.goToPrev()
      }
    },
    isSlideExists(){
      return !(this.$refs.news.currentBreakpoint===900 && this.$refs.news.currentSlide===1);
    },
  }
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
