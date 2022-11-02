<template>
  <div id="news-single-post">
    <Loading />

    <Header logoColor="dark" />
    <main v-if="userInfo" role="main">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="w-100 text-center py-4 img-profile-user">
              <AppAvatar
                :userInfo="userInfo"
                width="150px"
                height="150px"
                alt="Avatar"
                class="m-auto"
              />
              <!-- avatar-wrap -->

              <div class="media-body">
                <h4 class="mt-1">
                  {{ userInfo.username }}

                  <small
                    class="verified"
                    title=""
                    data-toggle="tooltip"
                    data-placement="top"
                    data-original-title="Verified account!"
                  >
                    <i class="bi bi-patch-check-fill"></i>
                  </small>

                  <small
                    class="text-featured"
                    title=""
                    data-toggle="tooltip"
                    data-placement="top"
                    data-original-title="Creator featured"
                  >
                    <i class="fas fa fa-award"></i>
                  </small>
                </h4>

                <p>
                  <span> </span>
                </p>

                <div
                  v-if="
                    getTenantCurrentUser &&
                    getTenantCurrentUser.username !== userInfo.username
                  "
                  class="d-flex-user justify-content-center mb-2"
                >
                  <a
                    data-toggle="modal"
                    data-target="#loginFormModal"
                    class="btn btn-primary btn-profile mr-1 text-white"
                  >
                    <AccountPlusOutline class="mr-1" :size="17" />
                    Subscribe for Free
                  </a>

                  <!-- <nuxt-link
                  :to="`/${$route.params.username}?modal=open`"
                  data-toggle="modal"
                  data-target="#loginFormModal"
                  class="btn btn-google btn-profile mr-1"
                  title="Tip"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-coin"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      d="M8 13.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
                    ></path>
                  </svg>
                  Tip
                </nuxt-link> -->

                  <button
                    data-toggle="modal"
                    data-target="#loginFormModal"
                    title="Message"
                    class="btn btn-google btn-profile mr-1"
                    aria-label="Message"
                  >
                    <SendOutline :size="17" class="mr-1 mr-lg-0" />
                    <span class="d-lg-none">Message</span>
                  </button>

                  <button
                    id="dropdownUserShare"
                    class="btn btn-profile btn-google"
                    title="Share"
                    role="button"
                    data-toggle="modal"
                    data-target=".share-modal"
                    aria-label="Share"
                  >
                    <ExportVariant :size="17" class="mr-1 mr-lg-0" />
                    <span class="d-lg-none">Share</span>
                  </button>

                  <!-- Share modal -->
                  <div
                    class="modal fade share-modal"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="mySmallModalLabel"
                    aria-hidden="true"
                  >
                    <div
                      class="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div class="modal-content">
                        <div class="modal-header border-bottom-0">
                          <button
                            type="button"
                            class="close close-inherit"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true"
                              ><i class="bi bi-x-lg"></i
                            ></span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <div class="container-fluid">
                            <div class="row">
                              <div class="col-md-4 col-6 mb-3">
                                <a
                                  title="Facebook"
                                  target="_blank"
                                  class="
                                    social-share
                                    text-muted
                                    d-block
                                    text-center
                                    h6
                                  "
                                >
                                  <i
                                    class="fab fa-facebook-square facebook-btn"
                                  ></i>
                                  <span class="btn-block mt-3">Facebook</span>
                                </a>
                              </div>
                              <div class="col-md-4 col-6 mb-3">
                                <a
                                  class="
                                    social-share
                                    text-muted
                                    d-block
                                    text-center
                                    h6
                                  "
                                  target="_blank"
                                  title="Twitter"
                                >
                                  <i class="fab fa-twitter twitter-btn"></i>
                                  <span class="btn-block mt-3">Twitter</span>
                                </a>
                              </div>
                              <div class="col-md-4 col-6 mb-3">
                                <a
                                  data-action="share/whatsapp/share"
                                  class="
                                    social-share
                                    text-muted
                                    d-block
                                    text-center
                                    h6
                                  "
                                  title="WhatsApp"
                                >
                                  <i class="fab fa-whatsapp btn-whatsapp"></i>
                                  <span class="btn-block mt-3">WhatsApp</span>
                                </a>
                              </div>

                              <div class="col-md-4 col-6 mb-3">
                                <a
                                  href="mailto:?subject=Admin&amp;body=https://codify.company/Admin"
                                  class="
                                    social-share
                                    text-muted
                                    d-block
                                    text-center
                                    h6
                                  "
                                  title="Email"
                                >
                                  <i class="far fa-envelope"></i>
                                  <span class="btn-block mt-3">Email</span>
                                </a>
                              </div>
                              <div class="col-md-4 col-6 mb-3">
                                <a
                                  class="
                                    social-share
                                    text-muted
                                    d-block
                                    text-center
                                    h6
                                  "
                                  title="Text message"
                                >
                                  <i class="fa fa-sms"></i>
                                  <span class="btn-block mt-3"
                                    >Text message</span
                                  >
                                </a>
                              </div>
                              <div class="col-md-4 col-6 mb-3">
                                <a
                                  id="btn_copy_url"
                                  href="javascript:void(0);"
                                  class="
                                    social-share
                                    text-muted
                                    d-block
                                    text-center
                                    h6
                                    link-share
                                  "
                                  title="Copy link"
                                >
                                  <i class="fas fa-link"></i>
                                  <span class="btn-block mt-3">Copy link</span>
                                </a>
                                <input
                                  id="copy_link"
                                  type="hidden"
                                  readonly="readonly"
                                  class="form-control"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- d-flex-user -->
              </div>
              <!-- media-body -->
            </div>
            <!-- media -->

            <ul class="nav nav-profile justify-content-center nav-fill">
              <nuxt-link
                v-for="(link, index) of tabsLink"
                :key="index"
                :class="{ active: $route.path === link.to }"
                class="nav-link navbar-user-mobile cursor-pointer hover-none"
                :title="link.title"
                :to="link.to"
                tag="li"
              >
                <small class="btn-block sm-btn-size">1</small>
                <div>
                  <component :is="link.icon" :size="17" />
                  <span class="d-lg-inline-block d-none">
                    {{ link.title }}
                  </span>
                </div>
              </nuxt-link>
            </ul>
          </div>
          <!-- col-lg-12 -->
        </div>
        <!-- row -->
      </div>
      <!-- container -->

      <div class="container py-4 pb-5">
        <div class="row">
          <div class="col-lg-12 wrap-post">
            <nuxt />
            <!-- <div id="updatesPaginator" class="grid-updates position-relative">
            <div
              class="card mb-3 pb-4 loadMoreSpin d-none rounded-large shadow-large"
            >
              <div class="card-body">
                <div class="media">
                  <span class="rounded-circle mr-3">
                    <span
                      class="item-loading position-relative loading-avatar"
                    ></span>
                  </span>
                  <div class="media-body">
                    <h5
                      class="mb-0 item-loading position-relative loading-name"
                    ></h5>
                    <small
                      class="text-muted item-loading position-relative loading-time"
                    ></small>
                  </div>
                </div>
              </div>
              <div class="card-body pt-0 pb-3">
                <p
                  class="mb-1 item-loading position-relative loading-text-1"
                ></p>
                <p
                  class="mb-1 item-loading position-relative loading-text-2"
                ></p>
                <p
                  class="mb-0 item-loading position-relative loading-text-3"
                ></p>
              </div>
            </div>
            <CardExploere v-for="i of 6" :key="i" />
            <div
              class="card mb-3 pb-4 loadMoreSpin d-none rounded-large shadow-large"
            >
              <div class="card-body">
                <div class="media">
                  <span class="rounded-circle mr-3">
                    <span
                      class="item-loading position-relative loading-avatar"
                    ></span>
                  </span>
                  <div class="media-body">
                    <h5
                      class="mb-0 item-loading position-relative loading-name"
                    ></h5>
                    <small
                      class="text-muted item-loading position-relative loading-time"
                    ></small>
                  </div>
                </div>
              </div>
              <div class="card-body pt-0 pb-3">
                <p
                  class="mb-1 item-loading position-relative loading-text-1"
                ></p>
                <p
                  class="mb-1 item-loading position-relative loading-text-2"
                ></p>
                <p
                  class="mb-0 item-loading position-relative loading-text-3"
                ></p>
              </div>
            </div>
          </div> -->
          </div>
        </div>
        <!-- row -->
      </div>
      <!-- container -->

      <div
        id="modal2fa"
        class="modal fade"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modal-form"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal- modal-dialog-centered modal-sm"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-body p-0">
              <div class="card bg-white shadow border-0">
                <div class="card-body px-lg-5 py-lg-5 position-relative">
                  <div class="mb-3">
                    <h6>
                      <i class="bi bi-shield-lock mr-1"></i> Two-Step
                      Authentication
                    </h6>

                    <small>We have sent you a code to your email</small>
                  </div>

                  <form
                    id="formVerify2fa"
                    method="post"
                    action="https://codify.company/verify/2fa"
                  >
                    <input
                      type="hidden"
                      name="_token"
                      value="EXchvu8c9ILVMscnJpCv1Mkx5H7Fep71EqEGlpEV"
                    />
                    <input type="hidden" name="isProfileTwoFA" value="true" />

                    <input
                      id="onlyNumber"
                      type="number"
                      autocomplete="off"
                      onkeypress="if(this.value.length==4) return false;"
                      class="form-control mb-2"
                      name="code"
                      placeholder="Enter the code"
                    />

                    <small class="form-text text-muted m-0">
                      <a href="javascript:void(0);" class="resend_code">
                        <i class="bi bi-arrow-counterclockwise"></i>
                        <span id="resendCode">Resend code</span>
                      </a>
                    </small>

                    <div
                      id="errorModal2fa"
                      class="alert alert-danger display-none mt-2"
                    >
                      <ul
                        id="showErrorsModal2fa"
                        class="list-unstyled m-0"
                      ></ul>
                    </div>

                    <div class="text-center">
                      <button
                        id="btn2fa"
                        type="submit"
                        class="btn btn-primary mt-3"
                        aria-label="Send"
                      >
                        <i></i> Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
