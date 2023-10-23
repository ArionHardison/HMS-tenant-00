<template>
  <div id="index">
    <Header logoColor="light"/>
    <main id="main" class="site-main">
      <FollowProgramComponent/>
    </main>
  </div>
</template>

<script>
import Header from "@/components/blocks/header/Header";
import FollowProgramComponent from "@/components/Program/FollowProgramComponent.vue";
import seoTitles from "@/mixins/seo-titles";
export default {
  components: {
    Header,
    FollowProgramComponent
  },
  mixins: [seoTitles],
  middleware: "user",
  metaInfo: {
    title: "Follow Program",
    titleTemplate: "%s",
  },
  data() {
    return {
      currentStep: null,
    };
  },
};
</script>
<style scoped>
</style>
