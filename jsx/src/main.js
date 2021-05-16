import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import MyPlugin from "./plugin/myplugin";
import SlideVerify from 'vue-monoplasty-slide-verify';
Vue.use(SlideVerify);
Vue.config.productionTip = false;
Vue.use(MyPlugin);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
//兄弟组件之间的通信

export default new Vue();
