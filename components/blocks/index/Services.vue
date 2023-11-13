<template>
  <section id="services" :class=" items.data.length ? 'block spacer p-top-xl' : ''">
    <template v-if="items.data.length">
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
              <template v-if="items.data.length">
                <agile :options="sliderOptions" ref="programs">
                  <div class="program-slide slide"    v-for="program in items.data" >
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
                          <ImageContent :src="program.program_image" size="md" :tenant="false"/>
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
    </template>
  </section>
</template>

<script>
import ImageContent from "@/components/blocks/ImageContent";
import homepageSlider from "@/mixins/homepage-slider";
import api from "@/mixins/api";
export default {
  name: "services",
  mixins: [api, homepageSlider],
  components: {
    ImageContent,
  },
  data(){
    return {
      sliderName: "programs",
    }
  },
  async mounted() {
    this.items = await this.get("public/get-recent-programs");
  },
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
