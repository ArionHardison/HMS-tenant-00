<template>
  <div id="search-results">
    <Loading/>

    <Header logoColor="dark"/>

    <main id="main" class="site-main">
      <PageTitle/>
      <div id="page-content" class="spacer p-top-xl">
        <div class="wrapper">
          <div class="content">
            <div class="row gutter-width-sm with-pb-lg">
              <div
                v-for="program in searchItems"
                :key="program.id"
                class="col-xl-4 col-lg-4 col-md-4 col-sm-12"
              >
                <div class="card card-post">
                  <div class="card-top position-relative">
                    <nuxt-link
                      :title="program.name"
                      :to="{ name: 'program', query: { id: program.id } }"
                    >
                      <div class="img object-fit overflow-hidden">
                        <div class="object-fit-cover transform-scale-h">
                          <ImageContent :src="program.program_image" size="lg" class="card-top-img"/>
                        </div>
                      </div>
                    </nuxt-link>
                  </div>
                  <div class="card-body">
                    <div class="card-meta">
                      <p>
                        <span
                        ><nuxt-link
                          class="btn btn-lg btn-before-horbar btn-link border-0 p-0 min-w-auto link-no-space"
                          :to="{ name: 'program', query: { id: program.id } }"
                        >{{ program.category }}</nuxt-link
                        ></span
                        >
                      </p>
                    </div>

                    <h4 class="card-title">
                      <nuxt-link
                        title="Which Diagnostic Should I Choose?"
                        :to="{ name: 'program', query: { id: program.id } }"
                      >{{ program.name }}
                      </nuxt-link
                      >
                    </h4>

                    <p class="card-text">{{ program.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

import PageTitle from "~/components/blocks/search-results/PageTitle";
import ImageContent from "@/components/blocks/ImageContent";

export default {
  data() {
    return {
      searchItems: [],
    };
  },
  components: {
    ImageContent,
    Loading,
    Header,
    PageTitle,
    Footer,
  },
  mounted: function () {
    if (process.client) {
      document.body.classList.add("search-results");
    }
  },
  beforeDestroy() {
    if (process.client) {
      document.body.classList.remove("search-results");
    }
  },
  metaInfo: {
    title: "Search results",
    titleTemplate: "%s",
  },
  async beforeMount() {
    this.searchItems = await this.post("find-program", {
      search: this.$route.query.query
    });
  },
};
</script>
