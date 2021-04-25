import { Fridge } from '@/interfaces/fridge';
import axios from 'axios';

const prodBackend = "https://temperaturmonitoring-api.azurewebsites.net/";

const backend = axios.create({
    baseURL: prodBackend,
    timeout: 1000,
});

export function getFridges(): Fridge[]{
    let fridges: Fridge[] = [];
    backend.get('fridges').then(response => {
        fridges = response.data;
        console.log(fridges);
    });
    return fridges;
}