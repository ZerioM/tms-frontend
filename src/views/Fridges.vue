<template>
    <ion-page>
        <ion-header :translucent="true">
            <Header :title="messages.MONITORING_TITLE" :searchable="true" :isOnFridges="true" />
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <Header :title="messages.MONITORING_TITLE" :searchable="true" :isOnFridges="true" />
            </ion-header>
            <Message class="message" severity="error" v-if="connectionToServerError || noSensordataError" :closable="true">{{messages.SERVER_ERROR}}</Message>
            <ion-refresher id="refresher" slot="fixed" @ionRefresh="doRefresh($event)">
                <ion-refresher-content pulling-icon="bubbles" id="refresh-content">
                </ion-refresher-content>
            </ion-refresher>
            <FilterBar v-if="!connectionToServerError && !noSensordataError" />
            <Expandable id="expandable" v-if="!connectionToServerError && !noSensordataError && store.areFridgesFound()" :iterable="sharedState.currentFridges" />
            <Message class="message" severity="warn" v-if="!store.areFridgesFound()">{{messages.NO_DATA_FOUND_FOR_FILTERS}}</Message>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonContent, IonRefresher, IonRefresherContent, IonPage, IonHeader } from '@ionic/vue';
import * as http from '@/http';
import * as errors from '../config/errors';
import * as messages from '@/config/messages';
import * as filterUtils from '@/config/filterUtils';
import { store } from '@/store';
import Expandable from '@/components/semantic/ExpandableFridges.vue';
import Header from '@/components/semantic/Header.vue';
import FilterBar from '@/components/elements/FilterBar.vue';


export default {
    components: {
        IonContent,
        IonRefresher,
        IonRefresherContent,
        IonPage,
        IonHeader,
        Expandable,
        FilterBar,
        Header
    },
    data () {
        return {
            connectionToServerError: false,
            noSensordataError: false,
            sharedState: store.state,
            store: store,
            messages: messages,
        }
    },
    created: function() {
        this.getFridges();
    },
    methods: {
        getFridges() {
            http.getFridgesByUserId()
            .then(result => {
                store.setCurrentFridges(result);

                filterUtils.setupFiltering(this.sharedState.currentFridges);

                filterUtils.checkIfFridgesShouldBeSorted(this.sharedState.currentFridges);

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
        async doRefresh(event) {
            this.connectionToServerError = false;
            await this.getFridges();
            event.target.complete();
        }
    }
}
</script>

<style>
    .message {
        margin: 2.5%;
    }
</style>