// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './common/rem';
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';

import { Lazyload } from 'vant';

// options 为可选参数，无则不传


// options 为可选参数，无则不传

import 'vant/lib/vant-css/index.css';

Vue.use(Vant);
Vue.use(Lazyload);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
