<template>
  <div :style="{ '--primary-color': primaryColor }" class="maintenance-page">
    <div class="maintenance-content">
      <img class="animated zoomIn maintenance-logo" :src="logo" alt="Logo"><br/>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3  col-md-6 offset-md-3 col-12 offset-0">

            <p class="mt-2 mb-2">Check your email one time code should be there, put code into field below, code expires
                                 in 60 minutes. Didn't get
                                 the code - click Re send button.

            </p>
            <template v-if="!mailWasSent">
              <p class="mt-2 mb-2"> Didn't get the code - click Re send button.</p>
              <button type="submit" class="btn btn-primary btn-sm mt-3" @click="reSend">Re send</button>
            </template>
            <input-field name="code" v-model="verification.code" :mask="true" mask-data="######" label="One time code"/>
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary mt-3" @click="verifyAccount">Verify account</button>
      <button type="submit" class="btn btn-primary mt-3" @click="signOut">Sign Out</button>
    </div>
  </div>
</template>

<script>
import api from "@/mixins/api";
import InputField from "../../components/Forms/Fields/InputField";

export default {
  components: {InputField},
  mixins: [api],
  name: "verification",
  layout: "verification",
  data() {
    return {
      mailWasSent: false,
      verification: {
        code: "",
      }
    }
  },
  methods: {
    async reSend() {
      const codeSent = await this.get("code/send-new");
      if (codeSent) {
        this.mailWasSent = true;
        setTimeout(() => {
          this.mailWasSent = false;
        }, 60000)
      }
    },
      async signOut() {
        this.$store.commit("signOut");
        await this.get(`public/auth/sign-out`);
        this.$router.push("/");
      },
    async verifyAccount() {
      const accountVerified = await this.post("code/verify", this.verification);
      if (accountVerified) {
        this.$store.commit("setAccountVerified", accountVerified.email_verified_at);
        this.$router.push("/");
      }
    }
  }
}
</script>
<style scoped>
.maintenance-logo {
  max-width: 200px;
}

.maintenance-content {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  text-align: center;
  height: 200px;
}
</style>
