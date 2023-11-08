<template>
  <div class="row">
    <div class="col-12">
      <div class="row">
        <div class="col-12">
          <table class="table table-striped">
            <template v-for="onboardingItem in onboarding">
              <tr class="w-100">
                <th colspan="2">{{onboardingItem.name}}</th>
              </tr>
              <template v-if="onboardingItem.type==='number'">
                <tr>
                  <td colspan="2">
                    <InputField v-model="onboardingSetup[onboardingItem.field_id]" type="number" :name="`onboarding.${onboardingItem.field_id}`" :label="onboardingItem.name"/>
                  </td>
                </tr>
              </template>
              <template v-else-if="onboardingItem.type==='checkbox'">
                <tr>
                  <td colspan="2">
                    <CheckboxField  v-model="onboardingSetup[onboardingItem.field_id]" :name="`onboarding.${onboardingItem.field_id}`"/>
                  </td>
                </tr>
              </template>
              <template v-else>
                <tr>
                  <th>Yes</th>
                  <th>No</th>
                </tr>
                <tr>
                  <td><input type="radio" v-model="onboardingSetup[onboardingItem.field_id]" :name="`onboarding.${onboardingItem.field_id}`" @change="resetError(`onboarding.${onboardingItem.field_id}`)" value="1"/></td>
                  <td><input type="radio" v-model="onboardingSetup[onboardingItem.field_id]" :name="`onboarding.${onboardingItem.field_id}`" @change="resetError(`onboarding.${onboardingItem.field_id}`)" value="0"/></td>
                </tr>
                <template v-if="errorFields.includes(`onboarding.${onboardingItem.field_id}`)">
                  <tr>
                    <td colspan="2">
                      <InvalidFeedback
                        :state="errorFields.includes(`onboarding.${onboardingItem.field_id}`)"
                      >
                        {{ formErrors[`onboarding.${onboardingItem.field_id}`] ? [...formErrors[`onboarding.${onboardingItem.field_id}`]].shift() : "" }}
                      </InvalidFeedback>
                    </td>
                  </tr>
                </template>
              </template>
            </template>
          </table>
        </div>
      </div>
    <div class="col-12 mt-2 mb-2 text-center">
      <button class="btn btn-primary text-white" @click="continueProgram">
        Continue Program
      </button>
    </div>
  </div>
  </div>
</template>
<script>
import api from "~/mixins/api";
import InputField from "@/components/Forms/Fields/InputField.vue";
import InvalidFeedback from "@/components/Forms/Fields/InvalidFeedback.vue";
import CheckboxField from "@/components/Forms/Fields/CheckboxField.vue";
export default {
  name: "OnboardingRound",
  components: {InvalidFeedback, CheckboxField, InputField},
  mixins: [api],
  async created(){
    await this.getStartupOnboarding();
  },
  props: {
    round: {
      type: Number,
      default: 0
    }
  },
  data(){
    return {
      onboarding: null,
      onboardingSetup: {}
    }
  },
  computed: {
    errorFields() {
      return this.$store.state.errorFields;
    },
    formErrors() {
      return this.$store.state.errors;
    },
  },
  methods: {
    resetError(name){
      this.$store.commit("hideError", name);
    },
    async continueProgram(){
      const roundFinished = await this.post(`onboarding/finish-round`, {
        chain_id: this.$route.query.id,
        round_id: this.round,
        onboarding: this.onboardingSetup
      })
      if(roundFinished) {
        this.$emit("continue");
      }
    },
    async getStartupOnboarding(){
      const roundData = await this.get(`onboarding/get-round/${this.$route.query.id}/${this.round}`);
      if(roundData.onboarding){
        this.onboarding = roundData.onboarding
        for(let i in roundData.onboarding){
          this.onboardingSetup[roundData.onboarding[i].field_id] = null;
        }
      }
    }
  }
};
</script>
<style scoped></style>
