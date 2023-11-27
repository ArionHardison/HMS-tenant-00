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
    const secret= await this.get(`nudge/check/${this.$route.params.secret}`);
    if(secret){
      if(secret.verified){
       this.$store.commit("signOut");
       this.$store.commit("setAuthData", secret.authData);
       await this.$router.push(`/follow-program?id=${secret.program}`)
      }else{
       await  this.$router.push("/");
      }
    }
  }
};
</script>
