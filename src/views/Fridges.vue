<template>
    <ion-page>
        <ion-header :translucent="true">
            <Header title="Kühlgeräte" :searchable="true" />
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <Header title="Kühlgeräte" :searchable="true" />
            </ion-header>
            <Message id="error-message" severity="error" v-if="connectionToServerError" :closable="true">An error occurred while connecting to the server.</Message>
            <ion-refresher id="refresher" slot="fixed" @ionRefresh="doRefresh($event)">
                <ion-refresher-content pulling-icon="bubbles" id="refresh-content">
                </ion-refresher-content>
            </ion-refresher>
            <Expandable id="expandable" v-if="!connectionToServerError" :iterable="fridgesArray" />
        </ion-content>
    </ion-page>
</template>

<script>
import { IonContent, IonRefresher, IonRefresherContent, IonPage, IonHeader } from '@ionic/vue';
import * as http from '@/http';
import * as errors from '../config/errors';
import Expandable from '@/components/semantic/ExpandableFridges.vue';
import Header from '@/components/semantic/Header.vue';


export default {
    components: {
        IonContent,
        IonRefresher,
        IonRefresherContent,
        IonPage,
        IonHeader,
        Expandable,
        Header
    },
    data () {
        return {
            fridgesArray: [],
            connectionToServerError: false,
        }
    },
    created: function() {
        this.getFridges();
    },
    methods: {
        getFridges() {
            http.getFridgesByUserId()
            .then(result => {
                this.fridgesArray = result;
                this.connectionToServerError = false;
                })
            .catch(error => {
                if(error.message === errors.CONNECTION_TO_SERVER_ERROR) {
                    this.connectionToServerError = true;
                } else {
                    this.connectionToServerError = false;
                }
            })
        },
        async doRefresh(event) {
            this.connectionToServerError = false;
            await this.getFridges();
            event.target.complete();
        },
    }
}
</script>

<style>
    #error-message {
        margin: 2.5%;
    }
</style>