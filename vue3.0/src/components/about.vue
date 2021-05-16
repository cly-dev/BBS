<template>
    <div>
            我是about
            {{flag}}
            <button @click="back"> hello</button>
            <button @click="flag='我是你爹'">点我</button>
    </div>
</template>

<script>
import { ref, watch } from 'vue';
import {useRouter,useRoute, onBeforeRouteUpdate, onBeforeRouteLeave} from 'vue-router';
export default {
    setup () {
        let flag=ref("哈哈哈哈");

        //获取路由实例配合composition api 以前通过this.$router
        const router=useRouter();

        //获取路由信息 相当于vue2的this.$route
        //route是一个响应式的对象
        const route=useRoute();
        
        //监测路由vue中不能用watch来监测路由
        //路由守卫 路由更新
        onBeforeRouteUpdate((to,from)=>{
            console.log(to);
            console.log(from);
        })
        //路由守卫 离开路由
        onBeforeRouteLeave((to,from)=>{
            let a=window.confirm("确认离开？");
            if(!a){
                //相当vue中没有写next()
                return false;
            }
        })
        // watch([route.query,flag],([query],[ordV,newV])=>{
        //     console.log(query);
        //     console.log(ordV);
        //     console.log(newV);
        // })

        watch(()=>route.query,(query)=>{
            console.log(query);
            }
        )
        return {
            back(){
                router.push({
                    path:'/hello'
                })
            },
            flag
        }
    }
}
</script>

<style  scoped>

</style>