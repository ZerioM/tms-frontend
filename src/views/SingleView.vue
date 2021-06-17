<template>
  <ion-page>
        <ion-header :translucent="true">
            <Header title="Einzelansicht" :searchable="false" :backNavLocation="'/fridges'" />
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <Header title="Einzelansicht" :searchable="false" :backNavLocation="'/fridges'"  />
            </ion-header>
            <Message id="error-message" severity="error" v-if="connectionToServerError || noSensordataError" :closable="true">An error occurred while connecting to the server.</Message>
            <ion-refresher id="refresher" slot="fixed" @ionRefresh="doRefresh($event.target)">
                <ion-refresher-content pulling-icon="bubbles" id="refresh-content">
                </ion-refresher-content>
            </ion-refresher>
            <DataTable v-if="!connectionToServerError && !noSensordataError" id="data-table" class="p-datatable-sm" showGridlines responsiveLayout="scroll" :value="sensorData">
                <Column field="date" header="Datum"></Column>
                <Column field="temperature" header="Ø Temperatur"></Column>
                <Column field="humidity" header="Ø Luftfeuchtigkeit"></Column>
            </DataTable>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonContent, IonHeader, IonRefresher, IonRefresherContent } from '@ionic/vue';
import Header from '@/components/semantic/Header.vue';
import { store } from '@/store';
import * as http from '@/http';
import * as errors from '../config/errors';

export default {
    components: {
        IonPage,
        IonContent,
        IonHeader,
        IonRefresher,
        IonRefresherContent,
        Header
    },
    data () {
        return {
            sharedState: store.state,
            sensorData: [],
            connectionToServerError: false,
            noSensordataError: false
        }
    },
    created: async function() {
        this.checkIfSensorMacIsEmpty();
        await this.getSensorData(this.sharedState.currentSensorMac);
    },
    methods: {
        getSensorData(currentSensorMac) {
            http.getSensorDataByMac(currentSensorMac)
            .then(result => {
                this.sensorData = result;
                this.sensorData.forEach(data => {
                    
                    data.date = this.getDateFromTimestamp(data.timestamp);
                });
                this.connectionToServerError = false;
                this.noSensordataError = false;
            })
            .catch(error => {
                if(error.message === errors.CONNECTION_TO_SERVER_ERROR) {
                    this.connectionToServerError = true;
                } else {
                    this.connectionToServerError = false;
                }
                if(error.message === errors.NO_SENSORDATA_FOUND) {
                    this.noSensordataError = true;
                } else {
                    this.noSensordataError = false;
                }
            })
        },
        async doRefresh(target) {
            this.connectionToServerError = false;
            await this.getSensorData(this.sharedState.currentSensorMac);
            if(target)
                target.complete();
        },
        checkIfSensorMacIsEmpty() {
            if(!this.sharedState.currentSensorMac || this.sharedState.currentSensorMac == '') {
                this.$router.push({path:'/fridges'});
            }
        },
        getDateFromTimestamp(timestamp) {
            let day = new Date(timestamp).getUTCDay();
            if(day < 10) day = "0" + day;

            let month = new Date(timestamp).getMonth();
            if(month < 10) month = "0" + month;
            
            const year = new Date(timestamp).getFullYear();
            const hours = new Date(timestamp).getHours();
            const minutes = new Date(timestamp).getMinutes();
            const seconds = new Date(timestamp).getSeconds();

            return day + "." + month + "." + year + " " + hours + ":" + minutes + ":" + seconds;
        }
    }
}
</script>

<style>
    #error-message {
        margin: 2.5%;
    }

    #data-table {
        margin: 2.5%;
    }
</style>