<template>
  <div id="index">
    <Loading />

    <Header logoColor="dark" />

    <main id="main" class="site-main">
      <PageTitle />

      <div id="page-content" class="spacer p-top-xl">
        <div class="content">
          <div class="clearfix">
            <div id="about-us-img" class="block wrapper-normal">
              <div class="wrapper">
                <div class="about-img">
                  <div class="img object-fit">
                    <div class="object-fit-cover">
                      <img
                        src="img/placeholder/1600x700.jpg"
                        alt="About us"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <AboutUs />

            <OurDoctors />

            <Testimonials />

            <div id="contact-us" class="block spacer p-top-xl">
              <div
                class="bg-gray-light contact-us-bottom-no-space spacer p-top-xl p-bottom-xl"
              >
                <div class="wrapper text-center">
                  <div class="title">
                    <h2>Let’s talk or book now</h2>
                  </div>

                  <nuxt-link to="/contacts" class="btn btn-primary"
                    >Book Now</nuxt-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
import Loading from "~/components/Loading/Loading";
import Header from "~/components/blocks/header/Header";
import Footer from "~/components/blocks/footer/Footer";
import seoTitles from "@/mixins/seo-titles";
import PageTitle from "~/components/blocks/about-us/PageTitle";
import AboutUs from "~/components/blocks/about-us/Abouts-us";
import OurDoctors from "~/components/blocks/about-us/Our-doctors";
import Testimonials from "~/components/blocks/about-us/Testimonials";

export default {
  mixins: [seoTitles],
  components: {
    Loading,
    Header,
    PageTitle,
    AboutUs,
    OurDoctors,
    Testimonials,
    Footer,
  },
  mounted: function () {
    if (process.client) {
      document.body.classList.add("page");
    }
  },
  beforeDestroy() {
    if (process.client) {
      document.body.classList.remove("page");
    }
  },
  metaInfo: {
    title: "About Us | Bona - Health & Medical Vue JS Template",
    titleTemplate: "%s",
  },
};
</script>
