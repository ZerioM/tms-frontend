export interface Fridge {
    _id: string;
    fridgeId: number;
    name: string;
    userId: number;
    crossGateId: string;
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