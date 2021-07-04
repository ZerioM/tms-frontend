import { reactive } from "vue"
import * as options from '@/config/options';

export const store = {
    debug: false,
  
    state: reactive({
      isMenuVisible: false,
      currentFridgeName: '',
      currentSensorMac: '',
      orderAlphabetically: options.NONE,
      selectedGPSState: options.NONE,
      selectedBatteryState: options.NONE,
      selectedCoolingState: options.NONE,
      allFridges: [],
      currentFridges: new Array(0),
    }),
  
    changeMenuVisibleAction(newValue: boolean) {
      if (this.debug) {
        console.log('setMessageAction triggered with', newValue)
      }
  
      this.state.isMenuVisible = newValue
    },

    areFridgesFound() {
      if (this.state.currentFridges.length == 0){
        return false;
      } else {
        return true;
      }
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
    },

    unsetOrderAlphabetically() {
      if (this.debug) {
        console.log('unsetOrderAlphabetically triggered')
      }

      this.state.orderAlphabetically = options.NONE;
    },

    unsetOrderGPSActive() {
      if (this.debug) {
        console.log('unsetOrderGPSActive triggered')
      }

      this.state.selectedGPSState = options.NONE;
    },

    setAllFridges(newValue: []) {
      if (this.debug) {
        console.log('setAllFridges triggered with', newValue)
      }

      this.state.allFridges = newValue
    },

    setCurrentFridges(newValue: any[]) {
      if (this.debug) {
        console.log('setCurrentFridges triggered with', newValue)
      }

      this.state.currentFridges = newValue
    },

    }


  }