<template>
  <div class="call-page w-100">
    <!-- Page Content -->
    <div class="content">
      <div class="container-fluid">
        <!-- Call Wrapper -->
        <div class="call-wrapper">
          <div class="call-main-row">
            <div class="call-main-wrapper">
              <div class="call-view">
                <div class="call-window">
                  <!-- Call Contents -->
                  <div class="call-contents">
                    <div class="call-content-wrap">
                      <div class="user-video" id="remoteTrack"></div>
                      <div class="my-video" id="localTrack"></div>
                    </div>
                  </div>
                  <!-- Call Contents -->
                  <div class="call-footer">
                    <div class="call-icons">
                      <span class="call-duration"
                        >{{ callDurationMinutes }}:{{
                          callDurationSeconds
                        }}</span
                      >
                      <ul class="call-items">
                        <li class="call-item">
                          <a
                            :class="videoMuted ? 'muted-track' : ''"
                            title="Enable Video"
                            data-placement="top"
                            @click="changeVideoState"
                            data-bs-toggle="tooltip"
                          >
                            <VideoOutline :size="16" />
                          </a>
                        </li>
                        <li class="call-item">
                          <a
                            :class="audioMuted ? 'muted-track' : ''"
                            title="Mute Audio"
                            data-placement="top"
                            @click="changeAudioState"
                            data-bs-toggle="tooltip"
                          >
                            <MicrophoneOutline :size="16" />
                          </a>
                        </li>
                      </ul>
                      <div class="end-call">
                        <button @click="finishFollowUp">
                          <i class="material-icons">call_end</i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <!-- /Call Footer -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Call Wrapper -->
      </div>
    </div>
  </div>
</template>
<script>
import { connect, createLocalVideoTrack } from "twilio-video";
import serverEvents from "@/mixins/serverEvents";
import audioRecorder from "@/mixins/audioRecorder";
import time from "@/mixins/time";
import api from "@/mixins/api";
import VideoOutline from "vue-material-design-icons/VideoOutline.vue";
import MicrophoneOutline from "vue-material-design-icons/MicrophoneOutline.vue";
import { serialize } from "object-to-formdata";
import globalEvents from "@/mixins/globalEvents";

