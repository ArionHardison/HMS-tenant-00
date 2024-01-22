<template>
  <div class="row">
    <div class="col-12">
      <template v-if="testimonial!==null">
        <template v-if="!testimonial.id">
          <form v-on:submit.prevent="sendTestimonial" method="post" id="sign-in-form" class="comment-form">
            <TextareaField show-counter :min="1" :max="200" v-model="testimonialForm.testimonial" autosize label="We will be grateful for your feedback on the completed program"/>

            <div class="form-submit text-center mt-3">
              <input name="submit" type="submit" class="btn btn-primary" value="Send">
            </div>
          </form>
        </template>
        <template v-else>
          <h6 class="mt-3">Thank you, your testimonial was sent</h6>
          <p class="testimonial-in-program">
          {{testimonial.testimonial}}
          </p>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
import api from "@/mixins/api";
import TextareaField from "../../Forms/Fields/TextareaField.vue";
export default {
  components: {
    TextareaField
  },
  name: "Testimonial",
  mixins: [api],
  props: {
    program: {
      type: Number,
      default: 0,
    }
  },
  data(){
    return {
      testimonialForm: {
        program_id: this.program,
        protocol_personal_chain: this.$route.query.id,
        testimonial: ""
      },
      testimonial: null
    }
  },
 async  created() {
    this.testimonial = await this.get(`testimonials/get/${this.program}`);
  },
  methods: {
    async sendTestimonial(){
     const sentTestimonial = await this.post("testimonials/store", this.testimonialForm);
     if(sentTestimonial){
       this.testimonial = sentTestimonial;
     }
    }
  }
}
</script>

