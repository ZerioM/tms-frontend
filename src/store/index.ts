import { createStore } from 'vuex'
import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

export default createStore({
  state: {
    fridges: undefined,
  },
  mutations,
  actions,
  getters,
  strict: process.env.NODE_ENV !== 'production',
})