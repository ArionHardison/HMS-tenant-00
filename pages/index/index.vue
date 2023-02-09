<template>
  <div id="index">
    <Loading/>

    <Header logoColor="light"/>

    <main id="main" class="site-main content-no-spacing">
      <div class="content mb-4">
        <div class="clearfix">
          <template v-if="homePage">
            <template v-if="homePage.pageTop">
                <PageTitle
                  :title="homePage.pageTop.homeTitle"
                  :desc="homePage.pageTop.homePageDesc"
                  :background="homePage.pageTop.imageOrVideo.length > 11 ? `https://codify.solutions/public/files/lg/${homePage.pageTop.imageOrVideo}.webp/${tenantId}` : homePage.pageTop.imageOrVideo"
                />
              </template>
              <template v-if="homePage.secondContainer">
                <AboutUs :about-us="homePage.secondContainer"/>
              </template>
              <template v-if="homePage.lastContainer">
                <div id="img" class="block spacer p-top-xl">
                  <div class="img-no-wrap-1">
                    <div class="img object-fit">
                      <div class="object-fit-cover">
                          <img
                            :src="`https://codify.solutions/public/files/lg/${homePage.lastContainer.videoOrImage}.webp/${tenantId}`"
                            alt="Medical Center"
                          />
                      </div>
                    </div>
                    <div class="img-no-wrap-bg-color"></div>
                  </div>
                </div>
              </template>

            <News/>
          </template>
        </div>
      </div>
    </main>

    <Footer/>
  </div>
</template>

<script>
import Loading from "~/components/Loading/Loading";
import Header from "~/components/blocks/header/Header";
import Footer from "~/components/blocks/footer/Footer";

import PageTitle from "~/components/blocks/index/PageTitle";
import AboutUs from "~/components/blocks/about-us/Abouts-us";
import Services from "~/components/blocks/index/Services";
import Testimonials from "~/components/blocks/about-us/Testimonials";
import OurDoctors from "~/components/blocks/about-us/Our-doctors";
import News from "~/components/blocks/index/News";

export default {
  computed: {
    tenantId() {
      return this.$store.state.initializedId;
    },
  },
  components: {
    Loading,
    Header,
    PageTitle,
    AboutUs,
    Services,
    Testimonials,
    OurDoctors,
    News,
    Footer,
  },
  async mounted() {
    if (process.client) {
      document.body.classList.add("home");
      document.body.classList.add("header-absolute-true");
    }
    this.homePage = await this.get("public/get-entity/home");
  },
  beforeDestroy() {
    if (process.client) {
      document.body.classList.remove("home");
      document.body.classList.remove("header-absolute-true");
    }
  },
  metaInfo() {
    return {
      title: this.projectName,
    };
  },
  data() {
    return {
      homePage: null,
    };
  },


};
</script>
