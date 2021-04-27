<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <!-- <pre>
                {{fridgesArray}}
            </pre> -->
            <div id="container" v-if="fridgesArray">
                <div v-for="fridge in fridgesArray" :key="fridge.name" :header="fridge.name">
                    <p>{{fridge.name}} | {{fridge["_id"]}}</p>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonContent, IonPage } from '@ionic/vue';
import * as http from '@/http';

export default {
    components: {
        IonContent,
        IonPage
    },
    data () {
        return {
            fridgesArray: [],
        }
    },
    created: function() {
        http.getFridges().then(result => {
            result.forEach(el => {
                this.fridgesArray.push(el);
            });
            console.log("http-Result:", result);
            console.log(this.fridgesArray);
        })
    },
}
</script>

<style>
.hidden {
    display: none;
}
</style>