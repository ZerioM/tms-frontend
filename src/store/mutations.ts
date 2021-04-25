import * as types from './mutations-types'

export default {
    [types.FRIDGES] (state: any, payload: any) {
        state.fridges = payload
      },
}