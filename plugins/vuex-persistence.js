import createPersistedState from 'vuex-persistedstate';

export default ({store, req}) => {
  createPersistedState({
    paths: ['authData', 'invite'],
    blackList: [],
    storage: window.localStorage
  })(store);
};
