<template>
  <div class="col-12">
    <div class="card p-3">
      <h6>{{ activityRequest.name }}</h6>
      <p>{{ activityRequest.description }}</p>

        <ul>
          <li>State: {{activityRequest.state}}</li>
          <li>City: {{activityRequest.city}}</li>
          <li>ZIP: {{activityRequest.zip}}</li>
          <li>Request from: <nuxt-link :to="`/u/${activityRequest.username}`" target="_blank">{{activityRequest.full_name}}</nuxt-link></li>
          <li>Program: {{activityRequest.program}}</li>
        </ul>
      <span class="text-right d-inline-block mt-2 time-desc">{{
          parseToUSAFromat(activityRequest.created_at)
        }}</span>
            <nuxt-link
                class="btn btn-success"
                :to="`/activities/booking/${activityRequest.id}`"
            >
              Start Booking
            </nuxt-link>
    </div>
  </div>
</template>
<script>
import mainTenantApi from "@/mixins/codify-solutions-api";
import time from "~/mixins/time";
export default {
  mixins: [mainTenantApi, time],
  scrollToTop: true,
  props: {
    activityRequest: {
      type: Object,
      default: ()=>{}
    }
  },
};
</script>
