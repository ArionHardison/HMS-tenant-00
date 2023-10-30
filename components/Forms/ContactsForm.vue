<template>
    <form v-on:submit.prevent="submitForm" method="post" id="cf-1">
        <transition name="fade" appear>
          <b-alert :show="callAlert">{{successMessage}}</b-alert>
        </transition>

        <div class="form-group form-group-xs">
            <p class="input-group gutter-width-xs no-space">
                <div class="row">
                  <div class="col-xl-6  col-lg-6 col-md-6 col-12">
                    <InputField v-model="form.authorName" name="authorName" type="text" label="Full name" placeholder="Your name and surename here" :lg="true" />
                  </div>
                  <div class="col-xl-6  col-lg-6 col-md-6 col-12">
                    <InputField v-model="form.authorEmail" name="authorEmail" type="email" label="Email" placeholder="Your email here" :lg="true"/>
                  </div>
                </div>
            </p>
        </div>

        <div class="form-group-xs">
            <TextareaField v-model="form.authorComment" :show-counter="true" :min="20" :max="200" name="authorComment" label="Message text" placeholder="Your comment here"/>
        </div>

        <div class="form-group form-group-xs mb-0">
            <button type="submit" class="btn btn-primary">Send</button>
        </div>
    </form>
</template>

<script>
  import InputField from "@/components/Forms/Fields/InputField.vue";
  import TextareaField from "@/components/Forms/Fields/TextareaField.vue";
    export default {
        name: 'ContactsForm',
        components: {
          InputField,
          TextareaField
        },
        data() {
            return {
                form: {
                  authorName: '',
                  authorEmail: '',
                  authorComment: ''
                },
                successMessage: "Sender's message was sent successfully",
                alertClass: '',
                callAlert: false
            }
        },
      methods: {
            async submitForm() {
               const requestSent = await this.post("public/store-client-container/contactUs", this.form);
               if(requestSent){
                 this.form = {
                   authorName: '',
                   authorEmail: '',
                   authorComment: ''
                 }
                 this.callAlert = true;

                 setTimeout(() => {
                   this.callAlert = false;
                 }, 10000);
               }
            }
        }
    };
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
