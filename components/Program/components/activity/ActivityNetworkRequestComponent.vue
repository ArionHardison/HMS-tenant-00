<template>
  <div class="row">
    <div class="col-12">
        <template v-for="activity in activities.data">
            <ActivityDirectRequestComponent :activity="activity" :c-activity="cActivity" @sent="requestSent"/>
            <hr/>
        </template>
    </div>
  </div>
</template>
<script>
import api from "@/mixins/api";
import ActivityDirectRequestComponent from "~/components/Program/components/activity/ActivityDirectRequestComponent";
export default {
  name: "ActivityNetworkRequestComponent",
  components: {ActivityDirectRequestComponent},
  mixins: [api],
  props: {
    activities: {
      type: Object,
      default: ()=>{},
    },
    cActivity: {
      type: Number,
      default: 0
    }
  },
  methods: {
    requestSent(){
      this.$emit("sent");
    }
  }
};
</script>

<style scoped>
.user-account-link {
  color:#5e72e4;
}
</style>
