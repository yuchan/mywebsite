// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
// globally (in your main .js file)
Vue.component('icon', Icon);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
