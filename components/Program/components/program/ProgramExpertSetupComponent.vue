<template>
  <div class="row">
    <div class="col-12">
      <h2>Please choose one of
        <template v-if="currentStep.required_role">
          {{currentStep.required_role.name}}
        </template>
        's</h2>
      <p>
        The selected
        <b>
          <template v-if="currentStep.required_role">
            {{currentStep.required_role.name}}
          </template>
        </b>
        <template v-if="currentStep.required_role">
          <template v-if="currentStep.required_role.tags">
            who professional in
            <b>{{currentStep.required_role.tags.toString()}}</b>
          </template>
        </template>
        will be invited to help
        you with <b>{{currentStep.program_name}}</b>
      </p>
      <div class="card-container">
        <template v-for="user in currentStep.users.doctors">
          <SingleSubjectMatterExpertComponent :user="user" :system="true" :doctor="true" @invite="inviteUser"/>
        </template>
        <template v-for="user in currentStep.users.system">
          <SingleSubjectMatterExpertComponent :user="user" :system="true"  @invite="inviteUser"/>
        </template>
        <template v-for="user in currentStep.users.invite">
          <SingleSubjectMatterExpertComponent :user="user"  @invite="inviteUser"/>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import ProgramAvatar from "@/components/Program/components/ProgramAvatar.vue";
import SingleSubjectMatterExpertComponent from "@/components/Program/components/program/SingleSubjectMatterExpertComponent.vue";
export default {
  name: "ProgramExpertSetupComponent",
  components: {
    ProgramAvatar,
    SingleSubjectMatterExpertComponent
  },
  props: {
    currentStep: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      currentQuestion: 0,
      assessment: null,
    };
  },
  methods: {
    inviteUser(userId, system = false, doctor = false) {
     this.$emit("invite", {
          userId, system, doctor
      });
    },
  },
};
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
