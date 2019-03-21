import Vue from 'vue';
import App from './App';
import vuc from "@vuc";
import {init} from "cdy-utils";

const {getInitRouter, getInitVuex} = init;
const confs = {
  store: [], router: [], callback: [],
};
Object.keys(vuc).forEach(item => {
  if (["store", "router", "callback"].includes(item)) {
    confs[item] = confs[item].concat(vuc[item]);
  } else {
    confs[item] = vuc[item];
  }
});
const router = getInitRouter.apply(null, confs.router);
const store = getInitVuex.apply(null, confs.store);
Vue.config.productionTip = false;
confs.callback && confs.callback.forEach(fn => {
  fn && fn({router, store})
});
export default new Vue({
  el: '#app',
  store: store,
  router,
  components: {App},
  template: '<App/>'
});
