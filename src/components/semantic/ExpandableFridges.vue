<template>
    <Accordion class="in_box" :multiple="true">
        <AccordionTab v-for="element in iterable" :key="element['_id']">
            <template #header id="accordion-header">
                <span v-if="(element.humOK && element.tempOK)">🟢 {{element.name}}</span>
                <span v-if="(element.humOK && !element.tempOK) || (!element.humOK && element.tempOK)"> 🟡 {{element.name}}</span>
                <span v-if="(!element.humOK && !element.tempOK)"> 🔴 {{element.name}} </span>
                <img v-if="true" class="battery_icon" src="@/assets/icons/battery_full.svg">
                <img v-if="false" class="battery_icon" src="@/assets/icons/battery_middle.svg">
                <img v-if="false" class="battery_icon" src="@/assets/icons/battery_low.svg">
            </template>
            <GraphWrapper :data="element.sensor" :isTemperature="true" :isOk="element.tempOK" />
            <GraphWrapper :data="element.sensor" :isTemperature="false" :isOk="element.humOK" />
            <div class="button-wrapper">
                <PrimeButton class="prime-button">Einzelansicht</PrimeButton>
                <PrimeButton class="prime-button">Konfigurieren</PrimeButton>
            </div>
        </AccordionTab>
    </Accordion>
</template>

<script>
import GraphWrapper from '../elements/GraphWrapper.vue'
export default {
  components: { GraphWrapper },
    props: {
        iterable: Array,
    },
}
</script>

<style scoped>

.in_box {
    margin: 2.5%;
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
</style>