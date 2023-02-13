<template>
  <div
    id="about-us"
    class="block before-block spacer p-top-xl"
    :class="[currentPage.includes('about-us') ? backgroundClass : '']"
  >
    <div class="wrapper">
      <div class="row gutter-width-sm with-pb-md">
        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div class="description-2">
            <h2>{{ aboutUs.pageTitle }}</h2>
          </div>

          <div class="signature spacer m-top-lg">
            <div class="signature-img">
              <object :data="`https://codify.solutions/public/files/tb/${aboutUs.sign}/${tenantId}`"
                      type="image/webp" class="sign-image">
                <img src="~/assets/placeholder.jpg" class="sign-image" alt="Signature">
              </object>
            </div>

            <div class="signature-content">
              <h5 class="signature-name">{{ aboutUs.ceo_name }}</h5>
              <p class="signature-position">{{ aboutUs.ceo_desc }}</p>
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div class="description-2" v-html="aboutUs.container_desc"></div>
        </div>
      </div>

      <div class="icon-list">
        <div class="icon-list-items">
          <template v-for="(item, index) of aboutUs.advantages">
            <div class="icon-list-item" :key="index">
              <p>
                <span class="d-flex"
                ><i class="fas fa-check"></i
                ><span>{{ item.advantage }}</span></span
                >
              </p>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Abouts-us",
  props: ["aboutUs"],
  data() {
    return {
      backgroundClass: "bg-gray-light p-bottom-xl",
    };
  },
  computed: {
    tenantId() {
      return this.$store.state.initializedId;
    },
    currentPage() {
      return this.$route.path;
    },
  },
};
</script>
<style scoped>
  .sign-image {
    max-width: 100px;
  }
</style>
