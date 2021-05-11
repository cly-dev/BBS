import Vue from 'vue';
import App from './App'
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../static/css/gobal.css';
import less from 'less';
import "./config/progress";
import 'nprogress/nprogress.css';
import 'element-ui/lib/theme-chalk/display.css';
import '../static/css/style.css';
import axios from 'axios';
import store from './store/index.js';
import animated from '../static/css/animate.css' ;
import "../static/css/iconfont.css";
import 'jquery';
import "./api/router";
import User from "./plugin/user";
import Message from "./plugin/message";
import VueParticles from 'vue-particles'
import SlideVerify from 'vue-monoplasty-slide-verify';
import {host} from "../src/config/host";
Vue.use(User);
Vue.use(SlideVerify);
Vue.use(VueParticles)  
Vue.use(Message);
Vue.use(less);
Vue.use(ElementUI);
Vue.use(animated);
Vue.config.productionTip = false
Vue.prototype.$axios=axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  axios,
  router,
  store,
  components:{ App },
  template: '<App/>'
})
//用户刷新之前保留信息和权限
window.addEventListener("beforeunload",()=>{
  if(JSON.stringify(store.state.user)!="{}" || store.state.user!=null ){
      sessionStorage.setItem("user",JSON.stringify(store.state.user));
      sessionStorage.setItem("position",store.state.identity);
  }
});
axios.defaults.baseURL=host.BaseUrl;


 
