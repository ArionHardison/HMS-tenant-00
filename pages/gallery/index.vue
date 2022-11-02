<template>
  <div id="gallery">
    <Loading />

    <Header logoColor="dark" />

    <main id="main" class="site-main">
      <PageTitle />

      <div id="page-content" class="spacer p-top-xl">
        <div class="wrapper">
          <div class="content">
            <div class="clearfix">
              <div class="row gutter-width-sm with-pb-sm gallery-items">
                <div
                  v-for="galleryItem in galleryItems"
                  :key="galleryItem.id"
                  class="col-xl-6 col-lg-6 col-md-6 col-sm-12"
                >
                  <a
                    :title="galleryItem.title"
                    @click="toggleSwipebox"
                    :id="galleryItem.id"
                    class="gallery-item swipebox"
                    :href="galleryItem.imgSrc"
                    rel="gallery"
                  >
                    <div class="img object-fit">
                      <div class="object-fit-cover">
                        <img
                          :src="galleryItem.imgSrc"
                          :alt="galleryItem.title"
                        />
                      </div>
                    </div>

                    <div class="img-bg-color"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <SwipeboxOverlay />

    <Footer />
  </div>
</template>

<script>
import Loading from "~/components/Loading/Loading";
import Header from "~/components/blocks/header/Header";
import Footer from "~/components/blocks/footer/Footer";

import PageTitle from "~/components/blocks/gallery/PageTitle";
import SwipeboxOverlay from "~/components/blocks/gallery/Swipebox-overlay";


export default {
  components: {
    Loading,
    Header,
    PageTitle,
    SwipeboxOverlay,
    Footer,
  },
  data() {
    return {
      galleryItems: [],
    };
  },
  methods: {
    toggleSwipebox(e) {
      e.preventDefault();

      let index = parseInt(e.currentTarget.id);

      this.$store.commit("setwipeboxIndex", index);
      this.$store.commit("toggleSwipebox");
    },
  },
  mounted() {
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
    title: "Gallery | Bona - Health & Medical Vue JS Template",
    titleTemplate: "%s",
  },
};
</script>
