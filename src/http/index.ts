import { Fridge } from '@/interfaces/fridge';
import axios from 'axios';

const prodBackend = "https://temperaturmonitoring-api.azurewebsites.net/";

const backend = axios.create({
    baseURL: prodBackend,
    timeout: 1000,
});

export async function getFridges(): Promise<Fridge[]>{
    let fridges: Fridge[] = [];
    const response = await backend.get('fridges');
    fridges = response.data;
    console.log("http:",fridges);
    return fridges;
}