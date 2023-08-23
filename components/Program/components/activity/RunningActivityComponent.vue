<template>
  <div class="row">
    <div class="col-12">
      <h3 class="text-center">{{activity.title}}</h3>
      <p>{{activity.description}}</p>
      <div class="row">
          <div class="col-12 text-center">
            <h3>Activity Provider</h3>
          </div>
          <template v-if="activity.user">
            <div class="col-12 d-flex justify-content-center">
            <ProgramAvatar
                :userInfo="activity.user"
                width="65px"
                height="65px"
                size="24px"
                alt="Avatar"
                imageSizeType="tb"
            />
            </div>
            <div class="col-12 text-center">
              <nuxt-link :to="`/u/${activity.user.username}`" class="user-account-link"><strong>{{activity.user.full_name}}</strong></nuxt-link>
            </div>
          </template>
        </div>
      </div>
      <div class="col-12">
        <div class="col-12 text-center">
          Activity request was successfully sent, please wait once {{activity.user.full_name}} will accept and schedule activity!
        </div>
      </div>
    </div>
</template>
<script>
import api from "@/mixins/api";
import ProgramAvatar from "@/components/Program/components/ProgramAvatar.vue";
export default {
  name: "RunningActivityComponent",
  components: {ProgramAvatar},
  mixins: [api],
  props: {
    activity: {
      type: Object,
      default: ()=>{},
    },
  },
};
</script>

<style scoped>
.user-account-link {
  color:#5e72e4;
}
</style>
