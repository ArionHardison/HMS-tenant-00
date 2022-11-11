<template>
  <div id="news">
    <Loading />

    <Header logoColor="dark" />

    <main id="main" class="site-main">
      <PageTitle />

      <div id="page-content" class="spacer p-top-xl">
        <div class="wrapper">
          <div class="content">
            <div id="blog">
              <div class="row">
                <div class="col-3">
                    <h4>Daily tasks</h4>
                  <template v-if="tasks.length">
                    <template v-for="task in tasks">
                      <assigned-task :task="task" />
                    </template>
                  </template>
                  <template v-else>
                    No tasks
                  </template>
                </div>
                <div class="col-9">
                  <div class="row gutter-width-sm">
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
                          name: 'follow-program',
                          query: { id: program.id },
                        }"
                          >
                            <div class="img object-fit overflow-hidden">
                              <div class="object-fit-cover transform-scale-h">

                                <ImageContent :src="program.program_image" size="sm" />

                              </div>
                            </div>
                          </nuxt-link>
                        </div>
                        <div class="card-body text-center">
                          <h4 class="card-title text-center">
                            <nuxt-link
                              title="Follow Program"
                              :to="{
                            name: 'follow-program',
                            query: { id: program.id },
                          }"
                            >{{ program.name }}</nuxt-link
                            >
                          </h4>
                          <nuxt-link
                            class="btn btn-primary"
                            title="Follow Program"
                            :to="{
                          name: 'follow-program',
                          query: { id: program.id },
                        }"
                          >
                            Follow Program
                          </nuxt-link>
                        </div>
                      </div>
                    </div>
                  </div>
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

import PageTitle from "~/components/blocks/news/PageTitle";
import NewsBlog from "~/components/blocks/news/Blog";
import Sidebar from "~/components/blocks/news/Sidebar";
import AssignedTask from "@/components/AssignedTask";
import ImageContent from "@/components/blocks/ImageContent";

export default {
  components: {
    ImageContent,
    AssignedTask,
    Loading,
    Header,
    PageTitle,
    NewsBlog,
    Sidebar,
    Footer,
  },
  mounted: function () {
    if (process.client) {
      document.body.classList.add("blog");
    }
  },
  beforeDestroy() {
    if (process.client) {
      document.body.classList.remove("blog");
    }
  },
  metaInfo: {
    title: "Programs",
    titleTemplate: "%s",
  },
  data() {
    return {
      programs: [],
      tasks: [],
    };
  },
  async created() {
    this.programs = await this.get("personal-chain");
    await this.getTasks();
  },
  methods: {
    async getTasks() {
      const { data } = await this.get("personal-chain/tasks");
      this.tasks = data;
    },
  }
};
</script>
