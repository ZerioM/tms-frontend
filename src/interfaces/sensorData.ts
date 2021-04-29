import { NumberDecimal } from "./fridge";

export interface SensorData {
    _id: Identification;
    temperature: NumberDecimal;
    humidity: NumberDecimal;
    timestamp: Date;
}

interface Identification {
    sensorMac: string;
    timestamp: Date;
}