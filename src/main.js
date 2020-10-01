import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from './router'
import Vuex from "vuex";
import store from "./store";

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false

Vue.use(Vuex);
Vue.config.productionTip = false

new Vue({
  store, router: router,
  render: h => h(App),
}).$mount('#app')
