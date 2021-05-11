import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path:'/',
      name:'index',
      component:()=>import("../components/public/Index.vue")
    },
    //登录
    {
      path: '/login',
      name:'login',
      component:()=>import("../components/public/Login.vue")
    },
   //首页
    {
      path:'/index',
      name:'index',
      component:()=>import("../components/public/Index.vue"),
      meta:{
        auth:false
      }
    },
    //忘记密码
    {
      path:'/ForgetpassWord',
      name:'forgetpassword',
      component:()=>import("../components/public/ForgetpassWord.vue")

    },
    //注册
    {
      path:"/register",
      name:'register',
      component:()=>import('../components/public/Register.vue')
    },
    //个人中心
    {
      path:"/people",
      name:"my",
      component:()=>import("../components/public/My.vue"),
      redirect:{
      name:'trends',
      },
      children:
      [
        {
        path:"/people/index",
        name:"peopleindex",
        component:()=>import("../components/public/Myindex.vue"),
        children:[
          {
          path:"/people/index/trends",
          name:"trends",
          component:()=>import("../components/public/Trends.vue")
        },
        {
          path:"/people/index/article",
          component:()=>import("../components/public/MyArticle.vue")
        },{
          path:"/people/index/question",
          component:()=>import("../components/public/MyQuestion.vue"),
        },{
          path:"/people/index/core",
          component:()=>import("../components/public/MyCore.vue"),
        },{
          path:"/people/index/fans",
          component:()=>import("../components/public/MyFans.vue"),
        },{
          path:"/people/index/collection",
          component:()=>import("../components/public/MyCore.vue"),
        },{
          path:"/people/index/release",
          component:()=>import("../components/public/MyRelease.vue")
        }
      ]
      }
    ]
    },
    //论坛
    {
      path:'/campus',
      name:'campus',
      component:()=>import("../components/Bbs/Campus.vue"),
      redirect:{
        name:'hoslist'
      },
      children:[
        {
          path:'/campus/menu',
          name:"menu",
          component:()=>import("../components/Bbs/Campus_Menu.vue"),
          children:[
           {
             path:'/campus/hotlist',
             name:'hotlist',
             component:()=>import("../components/Bbs/Hotlist.vue")
           },
           {
             path:'/campus/follow',
             name:'follow',
             component:()=>import("../components/Bbs/Follow.vue")
           },
           {
             path:'/campus/square',
             name:'square',
             component:()=>import("../components/Bbs/Square.vue")
           }
          ]
        },
        {
          path:'/campus/hotlist/articledetails',
          name:'articledetails',
          component:()=>import("../components/Bbs/Articledetails.vue")
        },
        {
          path:'/campus/quest/questdetail',
          name:'questdetail',
          component:()=>import("../components/Bbs/Questiondetail.vue")
        },
         {
           path:"/campus/questions",
           name:'questions',
           component:()=>import("../components/Bbs/Questions.vue")
         },
         {
         path:"/campus/article",
         name:'article',
         component:()=>import("../components/Bbs/Article.vue"),
         meta:{
              edit:false,
         }
         },{
           path:"/campus/collection",
           name:"collection",
           component:()=>import("../components/Bbs/Collection.vue")
         },{
           path:"/campus/collection-article",
           name:"collection-article",
           component:()=>import("../components/Bbs/CollectionArticle.vue")
         },{
           path:"/campus/collection-question",
           name:"collection-question",
           component:()=>import("../components/Bbs/CollectionQuest.vue")
         },{
           path:"/campus/track",
           name:"track",
           component:()=>import("../components/Bbs/Track.vue")
         },{
           path:"/campus/My-questision",
           name:"Myquestision",
           component:()=>import("../components/Bbs/MyQuesition.vue")
         },{
           path:"/campus/My-propose",
           name:"Mypropose",
           component:()=>import("../components/Bbs/MypPopose.vue")
         },{
           path:"/campus/Revise-acticle",
           name:"Revuseacticle",
           component:()=>import("../components/Bbs/ReviseActicle.vue")
         },{
           path:"/campus/Revise-question",
           name:"Revisequestion",
           component:()=>import("../components/Bbs/ReviseQuestion.vue")
         },{
           path:"/campus/help",
           name:"Help",
           component:()=>import("../components/Bbs/Help.vue")
         }
      ]
    },
    {
      path:'/headerForum',
      name:'headerForum',
      component:()=>import("../components/Bbs/HeaderForum.vue")
    },

    //部门
    {
      path:'/department',
      name:'部门主页',
      component:()=>import("../components/Department/Department.vue"),
      redirect:{
        name:'部门首页'
      },
      children:[
        {
          path:"/department/index",
          name:'部门首页',
          component:()=>import("../components/Department/Index.vue")
        },{
          path:"/department/createactivity",
          name:'活动/发布活动',
          component:()=>import("../components/Department/CreateAcvitity.vue")
        },{
          path:"/department/createdepartment",
          name:'添加部门',
          component:()=>import("../components/Department/CreateDepartment.vue")
        },{
          path:"/department/my-activity",
          name:"活动/我的活动",
          component:()=>import("../components/Department/MyActivity.vue")
        },{
          path:"/department/take-activity",
          name:"活动/我的活动/我参加的",
          component:()=>import("../components/Department/TakeActivity.vue")
        },{
          path:"/department/release-activity",
          name:"活动/我的活动/我发布的",
          component:()=>import("../components/Department/ReleaseActivity.vue")
        },{
          path:"/department/watch-activity",
          name:"活动/全部活动",
          component:()=>import("../components/Department/WatchActivity.vue")
        },{
          path:"/department/detail-activity",
          name:"活动/活动详情",
          component:()=>import("../components/Department/ActivityDetail.vue")
        },{
          path:"/department/my-department",
          name:"部门/我的部门",
          component:()=>import("../components/Department/MyDepartment.vue")
        },{
          path:"/department/identification",
          name:"部门/认证",
          component:()=>import("../components/Department/Identification.vue")
        }
      ]
    },
    {
      path:'*',
      name:'404',
      component:()=>import ("../components/404.vue")
    },
  
  ],
  //路由滚动事件
  scrollBehavior (to, from, savedPosition) {
    if(savedPosition){
      return savedPosition;
    }else{
      return{
        y:0
      }
    }
  }
})

const VueRouterPush = Router.prototype.push
Router.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
