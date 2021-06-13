import { reactive } from "vue"

export const store = {
    debug: false,
  
    state: reactive({
      isMenuVisible: false
    }),
  
    changeMenuVisibleAction(newValue: boolean) {
      if (this.debug) {
        console.log('setMessageAction triggered with', newValue)
      }
  
      this.state.isMenuVisible = newValue
    },
  }