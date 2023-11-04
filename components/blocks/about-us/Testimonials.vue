<template>
    <div id="testimonials" :class=" testimonials.length ? 'block spacer p-top-xl' : ''">
      <template v-if="testimonials.length">
        <div class="wrapper">
            <div class="title">
                <h2 class="hr">Testimonials</h2>
            </div>
          <div class="adv-slider-reviews" :class="{ 'fade-out': isFading }">
                  <div class="adv-slider-reviews-img">
                      <img src="img/demo/32_img.png" alt="Icon">
                  </div>

                  <div class="adv-swiper-container reviews-text">
                      <div class="adv-swiper-wrapper reviews-text-items">
                          <div class="adv-swiper-slide reviews-text-item">
                              <div class="reviews-text-item-content">
                                <p>{{ testimonials[currentTestimonialIndex].testimonial }}</p>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div class="d-flex align-items-center thumbs">
                      <div class="reviews-results">
                        <h6 class="reviews-name" id="reviews-name">{{ testimonials[currentTestimonialIndex].user.full_name }}</h6>
                        <p class="reviews-positions" id="reviews-positions">{{ testimonials[currentTestimonialIndex].program.name }}</p>
                      </div>
                  </div>
              </div>
        </div>
      </template>
    </div>
</template>

<script>
import api from "@/mixins/api";

export default {
  name: 'Testimonials',
  mixins: ['api'],
  data() {
    return {
      testimonialsItem: null,
      backgroundClass: 'bg-gray-light p-bottom-xl',
      testimonials: [],
      currentTestimonialIndex: 0,
      isFading: false
    };
  },
  computed: {
    currentPage() {
      return this.$route.path;
    }
  },
  async created() {
    this.testimonials = await this.get("public/testimonials/get-random");
    setInterval(() => {
      this.isFading = true;
      setTimeout(() => {
        this.currentTestimonialIndex++;
        if (this.currentTestimonialIndex >= this.testimonials.length) {
          this.currentTestimonialIndex = 0;
        }
        this.isFading = false;
      }, 1000);
    }, 1000);
  }
};
</script>

<style scoped>
.adv-slider-reviews {
  transition: opacity 1s;
  opacity: 1;
}

.fade-out {
  opacity: 0;
}
</style>
