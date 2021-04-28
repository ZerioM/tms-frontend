import * as types from './mutations-types'
import * as http from '../http'
import * as getters from './getters'
import { Fridge } from '@/interfaces/fridge';

export const getFridgesData = ({ commit }: {commit: any}) => {
    // http.getFridges()
    //     .then((fridges: any) => {
    //         fridges.forEach((fridge: any) => {
    //             if(fridge.name == ""){
    //                 fridge.name = "undefined";
    //             }
    //         });
    //         console.log("Actions",fridges);
    //         commit(types.FRIDGES, fridges);
    //     })
}  