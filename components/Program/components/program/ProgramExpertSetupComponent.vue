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
          <div class="card">
            <div class="d-flex aligen-items-center flex-column">
              <ProgramAvatar
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
              @click="inviteUser(user.id, true, true)"
            >
              Invite
            </button>
          </div>
        </template>
        <template v-for="user in currentStep.users.system">
          <div class="card">
            <div class="d-flex aligen-items-center flex-column">
              <ProgramAvatar
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
            <ProgramAvatar
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
    </div>
  </div>
</template>

<script>
import ProgramAvatar from "@/components/Program/components/ProgramAvatar.vue";

export default {
  name: "ProgramExpertSetupComponent",
  components: {ProgramAvatar},
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
    inviteUser(userId) {
      this.$emit("invite", userId);
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
