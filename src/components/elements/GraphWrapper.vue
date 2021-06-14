<template>
    <div id="graph-wrapper">
        <div id="date-selector">
            <div class="picker">
                <label :for="'fromDatePicker-' + wrapperId">Von</label>
                <Calendar :id="'fromDatePicker-' + wrapperId" v-model="fromDate" :showIcon="true" dateFormat="dd.mm.yy" />
            </div>
            <div class="picker">
                <label :for="'toDatePicker-' + wrapperId">Bis</label>
                <Calendar :id="'toDatePicker-' + wrapperId" v-model="toDate" :showIcon="true" dateFormat="dd.mm.yy"/>
            </div>
            <PrimeButton id="select-timeframe-button" @click="redrawChart()">Anwenden</PrimeButton>
        </div>
        <Graph :zoomDates="zoomDates"/>
        <div class="current-value" v-if="isTemperature && data != null">
            <p>Aktuelle Temperatur</p>
            <p v-if="isOk" class="color-green">{{getCurrentTemperature}}°C</p>
            <p v-else class="color-red">{{getCurrentTemperature}}°C</p>
        </div>
        <div class="current-value" v-if="!isTemperature && data != null">
            <p>Aktuelle Luftfeuchtigkeit</p>
            <p v-if="isOk" class="color-green">{{getCurrentHumidity}}%</p>
            <p v-else class="color-red">{{getCurrentHumidity}}%</p>
        </div>
    </div>
</template>

<script>
import Graph from './Graph.vue'
export default {
  components: { Graph },
    data () {
        return {
            fromDate: undefined,
            toDate: undefined,
            zoomDates: { fromDate: undefined, toDate: undefined },
            mostRecentTimestamp: new Date('January 1, 1970 0:00:00'),
            currentTemperature: 0,
            currentHumidity: 50
        }
    },
    props: {
        wrapperId: String,
        data: Array,
        isTemperature: Boolean,
        isOk: Boolean,
    },
    computed: {
        getCurrentHumidity() {
            if(this.data != null && this.data.length != 0){
                /* eslint-disable */
                this.currentHumidity = this.data[this.data.length - 1].humidity;

            } else {
                this.currentHumidity = 50;
            }
            return this.currentHumidity;
        },
        getCurrentTemperature() {
            if(this.data != null && this.data.length != 0){
                /* eslint-disable */
                this.currentTemperature = this.data[this.data.length - 1].temperature;

            } else {
                this.currentTemperature = 0;
            }
            return this.currentTemperature;
        }
    },
    methods: {
        redrawChart() {
            console.log("From Date: ", typeof(this.fromDate));

            this.zoomDates = {
                fromDate: this.fromDate,
                toDate: this.toDate
            };
        }
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
    font-size: 11px;
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

.color-red {
    color: #ff0000;
}
</style>