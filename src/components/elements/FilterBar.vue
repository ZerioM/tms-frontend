<template>
  <div id="filter-wrapper">
    <div>
        <h3>Akku</h3>
        <Dropdown v-model="sharedState.selectedBatteryState" :options="batteryFilterOptions" optionLabel="name" optionValue="value" placeholder="Battery" />
    </div>
    <div>
        <h3>GPS</h3>
        <Dropdown v-model="sharedState.selectedGPSState" :options="gpsFilterOptions" optionLabel="name" optionValue="value" placeholder="GPS State" />
    </div>
    <SelectButton id="select-alpha" v-model="sharedState.orderAlphabetically" :options="alphabetOrderOptions" dataKey="value" optionValue="value">
        <template #option="slotProps">
            <i :class="[slotProps.option.icon]"></i>
        </template>
    </SelectButton>
  </div>
</template>

<script>
import * as options from '@/config/options';
import { store } from '@/store';

export default {
    data () {
        return {
            sharedState: store.state,
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
            ]
        }
    },
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