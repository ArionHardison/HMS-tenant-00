<template>
      <div class="container">
        <template v-if="currentStep">
          <template v-if="currentStep.frozen">
            <ProtocolFrozenMessageComponent :current-step="currentStep"/>
          </template>
          <template v-else-if="currentStep.paused">
              <ProgramPausedComponent/>
          </template>
          <template v-else-if="!currentStep.started_at">
              <ProgramStartComponent :current-step="currentStep" @start="startProgram"/>
          </template>
          <template v-else-if="currentStep.round_id">
            <OnboardingRound :round="currentStep.round_id" @continue="continueProgram"/>
          </template>
          <template v-else>
            <template v-if="currentStep.error">
              <ProgramErrorComponent/>
            </template>
            <template v-else-if="currentStep.wait">
              <ProgramWaitComponent :end-date="currentStep.next_step_in" @continue="triggerProgramChanges"/>
            </template>
            <template v-else>
              <template v-if="currentStep.status === 1">
                <ProgramFinishedComponent :current-step="currentStep"/>
              </template>
              <template v-else-if="currentStep.status === 2">
                <ProgramFailedComponent :current-step="currentStep"/>
              </template>
              <template v-else>
                <template v-if="currentStep.require_setup">
                  <template v-if="currentStep.setup_started === null">
                    <ProgramExpertSetupComponent :current-step="currentStep" @invite="inviteUser"/>
                  </template>
                  <template v-else>
                    <ProgramExpertActiveInviteComponent :current-step="currentStep" @continue="continueProgram"/>
                  </template>
                </template>
                <template v-else-if="currentStep.type === 'module'">
                  <ProgramRunningComponent :current-step="currentStep" @continue="continueProgram"/>
                </template>
              </template>
            </template>
          </template>
        </template>
      </div>
</template>

<script>
import ProgramStartComponent from "@/components/Program/components/program/ProgramStartComponent";
import ProtocolFrozenMessageComponent from "@/components/Program/components/program/ProtocolFrozenMessageComponent";
import ProgramErrorComponent from "@/components/Program/components/program/ProgramErrorComponent";
import ProgramWaitComponent from "@/components/Program/components/program/ProgramWaitComponent";
import ProgramFinishedComponent from "@/components/Program/components/program/ProgramFinishedComponent";
import ProgramFailedComponent from "@/components/Program/components/program/ProgramFailedComponent";
import ProgramExpertSetupComponent from "@/components/Program/components/program/ProgramExpertSetupComponent";
import ProgramExpertActiveInviteComponent from "@/components/Program/components/program/ProgramExpertActiveInviteComponent";
import ProgramRunningComponent from "@/components/Program/components/program/ProgramRunningComponent";
import OnboardingRound from "@/components/Program/components/onboarding/OnboardingRound.vue";
import ProgramPausedComponent from "@/components/Program/components/program/ProgramPausedComponent";
import globalEvents from "@/components/Program/mixins/global-events";
import serverEvents from "@/components/Program/mixins/server-events";
import api from "~/mixins/api";
import time from "@/mixins/time";

export default {
  mixins: [api, globalEvents, time, serverEvents],
  components: {
    ProgramStartComponent,
    ProgramErrorComponent,
    ProgramWaitComponent,
    ProtocolFrozenMessageComponent,
    ProgramFinishedComponent,
    ProgramFailedComponent,
    ProgramExpertSetupComponent,
    ProgramPausedComponent,
    ProgramExpertActiveInviteComponent,
    ProgramRunningComponent,
    OnboardingRound
  },
  data() {
    return {
      currentStep: null,
    };
  },
  beforeDestroy() {
    this.stopListening("personal-chain-new-target");
  },
  created() {
    this.continueProgram();
    this.listenFor("personal-chain-new-target", () => {
      this.continueProgram();
    });
  },
  methods: {
    async startProgram(onboarding) {
      const startedProgram = await this.post(
        `personal-chain/start-program/${this.$route.query.id}`,
        {
          id: this.$route.query.id,
          onboarding: onboarding
        });
      if (startedProgram) {
        this.currentStep = startedProgram;
        this.currentStep.name = this.currentStep.setup_started
          ? this.currentStep.setup_started.invite
            ? this.currentStep.setup_started.invite.name
            : this.currentStep.setup_started.invited_user.full_name
          : null;
        await this.continueProgram();
      }
    },
    async triggerProgramChanges() {
      await this.get(`personal-chain/${this.$route.query.id}`);
    },
    async continueProgram() {
      if (this.$route.query.id) {
        if (this.currentStep && this.currentStep.target) {
          if (
            this.currentStep.user !== this.currentStep.target.id &&
            this.currentStep.user !== this.currentStep.authenticatedUser
          ) {
            return await this.$router.push("/my-tasks");
          }
        }
        this.currentStep = null;
        this.currentStep = await this.get(
          `personal-chain/${this.$route.query.id}`
        );
        this.currentStep.name = this.currentStep.setup_started
          ? this.currentStep.setup_started.invite
            ? this.currentStep.setup_started.invite.name
            : this.currentStep.setup_started.invitedUser.full_name
          : null;
      }
    },
    async inviteUser(inviteData) {
      const invite = await this.post(
        "personal-chain/invite", {
          invite_id: inviteData.system ? null : inviteData.userId,
          user_id: inviteData.system ? inviteData.userId : null,
          personal_chain_id: this.$route.query.id,
          system: inviteData.system,
          doctor: inviteData.doctor
        }
      )
      if (invite) {
        await this.continueProgram();
      }
    },
  },
};
</script>

<style scoped>

</style>
