<template>
  <ion-app>
    <ion-header :translucent="true">
      <Header title="Kühlgeräte" />
    </ion-header>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import Header from '@/components/semantic/Header.vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    Header
  }
});
</script>