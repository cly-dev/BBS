import { Form } from 'element-ui';
import NProgress from 'nprogress';
import router from "../router";
import store from "../store";
router.beforeEach((to, from ,next) => {
  NProgress.start();
  next();
  if(to.name=="register" || to.name=="forgetpassword"){
    next();
  }else{
  if(to.name!="index"){
  if(!store.state.loginstatus){
    if((localStorage.getItem("token"))){
        next();
    }else{
        if(!from.meta.auth){
          if(to.name=="login"){
            next()
          }else{
          next("/login");
          }
        }
    }
    handleEdit(to,from);
    next();
  }else{
    handleEdit(to,from);
        next();
    }
  }else{
    console.log(111);
    handleEdit(to,from);
    next();
  }
if(to.name=="articledetails"){
    localStorage.setItem("router","articledetails");
}else if(to.name=='hotlist' || to.name=='follow' || to.name=='square'){
    localStorage.setItem("router","campus");
}else if(to.name=="questdetail"){
  localStorage.setItem("router","questdetail");
}else{
  localStorage.setItem("router","");
}
}})

router.afterEach(() => {
    // 在即将进入新的页面组件前，关闭掉进度条
    NProgress.done();
})

function handleEdit(to,from){
  if(to.name!="article"){
    if(from.meta.edit==false){
       if(store.state.quitFlag==false){
               if(confirm("当前文字为发布是否离开?")){
                 NProgress.start();
               }
       }
     }
  } 
}
