import { Fridge } from "@/interfaces/fridge";

export const gpsActive = (toBeSortedArray: Fridge[]) => {
    return toBeSortedArray.filter(element => element.gps === true);
}

export const gpsInactive = (toBeSortedArray: Fridge[]) => {
    return toBeSortedArray.filter(element => element.gps === false);
}