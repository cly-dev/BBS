import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
			  state:{
         faroutername:'home',
         loginstatus:false,
         //判断文章编辑状态
         quitFlag:true

			  },
			  mutations: {
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
