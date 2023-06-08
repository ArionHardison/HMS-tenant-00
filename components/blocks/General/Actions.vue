<template>
  <div class="actions">
    <template v-if="userId">
      <div class="actions-items">
        <button class="actions-item" @click="getClinicLink">
          <span>Clinic</span>
        </button>
      </div>
    </template>
  </div>
</template>

<script>
import api from "@/mixins/api";
export default {
  mixins:[api],
  name: "Actions",
  computed: {
    userId() {
      return this.$store.state.authData.id;
    },
  },
  data() {
    return {
      host: '',
    };
  },
  methods: {
    async getClinicLink(){
      if (process.browser) {
        const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
        if (this.userId) {
          const tokenData = await this.get("user/get-token");
          window.location.href = `${protocol}://clinic.${window.location.hostname}?token=${tokenData.token}`;
        } else {
          window.location.href = `${protocol}://clinic.${window.location.hostname}`;
        }
      }
    }
  },
};
</script>
<style scoped>
  .actions-item {
    border:0;
    outline: 0;
  }
</style>
