import { reactive } from "vue"

export const store = {
    debug: false,
  
    state: reactive({
      isMenuVisible: false,
      currentFridgeName: '',
      currentSensorMac: '',
    }),
  
    changeMenuVisibleAction(newValue: boolean) {
      if (this.debug) {
        console.log('setMessageAction triggered with', newValue)
      }
  
      this.state.isMenuVisible = newValue
    },

    setCurrentFridgeName(newValue: string) {
      if (this.debug) {
        console.log('setCurrentFridgeName triggered with', newValue)
      }

      this.state.currentFridgeName = newValue
    },

    setCurrentSensorMac(newValue: string) {
      if (this.debug) {
        console.log('setCurrentSensorMac triggered with', newValue)
      }

      this.state.currentSensorMac = newValue
    }
  }