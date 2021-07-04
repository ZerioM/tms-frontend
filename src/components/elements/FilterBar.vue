<template>
  <div id="filter-wrapper">
    <div class="filter">
        <h3>{{ messages.COOLING_FILTER_TITLE }}</h3>
        <Dropdown class="filter-drpdwn" @change="updateSortingAndFiltering()" v-model="sharedState.selectedCoolingState" :options="coolingFilterOptions" optionLabel="name" optionValue="value" placeholder="Alle"/>
    </div>
    <div class="filter">
        <h3>{{ messages.BATTERY_FILTER_TITLE }}</h3>
        <Dropdown class="filter-drpdwn" @change="updateSortingAndFiltering()" v-model="sharedState.selectedBatteryState" :options="batteryFilterOptions" optionLabel="name" optionValue="value" placeholder="Alle" />
    </div>
    <div class="filter">
        <h3>{{ messages.GPS_FILTER_TITLE }}</h3>
        <Dropdown class="filter-drpdwn" @change="updateSortingAndFiltering()" v-model="sharedState.selectedGPSState" :options="gpsFilterOptions" optionLabel="name" optionValue="value" placeholder="Alle" />
    </div>
    <SelectButton id="select-alpha" @click="updateSortingAndFiltering()" v-model="sharedState.orderAlphabetically" :options="alphabetOrderOptions" dataKey="value" optionValue="value">
        <template #option="slotProps">
            <i :class="[slotProps.option.icon]"></i>
        </template>
    </SelectButton>
  </div>
</template>

<script>
import * as options from '@/config/options';
import { store } from '@/store';
import * as filterUtils from '@/config/filterUtils';
import * as messages from '@/config/messages';

export default {
    data () {
        return {
            sharedState: store.state,
            messages: messages,
            orderAlphabettically: null,
            alphabetOrderOptions: [
                {icon: 'pi pi-sort-alpha-down', value: options.ALPHABETICALLY},
                {icon: 'pi pi-sort-alpha-up', value: options.REVERSE_ALPHABETICALLY}
            ],
            gpsFilterOptions: [
                {name: 'Aktiv', value: options.GPS_ACTIVATED },
                {name: 'Inaktiv', value: options.GPS_NOT_ACTIVATED },
                {name: 'Alle', value: options.NONE },
            ],
            batteryFilterOptions: [
                {name: 'Voll', value: options.BATTERY_FULL},
                {name: 'Mittel', value: options.BATTERY_MEDIUM},
                {name: 'Gering', value: options.BATTERY_LOW},
                {name: 'Alle', value: options.NONE }
            ],
            coolingFilterOptions: [
                {name: '🟢', value: options.COOLING_HUM_OK},
                {name: '🟡', value: options.COOLING_OR_HUM_NOT_OK},
                {name: '🔴', value: options.COOLING_AND_HUM_NOT_OK},
                {name: 'Alle', value: options.NONE}
            ]
        }
    },
    methods: {
        updateSortingAndFiltering() {
            console.log("Filter By: ", this.sharedState.selectedCoolingState + ' | ' + this.sharedState.selectedGPSState + ' | ' + this.sharedState.selectedBatteryState)
            store.setSearchText('');
            filterUtils.updateSortingAndFiltering();
        }, 
    }
}
</script>

<style scoped lang="scss">
@import '@/main.scss';

    #filter-wrapper {
        margin: 2.5%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    #select-alpha {
        margin-top: 17px;
        min-width: 100%;
        margin-left: 10px;
    }

    h3 {
        font-family: $font-main;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 13px;
        letter-spacing: 0px;
        text-align: left;
        margin-bottom: 5px;
        margin-top: 0;
    }
</style>