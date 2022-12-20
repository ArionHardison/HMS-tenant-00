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
import PhoneField from "./Fields/PhoneField.vue";
import { serialize } from "object-to-formdata";
import api from "~/mixins/api";
export default {
  mixins: [api],
  name: "SignUpForm",
  components: { InputField, SelectField, PhoneField },
  data() {
    return {
      genderOptions: [
        { id: "male", name: "Male" },
        { id: "female", name: "Female" },
        { id: "other", name: "Other" },
      ],
      countryAndPhone: null,
      registrationForm: {
        full_name: "",
        username: "",
        email: "",
        gender: "",
        phone: "",
        password: "",
        password_confirmation: "",
        country_id: null,
        token: null,
        referral: null,
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
    setPhoneAndCountry(data) {
      this.registrationForm.phone = data.phone;
      this.registrationForm.country_id = data.country;
    },
    async onSubmit() {
      const response = await this.post(
        "public/auth/sign-up",
        this.registrationForm
      );
      if (response) {
        await this.$router.push({ name: "sign-in" });
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
