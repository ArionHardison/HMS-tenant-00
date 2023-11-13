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
                <template v-if="items.data.length">
              <button @click="prevSlide" class="prev-btn"> <ChevronLeft :size="40"/> </button>
              <button @click="nextSlide" class="next-btn"> <ChevronRight :size="40"/> </button>

              <agile :options="sliderOptions" ref="members">
                <template v-for="member in items.data" >
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
                              <h4 class="team-member-t-head" :title="member.full_name">{{ member.full_name }}</h4>

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
    import homepageSlider from "@/mixins/homepage-slider";
    export default {
        components: {
          ImageContent,
          ChevronRight,
          ChevronLeft
        },
        mixins: [api, homepageSlider],
        name: 'OurDoctors',
        data(){
          return {
            sliderName: "members",
          }
        },
        async created() {
          this.items = await this.get("public/get-team");
        },
    };
</script>
<style scoped>
    .team-member-t-head {
      max-height: 39px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .team-member-description {
      height: 100px !important;
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
