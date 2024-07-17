import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { IonicVue } from '@ionic/vue';

import '@ionic/core/css/ionic.bundle.css';

Vue.use(IonicVue);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
