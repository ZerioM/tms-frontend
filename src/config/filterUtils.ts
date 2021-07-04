import * as options from '@/config/options';
import * as sortBy from '@/config/sortBy';
import * as filterBy from '@/config/filterBy';
import { store } from '@/store';
import { Fridge } from '@/interfaces/fridge';

const filterGPS = (fridgesArray: Fridge[]) => {
    
    if(store.state.selectedGPSState == options.GPS_ACTIVATED) {
        fridgesArray = filterBy.gpsActive(fridgesArray);
    } else if(store.state.selectedGPSState == options.GPS_NOT_ACTIVATED) {
        fridgesArray = filterBy.gpsInactive(fridgesArray);
    }

    return fridgesArray;
}

const filterBattery = (fridgesArray: Fridge[]) => {

    if(store.state.selectedBatteryState === options.BATTERY_FULL) {
        fridgesArray = filterBy.batteryFull(fridgesArray);
    }
    else if(store.state.selectedBatteryState === options.BATTERY_MEDIUM) {
        fridgesArray = filterBy.batteryMedium(fridgesArray);
    }
    else if(store.state.selectedBatteryState === options.BATTERY_LOW) {
        fridgesArray = filterBy.batteryLow(fridgesArray);
    }

    return fridgesArray;
}

const filterCooling = (fridgesArray: Fridge[]) => {

    if(store.state.selectedCoolingState == options.COOLING_HUM_OK) {
        fridgesArray = filterBy.coolAndHumOk(fridgesArray);
    }
    else if(store.state.selectedCoolingState == options.COOLING_OR_HUM_NOT_OK) {
        fridgesArray = filterBy.coolOrHumNotOk(fridgesArray);
    }
    else if(store.state.selectedCoolingState == options.COOLING_AND_HUM_NOT_OK) {
        fridgesArray = filterBy.coolAndHumNotOk(fridgesArray);
    }

    return fridgesArray;
}

const checkIfFridgesShouldBeFiltered = (fridgesArray?: Fridge[]) => {

    if(!fridgesArray)
        fridgesArray = store.state.allFridges;

    //filtering GPS
    if(store.state.selectedGPSState !== options.NONE) {
        fridgesArray = filterGPS(fridgesArray);
    }

    //filtering Battery
    if(store.state.selectedBatteryState !== options.NONE) {
        fridgesArray = filterBattery(fridgesArray);
    }
    
    //filtering cooling state
    if(store.state.selectedCoolingState !== options.NONE) {
        fridgesArray = filterCooling(fridgesArray);
    }

    return fridgesArray;
}

export const checkIfFridgesShouldBeSorted = (fridgesArray: Fridge[]) => {
    if(store.state.orderAlphabetically == options.ALPHABETICALLY){
        fridgesArray = sortBy.alphabet(fridgesArray);
    } else if(store.state.orderAlphabetically == options.REVERSE_ALPHABETICALLY){
        fridgesArray = sortBy.alphabetReverse(fridgesArray);
    }
    return fridgesArray;
}

export const updateSortingAndFiltering = (fridgesArray?: Fridge[]) => {
    //filtering
    fridgesArray = checkIfFridgesShouldBeFiltered(fridgesArray);
    
    //sorting
    fridgesArray = checkIfFridgesShouldBeSorted(fridgesArray);

    store.setCurrentFridges(fridgesArray);
}

export const updateFilterSearch = () => {

    const searchText = store.state.searchText;
    let fridgesArray: Fridge[] = store.state.currentFridges;

    if(searchText && searchText !== '') {
        fridgesArray = filterBy.searchText(fridgesArray, searchText);
    }

    updateSortingAndFiltering(fridgesArray);

    store.setCurrentFridges(fridgesArray);
}


export const setupFiltering = (fridgesArray: []) => {
    store.setAllFridges(fridgesArray);
}
