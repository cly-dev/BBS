import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import In from '@/components/In'
import List from '@/components/List'
import Knowledge from '@/components/Knowledge'
import Campus from '@/components/Campus.vue'
import Hotlist from '@/components/Hotlist.vue'
import Follow from "@/components/Follow.vue"
import Menu from '@/components/Campus_Menu.vue'
import Questions from '@/components/Questions.vue'
import Login  from '@/components/Login'
import Article from '@/components/Article.vue'
import Department_module from '@/components/Department_module.vue'
import HeaderForum from '@/components/HeaderForum.vue'
import ArticleDetails from '@/components/Articledetails.vue'
import Square from "@/components/Square.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'login',
      component:Login
    },
   //首页
    {
      path:'/index',
      name:'index',
      component:index
    },
    {
      path:'/in',
      name:'In',
      component:In
    },
    {
      path:'/list',
      name:'list',
      component:List
    },
    {
      path:'/know',
      name:'know',
      component:Knowledge
    },
    //论坛
    {
      path:'/campus',
      name:'campus',
      component:Campus,
      children:[
        {
          path:'/campus/menu',
          name:"menu",
          component:Menu,
          children:[
           {
             path:'/campus/hoslist',
             name:'hoslist',
             component:Hotlist
           },
           {
             path:'/campus/follow',
             name:'follow',
             component:Follow
           },
           {
             path:'/campus/square',
             name:'square',
             component:Square
           }
          ]
        },
        {
          path:'/campus/hotlist/articledetails',
          name:'articledetails',
          component:ArticleDetails
        },
         {
           path:"/campus/questions",
           name:'questions',
           component:Questions
         },
         {
         path:"/campus/article",
         name:'article',
         component:Article,
         meta:{
              auth:false,
         }
         }
      ]
    },
    {
      path:'/headerForum',
      name:'headerForum',
      component:HeaderForum
    },
    //部门
    {
      path:'/departmentmodule',
      name:'departmentmodule',
      component:Department_module
    },

  ]
})

const VueRouterPush = Router.prototype.push
Router.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
