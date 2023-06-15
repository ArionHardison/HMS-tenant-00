<template>
  <div id="search-results">
    <Loading/>

    <Header logoColor="dark"/>

    <main id="main" class="site-main">
      <PageTitle title="All Programs"
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
                      :to="`/program/${$slug(program.id, program.name)}`"
                    >
                      <div class="img object-fit overflow-hidden">
                        <div class="object-fit-cover transform-scale-h">
                          <ImageContent :src="program.program_image" size="md" :tenant="false" class="card-top-img"/>
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
                          :to="`/program/${$slug(program.id, program.name)}`"
                        >{{ program.category }}</nuxt-link
                        ></span
                        >
                      </p>
                    </div>

                    <h4 class="card-title">
                      <nuxt-link
                        class="capitalize-first over-hide"
                        :title="program.name"
                        :to="`/program/${$slug(program.id, program.name)}`"
                      >{{ program.name }}
                      </nuxt-link
                      >
                    </h4>
                    <p class="card-text over-hide" :title="program.description">{{ program.description }}</p>
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
<style scoped>
.capitalize-first {
  text-transform: lowercase;
}

.capitalize-first::first-letter {
  text-transform: uppercase;
}
.over-hide {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
