<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
       window.addEventListener("load",()=>{

    //   if(sessionStorage.getItem("user")){
    //     let user=JSON.parse(sessionStorage.getItem("user"));
    //     let p=new Promise((resolve,reject)=>{
    //     this.$store.commit('handleUser',{
    //     user
    //     });
    //     resolve(this.$store.state.user);
    //     })
    // }
  })
  },
  created(){
    //重新加载数据到vuex
    $(document).ready(()=>{
       if(sessionStorage.getItem("user") && this.$store.state.user!=''){
        let user=JSON.parse(sessionStorage.getItem("user"));
        let identity=sessionStorage.getItem("position");
        this.$store.commit('handleUser',{
          user
        });
        this.$store.commit('handlePosition',{
         identity
        })
        if(this.$store.state.user!={}){
          sessionStorage.clear();
        }
       }
    })
  
  }
}
</script>
<style lang="less" scoped>
  body{
      background:#f7f7f7;
  }
</style>
