// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App'
import router from './router';
import Vuex from 'vuex';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../static/css/gobal.css';
import less from 'less';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import 'element-ui/lib/theme-chalk/display.css';
import '../static/css/style.css';
import axios from 'axios';
import waterfall from 'vue-waterfall2';
import animated from '../static/css/animate.css' ;
import store from './store/index.js';
import 'jquery';
Vue.use(waterfall);
Vue.config.productionTip = false
Vue.prototype.$axios=axios;
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
NProgress.configure({
    easing: 'ease',  // 动画方式
    speed: 500,  // 递增进度条的速度
    showSpinner: false, // 是否显示加载ico
    trickleSpeed: 200, // 自动递增间隔
    minimum: 0.3 // 初始化时的最小百分比
})
axios.interceptors.request.use(config=>{
  NProgress.start();
  return config;
},err=>console.log(err));
axios.interceptors.response.use(config=>{
  NProgress.done(true);
  return config;
},err=>console.log(err));

router.beforeEach((to, from , next) => {
    // console.log(to);
    // 每次切换页面时，调用进度条

    // 这个一定要加，没有next()页面不会跳转的。这部分还不清楚的去翻一下官网就明白了
    // next();
    //判断路由信息是否到详情页
    if(to.name=="articledetails"){
        localStorage.setItem("router","articledetails");
    }else if(to.name=='hoslist'){
        localStorage.setItem("router","campus");
    }else{
      localStorage.setItem("router","");
    }
    if(to.name!="article"){

      console.log(to);
      if(from.meta.auth==false){

         if(store.state.quitFlag==false){
                //消息提示
               // ElementUI.Message.error('后台异常，请刷新或确认后台是否正常启动')
                 // ElementUI.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                 //         confirmButtonText: '确定',
                 //         cancelButtonText: '取消',
                 //         type: 'warning'
                 //       })
                 if(confirm("当前文字为发布是否离开?")){
                   NProgress.start();
                   next();
                 }else{
                 }
         }else{
           NProgress.start();
           next();
         }
       }else{
         NProgress.start();
         next();
       }
    }else{
      NProgress.start();
      next();
    }
});
router.afterEach(() => {
    // 在即将进入新的页面组件前，关闭掉进度条
    NProgress.done();
})
