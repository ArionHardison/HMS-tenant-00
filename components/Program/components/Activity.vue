<template>
  <div class="row">
    <div class="col-12">
      <h2>Activity</h2>
      <template v-if="Object.keys(runningActivity).length">
          <template v-if="runningActivity.scheduled">
            <ScheduledActivityComponent :activity="runningActivity" @finished="setFinished"/>
          </template>
          <template v-else>
            <RunningActivityComponent :activity="runningActivity.activity"/>
          </template>
      </template>
      <template v-else>
        <template v-if="currentActivityData.data">
          <ActivityNetworkRequestComponent :activities="currentActivityData" @switch="getActivities" :c-activity="this.item" @sent="getRunningActivity"/>
        </template>
        <template v-else>
          <ActivityDirectRequestComponent :activity="currentActivityData" :c-activity="this.item" @sent="getRunningActivity"/>
        </template>
      </template>
    </div>
  </div>
</template>
<script>
import api from "@/mixins/api";
import serverEvents from "@/components/Program/mixins/server-events";
import globalEvents from "@/components/Program/mixins/global-events";
import ActivityDirectRequestComponent from "~/components/Program/components/activity/ActivityDirectRequestComponent";
import ActivityNetworkRequestComponent from "~/components/Program/components/activity/ActivityNetworkRequestComponent.vue";
import RunningActivityComponent from "~/components/Program/components/activity/RunningActivityComponent.vue";
import ScheduledActivityComponent from "~/components/Program/components/activity/ScheduledActivityComponent.vue";
export default {
  name: "Activity",
  components: {
    ScheduledActivityComponent,
    RunningActivityComponent, ActivityNetworkRequestComponent, ActivityDirectRequestComponent},
  mixins: [api, serverEvents, globalEvents],
  props: {
    item: {
      type: Number,
      default: 0,
    },
  },
  data(){
    return {
      currentActivityData: {},
      runningActivity: {}
    }
  },
  beforeDestroy() {
    this.stopListening("activity-request");
  },
  created(){
    this.getRunningActivity();

    this.listenFor("activity-request", () => {
      console.log("REQUEST Updated")
        this.getRunningActivity();
    });
  },
  methods: {
    async setFinished(activityId){
        const finished = await this.post(`activity/finished/${activityId}`, {finished: true});
        if(finished){
         await this.getRunningActivity();
          this.$emit("continueProgram");
        }
    },
    async getRunningActivity(){
      const runningActivity = await this.post('activity/running', {
        task_id: this.$route.params.id ?? null,
        chain_id: this.$route.query.id ?? null,
        creator_activity_id: this.item
      });
      if(!Object.keys(runningActivity).length){
        await this.getActivities();
      }else{
        this.runningActivity = runningActivity;
      }
    },
    async getActivities(page=1){
      this.currentActivityData = await this.get(`activity/get-providers/${this.item}?page=${page}`);
    }
  }
};
</script>

<style scoped></style>
