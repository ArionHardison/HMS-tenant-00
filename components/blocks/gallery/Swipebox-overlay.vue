<template>
  <fragment>
    <transition
      @enter="startTransitionOverlay"
      @after-enter="endTransitionOverlay"
      @before-leave="endTransitionOverlayLeave"
      @after-leave="startTransitionOverlayLeave"
    >
      <div v-show="showSwipeBox" id="swipebox-overlay" ref="overlay">
        <div id="swipebox-container">
          <div id="swipebox-slider" :style="transformStyle">
            <div
              v-for="image in images"
              :key="image.id"
              class="slide"
              :class="index === image.id ? 'current' : ''"
            >
              <img :src="image.imgSrc" :alt="'Image' + image.id" />
            </div>
          </div>

          <div id="swipebox-top-bar">
            <div id="swipebox-title">
              {{ slideTitle }}
            </div>
          </div>

          <div id="swipebox-bottom-bar">
            <div id="swipebox-arrows">
              <div id="swipebox-prev" @click="swipeLeft"></div>
              <div id="swipebox-next" @click="swipeRight"></div>
            </div>
          </div>

          <div id="swipebox-close" @click="toggleSwipebox"></div>
        </div>
      </div>
    </transition>

    <div class="modal-backdrop fade d-none" ref="backdrop"></div>
  </fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import { mapMutations } from "vuex";


export default {
  name: "Swipebox-overlay",
  components: {
    Fragment,
  },
  data() {
    return {
      galleryItems: [],
      index: 0,
      xPos: "",
      images: [],
      open: true,
    };
  },
  computed: {
    showSwipeBox() {
      return this.$store.state.showSwipeBox;
    },
    swipeboxIndex() {
      return this.$store.state.swipeboxIndex;
    },
    transformStyle() {
      return `transform: translate3d( ${this.xPos}%, 0px, 0px)`;
    },
    slideTitle() {
      if (this.$store.state.showSwipeBox) {
        return this.images[this.index - 1].title;
      }
    },
  },
  methods: {
    ...mapMutations(["toggleSwipebox"]),
    close() {
      this.$store.state.showSwipeBox = false;
    },
    leftSpring() {
      const overlay = document.getElementById("swipebox-overlay");

      overlay.classList.add("leftSpring");

      setTimeout(function () {
        overlay.classList.remove("leftSpring");
      }, 500);
    },
    rightSpring() {
      const overlay = document.getElementById("swipebox-overlay");

      overlay.classList.add("rightSpring");

      setTimeout(function () {
        overlay.classList.remove("rightSpring");
      }, 500);
    },
    swipeLeft() {
      document.getElementById("swipebox-prev").classList.remove("disabled");
      document.getElementById("swipebox-next").classList.remove("disabled");

      if (this.xPos === -100) {
        document.getElementById("swipebox-prev").classList.add("disabled");
      }

      if (this.xPos === 0) {
        document.getElementById("swipebox-prev").classList.add("disabled");
        this.leftSpring();
        this.xPos = 0;
        this.index = 1;
      } else {
        this.xPos = this.xPos + 100;
        this.index = this.index - 1;
      }
    },
    swipeRight() {
      document.getElementById("swipebox-next").classList.remove("disabled");
      document.getElementById("swipebox-prev").classList.remove("disabled");

      if (this.xPos === this.images.length * -100 + 200) {
        document.getElementById("swipebox-next").classList.add("disabled");
      }

      if (this.xPos === this.images.length * -100 + 100) {
        document.getElementById("swipebox-next").classList.add("disabled");
        this.rightSpring();
        this.xPos = this.images.length * -100 + 100;
        this.index = this.images.length;
      } else {
        this.xPos = this.xPos - 100;
        this.index = this.index + 1;
      }
    },
    startTransitionOverlay() {
      if (!this.$refs.backdrop.classList.contains("d-block")) {
        this.$refs.backdrop.classList.add("d-block");
      }

      let key = this.$store.getters.showSwipeboxIndex;
      this.index = key;
      this.xPos = key * -100 + 100;

      if (key === 1) {
        document.getElementById("swipebox-prev").classList.add("disabled");
      }

      if (key === this.images.length) {
        document.getElementById("swipebox-next").classList.add("disabled");
      }
    },
    startTransitionOverlayLeave() {
      if (this.$refs.backdrop.classList.contains("d-block")) {
        this.$refs.backdrop.classList.remove("d-block");
      }
    },
    endTransitionOverlay() {
      if (!this.$refs.backdrop.classList.contains("show")) {
        this.$refs.backdrop.classList.add("show");
      }

      document.body.classList.add("swipebox-html");
      document.body.style.overflow = "hidden";
      document.getElementById("swipebox-slider").style.display = "block";
      this.fadeIn();
    },
    endTransitionOverlayLeave() {
      if (this.$refs.backdrop.classList.contains("show")) {
        this.$refs.backdrop.classList.remove("show");
      }

      if (
        document.getElementById("swipebox-prev").classList.contains("disabled")
      ) {
        document.getElementById("swipebox-prev").classList.remove("disabled");
      }

      if (
        document.getElementById("swipebox-next").classList.contains("disabled")
      ) {
        document.getElementById("swipebox-next").classList.remove("disabled");
      }

      document.body.classList.remove("swipebox-html");
      document.getElementById("swipebox-slider").style.display = "none";
      document.body.style.overflow = "";
    },
    fadeIn() {
      let el = document.getElementById("swipebox-slider");

      let opacity = 0;
      let request;

      const animation = () => {
        el.style.opacity = opacity += 0.04;
        if (opacity >= 1) {
          opacity = 1;
          cancelAnimationFrame(request);
        }
      };

      const rAf = () => {
        request = requestAnimationFrame(rAf);
        animation();
      };
      rAf();
    },
  },
  mounted() {
    if (process.client) {
      this.index = this.$store.getters.showSwipeboxIndex;
      document.body.classList.add("swipebox-no-touch");

      this.galleryItems.map((item) => {
        this.images.push(item);
      });

      window.addEventListener(
        "keydown",
        (e) => {
          if (this.open) {
            if (e.keyCode === 37) {
              this.swipeLeft();
            }

            if (e.keyCode === 39) {
              this.swipeRight();
            }

            if (e.keyCode === 27) {
              this.close();
            }
          }
        },
        false
      );
    }
  },
  beforeDestroy() {
    if (process.client) {
      document.body.classList.remove("swipebox-no-touch");

      window.removeEventListener(
        "keydown",
        (e) => {
          if (this.open) {
            if (e.keyCode === 37 && this.xPos !== 0) {
              this.swipeLeft();
            }

            if (e.keyCode === 39 && this.index < this.images.length) {
              this.swipeRight();
            }

            if (e.keyCode === 27) {
              this.close();
            }
          }
        },
        false
      );

      this.$store.commit("variablesNull");
    }
  },
};
</script>
