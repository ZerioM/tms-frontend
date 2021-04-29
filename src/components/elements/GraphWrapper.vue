<template>
    <div id="graph-wrapper">
        <div id="date-selector">
            <div class="picker">
                <label for="fromDatePicker">Von</label>
                <Calendar id="fromDatePicker" v-model="fromDate" :showIcon="true" dateFormat="dd.mm.yy" />
            </div>
            <div class="picker">
                <label for="toDatePicker">Bis</label>
                <Calendar id="toDatePicker" v-model="toDate" :showIcon="true" dateFormat="dd.mm.yy"/>
            </div>
            <PrimeButton id="select-timeframe-button">Anwenden</PrimeButton>
        </div>
        <Graph />
        <div class="current-value" v-if="isTemperature && data != null">
            <p>Aktuelle Temperatur</p>
            <p class="color-green">19.02°C</p>
        </div>
        <div class="current-value" v-if="!isTemperature && data != null">
            <p>Aktuelle Luftfeuchtigkeit</p>
            <p class="color-green">56.43%</p>
        </div>
    </div>
</template>

<script>
import Graph from './Graph.vue'
export default {
  components: { Graph },
    data () {
        return {
            fromDate: null,
            toDate: null
        }
    },
    props: {
        data: [],
        isTemperature: Boolean,
    }
}
</script>

<style>
#date-selector {
    display: flex;
    justify-content: space-between;
}

.picker {
    width: 30%;
}

#select-timeframe-button {
    border-radius: 0%;
    height: 80%;
    margin-top: 20px;
}

.p-calendar {
    width: 90%;
    height: auto;
}

.p-calendar .p-inputtext {
    font-size: 12px;
    width: 100%;
}

.current-value {
    display: flex;
    flex-flow: column;
    align-items: center;
    font-weight: 500;
}

.color-green {
    color: #8CC63F;
}
</style>