<template>
  <div :style="{ '--primary-color': primaryColor }" class="maintenance-page">
    <div class="maintenance-content w-100">
      <img class="animated zoomIn maintenance-logo" :src="logo" alt="Logo"><br/>
        <div class="container w-100">
          <div class="row">
            <div class="col-lg-6 offset-lg-3  col-md-6 offset-md-3 col-12 offset-0">

              <p class="mt-2 mb-2">Check your email one time code should be there, put code into field below, code expires
                                   in 60 minutes.

              </p>
              <template v-if="!mailWasSent">
                <p class="mt-2 mb-2"> Didn't get the code - click Re-send button.</p>
                <button type="submit" class="btn btn-primary btn-sm mt-3" @click="reSend">Re-send</button>
              </template>
              <input-field name="code" type="password" v-model="verification.code" :mask="true" mask-data="######" label="One time code"/>
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
import seoTitles from "@/mixins/seo-titles";
export default {
  components: {InputField},
  mixins: [api, seoTitles],
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
.container {
  position: relative;
}

.maintenance-content {
  text-align: center;
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>
