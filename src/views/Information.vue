<template>
  <ion-page>
    <ion-header :translucent="true">
      <Header :title="messages.INFORMATION_TITLE" :searchable="true" :isOnFridges="false" />
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <Header :title="messages.INFORMATION_TITLE" :searchable="true" :isOnFridges="false" />
      </ion-header>
      <ExpandableInformation id="expandable" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage } from '@ionic/vue';
import { defineComponent } from 'vue';
import Header from '@/components/semantic/Header.vue';
import ExpandableInformation from '@/components/semantic/ExpandableInformation.vue';
import * as messages from '@/config/messages';

export default defineComponent({
  name: 'Home',
  components: {
    IonHeader,
    IonContent,
    IonPage,
    Header,
    ExpandableInformation,
  },
  data () {
    return {
      messages: messages,
    }
  }
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