import cloneDeep from "lodash.clonedeep";


const initialState = () => ({
  showPreloaderOnRequest: true,
  showMenuModal: false,
  showSearchModal: false,
  showSwipeBox: false,
  swipeBoxIndex: 1,
  maintenance: true,
  listening: false,
  errors: {},
  errorFields: [],
  invite: null,
  authData: {
    accessToken: null,
    email_verified_at: null,
    id: 0
  },
  initializedId: null,
  layout: {
    items: {
      logo: null,
      primaryColor: null,
      projectName: null,
      twitter: null,
      copyRight: null,
    }
  },
  axiosCalls: 0
})

const state = () => cloneDeep(initialState())

const mutations = {
  hideError(state, name) {
    if (name) {
      for (let fieldName in state.errors) {
        if (fieldName === name) {
          delete state.errors[fieldName];
        }
      }
      const index = state.errorFields.indexOf(name);
      if (index !== -1) {
        state.errorFields.splice(index, 1);
      }
    }
  },
  setEventListening(state, status) {
    state.listening = status;
  },
  setInviteId(state, invite) {
    state.invite = invite;
  },
  setAccountVerified(state, verificationDate) {
    state.authData.email_verified_at = verificationDate;
  },
  setPreloaderState(state, show) {
    state.showPreloaderOnRequest = show;
  },
  setErrors(state, errors) {
    state.errors = errors;
  },
  setFieldNames(state, fields) {
    state.errorFields = fields;
  },
  resetValidation(state) {
    state.errors = [];
    state.errorFields = [];
  },
  setTenant(state, tenant) {
    state.layout = tenant.layout;
    state.initializedId = tenant.id;
  },
  signOut(state) {
    state.authData = {
      accessToken: null,
      id: 0
    };
  },
  setAuthData(state, authData) {
    state.authData = authData;
  },
  startAxiosCall(state) {
    state.axiosCalls++
  },
  stopAxiosCall(state) {
    state.axiosCalls--;
  },
  toggleMenuModal(state) {
    state.showMenuModal = !state.showMenuModal;
  },
  toggleSearchModal(state) {
    state.showSearchModal = !state.showSearchModal;
  },
  toggleSwipebox(state) {
    state.showSwipeBox = !state.showSwipeBox;
  },
  setwipeboxIndex(state, index) {
    state.swipeBoxIndex = index;
  },
  variablesNull(state) {
    state.showMenuModal = false;
    state.showSearchModal = false;
    state.showSwipeBox = false;
  }
}
const actions = {
  async nuxtServerInit({commit}, {req}) {
    const url = req.headers.host;
    const absoluteUrl =  process.env.NODE_ENV === "development"
      ? process.env.CORE_INIT_URL
      : "https://web.codifyhealthcare.com/api"
    const tenant = await this.$axios.$get(`${absoluteUrl}/tenant/initialize/${url}`);
    commit("setTenant", cloneDeep(tenant.data));
  }
};
const getters = {
  showMenuModal: state => state.showMenuModal,
  showSearchModal: state => state.showSearchModal,
  showSwipeBox: state => state.showSwipeBox,
  showSwipeboxIndex: state => state.swipeBoxIndex
}

export default {
  state,
  mutations,
  getters,
  actions
}
