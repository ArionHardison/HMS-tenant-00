<template>
  <form v-on:submit.prevent="signIn" method="post" id="sign-in-form" class="comment-form">

    <InputField name="email" v-model="signInForm.email" type="email" label="Email"/>


    <InputField name="password" v-model="signInForm.password" type="password" label="Password"/>
    <div class="col-12 reset-password-link text-center">
      <nuxt-link to="/reset-password" class="reset-password-link mt-2 mb-2">Forgot password?</nuxt-link>
    </div>
    <div class="form-submit text-center mt-3">
      <input name="submit" type="submit" class="btn btn-primary" value="Sign In">
    </div>


  </form>
</template>

<script>
import InputField from "./Fields/InputField";

export default {
  name: "SignInForm",
  components: {InputField},

  data() {
    return {
      signInForm: {
        email: "",
        password: "",
      }
    }
  },
  methods: {
    async signIn() {
      const signIn = await this.post("public/auth/sign-in", this.signInForm);
      if (signIn) {
        this.$store.commit("setAuthData", signIn);
        if(signIn.email_verified_at) {
          await this.$router.push({name: "index"});
        }else{
          await this.$router.push({name: "verification"});
        }
      }
    }
  }
}
</script>

<style scoped>
.reset-password {
  margin: 20px;
}

.reset-password-link {
  font-size: 14px;
  margin-top: 20px;
}

</style>
