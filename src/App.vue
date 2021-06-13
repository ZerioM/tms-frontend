<template>
  <ion-app>
    <ion-content>
      <ion-router-outlet />
    </ion-content>
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonContent, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'App',
  components: {
    IonContent,
    IonApp,
    IonRouterOutlet
  },
});
</script>