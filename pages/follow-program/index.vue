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

export default {
  components: {
    Header,
    FollowProgramComponent
  },
  mixins: [],
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
