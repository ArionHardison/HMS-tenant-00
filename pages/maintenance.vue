<template>
  <div :style="{ '--primary-color': primaryColor }" class="maintenance-page">
    <div class="maintenance-content">
      <img :src="logo" alt="Logo" class="animated zoomIn maintenance-logo"><br/>
    </div>
  </div>
</template>

<script>
import api from "@/mixins/api";
import InputField from "../components/Forms/Fields/InputField";
import seoTitles from "@/mixins/seo-titles";
export default {
  components: {InputField},
  mixins: [api, seoTitles],
  name: "maintenance",
  layout: "maintenance",
  data() {
    return {
      mode: null,
      donation: {
        amount: ""
      }
    }
  },
  beforeMount() {
    this.getMaintenancePage();
  },
  methods: {
    async getMaintenancePage() {
      this.mode = await this.get("maintenance");
      if (!this.mode.maintenance) {
        return this.$router.push("/")
      }
    },
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
