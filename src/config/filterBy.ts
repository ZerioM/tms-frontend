import { Fridge } from "@/interfaces/fridge";

export const gpsActive = (toBeSortedArray: Fridge[]) => {
    return toBeSortedArray.filter(element => element.gps === true);
}

export const gpsInactive = (toBeSortedArray: Fridge[]) => {
    return toBeSortedArray.filter(element => element.gps === false || element.gps == null || element.gps == undefined);
}

export const batteryFull = (toBeFilteredArray: Fridge[]) => {
    return toBeFilteredArray.filter(element => element.batteryCharge > 65);
}

export const batteryMedium = (toBeFilteredArray: Fridge[]) => {
    return toBeFilteredArray.filter(element => element.batteryCharge > 32 && element.batteryCharge <= 65);
}

export const batteryLow = (toBeFilteredArray: Fridge[]) => {
    return toBeFilteredArray.filter(element => element.batteryCharge <= 32 || element.batteryCharge == null || element.batteryCharge == undefined);
}

export const coolAndHumOk = (toBeFilteredArray: Fridge[]) => {
    return toBeFilteredArray.filter(element => element.tempOK && element.humOK);
};

export const coolOrHumNotOk = (toBeFilteredArray: Fridge[]) => {
    return toBeFilteredArray.filter(element => (!element.tempOK && element.humOK) || (element.tempOK && !element.humOK))
}

export const coolAndHumNotOk = (toBeFilteredArray: Fridge[]) => {
    return toBeFilteredArray.filter(element => !element.tempOK && !element.humOK);
}

export const searchText = (toBeFilteredArray: Fridge[], searchText: string) => {
    return toBeFilteredArray.filter(element => element.name.includes(searchText));
}