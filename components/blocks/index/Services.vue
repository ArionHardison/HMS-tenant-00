<template>
  <section id="services" class="block spacer p-top-xl">
          <client-only>
            <b-overlay
              :show="slidesLoad"
              rounded
              opacity="1"
              spinner-small
              spinner-variant="primary"
              class="d-block"
            >
            <div class="slide-wraper services-items">
              <template v-if="programs.data.length">
                <agile :options="sliderOptions" ref="programs">
                  <div class="program-slide slide"    v-for="program in programs.data" >
                     <nuxt-link
                      :title="program.name"
                      class="slide services-item"
                      :to="`/program/${$slug(program.id, program.name)}`"
                    >
                      <div class="services-item-content">
                        <h3 class="services-item-t-head">{{ program.name }}</h3>
                        <span
                          class="btn btn-lg btn-before-horbar btn-link border-0 p-0 min-w-auto link-no-space"
                          >Read more</span
                        >
                      </div>

                      <div class="img object-fit">
                        <div class="object-fit-cover">
                          <ImageContent :src="program.program_image" size="md" />
                        </div>
                      </div>

                      <div class="img-bg-color"></div>
                    </nuxt-link>
                  </div>
                </agile>
              </template>

                <div class="adv-2-swiper-button-prev">
                  <button @click="prevSlide" class="btn btn-lg btn-before-horbar btn-link border-0 p-0 min-w-auto">Previous</button>
                </div>
                <div class="adv-2-swiper-button-next">
                    <button @click="nextSlide" class="btn btn-lg btn-after-horbar btn-link border-0 p-0 min-w-auto">Next</button>
                </div>

            </div>
            </b-overlay>
          </client-only>
  </section>
</template>

<script>
import ImageContent from "@/components/blocks/ImageContent";
import cloneDeep from "lodash.clonedeep";
export default {
  name: "services",
  components: {
    ImageContent,
  },
  data(){
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
      programs: {
        data: []
      },
    }
  },
  async mounted() {
    this.programs = await this.get("public/get-recent-programs");
  },
  methods: {
   async nextSlide(){

      this.$store.commit("setPreloaderState", false);
      const currentSlide = this.$refs.programs.currentSlide;
      const slidesLeft = this.$refs.programs.countSlides - currentSlide;
      if(slidesLeft===2){
        if(this.programs.meta.current_page<this.programs.meta.last_page){
            this.slidesLoad = true;
            const loadedPrograms = cloneDeep(this.programs.data);
            this.programs.data = [];
            const nextPage = this.programs.meta.current_page+1;
            const newSlides = await this.get(`public/get-recent-programs?page=${nextPage}`);
            this.sliderOptions.initialSlide = currentSlide+1;
            this.programs.meta = newSlides.meta;
            this.programs.data = loadedPrograms.concat(newSlides.data);
            setTimeout(()=>{
              this.slidesLoad = false;
            }, 300)

        }
        this.$store.commit("setPreloaderState", true);
      }else{
        this.$refs.programs.goToNext()
      }
    },
    prevSlide(){
      if(this.$refs.programs.currentSlide!==1){
        this.$refs.programs.goToPrev()
      }
    }
  }
};
</script>
<style scoped>

  .slide-wraper {
    min-height: 266px;
  }



  .slide-wraper {
    position: relative;
  }
  .slide-wraper button {
    color: #ffffff;
  }
  .slide-wraper button:hover {
    color:#ffffff;
  }

  .adv-2-swiper-button-next, .adv-2-swiper-button-prev {
    position: absolute;
    bottom: 0;
    z-index: 999;
  }
  .adv-2-swiper-button-prev {
    left: 2%;
    bottom: 2%;
  }
  .adv-2-swiper-button-next {
    right: 2%;
    bottom: 2%;
  }
  .adv-2-swiper-button-next button:after {
    color: #ffffff !important;
  }
  .adv-2-swiper-button-prev button:before {
    color: #ffffff !important;
  }
</style>
