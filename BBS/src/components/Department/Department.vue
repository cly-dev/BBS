<template>
  <div style="height:100%;display: flex;">
    <!-- 导航 -->
      <div class="department_nav">
        <div class="logo_container">
          
        </div>
        <!-- 个人信息 -->
        <div class="person_info">
            <img :src="!this.$store.state.user.selfImage?'../../../static/images/user.png':this.$store.state.user.selfImage " alt="请检查网络" class="person_portrait">
            <div class="info_container">
                <span>{{this.$store.state.user.userName}}<img src="../../../static/images/grade/用户_等级3.png" class="grade_img"></span>
                <span></span>
            </div>
        </div>
        <!-- 导航菜单 -->
         <div class="menu_container">
          <ul class="menu_main">
               <li> <router-link to="/department/index" tag="span">首页</router-link></li>
               <!-- 活动 -->
               <li class="active_container">
                 <span>活动</span>
               </li>
               <div class="active_main">
                      <ul>
                          <router-link to="/department/watch-activity"><li>查看活动</li></router-link>
                         <router-link to="/department/createactivity"><li>发布活动</li></router-link>
                          <router-link to="/department/my-activity"><li>我的活动</li></router-link>
                      </ul>
               </div>
               <!-- 管理 -->
               <li class="admin_container"><span>管理</span></li>
               <div class="admin_main">
                      <ul>
                        <router-link to="/department/my-department"> 
                            <li>我的部门</li>
                        </router-link>
                        <!-- <router-link to="/department/createdepartment"> 
                           <li>添加部门</li>
                        </router-link> -->
                        <!-- <router-link to="/department/admin-department"> 
                        <li>管理部门</li>
                        </router-link> -->
                      </ul>
               </div>
               <!-- 消息 -->
               <li class="msg_container">
                 <span>消息</span></li>
               <div class="msg_main">
                      <ul>
                        <li>面试通知</li>
                        <li>部门消息</li>
                        <li>社团消息</li>
                      </ul>
               </div>
               <li><span>个人中心</span></li>
               <li><span>活跃排行</span></li>
               <li><span>关于我们</span></li>
          </ul>
            <!--返回主页  -->
          <ul class="backhome">
            <router-link to="/index"><li><span>返回主页</span></li></router-link>
          </ul>
          </div>
      </div>
      <!-- 主体 -->
      <div class="department_contain">
        <!-- 面板屑 -->
       
        <!-- 头部图片 -->
      <!-- 主页修饰图片 -->
     <vue-particles color="#dedede" class="vertical"></vue-particles>
       <div class="vertical_content">
          <span>生活总得经历苦难</span>
          <span>难后必有得</span>
       </div>
       <!-- 诗句 -->
    <div class="poetry_contain">
        <span class="verticalline"></span>
        <div class="poetry_content">
          <span>
          读万卷书
          &nbsp;
          行万里路
          </span>
        </div>
    </div>
      <!-- 面包屑 -->
      <div class="panel_chip"> 
         您所在的位置:<span>{{this.$route.name}} </span>  
      </div>
       <!-- 路由 -->
        <router-view></router-view>
      </div>

   </div>
</template>
<script>
  export default{
    data:()=>{
      return{
        activeMain:false,
        adminMain:false,
      }
    },
    methods:{

    },
    computed:{

    },
    watch:{

    },
    mounted(){
      $(".active_container").on("click",()=>{
          $(".active_main").slideToggle();
      })

      $(".admin_container").on("click",()=>{
          $(".admin_main ").slideToggle();
      })

      $(".msg_container").on("click",()=>{
        $(".msg_main").slideToggle();
      })


      $(".menu_main>li").on('click',(e)=>{
        $(".menu_main>li").css({"background":"","color":''});
        if(e.target.nodeName=="LI"){
          e.target.style.background="#0077AA";
          e.target.style.color="#ffffff";
        }else{
          e.target.parentElement.style.background="#0077AA";
          e.target.parentElement.style.color="#ffffff";
        }

        //  $(".vertical").hover((e)=>{
        //       $(".vertical").css({"transform":`matrix(1.05, 0, 0, 1.05, ${e.pageX / 100},  ${e.pageY / 100})`,"fliter":"blur(10px)"});
        //       $(".poetry_contain").slideDown();
        //       console.log(1)
        //   },()=>{
        //     $(".poetry_contain").slideUp();
        //       console.log(11)
        //     $(".vertical").css("transform","matrix(1, 0, 0, 1, 0, 0)");
        //   }
        //   )
      })
      // .hover((e)=>{
      //  if(e.target.nodeName=="LI"){
      //    e.target.style.color="#ffffff";
      //  }else{
      //    e.target.parentElement.style.color="#ffffff";
      //  }
      // },(e)=>{
      //   if(e.target.nodeName=="LI"){
      //   }else{
      //     e.target.parentElement.style.color="#606266";
      //   }

      // })

      $(".department_nav").hover(()=>{
      },()=>{
          $(".menu_container div[class $= '_main']").slideUp();
      })
    },
    created(){
        
    }

  }
</script>

<style lang="less" scoped="scoped">
  @import "../../../static/less/department.less";
</style>
