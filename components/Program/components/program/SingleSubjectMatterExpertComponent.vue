<template>
  <div class="card mt-4">
    <ProgramAvatar
      :userInfo="{
                        ...user,
                        username: '',
                        full_name: user.name ? user.name : user.full_name,
                      }"
      alt="Avatar"
      height="60px"
      imageSizeType="tb"
      width="60px"
    />
    <h5 class="mb-0 font-montserrat" data-v-ab34384e="">
      <div class="active nuxt-link-active">
        {{ user.name ? user.name : user.full_name}}
      </div>
    </h5>
    {{ user.state }} {{ user.city }}
    <button class="invite-btn" @click="$emit('invite', user.id, system, doctor)">
      Invite
    </button>
  </div>
</template>

<script>

import ProgramAvatar from "@/components/Program/components/ProgramAvatar.vue";

export default {
  name: "SingleSubjectMatterExpertComponent",
  components: {ProgramAvatar},
  props: {
    user: {
      type: Object,
      default: {}
    },
    system: {
      type: Boolean,
      default: false,
    },
    doctor: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      currentQuestion: 0,
      assessment: null,
    };
  },
  methods: {

  },
};
</script>

<style scoped>
.card {
  padding: 1.5rem;
  border-radius: 50%;
  background-color: #fff !important;
  border: 1px solid var(--primary-color) !important;
  width: 250px;
  height: 250px;
  align-items: center;
  justify-content: space-evenly;
}

.invite-btn {
  background-color: var(--primary-color);
  border:none;
  color: white;
  padding: 5px 25px;
  margin-top: 10px;
  border-radius: 15px;
}
</style>
