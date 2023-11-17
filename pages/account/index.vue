<template>
  <div id="index">
    <Loading/>

    <Header logoColor="dark"/>

    <main id="main" class="site-main">
      <PageTitle/>

      <div id="page-content" class="spacer p-top-xl">
          <div class="content">
            <div id="blog">
              <div class="row">
                <div class="wrapper">
                  <div class="col-12 mt-3 mb-3">
                    <template v-if="userData">
                      User: <b>{{ userData.full_name }}</b><br>
                      Email: <b>{{ userData.email }}</b>
                    </template>
                  </div>
                </div>
                <div class="col-12">
                  <b-card no-body>
                    <b-tabs pills card :vertical="isVertical" align="center" v-model="tabIndex" nav-wrapper-class="w-100 w-25-md text-center" id="program-cards" @input="getPrograms">
                      <b-tab title="Tasks" active>
                        <b-card-text>
                            <div class="row">
                              <template v-if="tasks.length">
                                  <template v-for="task in tasks">
                                    <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-2 mt-2">
                                      <template v-if="!task.paused">
                                        <assigned-task :task="task"/>
                                      </template>
                                      <hr/>
                                    </div>
                                  </template>
                                <GlobalModuleTasksListComponent/>
                              </template>
                              <template v-else>
                                <div class="col-12 text-center">
                                  <p class="mt-3">No tasks</p>
                                </div>
                              </template>
                            </div>
                        </b-card-text>
                      </b-tab>
                      <b-tab title="Running Programs">
                        <b-card-text>
                          <AccountPrograms :programs="programs"/>
                        </b-card-text>
                      </b-tab>
                      <b-tab title="Finished Programs">
                        <b-card-text>
                          <AccountPrograms :programs="finishedPrograms"/>
                        </b-card-text>
                      </b-tab>
                      <b-tab title="Failed Programs">
                        <b-card-text>
                          <AccountPrograms :programs="failedPrograms"/>
                        </b-card-text>
                      </b-tab>
                    </b-tabs>
                  </b-card>

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
import seoTitles from "@/mixins/seo-titles";
import PageTitle from "~/components/blocks/news/PageTitle";
import NewsBlog from "~/components/blocks/news/Blog";
import Sidebar from "~/components/blocks/news/Sidebar";
import AssignedTask from "@/components/AssignedTask";
import GlobalModuleTasksListComponent from "@/components/Program/components/GlobalModuleTasksListComponent.vue";
import AccountPrograms from "@/components/ui/AccountPrograms.vue";
export default {
  mixins: [seoTitles],
  components: {
    AccountPrograms,
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
      this.checkOrientation()
      document.body.classList.add("blog");
      window.addEventListener("resize", this.checkOrientation);
    }
  },
  beforeDestroy() {
    if (process.client) {
      document.body.classList.remove("blog");
      window.removeEventListener("resize", this.checkOrientation);
    }
  },
  metaInfo: {
    title: "Programs",
    titleTemplate: "%s",
  },
  data() {
    return {
      isVertical: false,
      tabIndex: 0,
      programs: [],
      failedPrograms: [],
      finishedPrograms: [],
      userData: null,
      tasks: [],
    }
  },
  async created() {
    this.userData = await this.get("user/get-data");
    await this.getTasks();
  },
  methods: {
    async checkOrientation(){
      if(window.innerWidth<700){
        this.isVertical = true;
      }else{
        this.isVertical = false;
      }
    },
    async getPrograms(tab){
      if(tab>=1){
        const programs = await this.get(`personal-chain/programs/${tab-1}`)
        if(tab===1){
          this.programs = programs;
        }else if (tab === 2){
          this.finishedPrograms = programs;
        }else{
          this.failedPrograms = programs;
        }
      }
    },
    async getTasks() {
      const data = await this.get("personal-chain/tasks");
      if(data){
        this.tasks = data;
      }
    },
  }
};
</script>
<style>
#program-cards ul {
  padding: 0 !important;
  padding-top: 2.279rem  !important;
}
</style>
