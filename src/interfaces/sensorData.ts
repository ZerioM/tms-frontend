export interface SensorData {
    _id: Identification;
    temperature: number;
    humidity: number;
    timestamp: Date;
}

interface Identification {
    sensorMac: string;
    timestamp: Date;
}