// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
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
import VueParticles from 'vue-particles'  
Vue.use(VueParticles)  
Vue.config.productionTip = false
Vue.prototype.$axios=axios;
Vue.prototype.message=((type,msg)=>{
  ElementUI.Message({
    type:type,
    message:msg,
    offset:100
  })
})
// axios.defaults.baseURL='http://www.tuling123.com/openapi/'
Vue.use(less);
Vue.use(ElementUI);
Vue.use(animated);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  axios,
  router,
  store,
  components:{ App },
  template: '<App/>'
})

axios.defaults.baseURL="http://localhost:9090"

 
