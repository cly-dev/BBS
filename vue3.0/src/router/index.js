//router4
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import HelloWorld from '../components/HelloWorld.vue';
import Notfound from '../components/Notfound.vue';
//router4.0变化
//1、由vue的new Router的方式变成现在的createRouter({config})
export default createRouter({
    //2、由以前的mode变成history;
    //hishory=>createWebHistroy();history模式
    //hash:createWebHashHistory();hash模式
    //abstract:createMemoryHistory();抽象模式
    //3、base选项移植到createWebHistroy()方法中
    history:createWebHistory("/vue3.0"),
    routes: [
        {
            path:"/hello",
            name:'hello',
            component:HelloWorld
        },
        //4、取消*通配符404页面用params参数进行匹配 /:pathname(.*)*
        {
            path:'/:pathMatch(.*)*',
            name:'not-found',
            component:Notfound
        }
    ],
    //5、路由滚动事件由x、y变成top、left
    //6、keep-alive和transition必须用在router-view里面
    //新的写法:<router-view v-slot="{Component}">
    //     <keep-alive>
    //         <component :is="Component">
            
    //         </component>
    //     </keep-alive>
    // </router-view>
    //7、router-link移除了一票属性
    //7.1移除append属性
    //7.2tag/event属性(取消默认生成a标签)
    //旧的写法:<router-link to="#" tag="span" event="click"></router-link>
    //新的写法:
    // <router-link v-slot={navigate} custom> 
    // <span @事件="navigate">xxx</span>
    // </router-link>
    scrollBehavior(to,from,savedPosition){
        if(savedPosition){
            return savedPosition;
        }else{
            return{
                top:0
            }
        }
    }
})