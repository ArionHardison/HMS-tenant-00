<template>
  <div  :style="{ '--primary-color': primaryColor }" class="maintenance-page">
    <div class="maintenance-content">
      <img class="animated zoomIn maintenance-logo" :src="logo" alt="Logo"><br/>
    </div>
  </div>
</template>

<script>
import api from "@/mixins/api";
import InputField from "../components/Forms/Fields/InputField";
export default {
  components: {InputField},
  mixins: [api],
  name: "maintenance",
  layout: "maintenance",
  data(){
    return {
      mode: null,
      donation: {
        amount: ""
      }
    }
  },
  created() {
    this.getMaintenancePage();
  },
  methods: {
    async getMaintenancePage(){
      this.mode = await this.get("maintenance");
      if(!this.mode.maintenance){
        return this.$router.push("/")
      }
    },
    async supportTenant(){
      const support = await this.post("public/support-tenant", this.donation);
      if(support){
          window.location.href = support.url;
      }
    }
  }
}
</script>
<style scoped>
.maintenance-logo {
  max-width: 500px;
}
.maintenance-content {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  text-align: center;
  height: 500px;
}
</style>
