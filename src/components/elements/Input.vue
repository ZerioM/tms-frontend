<template>
  <ion-input @keyup.enter="updateSearch()" v-model="sharedState.searchText"></ion-input>
</template>

<script>
import { IonInput } from '@ionic/vue';
import { store } from '@/store';
import * as filterUtils from '@/config/filterUtils';

export default {
    data () {
        return {
            sharedState: store.state,
        }
    },
    props: {
        isOnFridges: Boolean,
    },
    components: {
        IonInput,
    },
    methods: {
        updateSearch() {
            // TODO
            if(this.isOnFridges){
                filterUtils.updateFilterSearch();
            }
        }
    }
}
</script>

<style scoped>
ion-input {
    background-color: white;
}
</style>