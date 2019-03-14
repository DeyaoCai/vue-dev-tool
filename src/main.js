import Vue from 'vue';
import App from './App';
import {getInitRouter, getInitVuex} from './init.js';
const router = getInitRouter([]);
const store = getInitVuex({});
Vue.config.productionTip = false;

export default new Vue({
  el: '#app',
  store: store,
  router,
  components: { App },
  template: '<App/>'
});
