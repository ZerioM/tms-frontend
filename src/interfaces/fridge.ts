import { SensorData } from "./sensorData";

export interface Fridge {
    _id: string;
    fridgeId: number;
    name: string;
    userId: number;
    crossGateId: string;
    sensor: SensorData[];
    tempOK: boolean;
    humOK: boolean;
    gps: boolean;
    __v: number;
    maxHumidity: number;
    minHumidity: number;
    maxTemperature: number;
    minTemperature: number;
    batteryCharge: number;
}