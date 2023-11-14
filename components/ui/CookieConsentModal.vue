<template>
  <div v-if="showModal && $route.path!=='/cookie-policy'" class="cookie-consent-modal">
    <div class="modal-content">
      <h2>Cookie Policy</h2>
      <p>We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies. <nuxt-link to="/cookie-policy" class="read-more-link">Read More</nuxt-link></p>
      <div class="actions">

        <button @click="acceptCookies" class="btn btn-primary text-white">Accept</button>
      </div>
    </div>
    <div class="modal-overlay"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false
    };
  },
  mounted() {
    this.checkCookieConsent();
  },
  methods: {
    checkCookieConsent() {
      const consent = localStorage.getItem('cookieConsent');
      if (consent !== 'accepted') {
        this.showModal = true;
      }
    },
    acceptCookies() {
      localStorage.setItem('cookieConsent', 'accepted');
      this.showModal = false;
    }
  }
};
</script>

<style scoped>
.cookie-consent-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1001;
  max-width: 600px;
  text-align: center;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
.read-more-link {
  color: var(--primary-color);
  text-decoration: underline;
}

.actions {
  margin-top: 20px;
}
</style>
