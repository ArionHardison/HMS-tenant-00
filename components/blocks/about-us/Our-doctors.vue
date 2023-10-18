<template>
    <div id="our-doctors" class="block spacer p-top-xl">
        <div class="wrapper">
            <div class="title">
                <h2 class="hr">Care Team Members</h2>
            </div>

          <b-overlay
            :show="slidesLoad"
            rounded
            opacity="1"
            spinner-small
            spinner-variant="primary"
            class="d-block"
          >
            <div class="with-pb-md team-members">
              <div class="slide-wraper services-items">
                <template v-if="team.data.length">
              <button @click="prevSlide" class="prev-btn"> <ChevronLeft :size="40"/> </button>
              <button @click="nextSlide" class="next-btn"> <ChevronRight :size="40"/> </button>

              <agile :options="sliderOptions" ref="members">
                <template v-for="member in team.data" >
                  <div  class="member-slide">
                      <div class="team-member">
                          <div class="team-member-top">
                              <div class="img object-fit">
                                  <div class="object-fit-cover">
                                      <template v-if="member.homepage_preview">
                                        <ImageContent :src="member.homepage_preview" :alt="member.full_name" :tenant="true" size="sm"/>
                                      </template>
                                      <template v-else>
                                        <img src="~/static/no-image.svg" :alt="member.full_name"/>
                                      </template>

                                  </div>
                              </div>

                              <div class="team-member-position">
                                  <template v-if="member.roles.length">
                                    <p>{{ member.roles[member.roles.length-1] }}</p>
                                  </template>
                                  <template v-else>
                                    <p>Not Provided</p>
                                  </template>
                              </div>
                          </div>

                          <div class="team-member-content">
                              <h4 class="team-member-t-head">{{ member.full_name }}</h4>

                              <div class="team-member-description">
                                  <template v-if="member.description">
                                    <p>{{ member.description }}</p>
                                  </template>
                                  <template v-else>
                                    <p>Not provided</p>
                                  </template>
                              </div>
                          </div>
                          <template v-if="[member.facebook_profile, member.linkedin_profile, member.instagram_profile, member.twitter_profile].some(value => value !== null)">
                            <nav class="team-member-nav-items">
                                <ul class="nav">
                                    <template v-if="member.facebook_profile">
                                      <li class="nav-item">
                                          <a title="Facebook" :href="member.facebook_profile" target="_blank"><i class="fab fa-facebook-f"></i></a>
                                      </li>
                                    </template>
                                    <template v-if="member.linkedin_profile">
                                      <li class="nav-item">
                                          <a title="LinkedIn" :href="member.linkedin_profile" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                                      </li>
                                    </template>
                                    <template v-if="member.instagram_profile">
                                      <li class="nav-item">
                                          <a title="Instagram" :href="member.instagram_profile" target="_blank"><i class="fab fa-instagram"></i></a>
                                      </li>
                                    </template>
                                    <template v-if="member.twitter_profile">
                                      <li class="nav-item">
                                          <a title="Twitter" :href="member.twitter_profile" target="_blank"><i class="fab fa-twitter"></i></a>
                                      </li>
                                    </template>
                                </ul>
                            </nav>
                          </template>
                      </div>
                  </div>
                </template>
              </agile>
              </template>
              </div>
            </div>
          </b-overlay>
        </div>
    </div>
</template>

<script>
    import api from "@/mixins/api";
    import ImageContent from "@/components/blocks/ImageContent.vue";
    import ChevronRight from 'vue-material-design-icons/ChevronRight.vue';
    import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue';

    import cloneDeep from "lodash.clonedeep";
    export default {
        components: {
          ImageContent,
          ChevronRight,
          ChevronLeft
        },
        mixins: [api],
        name: 'OurDoctors',
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
            team: {
              data: []
            }
          }
        },
        async created() {
          this.team = await this.get("public/get-team");
        },
        methods: {
          async nextSlide(){
            this.$store.commit("setPreloaderState", false);
            const currentSlide = this.$refs.members.currentSlide;
            const slidesLeft = this.$refs.members.countSlides - currentSlide;
            if(slidesLeft===2){
              if(this.team.meta.current_page<this.team.meta.last_page){
                this.slidesLoad = true;
                const loadedPrograms = cloneDeep(this.team.data);
                this.team.data = [];
                const nextPage = this.team.meta.current_page+1;
                const newSlides = await this.get(`public/get-team?page=${nextPage}`);
                this.sliderOptions.initialSlide = currentSlide+1;
                this.team.meta = newSlides.meta;
                this.team.data = loadedPrograms.concat(newSlides.data);
                setTimeout(()=>{
                  this.slidesLoad = false;
                }, 300)
              }
              this.$store.commit("setPreloaderState", true);
            }else{
              this.$refs.members.goToNext()
            }
          },
          prevSlide(){
            if(this.isSlideExists()){
              this.$refs.members.goToPrev()
            }
          },
          isSlideExists(){
            return !(this.$refs.members.currentBreakpoint===900 && this.$refs.members.currentSlide===1);
          },
        }
    };
</script>
<style scoped>
    .team-member-description {
      min-height: 100px;
    }
    .member-slide {
      padding: 20px;
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
