<template>
  <section id="services" class="block spacer p-top-xl">

    <div class="adv-slider-services">
      <div class="adv-swiper-container">
        <div class="adv-swiper-wrapper services-items clearfix">
          <nuxt-link
            v-for="program in programs.data"
            :key="program.id"
            title="Cardiology"
            class="adv-swiper-slide services-item"
            :to="`/program?id=${program.id}`"
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

        <div class="adv-2-swiper-button-prev">
          <span>
            <span
              class="btn btn-lg btn-before-horbar btn-link border-0 p-0 min-w-auto"
              >Previous</span
            >
          </span>
        </div>

        <div class="adv-2-swiper-button-next">
          <span>
            <span
              class="btn btn-lg btn-after-horbar btn-link border-0 p-0 min-w-auto"
              >Next</span
            >
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ImageContent from "@/components/blocks/ImageContent";

export default {
  name: "services",
  components: {
    ImageContent,
  },
  data(){
    return {
      programs: {
        data: []
      },
    }
  },
  async mounted() {
    this.programs = await this.get("public/get-recent-programs");
  },
};
</script>
