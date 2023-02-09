<template>
  <div class="actions">
    <div class="actions-items">

      <a class="actions-item" :href="`https://clinic.${host}`">
        <span>Clinic</span>
      </a>

   <!--   <template v-if="isGuest">
        <nuxt-link class="actions-item" >
          <span>Sign In</span>
        </nuxt-link>
        <nuxt-link class="actions-item" :to="{ name: 'sign-up' }">
          <span>Sign up</span>
        </nuxt-link>
      </template>
      <template v-else>
        <nuxt-link class="actions-item" >
          <span>My Account</span>
        </nuxt-link>
        <a href="javascript:void(0)" class="actions-item">
          <span>Sign out</span>
        </a>
      </template> -->
    </div>
  </div>
</template>

<script>
export default {
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
  created() {
    if (process.browser) {
     this.host = window.location.hostname;
    }
  },
  methods: {

  },
};
</script>
