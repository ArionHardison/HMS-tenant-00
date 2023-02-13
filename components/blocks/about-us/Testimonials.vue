<template>
    <div id="testimonials" class="block spacer p-top-xl">
      <template v-if="testimonialsItem">
        <div class="wrapper">
            <div class="title">
                <h2 class="hr">Testimonials</h2>
            </div>
              <div class="adv-slider-reviews">
                  <div class="adv-slider-reviews-img">
                      <img src="img/demo/32_img.png" alt="Icon">
                  </div>

                  <div class="adv-swiper-container reviews-text">
                      <div class="adv-swiper-wrapper reviews-text-items">
                          <div class="adv-swiper-slide reviews-text-item">
                              <div class="reviews-text-item-content">
                                  <p>{{ testimonialsItem.testimonial }}</p>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div class="d-flex align-items-center thumbs">
                      <div class="reviews-results">
                          <h6 class="reviews-name" id="reviews-name">{{ testimonialsItem.user.full_name }}</h6>
                          <p class="reviews-positions" id="reviews-positions">{{  testimonialsItem.program.name }}</p>
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
                name: 'Leon Melendez',
                position: 'CEO at Company'
            }
        },
        computed: {
            currentPage() {
                return this.$route.path;
            }
        },
      async created() {
        this.testimonialsItem = await this.get("public/testimonials/get-random");
      }

    };
</script>
