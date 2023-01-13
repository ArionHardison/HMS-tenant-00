<style>
.description-list li {
  list-style-type: none;
}

.followup-avatar img {
  width: 50px;
  height: 50px;
  border-radius: 25px;
}

.profile-avatar img {
  width: 100px;
  height: 100px;
  border-radius: 50px;
}

#remoteTrack video {
  width: 100%;
}

#remoteTrack.hide-video video {
  visibility: hidden;
}

#remoteTrack.hide-video {
  background-color: #777777;
}

#remoteTrack {
  height: auto;
  min-height: 125px;
  background-color: #777777;
}

.local-video-muted, .local-audio-muted {
  background-color: #f06060;
  border-radius: 13px;
  width: 26px;
  height: 26px;
  line-height: 26px;
  color: #fff;
}

.local-audio-muted {
  position: absolute;
  z-index: 99;
  left: 5px;
  top: 5px;
}

.local-video-muted {
  position: absolute;
  z-index: 99;
  right: 5px;
  top: 5px;
}

.remote-video-muted, .remote-audio-muted {
  background-color: #f06060;
  border-radius: 25px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  color: #fff;
}

.remote-video-muted {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.remote-audio-muted {
  position: absolute;
  top: 20px;
  left: 40px;
}

#localTrack {
  position: absolute;
  bottom: 40px;
  width: 100px;
  height: 75px;
  overflow: hidden;
  right: 40px;
  background-color: #fff;
  border: 1px solid #918f8f;
  border-radius: 6px;
  padding: 2px;
}


#localTrack video {
  width: 100%;
  border-radius: 6px;
  position: absolute;
  left: 0;
  padding: 3px;
  top: -1px;
}

.call-btn {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 1px solid #777777;
  background-color: #fff;
  color: #777777;
}

.end-call-btn {
  border-radius: 20px;
  background-color: #f06060;
  padding: 8px 25px;
  border: 0;
  color: #fff;
}

.ln-50 {
  line-height: 50px;
}

.muted-video video {
  display: none;
}

.muted-video {
  background-color: #777777 !important;
}

.muted-track {
  background-color: #f06060;
  color: #ffffff;
  border: 0;
}
</style>
<template>
  <div class="call-page w-100">
    <!-- Page Content -->
    <div class="content">
      <div class="container-fluid">
        <!-- Call Wrapper -->
        <div class="row">
          <template v-if="participant">

            <div class="col-3">
              <h3>Timeline</h3>
            </div>
            <div class="col-6  text-left mb-3 mt-3">
              <ImageContent :src="participant.profile_picture" class="followup-avatar" size="sm"/>
              {{ participant.full_name }}
            </div>
            <div class="col-3">
              <h3>Information</h3>
            </div>

          </template>
          <div class="col-3">
            <client-only>
              <TimelineComponent :timeline="timeline"/>
            </client-only>
          </div>
          <div class="col-6">
            <div class="row">
              <div class="col-12">
                <div id="remoteTrack"
                     :class="{'hide-video': remoteVideoMuted}">
                  <div v-if="remoteVideoMuted" class="remote-video-muted">
                    <VideoOffOutline :size="25"/>
                  </div>
                  <div v-if="remoteAudioMuted" class="remote-audio-muted">
                    <MicrophoneOff :size="25"/>
                  </div>
                </div>
                <div id="localTrack" :class="{'muted-video': videoMuted}">
                  <div v-if="videoMuted" class="local-video-muted">
                    <VideoOffOutline :size="13"/>
                  </div>
                  <div v-if="audioMuted" class="local-audio-muted">
                    <MicrophoneOff :size="13"/>
                  </div>
                </div>
              </div>
              <div class="col-12 mt-3">
                <div class="row">
                  <div class="col-4 ln-50 text-left">
                    {{ callDurationMinutes }}:{{
                      callDurationSeconds
                    }}
                  </div>
                  <div class="col-4">
                    <button
                      :class="videoMuted ? 'muted-track' : ''"
                      class="call-btn"
                      data-bs-toggle="tooltip"
                      data-placement="top"
                      title="Enable Video"
                      @click="changeVideoState"
                    >
                      <VideoOutline :size="25"/>
                    </button>

                    <button
                      :class="audioMuted ? 'muted-track' : ''"
                      class="call-btn"
                      data-bs-toggle="tooltip"
                      data-placement="top"
                      title="Mute Audio"
                      @click="changeAudioState"
                    >
                      <MicrophoneOutline :size="25"/>
                    </button>
                  </div>
                  <div class="col-4 mt-2">
                    <button class="end-call-btn float-right" @click="finishFollowUp">
                      <i class="material-icons">END CALL</i>
                    </button>
                  </div>
                </div>


              </div>
            </div>
          </div>


          <div class="col-3 text-center">
            <b-tabs content-class="mt-3">
              <b-tab active title="Profile">
                <template v-if="participant">

                  <ImageContent :src="participant.profile_picture" class="profile-avatar" size="sm"/>

                  <h4 class="mt-2">{{ participant.full_name }}</h4>

                  <span class="small">{{ participant.profession }}</span>

                  <ul class="text-left mt-3 description-list">
                    <li>Username <span class="float-right">@{{ participant.username }}</span></li>
                    <li>Birthday <span class="float-right">{{ participant.birth_date }}</span></li>
                    <li>Email <span class="float-right">{{ participant.email }}</span></li>
                    <li>Phone <span class="float-right">+{{ participant.phone }}</span></li>
                  </ul>

                </template>
              </b-tab>
              <b-tab title="Recommendations"><p>I'm the second tab</p></b-tab>
            </b-tabs>

          </div>
          <!-- /Call Wrapper -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {connect, createLocalVideoTrack} from "twilio-video";
