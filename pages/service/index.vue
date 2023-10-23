<template>
  <div id="service-inside">
    <Loading />

    <Header logoColor="dark" />

    <main id="main" class="site-main">
      <template v-if="serviceData">
        <PageTitle :name="serviceData.serviceName" />
        <div id="page-content" class="spacer p-top-xl">
          <div class="content">
            <div id="single">
              <div id="single-content">
                <div id="img" class="block wrapper-normal">
                  <div class="wrapper">
                    <div class="img-no-wrap-1">
                      <div class="img object-fit">
                        <div class="object-fit-cover">
                          <img
                            :src="'https://web.codifyhealthcare.com/public/files?path='+tenantId+'/sm/'+serviceData.serviceImage+'.webp'"
                            alt="Cardiology"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="description" class="block spacer p-top-xl">
                  <div class="wrapper">
                    <div
                      class="description"
                      v-html="serviceData.serviceDescription"
                    ></div>
                  </div>
                </div>

                <div id="price-list" class="block spacer p-top-xl">
                  <div class="wrapper">
                    <div class="title">
                      <h2 class="hr">{{ serviceData.priceListTitle }}</h2>
                    </div>

                    <div class="price-list">
                      <div class="price-list-items">
                        <template
                          v-for="(service, index) in serviceData.services"
                        >
                          <div class="price-list-item" :key="index">
                            <div class="price-list-item-title">
                              <h3>{{ service.priceCategoryName }}</h3>
                            </div>
                            <ul class="price-list-item-list-group list-group">
                              <li
                                v-for="(
                                  consultationItem, subIndex
                                ) in service.servicesAndPrices"
                                :key="`li${subIndex}`"
                                class="list-group-item d-flex justify-content-between align-items-center"
                              >
                                <span class="list-group-title">{{
                                  consultationItem.serviceName
                                }}</span>
                                <span class="list-group-price"
                                  >{{ consultationItem.pricePrefix }}
                                  {{ consultationItem.price }}</span
                                >
                              </li>
                            </ul>
                          </div>
                        </template>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="back-to-services" class="block spacer p-top-xl">
                  <div class="text-center">
                    <nuxt-link to="/services" class="btn btn-primary"
                      >Back to Services</nuxt-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </main>

    <Footer />
  </div>
</template>

<script>
import Loading from "~/components/Loading/Loading";
import Header from "~/components/blocks/header/Header";
import Footer from "~/components/blocks/footer/Footer";
import seoTitles from "@/mixins/seo-titles";
import PageTitle from "~/components/blocks/service-inside/PageTitle";

export default {
  components: {
    Loading,
    Header,
    PageTitle,
    Footer,
  },
  mixins: [seoTitles],
  data() {
    return {
      serviceId: this.$route.query.id,
      serviceData: null,
    };
  },
  async created() {
    this.serviceData = await this.get(`public/get-item/${this.serviceId}`);
  },
  mounted: function () {
    if (process.client) {
      document.body.classList.add("single");
      document.body.classList.add("single-adveits_services");
    }
  },
  beforeDestroy() {
    if (process.client) {
      document.body.classList.remove("single");
      document.body.classList.remove("single-adveits_services");
    }
  },
  metaInfo: {
    title: "Service inside | Bona - Health & Medical Vue JS Template",
    titleTemplate: "%s",
  },
};
</script>
