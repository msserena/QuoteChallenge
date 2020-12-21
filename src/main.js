import App from './App.vue'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

import './assets/css/app.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export const eventBus = new Vue();

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')

