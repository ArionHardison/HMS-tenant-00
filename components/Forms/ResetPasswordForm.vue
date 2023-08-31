<template>
  <div>
    <template v-if="codeSent">
      <div class="col-12 text-center">
        <p class="mt-2 mb-2"> Didn't get the code - click Re-send button.</p>
      <button class="btn btn-primary btn-sm" @click="reSend">Re-send</button>
      </div>
      <form v-on:submit.prevent="setNewPassword" method="post" id="new-password-form" class="comment-form">
        <template v-if="codeSent">
          <InputField name="code" v-model="setPasswordForm.code" :mask="true" mask-data="######" type="password"
                      label="One Time Code"/>

          <InputField name="password" v-model="setPasswordForm.password" type="password" label="New password"/>

        </template>
        <div class="form-submit text-center mt-3">
          <input name="submit" type="submit" class="btn btn-primary" value="Save">
        </div>

      </form>
    </template>
    <template v-else>
      <form v-on:submit.prevent="sendResetLink" method="post" id="reset-form" class="comment-form">
        <InputField name="email" v-model="resetPasswordForm.email" type="email" label="Email"/>

        <div class="form-submit text-center mt-3">
          <button name="submit" type="submit"  class="btn btn-primary">Reset</button>
        </div>
      </form>
    </template>
  </div>
</template>

<script>
import InputField from "./Fields/InputField";

export default {
  name: "ResetPasswordForm",
  components: {InputField},

  data() {
    return {
      codeSent: false,
      resetPasswordForm: {
        email: "",
      },
      setPasswordForm: {
        email: "",
        code: "",
        password: "",
      }
    }
  },
  methods: {
    reSend() {
      this.codeSent = false;
    },
    async sendResetLink() {
      const codeSent = await this.post("public/auth/reset", this.resetPasswordForm);
      if (codeSent) {
        this.codeSent = true;
      }
    },
    async setNewPassword() {
      this.setPasswordForm.email = this.resetPasswordForm.email;
      const passwordChangeData = await this.post("public/auth/new-password", this.setPasswordForm);
      if (passwordChangeData) {
        this.$store.commit("setAuthData", passwordChangeData);
        await this.$router.push("/");
      }
    }
  }
}
</script>

<style scoped>
.invalid-feedback {
  font-size: 14px;
}
</style>
