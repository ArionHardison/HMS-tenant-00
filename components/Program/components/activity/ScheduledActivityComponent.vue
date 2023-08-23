<template>
  <div class="row">
    <div class="col-12">
      <h3 class="text-center">{{activity.activity.title}}</h3>
      <p>{{activity.activity.description}}</p>
      <div class="row">
        <div class="col-12 text-center">
          <h3>Activity Provider</h3>
        </div>
        <template v-if="activity.activity.user">
          <div class="col-12 d-flex justify-content-center">
            <AppAvatar
                :userInfo="activity.activity.user"
                width="65px"
                height="65px"
                size="24px"
                alt="Avatar"
                imageSizeType="tb"
            />
          </div>
          <div class="col-12 text-center">
            <nuxt-link :to="`/u/${activity.activity.user.username}`" class="user-account-link"><strong>{{activity.activity.user.full_name}}</strong></nuxt-link>
          </div>
          <ul>
            <li>State: {{activity.activity.state}}</li>
            <li>City: {{activity.activity.city}}</li>
            <li>ZIP: {{activity.activity.zip}}</li>
          </ul>
          <div class="col-12">
            <template v-if="activity.finished && !activity.approved">
              <BaseAlert type="success" class="mt-2 mb-2">You marked the activity as finished and are now waiting for approval from the activity provider.</BaseAlert>
            </template>
            <template v-else-if="activity.approved && !activity.finished">
              <BaseAlert type="success" class="mt-2 mb-2">The service provider has marked the activity as finished. Please confirm that the activity was completed."</BaseAlert>
            </template>
            <template v-else-if="activity.approved && activity.finished">
              <BaseAlert type="success" class="mt-2 mb-2">Activity was successfully finished and approved</BaseAlert>
            </template>

            <template v-if="!activity.finished">
              <div class="col-12 mt-2 mt-3 text-center">
                Activity booked to: <b>{{parseFromString(activity.scheduled_to)}}</b><br/>

                <button class="btn btn-success mt-3 mb-3" type="button" @click="setFinished(activity.id)">Set Activity Finished</button>
              </div>
            </template>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import api from "@/mixins/api";
import ProgramAvatar from "@/components/Program/components/ProgramAvatar.vue";
import time from "~/mixins/time";
export default {
  name: "ScheduledActivityComponent",
  components: { ProgramAvatar },
  mixins: [api, time],
  props: {
    activity: {
      type: Object,
      default: ()=>{},
    },
  },
  methods: {
    setFinished(activityId){
      this.$emit("finished", activityId);
    }
  }
};
</script>

<style scoped>
.user-account-link {
  color:#5e72e4;
}
</style>
