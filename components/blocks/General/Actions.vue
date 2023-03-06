<template>
  <div class="actions">
    <div class="actions-items">

      <button class="actions-item" @click="getClinicLink">
        <span>Clinic</span>
      </button>
    </div>
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
        if (this.userId) {
          const tokenData = await this.get("user/get-token");
          window.location.href = `https://clinic.${window.location.hostname}?token=${tokenData.token}`;
        } else {
          window.location.href = `https://clinic.${window.location.hostname}`;
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
