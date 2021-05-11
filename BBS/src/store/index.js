import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
			  state:{
        //登录状态
        loginstatus:false,
        //用户信息
        user:null,
        //路由
         faroutername:'home',
         loginstatus:false,
         //判断文章编辑状态
         quitFlag:true,
         //存储身份
         identity:'',
        //文章id
			  },
			  mutations: {
          //切换用户权限
          JurisdictionAdmin(state){
            state.identity="admin";
          },
          JurisdictionUser(state){
            state.identity="user";
          },
          //登录事件
          handleLogin(state){
            state.loginstatus=true;
          },
          //登录保存user信息
          handleUser(state,data){
            state.user=data.user;
          },
          //清除用户登陆信息
          handleCancel(state){
            state.user=null;
          },
          //获取用户权限信息
          handlePosition(state,data){
            state.identity=data.identity;
          },
          //修改用户头像
          handleImg(state,data){
            state.user.selfImage= state.user.selfImage && data.selfImage;
          },
           nocanQuit (state){
            state.quitFlag=false;
          },
          canQuit (state){
            state.quitFlag=true;
          }

			  },
     
			});

//页面重新加载时，将信息返回给vuex

export default store
