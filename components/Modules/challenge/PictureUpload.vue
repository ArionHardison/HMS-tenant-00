<template>
  <div class="row">
    <div class="col-12 text-center">
      <div class="mb-2">{{ challengeTask.task_name }}</div>
      <template v-if="isCameraOpen">
        <video
          :ref="`camera-${challengeTask.id}`"
          autoplay
          class="camera-preview"
        ></video>

        <button class="btn btn-primary text-white mb-3" @click="takePhoto">
          Take Photo
        </button>
        <button class="btn btn-primary text-white mb-3" @click="toggleCamera">
          Cancel task
        </button>
      </template>
      <template v-else>
        <template v-if="isPhotoTaken">
          <img :src="takenPhotoSrc" class="img w-100" />
          <button
            class="btn btn-primary text-white mb-3 mt-3"
            @click="finishTask"
          >
            Finish Task
          </button>
        </template>
        <template v-else>
          <button
            :disabled="!challengeTask.isCurrent"
            class="btn btn-primary text-white mb-3"
            @click="toggleCamera"
          >
            Take Photo
          </button>
        </template>
      </template>
    </div>
  </div>
</template>
<script>
import task from "@/components/Modules/challenge/mixins/task";
export default {
  mixins: [task],
  name: "PictureUpload",
  props: {
    challengeTask: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      taskStarted: false,
      isCameraOpen: false,
      isPhotoTaken: false,
      isShotPhoto: false,
      isLoading: false,
      takenPhotoSrc: null,
      takenPhotoFile: null,
      imageSize: {
        width: 1280,
        height: 720,
      },
    };
  },
  methods: {
    finishTask() {
      this.$emit("finish", {
        task: this.challengeTask.result.id,
        taskData: this.takenPhotoFile,
      });
      this.isPhotoTaken = false;
    },
    toggleCamera() {
      if (this.isCameraOpen) {
        this.isCameraOpen = false;
        this.isPhotoTaken = false;
        this.isShotPhoto = false;
        this.stopCameraStream();
      } else {
        this.isCameraOpen = true;
        this.startTask();
        this.createCameraElement();
      }
    },

    createCameraElement() {
      this.isLoading = true;

      const constraints = (window.constraints = {
        audio: false,
        video: {
          width: { ideal: this.imageSize.width },
          height: { ideal: this.imageSize.height },
        },
      });

      navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
        this.isLoading = false;
        this.$refs[`camera-${this.challengeTask.id}`].srcObject = stream;
      });
    },

    stopCameraStream() {
      let tracks =
        this.$refs[`camera-${this.challengeTask.id}`].srcObject.getTracks();
      tracks.forEach((track) => {
        track.stop();
      });
    },

    takePhoto() {
      if (process.client) {
        const canvas = document.createElement("canvas");
        canvas.setAttribute("width", this.imageSize.width);
        canvas.setAttribute("height", this.imageSize.height);
        const context = canvas.getContext("2d");
        context.drawImage(
          this.$refs[`camera-${this.challengeTask.id}`],
          0,
          0,
          this.imageSize.width,
          this.imageSize.height
        );
        this.stopCameraStream();
        this.isCameraOpen = false;
        this.isPhotoTaken = true;
        this.takenPhotoSrc = canvas.toDataURL();
        this.toFile(this.takenPhotoSrc);
      }
    },
    toFile(base64, filename = "image") {
      const arr = base64.split(",");
      const mime = arr[0].match(/:(.*?);/)[1];
      const bstr = atob(arr[1]);
      let n = bstr.length;
      let u8arr = new Uint8Array(n);

      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }

      this.takenPhotoFile = new File([u8arr], filename, { type: mime });
    },

    downloadImage() {
      const download = document.getElementById("downloadPhoto");
      const canvas = document
        .getElementById("photoTaken")
        .toDataURL("image/jpeg")
        .replace("image/jpeg", "image/octet-stream");
      download.setAttribute("href", canvas);
    },
  },
};
</script>

<style scoped>
.camera-preview {
  min-height: 40px;
  width: 100%;
  height: auto;
  background-color: #fff;
}
</style>
