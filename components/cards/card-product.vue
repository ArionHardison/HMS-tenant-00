<template>
  <div
    v-if="cardInfo"
    class="card mb-3 card-updates rounded-large shadow-large card-border-0"
    data="387"
  >
    <div class="card-body">
      <div class="pinned_post text-muted small w-100 mb-2 display-none">
        <i class="bi bi-pin mr-2"></i> Pinned Post
      </div>

      <div class="media">
        <span class="rounded-circle mr-3 position-relative">

          <Avatar
            :userInfo="cardInfo.profile_picture"
            :size="60"
            alt="Avatar"
          />
        </span>

        <div class="media-body">
          <h5 class="mb-0 font-montserrat d-flex align-items-center">
            <nuxt-link :to="`/${cardInfo.username}`">
              {{ cardInfo.full_name }}
            </nuxt-link>

            <small
              class="verified"
              title=""
              data-toggle="tooltip"
              data-placement="top"
              data-original-title="Verified account!"
            >
              <i class="bi bi-patch-check-fill"></i>
            </small>

            <small class="text-muted font-14 ml-2"
              >@{{ cardInfo.username }}</small
            >
          </h5>

          <small class="timeAgo text-muted" data="2022-07-26T05:23:59-04:00">
            {{ rendTimeAgo(cardInfo.created_at) }}</small
          >

          <!-- <small class="text-muted type-post" title="Content locked.">
              <Lock :size="13" class="mr-1" />
              $5.00
            </small> -->
        </div>
        <!-- media body -->
      </div>
      <!-- media -->
    </div>
    <!-- card body -->

    <div class="card-body pt-0 pb-3">
      <p class="mb-0 update-text position-relative text-word-break hide-class">
        {{ cardInfo.description }}
      </p>
    </div>

    <nuxt-link
      :to="`/program/?id=${cardInfo.program_id}`"
      v-bg-img="cardInfo.program_image"
      class="
        btn-block
        p-sm
        text-center
        content-locked
        pt-lg
        pb-lg
        px-3
        text-white
        card-explore-images
        cursor-pointer
      "
    >
    </nuxt-link>
    <!-- btn-block parent -->

    <div class="card-footer bg-white border-top-0 rounded-large">
      <h4>
        <a
          :disabled="isLikeProcessing"
          @click.prevent="presBookmark"
          class="pulse-btn text-muted float-right cursor-pointer"
        >
          <Bookmark v-if="isLike" :size="24" />
          <BookmarkOutline v-else :size="24" />
        </a>
      </h4>

      <div class="container-comments display-none">
        <div class="container-media"></div>
        <!-- container-media -->
      </div>
      <!-- container-comments -->
    </div>
    <!-- card-footer -->
  </div>
</template>

<script>
import Lock from "vue-material-design-icons/LockOutline.vue";
import LockOpenOutline from "vue-material-design-icons/LockOpenOutline.vue";
import BookmarkOutline from "vue-material-design-icons/BookmarkOutline.vue";
import Bookmark from "vue-material-design-icons/Bookmark.vue";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import Avatar from "../ui/Avatar";

export default {
  props: {
    cardInfo: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isLike: false,
      isLikeProcessing: false,
    };
  },
  components: {
    Lock,
    LockOpenOutline,
    BookmarkOutline,
    Bookmark,
    Avatar,
  },
  methods: {
    rendTimeAgo(date) {
      TimeAgo.addDefaultLocale(en);
      const timeAgo = new TimeAgo("en-US");
      return timeAgo.format(new Date(date));
    },
    presBookmark() {
      this.isLikeProcessing = true;
      setTimeout(() => {
        this.isLike = !this.isLike;
        this.isLikeProcessing = false;
      }, 500);
    },
  },
};
</script>

<style scoped>
.card {
  box-shadow: 0 8px 30px rgb(0 0 0 / 5%) !important;
  border-radius: 15px !important;
  border: 1px solid rgba(111, 111, 111, 0.125);
  transition: all 0.15s ease;
}
.card-explore-images {
  background-position: center;
  background-size: cover;
}
.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.5rem;
}
.media {
  display: flex;
  align-items: flex-start;
}
.card-explore-images {
  height: 208px;
}
.font-14 {
  font-size: 14px;
}
</style>
