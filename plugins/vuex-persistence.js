import createPersistedState from 'vuex-persistedstate';

export default ({ store, req }) => {
    createPersistedState({
        paths: ['authData'],
        blackList: [],
        storage: window.localStorage
    })(store);
};
