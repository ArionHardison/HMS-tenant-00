export default {
  computed: {
    requestsRunning() {
      return this.$store.state.api.requestsRunning;
    },
  },
  data() {
    return {
      audioLevelStream: null,
      mediaRecorder: null,
      previousAudio: null,
      firstStorage: true,
      wasStored: false,
      speechId: null,
      stream: null,
      finalized: false,
      finalizeTimeout: null,
      shouldStore: false,
      MediaStreamRecorder: null,
      hark: null
    };
  },
  async mounted(){
    if (process.client) {
      const MediaStreamRecorder = await import("msr");
      const hark = await import("hark");
      this.MediaStreamRecorder = MediaStreamRecorder.default;
      this.hark = hark.default;
    }
  },
  async beforeDestroy() {
    await this.finalizeSpeechOnceAllDataWasSent();
  },
  methods: {
    async start() {
      this.finalized = false;
      navigator.getUserMedia(
        {audio: true},
        this.mediaRecord,
        this.mediaError
      );
    },
    async stop() {
      this.finalized = true;
      await this.mediaRecorder.stop();
      this.stream.getTracks().forEach((track) => {
        track.stop();
      });
    },
    mediaRecord(stream) {
      if (this.audioLevelStream) {
        this.audioLevelStream();
      }
      this.stream = stream;
      this.mediaRecorder = new this.MediaStreamRecorder(this.stream);
      this.mediaRecorder.bufferSize = 0;
      this.mediaRecorder.mimeType = "audio/wav";

      const speechEvents = this.hark(this.stream, {});

      speechEvents.on("speaking", () => {
        this.shouldStore = true;
        this.finalized = false;
      });

      speechEvents.on("stopped_speaking", () => {
        setTimeout(async () => {
          this.shouldStore = false;
        }, 2000);
      });

      this.mediaRecorder.ondataavailable = async (blob) => {
        if (this.shouldStore && !this.finalized) {
          if (this.firstStorage) {
            this.firstStorage = false;
            this.speechId = this.getId();
          }
          await this.storeAudio(blob, this.speechId);
        } else {
          await this.finalizeSpeechOnceAllDataWasSent();
        }

        this.previousAudio = blob;
      };
      this.mediaRecorder.start(3000);
    },
    async finalizeSpeechOnceAllDataWasSent() {
      this.firstStorage = true;
      if (this.requestsRunning) {
        clearTimeout(this.finalizeTimeout);
        this.finalizeTimeout = setTimeout(async () => {
          await this.finalizeSpeechOnceAllDataWasSent();
        }, 300);
      } else {
        if (this.speechId) {
          await this.finalizeSpeech(this.speechId);
          this.speechId = null;
        }
      }
    },
    mediaError(e) {
      console.error("media error", e);
    },
    getId() {
      return Math.random().toString(36).substring(2, 12);
    },
  },
};
