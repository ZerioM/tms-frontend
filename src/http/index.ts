import { SensorIdDTO } from '@/interfaces/DTOs/sensorIdDTO';
import { UserIdDTO } from '@/interfaces/DTOs/userIdDTO';
import { Fridge } from '@/interfaces/fridge';
import { SensorData } from '@/interfaces/sensorData';
import axios from 'axios';

const prodBackend = "https://temperaturmonitoring-api.azurewebsites.net/";

const userId = "201508";

const backend = axios.create({
    baseURL: prodBackend,
    timeout: 1000,
});

function setNameOfFridgeToUndefinedIfEmpty(fridge: Fridge): void{
    if(fridge.name == '')
        fridge.name = "undefined";
}

async function getSensorDataByMac(sensorMac: string): Promise<SensorData[]> {
    const dTO: SensorIdDTO = {
        sensorMac: sensorMac,
    };

    const response = await backend.post("sensordata/ByMac", dTO);

    const sensorData: SensorData[] = response.data;
    sensorData.forEach(dataElement => {
        dataElement.timestamp = dataElement._id.timestamp;
    });

    return sensorData;
}

export async function getFridgesByUserId(): Promise<Fridge[]> {
    let fridges: Fridge[] = [];

    const dTO: UserIdDTO = {
        userId: userId,
    };

    const response = await backend.post("fridges/ByUser", dTO);

    fridges = response.data;

    fridges.forEach(async (fridge) => {
        setNameOfFridgeToUndefinedIfEmpty(fridge);
        fridge.sensor = await getSensorDataByMac(fridge['_id']);
    });

    console.log(fridges);

    return fridges;
}

export async function getAllFridges(): Promise<Fridge[]> {
    let fridges: Fridge[] = [];
    const response = await backend.get('fridges');
    fridges = response.data;
    fridges.forEach(async (fridge) => {
        setNameOfFridgeToUndefinedIfEmpty(fridge);
        fridge.sensor = await getSensorDataByMac(fridge['_id']);
    });
    return fridges;
}