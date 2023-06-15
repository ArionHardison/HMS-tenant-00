<template>
    <form v-on:submit.prevent="submitForm" method="post" id="cf-1">
        <div class="form-group form-group-xs">
            <p class="input-group gutter-width-xs no-space">
                <span class="gutter-width">
                    <InputField v-model="form.authorName" name="authorName" type="text" placeholder="Your name and surename here" :lg="true" />
                </span>

                <span class="gutter-width">
                  <InputField v-model="form.authorEmail" name="authorEmail" type="email" placeholder="Your email here" :lg="true"/>
                </span>
            </p>
        </div>

        <div class="form-group form-group-xs">
            <TextareaField v-model="form.authorComment" name="authorComment" placeholder="Your message here"/>
        </div>

        <div class="form-group form-group-xs mb-0">
            <button type="submit" class="btn btn-primary">Send</button>
        </div>

        <transition appear leave-active-class="animated fadeOut">
            <div v-if="callAlert" id="alert" :class="'animated fadeIn alert alert--shadow alert-' + alertClass">
                {{ responseMessage }}
            </div>
        </transition>
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
                warningMessage: 'Fill up the form, please!',
                errorMessage: 'Something go wrong. Try again later!',
                responseMessage: '',
                alertClass: '',
                callAlert: false
            }
        },
        async beforeMount() {
          const container = await  this.get("public/get-client-container/contactUs");
          console.log(container);
          //frontend-cms-field/get-container/contactUs/client
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
               }
            }
        }
    };
</script>
