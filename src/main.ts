import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* PrimeVue */
import PrimeVue from 'primevue/config';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Button from 'primevue/button';
import Calendar from 'primevue/calendar';
import Message from 'primevue/message';
import Galleria from 'primevue/galleria';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import SelectButton from 'primevue/selectbutton';
import Dropdown from 'primevue/dropdown';

import 'primevue/resources/themes/saga-blue/theme.css';       //theme
import 'primevue/resources/primevue.min.css';                 //core css
import 'primeicons/primeicons.css';                   //icons

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(PrimeVue);

app.component('Accordion', Accordion);
app.component('AccordionTab', AccordionTab);
app.component('PrimeButton', Button);
app.component('Calendar', Calendar);
app.component('Message', Message);
app.component('Galleria', Galleria);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('SelectButton', SelectButton);
app.component('Dropdown', Dropdown);
  
router.isReady().then(() => {
  app.mount('#app');
});