import serverEvents from "@/mixins/serverEvents";
import audioRecorder from "@/mixins/audioRecorder";
import time from "@/mixins/time";
import api from "@/mixins/api";
import VideoOutline from "vue-material-design-icons/VideoOutline.vue";
import VideoOffOutline from "vue-material-design-icons/VideoOffOutline.vue";
import MicrophoneOff from "vue-material-design-icons/MicrophoneOff.vue";
import MicrophoneOutline from "vue-material-design-icons/MicrophoneOutline.vue";
import globalEvents from "@/mixins/globalEvents";
import ImageContent from "@/components/blocks/ImageContent";

export default {
  layout: "VideoCall",
  mixins: [time, serverEvents, audioRecorder, api, globalEvents],
  components: {
    [process.client && "TimelineComponent"]: () =>
      import("@/components/Modules/followup/TimelineComponent"),
    ImageContent,
    VideoOutline,
    VideoOffOutline,
    MicrophoneOutline,
    MicrophoneOff
  },
  data() {
    return {
      participant: null,
      loading: false,
      data: {},
      remoteTrack: "",
      timeline: null,
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
      remoteVideoMuted: false,
      remoteAudioMuted: false,
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
    this.getTimeline();
    this.listenFor("follow-up", (data) => {
      if (data.finished) {
        this.finishFollowUp();
      }
    });
    this.listenFor("finished", (data) => {
      console.log(data);
    });


    if (process.browser) {
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
    if (!this.followUpFinished) {
      await this.finishFollowUp();
    }
  },
  methods: {
    async getTimeline() {
      this.timeline = await this.get(`follow-up/get-timeline/${this.followUp.chain_id}`);
    },
    async finalizeSpeech(speechId) {
      await this.post(
        `follow-up/voice-finalize`,
        {
          speech_id: speechId,
          follow_up_id: this.followUp.id,
        }
      );
    },
    async storeAudio(audio, speechId) {
      await this.post(
        `follow-up/voice-record`, {
          speech_id: speechId,
          voice: audio,
          chain_id: this.followUp.chain_id,
          follow_up_id: this.followUp.id,
        }
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
      return;
      if (process.browser) {
        this.followUpFinished = true;
        await this.stop();
        try {
          this.localTrack.stop();
          this.activeRoom.disconnect();
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
        this.participant = followUp.participant;
        const {connect, createLocalVideoTrack} = require("twilio-video");

        connect(followUp.token, {name: followUp.room}).then(
          async (room) => {
            if (process.browser) {
              this.activeRoom = room;

              const localChatWindow = document.getElementById("localTrack");
              const remoteChatWindow = document.getElementById("remoteTrack");

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
                participant.on("trackDisabled", (publication) => {
                  if (publication.track.kind === "video") {
                    this.remoteVideoMuted = true;
                  } else {
                    this.remoteAudioMuted = true;
                  }
                });
                participant.on("trackEnabled", (publication) => {
                  if (publication.track.kind === "video") {
                    this.remoteVideoMuted = false;
                  } else {
                    this.remoteAudioMuted = false;
                  }
                });

              });

              this.activeRoom.on("participantDisconnected", (participant) => {
                document.querySelector("#remoteTrack audio").remove();
                document.querySelector("#remoteTrack video").remove();
                participant.tracks.forEach((publication) => {
                  if (publication.isSubscribed) {
                    const track = publication.track;
                    track.detach();
                  }
                });
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

