<template>
  <div id="index">
    <Loading :force="true"/>
  </div>
</template>

<script>

import Loading from "@/components/Loading/Loading.vue";
import api from "@/mixins/api";
export default {
  mixins: [api],
  components: {
    Loading
  },
  async beforeMount() {
    await this.get(`user/sign-out`);
    this.$store.commit("signOut");
    await  this.$router.push("/sign-in");
  }
};
</script>
