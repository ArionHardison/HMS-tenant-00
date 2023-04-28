<template>
  <form
    @submit.prevent="onSubmit"
    method="post"
    id="sign-up-form"
    class="comment-form"
  >


    <input-field
      name="full_name"
      type="text"
      v-model="registrationForm.full_name"
      label="Full Name"
    />

    <input-field
      name="username"
      type="text"
      v-model="registrationForm.username"
      label="Username"
    />

    <input-field
      name="email"
      type="email"
      v-model="registrationForm.email"
      label="Email"
    />

    <select-field
      name="gender"
      v-model="registrationForm.gender"
      label="Gender"
      :options="genderOptions"
    />

    <input-field
      name="phone"
      type="text"
      v-model="registrationForm.phone"
      :mask="true"
      mask-data="+1-###-###-##-##"
      label="Phone"
    />

    <input-field
      name="password"
      type="password"
      v-model="registrationForm.password"
      label="Password"
    />

    <input-field
      name="password_confirmation"
      type="password"
      v-model="registrationForm.password_confirmation"
      label="Password Confirmation"
    />

    <div class="form-submit text-center mt-3">
      <button type="submit" class="btn btn-primary">Sign Up</button>
    </div>
  </form>
</template>

<script>
import InputField from "./Fields/InputField";
import SelectField from "./Fields/SelectField.vue";
import api from "~/mixins/api";
import cloneDeep from 'lodash.clonedeep';

export default {
  mixins: [api],
  name: "SignUpForm",
  components: {InputField, SelectField},
  computed: {
    invite() {
      return this.$store.state.invite;
    },
  },
  data() {
    return {
      genderOptions: [
        {id: "male", name: "Male"},
        {id: "female", name: "Female"},
        {id: "other", name: "Other"},
      ],
      countryAndPhone: null,
      program: null,
      registrationForm: {
        full_name: "",
        username: "",
        email: "",
        gender: "",
        phone: "",
        password: "",
        password_confirmation: "",
        token: null,
        referral: null,
        invite: null
      },
    };
  },
  mounted() {
    if (this.$route.query.token) {
      this.preloadDataByToken();
    }
    if (this.$route.query.ref) {
      this.registrationForm.referral = this.$route.query.ref;
    }
    if(this.invite){
      this.registrationForm.invite = this.invite;
      this.fillFieldsFromInvite();
    }
  },
  methods: {
    async preloadDataByToken() {
      const baseUserData = await this.get(
        `public/protocol-chain/get-user-by-invite/${this.$route.query.token}`
      );
      this.registrationForm.token = this.$route.query.token;
      for (let k in baseUserData) {
        this.registrationForm[k] = baseUserData[k];
      }
    },
    async fillFieldsFromInvite() {
      const fieldsData = await this.get(`public/auth/invite-data/${this.invite}`);
      this.program = fieldsData.program;
      for (let key in fieldsData) {
        this.registrationForm[key] = fieldsData[key];
      }
    },
    async onSubmit() {
      const registration = cloneDeep(this.registrationForm);
      registration.phone = `+1${registration.phone}`
      const regForm = cloneDeep(this.registrationForm);
      regForm.phone = regForm.phone.replace(/\-/g, "");
      const response = await this.post(
        "public/auth/sign-up",
        regForm
      );
      if (response) {
        if(this.invite){
          this.$store.commit("setInviteId", null);
          this.$store.commit("setAuthData", response);
          await this.$router.push(`/program?id=${this.program}`);
        }else {
          this.$store.commit("setAuthData", response);
          await this.$router.push("/verification")
        }
      }
    },
  },
};
</script>

<style scoped>
.invalid-feedback {
  font-size: 14px;
}
</style>
