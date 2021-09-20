import store from "../store/index";
const User={};
// 获取id插件
User.install=function(Vue){
    Vue.prototype.$GetUserId=()=>{
        if(JSON.stringify(store.state.user!={})){
            return store.state.user.userId;
        }
    }
}
export default User;