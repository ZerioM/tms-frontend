import { SensorData } from "./sensorData";

export interface Fridge {
    _id: string;
    fridgeId: number;
    name: string;
    userId: number;
    crossGateId: string;
    sensor: SensorData[];
    tempOk: boolean;
    humOk: boolean;
    __v: number;
    maxHumidity: NumberDecimal;
    minHumidity: NumberDecimal;
    maxTemperature: NumberDecimal;
    minTemperature: NumberDecimal;
}

export interface NumberDecimal {
    $numberDecimal: number;
}