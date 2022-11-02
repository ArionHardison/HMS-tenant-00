import cloneDeep from "lodash.clonedeep";


const initialState = () => ({
  axiosCalls: 0
})

const state = () => cloneDeep(initialState())

const mutations = {
  startAxiosCall(state) {
    state.axiosCalls+=1;
  },
  stopAxiosCall(state) {
    state.axiosCalls-=1;
  },

}
const actions = {

};
const getters = {

}

export default {
  state,
  mutations,
  getters,
  actions
}
