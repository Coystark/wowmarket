/* Vue */
import Vue from 'vue';
import App from './App.vue';
import router from './router';

/* Configs */
import * as config from './config.json';

/* Boostrap */
import 'bootstrap';

/* Icons */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';

library.add(faAlignJustify);
Vue.component('font-awesome-icon', FontAwesomeIcon);

/* Globals */
Vue.prototype.$serverUrl = config.serverUrl;
Vue.prototype.$adminEmail = config.adminEmail;

/* Production mode? */
Vue.config.productionTip = true;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
