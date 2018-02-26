// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex';
import router from './router'

Vue.config.productionTip = false
Vue.use(Vuex);

//ov const store = new Vuex.Store({
//   "state": {
//     "limit": 0
//   },
//   "mutations": {
//     "updateLimit"(state, user){
//       if (user) {
//         state.limit = user.limit;
//       } else {
//         state.limit = 0;
//       }
//     }
//   }
// });


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
