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
            fromDate: null,
            toDate: null,
            mostRecentTimestamp: new Date('January 1, 1970 0:00:00'),
            currentTemperature: 0,
            currentHumidity: 50
        }
    },
    props: {
        data: [],
        isTemperature: Boolean,
        isOk: Boolean,
    },
    computed: {
        getCurrentHumidity() {
            console.log(this.data);
            if(this.data != null && this.data.length != 0){

                this.data.forEach(dataElement => {

                    if(new Date(dataElement.timestamp).getTime() > new Date(this.mostRecentTimestamp).getTime()){

                        this.mostRecentTimestamp = dataElement.timestamp;
                        this.currentHumidity = dataElement.humidity.$numberDecimal;

                    }
                });
            }

            console.log("Current Humidity: ", this.currentHumidity);
            return this.currentHumidity;
        },
        getCurrentTemperature() {
            if(this.data != null && this.data.length != 0){

                this.data.forEach(dataElement => {

                    if(new Date(dataElement.timestamp).getTime() > new Date(this.mostRecentTimestamp).getTime()){

                        this.mostRecentTimestamp = dataElement.timestamp;
                        this.currentTemperature = dataElement.temperature.$numberDecimal;

                    }

                });
            }

            console.log("Current Temperature: ", this.currentTemperature);
            return this.currentTemperature;
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

.color-red {
    color: #ff0000;
}
</style>