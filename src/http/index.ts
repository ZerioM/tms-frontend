import { Fridge } from '@/interfaces/fridge';
import { SensorData } from '@/interfaces/sensorData';
import axios from 'axios';
import * as errors from '../config/errors';

const prodBackend = "https://temperaturmonitoring-api.azurewebsites.net/";

const userId = "201508";

const backend = axios.create({
    baseURL: prodBackend,
    timeout: 2000,
});

function setNameOfFridgeToUndefinedIfEmpty(fridge: Fridge): void{
    if(fridge.name == '')
        fridge.name = "undefined";
}

async function getSensorDataByMac(sensorMac: string): Promise<SensorData[]> {

    let sensorData: SensorData[] = [];
    
    try {
        const response = await backend.get("sensordata/ByMac?sensorMac=" + sensorMac);

        sensorData = response.data;
        sensorData.forEach(dataElement => {
            dataElement.timestamp = dataElement._id.timestamp;
        });

    } catch (error) {
        console.log(sensorData + " " + error);
    }

    return sensorData;
}

export async function getFridgesByUserId(): Promise<Fridge[]> {
    let fridges: Fridge[] = [];

    try {
        const response = await backend.get("fridges/ByUser?userId=" + userId);

        fridges = response.data;

        fridges.forEach(async (fridge) => {
            setNameOfFridgeToUndefinedIfEmpty(fridge);
            fridge.sensor = await getSensorDataByMac(fridge['_id']);
        });

        return fridges;
    } catch (error) {
        if(error.message === errors.CONNECTION_TO_SERVER_ERROR)
            throw new Error(errors.CONNECTION_TO_SERVER_ERROR);
        if(error.message === errors.NO_SENSORDATA_FOUND)
            throw new Error(errors.NO_SENSORDATA_FOUND);
        else 
            throw new Error(errors.UNDEFINED_ERROR);
    }
    
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