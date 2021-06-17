<template>
    <Accordion class="in_box" :multiple="true">
        <AccordionTab v-for="element in iterable" :key="element['_id']">
            <template #header id="accordion-header">
                <span class="name-text" v-if="(element.humOK && element.tempOK)">
                    <img class="dot-icon" src="@/assets/icons/green_dot.svg" alt="Temperature and Humidity OK" /> 
                    {{element.name}}
                </span>
                <span class="name-text" v-if="(element.humOK && !element.tempOK) || (!element.humOK && element.tempOK)">
                    <img class="dot-icon" src="@/assets/icons/yellow_dot.svg" alt="Temperature or Humidity not OK" /> 
                    {{element.name}}
                </span>
                <span class="name-text" v-if="(!element.humOK && !element.tempOK)">
                    <img class="dot-icon" src="@/assets/icons/red_dot.svg" alt="Temperature and Humidity not OK" /> 
                    {{element.name}} 
                </span>
                <img v-if="true" class="battery_icon" src="@/assets/icons/battery_full.svg">
                <img v-if="false" class="battery_icon" src="@/assets/icons/battery_middle.svg">
                <img v-if="false" class="battery_icon" src="@/assets/icons/battery_low.svg">
            </template>
            <GraphWrapper :wrapperId="element._id + '-1'" :data="element.sensor" :isTemperature="true" :isOk="element.tempOK" :minMaxValues="{min: element.minTemperature, max: element.maxTemperature }" />
            <GraphWrapper :wrapperId="element._id + '-2'" :data="element.sensor" :isTemperature="false" :isOk="element.humOK" :minMaxValues="{min: element.minHumidity, max: element.maxHumidity }"/>
            <div class="button-wrapper">
                <PrimeButton class="prime-button" @click="goToSingleView(element.name, element._id)">Einzelansicht</PrimeButton>
                <PrimeButton class="prime-button">Konfigurieren</PrimeButton>
            </div>
        </AccordionTab>
    </Accordion>
</template>

<script>
import GraphWrapper from '../elements/GraphWrapper.vue'
import { store } from '../../store/';

export default {
  components: { GraphWrapper },
    props: {
        iterable: Array,
    },
    data () {
        return {
            sharedState: store.state
        }
    },
    methods: {
        goToSingleView(fridgeName, sensorMac) {
            store.setCurrentFridgeName(fridgeName);
            store.setCurrentSensorMac(sensorMac);
            this.$router.push({path: '/singleview'});
        }
    }
}
</script>

<style scoped>

.in_box {
    margin: 2.5%;
}

.dot-icon {
    width: 17px;
    height: auto;
    margin-right: 5px;
}

.battery_icon {
    position: absolute;
    width: 5%;
    height: auto;
    right: 5%;
}

#accordion-header {
    display: flex;
    justify-content: space-between;
}

.button-wrapper {
    display: flex;
    justify-content: space-around;
}

.prime-button {
    border-radius: 0%;
    margin-right: 2.5%;
    margin-left: 2.5%;
}

.no-link-styling {
    text-decoration: none;
    color: white;
}
</style>