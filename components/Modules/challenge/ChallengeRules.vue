<template>
  <div class="row">
    <div class="col-12 mt-3 mb-3">
      <hr />

      <b-alert variant="warning" show>
        Important! Challenge contains <b>{{ challenge.tasks_count }}</b> tasks.
        And require
        {{ challengeTypes[challenge.challenge_type] }}
      </b-alert>


      <template v-if="challenge.task_mandatory">
        <b-alert variant="warning" show>
          Important! This challenge is required, in case if challenge will not
          be finished - it will be <b>failed</b>
        </b-alert>
      </template>
      <template v-if="challenge.time_limited">
        <b-alert variant="warning" show>
          Important! This challenge is time limited, in case if challenge will
          not be finished in time (<b>{{ challenge.time_limit }} minutes</b>) -
          it will be <b>failed</b>. After start you will not be able to pause
          this challenge.
        </b-alert>
      </template>
      <hr />
    </div>
  </div>
</template>
<script>

export default {
  name: "ChallengeRules",
  props: {
    challenge: {
      type: Object,
      default: () => null,
    },
  },
  data() {
    return {
      challengeTypes: {
        task: "to mark finished tasks",
        video: "to record video, make sure you have web-camera",
        audio: "to record audio, make sure you have microphone",
        picture: "to take a pictures",
        file: "to upload files",
      },
    };
  },
};
</script>

<style scoped></style>
