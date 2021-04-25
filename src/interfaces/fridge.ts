export interface Fridge {
    _id: String;
    fridgeId: number;
    name: String;
    userId: number;
    crossGateId: String;
    tempOk: boolean;
    humOk: boolean;
    __v: number;
    maxHumidity: NumberDecimal;
    minHumidity: NumberDecimal;
    maxTemperature: NumberDecimal;
    minTemperature: NumberDecimal;
}

interface NumberDecimal {
    $numberDecimal: number;
}