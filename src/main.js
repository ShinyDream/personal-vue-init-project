import Vue from 'vue';
import Router from './router';
import Vuetify from 'vuetify';
import HomePage from '@/modules/HomePage';

Vue.use(Vuetify);

let mainVue = new Vue({
  el: "#homePage",
  router: Router,
  template: '<HomePage/>',
  components: {
    HomePage
  }
});