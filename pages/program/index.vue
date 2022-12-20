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

                        <ImageContent :src="program.program_image" size="md"/>

                      </div>
                    </div>

                    <div class="meta">
                      <p>
                        <span class="category">
                          {{ program.category }}
                        </span>
                      </p>
                    </div>

                    <div class="title">
                      <h2>{{ program.name }}</h2>
                    </div>

                    <Description :desc="program.description"/>

                    <!-- <Comments /> -->
                  </div>

                  <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <!-- <Sidebar :protocol-id="program.protocol_id" /> -->
                    <div class="card rounded-large shadow-large card-border-0">
                      <div class="card-body">
                        <h3 class="mb-2 font-weight-bold text-break">
                          {{ program.name }}
                        </h3>
                        <div class="card bg-transparent mb-4 border-0">
                          <div class="card-body p-0">
                            <div class="d-flex">
                              <div class="d-flex my-2 align-items-center">
                                <div class="d-flex">


                                  <div class="d-block ml-2">
                                    <div class="d-block">
                                      <small
                                        class="
                                          media-heading
                                          text-muted
                                          btn-block
                                          margin-zero
                                        "
                                      >May 22, 2022</small
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
                        <template v-else>
                          You should authenticate to start program
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
import AppAvatar from "../../components/ui/app-avatar.vue";
import ImageContent from "@/components/blocks/ImageContent";

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
    AppAvatar,
  },
  computed: {
    accessToken() {
      return this.$store.state.authData.accessToken;
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
    this.program = await this.get(`public/get-program/${this.$route.query.id}`);
  },
  methods: {
    async startProgram() {
      const program = await this.post(`program-sale/buy`, {
        program_id: this.$route.query.id,
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
