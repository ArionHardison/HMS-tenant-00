<template>
  <div id="services">
    <Loading/>

    <Header logoColor="dark"/>

    <main id="main" class="site-main">
      <template v-if="servicesPage">
        <PageTitle :name="servicesPage.entity_name"/>
        <div id="page-content" class="spacer p-top-xl">
          <div class="wrapper">
            <div class="content">
              <div class="row gutter-width-sm with-pb-sm services-items">
                <div
                  v-for="serviceItem in servicesPage.service"
                  :key="serviceItem.id"
                  class="col-xl-6 col-lg-6 col-md-6 col-sm-12"
                >
                  <nuxt-link
                    :title="serviceItem.title"
                    :to="{ path: '/service', query: { id: serviceItem.id } }"
                    class="services-item"
                  >
                    <div class="services-item-content">
                      <h3 class="services-item-t-head">
                        {{ serviceItem.serviceName }}
                      </h3>
                      <span
                        class="btn btn-lg btn-before-horbar btn-link border-0 p-0 min-w-auto link-no-space"
                      >Read more</span
                      >
                    </div>

                    <div class="img object-fit">
                      <div class="object-fit-cover">
                        <template v-if="serviceItem.serviceImage.length===11">
                          <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Yj2iELI6OeI?autoplay=1&mute=1&loop=1&&rel=0controls=0&showinfo=0&playlist=Yj2iELI6OeI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </template>
                        <template v-else>
                          <img
                            :alt="serviceItem.serviceName"
                            :src="'https://codify.solutions/public/files/xl/'+serviceItem.serviceImage+'.webp/'+tenantId"
                          />
                        </template>

                      </div>
                    </div>

                    <div class="img-bg-color"></div>
                  </nuxt-link>
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
import PageTitle from "~/components/blocks/services/PageTitle";

export default {
  components: {
    Loading,
    Header,
    PageTitle,
    Footer,
  },
  data() {
    return {
      servicesPage: null,
    };
  },
  async created() {
    this.servicesPage = await this.get("public/get-entity/services");
  },
  mounted: function () {
    if (process.client) {
      document.body.classList.add("archive");
    }
  },
  beforeDestroy() {
    if (process.client) {
      document.body.classList.remove("archive");
    }
  },
  metaInfo: {
    title: "Services | Bona - Health & Medical Vue JS Template",
    titleTemplate: "%s",
  },
};
</script>
<style scoped>
iframe {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 100vh;
  transform: translate(-50%, -50%);
}
</style>