export default {
  layout: "VideoCall",
  mixins: [time, serverEvents, audioRecorder, api, globalEvents],
  components: {
    VideoOutline,
    MicrophoneOutline,
  },
  data() {
    return {
      loading: false,
      data: {},
      remoteTrack: "",
      activeRoom: "",
      previewTracks: "",
      identity: "",
      roomName: null,
      callDuration: 0,
      callDurationMinutes: 0,
      callDurationSeconds: 0,
      durationInteval: null,
      audioMuted: false,
      videoMuted: false,
      localTrack: null,
      followUpFinished: false,
      multipartFormData: true,
    };
  },
  props: {
    followUp: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    this.listenFor("follow-up", (data) => {
      if (data.finished) {
        this.finishFollowUp();
      }
    });
    if (process.browser) {
      this.listen(
        `followup.${this.followUp.id}.${this.followUp.author_id}`,
        "finished",
        () => {
          this.finishFollowUp();
        }
      );

      this.connectToTwilio();
      this.start();
      const duration = Math.max(
        this.parse(this.followUp.schedule.schedule_end)
          .diff(this.now())
          .toObject().milliseconds,
        0
      );
      this.callDuration = duration / 1000;
      this.durationInteval = setInterval(async () => {
        this.callDuration--;
        this.callDurationSeconds =
          this.callDuration % 60 < 10
            ? `0${Math.floor(this.callDuration % 60)}`
            : Math.floor(this.callDuration % 60);
        let minutesDuration = Math.floor(this.callDuration / 60);
        this.callDurationMinutes =
          minutesDuration < 10 ? `0${minutesDuration}` : minutesDuration;
        if (this.callDuration <= 0) {
          await this.finishFollowUp();
        }
      }, 1000);
    }
  },
  async beforeDestroy() {
    clearInterval(this.durationInteval);
    this.$store.commit("api/SET_LOADER_STATE", true);
    if (!this.followUpFinished) {
      await this.finishFollowUp();
    }
  },
  methods: {
    async finalizeSpeech(speechId) {
      await this.post(
        `follow-up/voice-finalize`,
        serialize(
          {
            speech_id: speechId,
            follow_up_id: this.followUp.id,
          },
          {
            booleansAsIntegers: true,
            indices: true,
            nullsAsUndefineds: true,
          }
        )
      );
    },
    async storeAudio(audio, speechId) {
      await this.post(
        `follow-up/voice-record`,
        serialize(
          {
            speech_id: speechId,
            voice: audio,
            chain_id: this.followUp.chain_id,
            follow_up_id: this.followUp.id,
          },
          {
            booleansAsIntegers: true,
            indices: true,
            nullsAsUndefineds: true,
          }
        )
      );
    },
    changeVideoState() {
      this.videoMuted = !this.videoMuted;
      this.activeRoom.localParticipant.videoTracks.forEach((publication) => {
        if (this.videoMuted) {
          publication.track.disable();
        } else {
          publication.track.enable();
        }
      });
    },
    changeAudioState() {
      this.audioMuted = !this.audioMuted;
      this.activeRoom.localParticipant.audioTracks.forEach((publication) => {
        if (this.audioMuted) {
          publication.track.disable();
          this.stop();
        } else {
          publication.track.enable();
          this.start();
        }
      });
    },
    async finishFollowUp() {
      if (process.browser) {
        this.followUpFinished = true;
        await this.stop();
        try {
          this.localTrack.stop();
          this.activeRoom.disconnect();
          const localChatWindow = document.getElementById("localTrack");
          localChatWindow.innerHTML = "";
        } catch (e) {
          console.log(e);
        }
        await this.get(`follow-up/finish/${this.followUp.id}`);
        this.$emit("followUpFinished");
      }
    },
    async connectToTwilio() {
      {
        const followUp = await this.get(
          `follow-up/get-data/${this.followUp.chain_id}`
        );

        const { connect, createLocalVideoTrack } = require("twilio-video");

        connect(followUp.token, { name: followUp.room }).then(
          async (room) => {
            if (process.browser) {
              this.activeRoom = room;

              const localChatWindow = document.getElementById("localTrack");
              const remoteChatWindow = document.getElementById("remoteTrack");
              localChatWindow.innerHTML = "";
              remoteChatWindow.innerHTML = "";

              this.localTrack = await createLocalVideoTrack();
              localChatWindow.appendChild(this.localTrack.attach());

              this.activeRoom.participants.forEach((participant) => {
                participant.tracks.forEach((publication) => {
                  if (publication.isSubscribed) {
                    const track = publication.track;
                    remoteChatWindow.appendChild(track.attach());
                  }
                });
                participant.on("trackSubscribed", (track) => {
                  remoteChatWindow.appendChild(track.attach());
                });
              });

              this.activeRoom.on("participantDisconnected", (participant) => {
                participant.tracks.forEach((publication) => {
                  if (publication.isSubscribed) {
                    const track = publication.track;
                    track.detach();
                  }
                });
                remoteChatWindow.innerHTML = "";
              });

              this.activeRoom.on("participantConnected", (participant) => {
                participant.tracks.forEach((publication) => {
                  if (publication.isSubscribed) {
                    const track = publication.track;
                    remoteChatWindow.appendChild(track.attach());
                  }
                });
                participant.on("trackSubscribed", (track) => {
                  remoteChatWindow.appendChild(track.attach());
                });
              });
            }
          },
          (error) => {
            console.error(`Unable to connect to Room: ${error.message}`);
          }
        );
      }
    },
  },
};
</script>
<style>
.muted-track {
  background-color: red;
}
.muted-track i {
  color: #ffffff;
}
#remoteTrack video {
  width: 100% !important;
}
#localTrack video {
  width: 200px !important;
}
</style>
<style scoped>
ul {
  padding-left: 2rem;
}
ul {
  margin-top: 0;
  margin-bottom: 1rem;
}
a {
  color: #0d6efd;
  text-decoration: underline;
}
a:hover {
  color: #0a58ca;
}
img,
svg {
  vertical-align: middle;
}
::-moz-focus-inner {
  padding: 0;
  border-style: none;
}
@media (prefers-reduced-motion: reduce) {
  .nav-link {
    transition: none;
  }
}
li:before {
  content: none;
}
.container-fluid {
  padding-left: 30px;
  padding-right: 30px;
}
.content {
  min-height: 200px;
  padding: 30px 0 0;
}
.call-main-row {
  bottom: 0;
  left: 0;
  overflow: auto;
  padding-bottom: inherit;
  padding-top: inherit;
  position: absolute;
  right: 0;
  top: 0;
}
.call-main-wrapper {
  display: table;
  height: 100%;
  table-layout: fixed;
  width: 100%;
}
.call-view {
  display: table-cell;
  height: 100%;
  float: none;
  padding: 0;
  position: static;
  vertical-align: top;
  width: 75%;
}
.call-window {
  display: table;
  height: 100%;
  table-layout: fixed;
  width: 100%;
  background-color: #fff;
  border: 1px solid #f0f0f0;
}
.fixed-header .user-info a {
  color: #272b41;
  font-weight: 500;
}
.custom-menu.nav > li > a {
  color: #bbb;
  font-size: 26px;
  line-height: 32px;
  margin-left: 15px;
  padding: 0;
}
.call-contents {
  display: table-row;
  height: 100%;
}
.call-content-wrap {
  height: 100%;
  position: relative;
  width: 100%;
}
.call-duration {
  display: inline-block;
  font-size: 30px;
  margin-top: 4px;
  position: absolute;
  left: 0;
}
.call-footer {
  background-color: #fff;
  border-top: 1px solid #f0f0f0;
  padding: 15px;
}
.call-icons {
  text-align: center;
  position: relative;
}
.call-icons .call-items {
  border-radius: 5px;
  padding: 0;
  margin: 0;
  list-style: none;
  display: inline-block;
}
.call-icons .call-items .call-item {
  display: inline-block;
  text-align: center;
  margin-right: 5px;
}
.call-icons .call-items .call-item:last-child {
  margin-right: 0;
}
.call-icons .call-items .call-item a {
  color: #777;
  border: 1px solid #ddd;
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 50px;
  display: inline-block;
  font-size: 20px;
}
.call-icons .call-items .call-item a i {
  width: 18px;
  height: 18px;
}
.user-video {
  bottom: 0;
  left: 0;
  overflow: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
}
.user-video img {
  width: auto;
  max-width: 100%;
  height: auto;
  max-height: 100%;
  display: block;
  margin: 0 auto;
}
.my-video {
  position: absolute;
  z-index: 99;
  bottom: 20px;
  right: 20px;
}
.my-video ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.my-video ul li {
  float: left;
  width: 120px;
  margin-right: 10px;
}
.my-video ul li img {
  border: 3px solid #fff;
  border-radius: 6px;
}
.end-call {
  position: absolute;
  top: 7px;
  right: 0;
}
.end-call button {
  background-color: #f06060;
  border-radius: 50px;
  color: #fff;
  display: inline-block;
  line-height: 10px;
  padding: 8px 25px;
  text-transform: uppercase;
  border: none;
}
.call-wrapper {
  position: relative;
  height: calc(100vh - 145px);
}
@media only screen and (max-width: 1199px) {
  .container-fluid {
    padding-left: 20px;
    padding-right: 20px;
  }
}
@media only screen and (max-width: 991.98px) {
  .call-wrapper {
    height: calc(100vh - 140px);
  }
}
@media only screen and (max-width: 767.98px) {
  body {
    font-size: 0.875rem;
  }
  .content {
    padding: 15px 0 0;
  }
  .container-fluid {
    padding-left: 15px;
    padding-right: 15px;
  }
  .my-video ul li {
    width: 50px;
  }
  .call-duration {
    font-size: 24px;
  }
  .call-wrapper {
    height: calc(100vh - 115px);
  }
}
@media only screen and (max-width: 575.98px) {
  body {
    font-size: 0.8125rem;
  }
  .call-duration {
    display: block;
    margin-top: 0;
    margin-bottom: 10px;
    position: inherit;
  }
  .end-call {
    margin-top: 10px;
    position: inherit;
  }
}
</style>
