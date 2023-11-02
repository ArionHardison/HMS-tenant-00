<template>
  <div id="index">
    <Loading/>

    <Header logoColor="dark"/>

    <main id="main" class="site-main">
      <div id="page-content" class="spacer p-top-xl">
        <div class="wrapper">
          <div class="content">
            <template v-if="currentTask">
              <component
                :is="currentTask.module"
                :item="currentTask.item"
                :resource="currentTask.module"
                :recurring="true"
                @continueProgram="finishTask"
              ></component>
            </template>
          </div>
        </div>
      </div>
    </main>
    <Footer/>
  </div>
</template>

<script>
import api from "@/mixins/api";
import Assessment from "@/components/Program/components/Assessment.vue";
import Challenge from "@/components/Program/components/Challenge.vue";
import Order from "@/components/Program/components/Order.vue";
import Activity from "@/components/Program/components/Activity.vue";
import Loading from "~/components/Loading/Loading";
import Header from "~/components/blocks/header/Header";
import Footer from "~/components/blocks/footer/Footer";
import seoTitles from "@/mixins/seo-titles";
export default {
  name: "GlobalTask",
  components: {
    Assessment,
    Challenge,
    Loading,
    Order,
    Activity,
    Header,
    Footer
  },
  mixins: [api, seoTitles],
  middleware: "user",
  data() {
    return {
      currentTask: null,
    };
  },
  created() {
    this.getCurrentTask();
  },
  methods: {
    async getCurrentTask() {
      this.currentTask = await this.get(
        `personal-chain/task/${this.$route.params.id}`
      );
    },
    finishTask() {
      this.$router.push("/account");
    },
  },
};
</script>

<style scoped></style>
