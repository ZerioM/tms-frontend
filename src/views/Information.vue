<template>
  <ion-page>
    <ion-header :translucent="true">
      <Header title="Information" :searchable="true" />
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <Header title="Information" :searchable="true" />
      </ion-header>
      <div id="container">
        
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage } from '@ionic/vue';
import { defineComponent } from 'vue';
import Header from '@/components/semantic/Header.vue';

export default defineComponent({
  name: 'Home',
  components: {
    IonHeader,
    IonContent,
    IonPage,
    Header,
  },
});
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>