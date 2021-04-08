import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
			  state:{
        //登录状态
        loginstatus:false,
         faroutername:'home',
         loginstatus:false,
         //判断文章编辑状态
         quitFlag:true,
         //存储身份
         identity:'user',
        //文章id
			  },
			  mutations: {
          handleLogin(state){
            state.loginstatus=true;
          },
			    increment (state) {
			      state.count++
			    },
           nocanQuit (state){
            state.quitFlag=false;
          },
          canQuit (state){
            state.quitFlag=true;
          }

			  }
			});


export default store
