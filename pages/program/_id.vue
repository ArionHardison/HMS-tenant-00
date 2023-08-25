<template>
  <div id="news-single-post">
    <Loading/>

    <Header logoColor="dark"/>

    <main id="main" class="site-main">
      <template v-if="program">
        <PageTitle/>

        <div id="page-content" class="spacer p-top-xl">
          <div class="wrapper">
            <div class="content">
              <div id="single">
                <div class="row gutter-width-sm">
                  <div
                    class="col-xl-8 col-lg-8 col-md-8 col-sm-12 single-content"
                  >
                    <div class="img object-fit">
                      <div class="object-fit-cover">

                        <ImageContent :src="program.program_image" size="md" :tenant="false"/>

                      </div>
                    </div>

                    <div class="meta">
                      <p>
                        <span class="category">
                          {{ program.category }}
                        </span>
                      </p>
                    </div>



                    <Description :desc="program.description"/>

                    <!-- <Comments /> -->
                  </div>

                  <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <!-- <Sidebar :protocol-id="program.protocol_id" /> -->
                    <div class="card rounded-large shadow-large card-border-0">
                      <div class="card-body program-desc-card">
                        <h3 class="mb-2 font-weight-bold text-break">
                          {{ program.name }}
                        </h3>

                        <div class="text-center mt-3 mb-3">
                          <Avatar :src="program.author.profile_picture" width="50" height="50"/>
                          <div class="col-12 mt-2 mb-2">
                            <b class="mt-2 mb-2">{{program.author.full_name}}</b><br/>

                            {{program.author.roles.toString()}}
                          </div>
                        </div>

                        <div class="card bg-transparent mb-4 border-0">
                          <div class="card-body p-0">
                            <div class="d-flex">
                              <div class="d-flex my-2 align-items-center">
                                <div class="d-flex">


                                  <div class="d-block">
                                    <div class="d-block">
                                      <small
                                        class="
                                          media-heading
                                          text-muted
                                          btn-block
                                          margin-zero
                                        "
                                      >{{formattedProgramDate(program.created_at)}}</small
                                      >
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <template v-if="accessToken">
                          <template v-if="program.access_type === 1">
                            <h3>Free</h3>
                            <button
                              class="
                                btn btn-1 btn-primary btn-block
                                mt-4
                                text-white
                              "
                              type="button"
                              :disabled="program.borken"
                              @click="startProgram"
                            >
                              Start Program
                            </button>
                          </template>
                          <template v-else>
                            <template v-if="program.sale">
                              <h3>
                                ${{ program.sale.amount / 100 }}
                                <small>USD</small>
                              </h3>

                              <button
                                :disabled="program.borken"
                                class="
                                  btn btn-1 btn-primary btn-block
                                  mt-4
                                  text-white
                                "
                                type="button"
                                @click="startProgram"
                              >
                                Buy Program
                              </button>
                            </template>
                          </template>
                        </template>
                        <template v-else>
                          You should have account to start program
                          <nuxt-link to="/sign-up" class="btn btn-1 btn-primary btn-block mt-2 mb-2">Sign Up</nuxt-link>
                          <nuxt-link to="/sign-in" class="btn btn-1 btn-primary btn-block mt-2 mb-2">Sign In</nuxt-link>
                        </template>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </main>

    <Footer/>
  </div>
</template>

<script>
import Loading from "~/components/Loading/Loading";
import Header from "~/components/blocks/header/Header";
import Footer from "~/components/blocks/footer/Footer";

import PageTitle from "~/components/blocks/news-single-post/PageTitle";
import Meta from "~/components/blocks/news-single-post/Meta";
import Description from "~/components/blocks/news-single-post/Description";
import Tags from "~/components/blocks/news-single-post/Tags";
import Comments from "~/components/blocks/news-single-post/Comments";
import Sidebar from "~/components/blocks/news/Sidebar";
import Avatar from "@/components/ui/Avatar.vue";
import ImageContent from "@/components/blocks/ImageContent";
import time from "@/mixins/time";

export default {
  components: {
    ImageContent,
    Loading,
    Header,
    PageTitle,
    Meta,
    Description,
    Tags,
    Comments,
    Sidebar,
    Footer,
    Avatar,
  },
  mixins: [time],
  computed: {
    accessToken() {
      return this.$store.state.authData.accessToken;
    },
    invite() {
      return this.$store.state.invite;
    },
  },
  mounted: function () {
    if (process.client) {
      document.body.classList.add("single-post");
    }
  },
  data() {
    return {
      program: null,
    };
  },
  beforeMount() {
    if(this.$route.query.invite && this.invite===null){
      this.$store.commit("setInviteId", this.$route.query.invite);
    }
  },
  beforeDestroy() {
    if (process.client) {
      document.body.classList.remove("single-post");
    }
  },
  metaInfo: {
    title: "News single post | Bona - Health & Medical Vue JS Template",
    titleTemplate: "%s",
  },
  async created() {
    let program = await this.get(`public/get-program/${this.$getId(this.$route.params.id)}`);
    if(program){
      program.author.roles = program.author.roles.map((role)=>{
        return role.name;
      });
      this.program = program;
    }
  },
  methods: {
    async startProgram() {
      const program = await this.post(`program-sale/buy`, {
        program_id: this.$getId(this.$route.params.id),
      });
      if (program) {
        if (this.program.access_type === 1) {
          await this.$router.push({name: "account"});
        } else {
          if (process.client) {
            window.location.href = program.url;
          }
        }
      }
    },
  },
};
</script>
<style scoped>
  .program-desc-card {
    padding-top: 0 !important;
  }
</style>
