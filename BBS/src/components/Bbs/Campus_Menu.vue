<template>
  <div class="menu_container">
    <div class="menu_nav">
      <ul>
          <router-link to="/campus/follow">
            <li :class="{actives:this.$route.name==='follow'}">关注</li>
          </router-link>
          <router-link to="/campus/hotlist">
            <li :class="{actives:this.$route.name==='hotlist'}">热榜</li>
          </router-link>
          <router-link to="/campus/square">
            <li :class="{actives:this.$route.name==='square'}">广场</li>
          </router-link>
      </ul>
    </div>
    <keep-alive><router-view></router-view></keep-alive>
  </div>
</template>
<script>
  export default{
    name:"hotlist",
    data(){
      return{
           activeName:'hoslist',
      }
    },
    methods:{
        
    },
    watch:{
      index:(newV,orderV)=>{
        console.log(newV);
        console.log(orderV);
    },
    // activeName:(newV,orderV)=>{
    //   console.log(newV);
    //   console.log(orderV);
    // }
  },
  created(){
    // this.$nextTick(()=>{
    //   if(!localStorage.getItem("campusmenu") || localStorage.getItem("campusmenu")=="" ){
    //     this.activeName='second';
    //     console.log(111);
    //   }else{
    //       console.log(11);
    //      this.activeName=localStorage.getItem("campusmenu");
    //      localStorage.setItem("campusmenu","");
    //   }
    // })
    console.log(this.$route.name);
    this.$nextTick(()=>{
      this.activeName=this.$route.name;
    })
  },
  mounted(){
      $(".menu_nav li").on("click",(e)=>{
        $(".menu_nav li").css("color","");
        e.target.style.color="#409EFF";
        // if(e.target.innerText === "广场"){
        //   console.log(3);
        //    this.$router.push({
        //           name:'square'
        //         })
        // }else if(e.target.innerText === "热榜"){
        //   console.log(2);

        //   this.$router.push({
        //         name:'hoslist'
        //       })
        // }else{
        //   console.log(1);
        //    this.$router.push({
        //         name:"follow"
        //       })
        // }
    })
  }
  }
</script>

<style lang="less"> 
@import "../../../static/less/campusmune.less";
.actives{
  color:#409EFF !important;
}
</style>
