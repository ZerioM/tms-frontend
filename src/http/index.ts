import { Fridge } from '@/interfaces/fridge';
import axios from 'axios';

const prodBackend = "https://temperaturmonitoring-api.azurewebsites.net/";

const backend = axios.create({
    baseURL: prodBackend,
    timeout: 1000,
});

export async function getFridges(): Promise<Fridge[]> {
    let fridges: any[] = [];
    const response = await backend.get('fridges');
    fridges = response.data;
    fridges.forEach(fridge => {
        if(fridge.name == '')
            fridge.name = "undefined";
    });
    console.log("http:",fridges);
    return fridges;
}