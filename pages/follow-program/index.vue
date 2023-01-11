<template>
  <div id="index">


    <Header logoColor="light"/>
    <main id="main" class="site-main">
      <template v-if="currentStep">

        <template v-if="currentStep.error">

          Sorry but you can't continue or use this program due to protocol. To
          fix this a soon as possible please write message to program author
          {{ currentStep.author.full_name }}
          {{ currentStep.author.profile_picture }}

          <button class="btn btn-success">
            Write message ({{ currentStep.author.username }})
          </button>
        </template>
        <template v-else-if="currentStep.wait">

          <h1 class="text-center mt-3 mb-3">Next step will be available soon</h1>
          <CountDown
            :end-date="currentStep.next_step_in"
            class="mt-4"
            @timerStopped="triggerProgramChanges"
          />
        </template>
        <template v-else>
          <template v-if="currentStep.status === 1">
            <template v-if="currentStep.is_attached">

              Congratulations! Daily task for program was successfully finished!

              <nuxt-link :to="`/follow-program?id=${currentStep.is_attached_to}`"
              >Back to Main Program
              </nuxt-link
              >
            </template>
            <template v-else>

              Congratulations! Program was successfully finished!

              <nuxt-link to="/account">Back to My Account</nuxt-link>
            </template>
          </template>
          <template v-else-if="currentStep.status === 2">

            Program was failed! Sorry but current program was failed, you should
            start this program again!

            <nuxt-link to="/shop">To Shop</nuxt-link>
          </template>
          <template v-else>
            <template v-if="currentStep.require_setup">
              <template v-if="currentStep.setup_started === null">
                <h2>Please choose one of {{ currentStep.role }}'s</h2>
                <p>
                  The selected {{ currentStep.role }} will be invited to help you
                </p>
                <div class="card-container">

                  <template v-for="user in currentStep.users.system">
                    <div class="card">
                      <div class="d-flex aligen-items-center flex-column">
                        <AppAvatar
                          :userInfo="user"
                          alt="Avatar"
                          height="60px"
                          imageSizeType="tb"
                          width="60px"
                        />
                        <h5 class="mb-0 font-montserrat" data-v-ab34384e="">
                          <nuxt-link
                            :to="`/${user.username}`"
                            class="active nuxt-link-active"
                          >
                            {{ user.full_name }}
                          </nuxt-link>
                        </h5>
                      </div>
                      <div>{{ user.state }} {{ user.city }}</div>
                      <button
                        class="invite-btn"
                        @click="inviteUser(user.id, true)"
                      >
                        Invite
                      </button>
                    </div>
                  </template>
                  <template v-for="user in currentStep.users.invite">
                    <div class="card">
                      <AppAvatar
                        :userInfo="{
                        ...user,
                        username: '',
                        full_name: user.name,
                      }"
                        alt="Avatar"
                        height="60px"
                        imageSizeType="tb"
                        width="60px"
                      />
                      <h5 class="mb-0 font-montserrat" data-v-ab34384e="">
                        <div class="active nuxt-link-active">
                          {{ user.name }}
                        </div>
                      </h5>
                      {{ user.state }} {{ user.city }}
                      <button class="invite-btn" @click="inviteUser(user.id)">
                        Invite
                      </button>
                    </div>
                  </template>
                </div>
              </template>
              <template v-else>
                <h2>
                  {{ currentStep.invited }}
                </h2>

                Module Can't be used! Congratulations! You invited
                {{ currentStep.name }}
                to be your personal {{ currentStep.setup_started.role.name }}!
                {{ currentStep.name }}
                has 1 hour to accept your invite, in case if
                {{ currentStep.name }}
                will not accept it, you should choose someone else!

                <h2 class="mt-4 text-center">Time left to accept</h2>
                <CountDown
                  :end-date="currentStep.setup_started.endTime"
                  class="mt-4"
                  @timerStopped="continueProgram"
                />
              </template>
            </template>
            <template v-else-if="currentStep.type === 'module'">
              <client-only>
                <component
                  :is="currentStep.module"
                  :item="
                  currentStep.module_item_id
                    ? currentStep.module_item_id
                    : currentStep.target
                "
                  :resource="currentStep.module"
                  @continueProgram="continueProgram"
                ></component>
              </client-only>
            </template>
          </template>
        </template>
      </template>
    </main>
  </div>
</template>

<script>
import Assessment from "~/components/Modules/Assessment";
import FollowUp from "~/components/Modules/FollowUp";
import Wait from "~/components/Modules/Wait";

import globalEvents from "@/mixins/globalEvents";
import api from "~/mixins/api";
import CountDown from "@/components/Modules/followup/CountDown";
import {serialize} from "object-to-formdata";
import AppAvatar from "~/components/ui/app-avatar.vue";
import Header from "@/components/blocks/header/Header";


export default {
  mixins: [api, globalEvents],
  components: {
    Header,
    CountDown,
    Assessment,
    FollowUp,
    Wait,
    AppAvatar,
  },
  metaInfo: {
    title: "Follow Program",
    titleTemplate: "%s",
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
            : this.currentStep.setup_started.invited_user.full_name
          : null;
      }
    },
    async inviteUser(userId, system = false) {
      console.log("INVITE : " + userId);
      console.log(serialize(
        {
          invite_id: system ? null : userId,
          user_id: system ? userId : null,
          personal_chain_id: this.$route.query.id,
          system,
        },
        {
          booleansAsIntegers: true,
          indices: true,
          nullsAsUndefineds: true,
        }
      ));
      const invite = await this.post(
        "personal-chain/invite",
        {
          invite_id: system ? null : userId,
          user_id: system ? userId : null,
          personal_chain_id: this.$route.query.id,
          system,
        }
      )
      if (invite) {
        await this.continueProgram();
      }
    },
    formatingData() {
    },
  },
};
</script>

<style scoped>
.card {
  padding: 1.5rem;
  border-radius: 50%;
  background-color: #fff !important;
  border: 1px solid rgba(111, 111, 111, 0.125) !important;
  width: 250px;
  height: 250px;
  align-items: center;
  justify-content: space-evenly;
}

.invite-btn {
  background-color: #1a2853;
  color: white;
  padding: 5px 25px;
  margin-top: 10px;
  border-radius: 15px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.aligen-items-center {
  align-items: center;
}
</style>
