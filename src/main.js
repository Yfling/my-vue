// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex';
import router from './router'

// 引入全局变量
import global_ from './components/Global'//引用文件
Vue.prototype.GLOBAL = global_//挂载到Vue实例上面

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
