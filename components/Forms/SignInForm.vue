<template>
    <form v-on:submit.prevent="signIn" method="post" id="sign-in-form" class="comment-form">

        <InputField name="email" v-model="signInForm.email" type="email" label="Email"/>


        <InputField name="password" v-model="signInForm.password" type="password" label="Password"/>

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

    data(){
        return {
            signInForm: {
                email:"",
                password: "",
            }
        }
    },
    methods: {
        async signIn(){
            const signIn = await this.post("public/auth/sign-in", this.signInForm);
            if(signIn){
                 this.$store.commit("setAuthData", signIn);
                 await  this.$router.push({name: "index"});
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
