<template>
  <div class="row">
    <div class="col-12">
      <hr />
      <p type="warning"
        >Important! Challenge contains <b>{{ challenge.tasks_count }}</b> tasks.
        And require
        {{ challengeTypes[challenge.challenge_type] }}
      </p>
      <template v-if="challenge.task_mandatory">
        <p type="warning"
          >Important! This challenge is required, in case if challenge will not
          be finished - it will be <b>failed</b>
        </p>
      </template>
      <template v-if="challenge.time_limited">
        <p type="warning"
          >Important! This challenge is time limited, in case if challenge will
          not be finished in time (<b>{{ challenge.time_limit }} minutes</b>) -
          it will be <b>failed</b>. After start you will not be able to pause
          this challenge.
        </p>
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
