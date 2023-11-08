<template>
  <div class="row">
    <div class="col-12">
      <p>
        If you are ready to start program
        <template v-if="onboarding">
          fill onboarding and
        </template>
        click - start program button
      </p>
      <template v-if="onboarding">
        <div class="row">
          <div class="col-12">
            <table class="table table-striped">
              <template v-for="onboardingItem in onboarding.setup">
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
      </template>
      <button class="btn btn-primary text-white" @click="startProgram">
        Start Program
      </button>
    </div>
  </div>
</template>
<script>
import api from "~/mixins/api";
import InputField from "@/components/Forms/Fields/InputField.vue";
import CheckboxField from "@/components/Forms/Fields/CheckboxField.vue";
import InvalidFeedback from "@/components/Forms/Fields/InvalidFeedback.vue";
export default {
  name: "Onboarding",
  components: {InvalidFeedback, CheckboxField, InputField},
  mixins: [api],
  async created(){
    await this.getStartupOnboarding();
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
    startProgram(){
      this.$emit("start", this.onboardingSetup);
    },
    async getStartupOnboarding(){
      const onboarding = await this.get(`onboarding/startup-onboarding/${this.$route.query.id}`);
      if(onboarding.setup){
        this.onboarding = onboarding
        for(let i in onboarding.setup){
          this.onboardingSetup[onboarding.setup[i].field_id] = null;
        }
      }
    }
  }
};
</script>
<style scoped></style>
