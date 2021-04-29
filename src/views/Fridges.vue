<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div id="container">
                <Expandable :iterable="fridgesArray" />
            </div>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonContent, IonPage } from '@ionic/vue';
import * as http from '@/http';
import Expandable from '@/components/elements/ExpandableFridges.vue';


export default {
    components: {
        IonContent,
        IonPage,
        Expandable
    },
    data () {
        return {
            fridgesArray: [],
        }
    },
    created: function() {
        http.getFridgesByUserId()
            .then(result => this.fridgesArray = result);
    },
}
</script>

<style>
</style>