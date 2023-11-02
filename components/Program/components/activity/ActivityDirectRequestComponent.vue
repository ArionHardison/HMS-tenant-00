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
             <strong>{{activity.user.full_name}}</strong>
            </div>
          </template>
        </div>
      </div>
      <div class="col-12">
        <ul>
          <li>State: <strong>{{activity.state}}</strong></li>
          <li>City:  <strong>{{activity.city}}</strong></li>
          <li>Address:  <strong>{{activity.address}}</strong></li>
          <li>ZIP:  <strong>{{activity.zip}}</strong></li>
        </ul>
      </div>
      <div class="col-12 text-center mb-4">
        <button class="btn btn-primary text-white" @click="sendActivityRequest(activity.id)">Request Activity</button>
      </div>
    </div>
</template>
<script>
import api from "@/mixins/api";
import ProgramAvatar from "@/components/Program/components/ProgramAvatar.vue";
export default {
  name: "ActivityDirectRequestComponent",
  components: {ProgramAvatar},
  mixins: [api],
  props: {
    activity: {
      type: Object,
      default: ()=>{},
    },
    cActivity: {
      type: Number,
      default: 0
    }
  },
  methods: {
    async sendActivityRequest(activityId){
       const requestSent = await this.post("activity/request", {
          activity_id: activityId,
          task_id: this.$route.params.id ?? null,
          chain_id: this.$route.query.id ?? null,
          creator_activity_id: this.cActivity
       });
       if(requestSent){
         this.$emit("sent");
       }
    }
  }
};
</script>

<style scoped>
.user-account-link {
  color:#5e72e4;
}
</style>
