<template>
  <div id="news">
    <Loading/>

    <Header logoColor="dark"/>

    <main id="main" class="site-main">
      <PageTitle/>

      <div id="page-content" class="spacer p-top-xl">
        <div class="wrapper">
          <div class="content">
            <div id="blog">
              <div class="row">
                <div class="col-12 mt-3 mb-3">
                  <template v-if="userData">
                    User: <b>{{ userData.full_name }}</b><br>
                    Email: <b>{{ userData.email }}</b>
                  </template>
                </div>
                <GlobalModuleTasksListComponent/>
                <div class="offset-3 col-9">
                  <h4 class="text-center">Programs</h4>
                </div>
                <div class="col-12 col-md-3 col-lg-3 col-xl-3">
                  <h4>Daily tasks</h4>
                  <template v-if="tasks.length">
                    <template v-for="task in tasks">
                      <assigned-task :task="task"/>
                    </template>
                  </template>
                  <template v-else>
                    <p class="mt-3">No tasks</p>
                  </template>
                </div>
                <div class="col-12 col-lg-9 col-md-9 col-xl-9">
                  <div class="row gutter-width-sm">
                    <div
                      v-for="program in programs"
                      :key="program.id"
                      class="col-xl-4 col-lg-4 col-md-4 col-sm-12"
                    >
                      <div class="card card-post mt-3" :class="{
                                  'failed-program': program.status===2,
                                  'finished-program': program.status===1,
                                  'running-program': program.status===0,
                                }">
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

                                <ImageContent :src="program.program_image" size="md" :tenant="false"/>

                              </div>
                            </div>
                          </nuxt-link>
                        </div>
                        <div class="card-body text-center">
                          <h4 class="card-title text-center">
                            <nuxt-link
                              title="Follow Program"
                              class="program-name"
                              :to="{
                            name: 'follow-program',
                            query: { id: program.id },
                          }"
                            >{{ program.name }}
                            </nuxt-link
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
                            <template v-if="program.status===2">
                              Failed Program
                            </template>
                            <template v-else-if="program.status===1">
                              Finished Program
                            </template>
                            <template v-else>
                              Follow Program
                            </template>
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

    <Footer/>
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
import GlobalModuleTasksListComponent from "@/components/Program/components/GlobalModuleTasksListComponent.vue";
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
    GlobalModuleTasksListComponent
  },
  middleware: "user",
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
      userData: null,
      tasks: [],
    }
  },
  async created() {
    this.programs = await this.get("personal-chain");
    this.userData = await this.get("user/get-data");
    await this.getTasks();
  },
  methods: {
    async getTasks() {
      const data = await this.get("personal-chain/tasks");
      if(data){
        this.tasks = data;
      }
    },
  }
};
</script>
<style scoped>
 .program-name {
   display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
   overflow: hidden;
   max-height: 66px;
   font-size: 16px;
 }
</style>
<style>

.running-program {
  box-shadow: 0 0 0 0 rgb(100, 183, 70);
  animation: pulse 2s infinite;
}

.failed-program {
  box-shadow: 0 0 0 3px rgb(236, 11, 53);
}

.finished-program {
  box-shadow: 0 0 0 3px #3B89C9;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(100, 183, 70, 0.7);
  }

  70% {
    box-shadow: 0 0 0 10px rgba(100, 183, 70, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(100, 183, 70, 0);
  }
}
</style>
