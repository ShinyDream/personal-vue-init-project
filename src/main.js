import Vue from 'vue';
import Router from './router/index';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

let mainVue = new Vue({
  el: "#homePage",
  router: Router
});