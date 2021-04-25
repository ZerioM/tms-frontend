<template>
  <ion-app>
    <ion-header :translucent="true">
      <Header title="Kühlgeräte" />
    </ion-header>
    <ion-content>
      <ion-header collapse="condense">
        <Header title="Kühlgeräte" />
      </ion-header>
    </ion-content>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonHeader, IonContent, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import Header from '@/components/semantic/Header.vue';
import { mapActions } from 'vuex';

export default defineComponent({
  name: 'App',
  components: {
    IonHeader,
    IonContent,
    IonApp,
    IonRouterOutlet,
    Header
  },
  mounted: function() {
    this.getFridgesData()
  },
  methods: {
    ...mapActions(['getFridgesData'])
  }
});
</script>