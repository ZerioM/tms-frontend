<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div id="container">
                <Expandable id="expandable" :iterable="fridgesArray" />
            </div>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonContent, IonPage } from '@ionic/vue';
import * as http from '@/http';
import Expandable from '@/components/semantic/Expandable.vue';


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

#expandable {
    margin: 2.5%;
}
</style>