import AccountPlusOutline from "vue-material-design-icons/AccountPlusOutline.vue";
import SendOutline from "vue-material-design-icons/SendOutline.vue";
import ExportVariant from "vue-material-design-icons/ExportVariant.vue";
import FileDocumentOutline from "vue-material-design-icons/FileDocumentOutline.vue";
import ImageOutline from "vue-material-design-icons/ImageOutline.vue";
import VideoOutline from "vue-material-design-icons/VideoOutline.vue";
import MicrophoneOutline from "vue-material-design-icons/MicrophoneOutline.vue";
import ShoppingOutline from "vue-material-design-icons/ShoppingOutline.vue";
import Cellphone from "vue-material-design-icons/Cellphone.vue";
import Menu from "vue-material-design-icons/Menu.vue";
import api from "~/mixins/api";
import AppAvatar from "~/components/ui/app-avatar.vue";
import Footer from "../components/blocks/footer/Footer.vue";
import Loading from "../components/Loading/Loading.vue";
import Header from "~/components/blocks/header/Header";

export default {
  name: "username",
  mixins: [api],
  components: {
    AccountPlusOutline,
    SendOutline,
    ExportVariant,
    FileDocumentOutline,
    ImageOutline,
    VideoOutline,
    MicrophoneOutline,
    ShoppingOutline,
    Cellphone,
    Menu,
    AppAvatar,
    Footer,
    Loading,
    Header,
  },
  meta: {
    fixedHeader: true,
  },
  data() {
    return {
      userInfo: null,
      tabsLink: [
        {
          to: `/${this.$route.params.username}`,
          title: "Product",
          icon: "FileDocumentOutline",
        },
        {
          to: `/${this.$route.params.username}/comming-soon`,
          title: "Comming soon",
          icon: "ShoppingOutline",
        },
      ],
    };
  },
  async mounted() {
    try {
      this.userInfo = await this.get(
        `users/name/${this.$route.params.username}`
      );
      if (!this.userInfo) {
        this.$router.go(-1);
      }
    } catch {}
  },
  methods: {
    doCopy(message) {
      this.$copyText(message).then(
        () => {
          Message({
            message: "Link copied successfully!",
            type: "success",
          });
        },
        () => {
          Message({
            message: "Something went wrong",
            type: "error",
          });
        }
      );
    },
  },
};
</script>

<style scoped>
.top-background-container {
  padding: 240px 0;
  background: #505050
    url(https://codify.company/public/uploads/cover/admin-11633005525avvza1s78f.jpg)
    no-repeat center center;
  background-size: cover;
}
.card-container {
  background: url(https://codify.company/media/storage/focus/photo/3) no-repeat
    center center #b9b9b9;
  background-size: cover;
}
.hover-none:hover {
  color: inherit !important;
}
.nav-profile li.active {
  border-bottom: 3px solid #1a2853 !important;
}
</style>
