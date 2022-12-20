<template>
  <div id="search-results">
    <Loading/>

    <Header logoColor="dark"/>

    <main id="main" class="site-main">
      <PageTitle
        :search-query="$route.query.tag ? $route.query.tag : $route.query.s"
      />
      <div id="page-content" class="spacer p-top-xl">
        <div class="wrapper">
          <div class="content">
            <div class="row gutter-width-sm with-pb-lg">
              <div
                v-for="program in programs"
                :key="program.id"
                class="col-xl-4 col-lg-4 col-md-4 col-sm-12"
              >
                <div class="card card-post">
                  <div class="card-top position-relative">
                    <nuxt-link
                      :title="program.name"
                      :to="{
                        name: 'program',
                        query: { id: program.id },
                      }"
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
                          class="
                              btn btn-lg btn-before-horbar btn-link
                              border-0
                              p-0
                              min-w-auto
                              link-no-space
                            "
                          :to="{ name: 'program', query: { id: program.id } }"
                        >{{ program.name }}</nuxt-link
                        ></span
                        >
                      </p>
                    </div>

                    <h4 class="card-title">
                      <nuxt-link
                        title="Which Diagnostic Should I Choose?"
                        :to="{
                          name: 'program',
                          query: { id: program.program_id },
                        }"
                      >{{ program.program_name }}
                      </nuxt-link
                      >
                    </h4>

                    <p class="card-text">{{ program.program_description }}</p>
                  </div>
                </div>
              </div>
              <template v-if="currentPage < lastPage">
                <div class="col-12 text-center">
                  <button
                    title="Load More"
                    class="btn btn-primary"
                    @click="getNextPage"
                  >
                    Load More
                  </button>
                </div>
              </template>
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
import Loadmore from "~/components/Loadmore/Loadmore";
import ImageContent from "@/components/blocks/ImageContent";

export default {
  data() {
    return {
      programs: [],
      currentPage: 1,
      lastPage: 1,
    };
  },
  components: {
    ImageContent,
    Loadmore,
    Loading,
    Header,
    PageTitle,
    Footer,
  },
  metaInfo: {
    title: "All Programs",
    titleTemplate: "%s",
  },
  async created() {
    await this.getPrograms();
  },
  methods: {
    async getPrograms(page = 1) {
      const programs = await this.get(
        `program-sale/list?page=${page}`
      );
      this.currentPage = programs.meta.current_page;
      this.lastPage = programs.meta.last_page;
      if (programs.data.length) {
        this.programs = programs.data;
      }
    },
    async getNextPage() {
      this.currentPage++;
      await this.getPrograms(this.currentPage);
    },
  },
};
</script>
