// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/styles/common.scss'; // 全局公共样式
import 'normalize.css'; // A modern alternative to CSS resetsnpm
import { Toast } from 'mint-ui';
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import VueLazyload from 'vue-lazyload'
import 'lib-flexible/flexible'


Vue.config.productionTip = false;

Vue.prototype.$toast = Toast

Vue.use(VueLazyload)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
