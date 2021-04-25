<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <pre>
                {{getFridges}}
            </pre>
            <div id="container">
                <Accordion>
                    <AccordionTab v-for="fridge in getFridges" :key="fridge.name" :header="fridge.name">
                        <p>{{fridge["_id"]}}</p>
                    </AccordionTab>
                </Accordion>
            </div>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonContent, IonPage } from '@ionic/vue';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import { mapGetters } from 'vuex'

export default {
    components: {
        IonContent,
        IonPage,
        Accordion,
        AccordionTab
    },
    computed: {
        ...mapGetters(['getFridges'])
    },
    mounted: function(){
        console.log(this.getFridges);
    }
}
</script>

<style>
.hidden {
    display: none;
}
</style>