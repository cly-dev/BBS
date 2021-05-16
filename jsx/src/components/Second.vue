<template>
<div>
    <span>这里B组件来自A组件的信息为{{msg}}</span>
    <h2>{{message}}</h2>
</div>

</template>

<script>
import eventBus from "../eventBus.js";

export default {
    data:()=>{
        return{
            msg:'',
        }
    },
    props:{
        message:{
            type:String
        }
    },
    mounted(){
        //通过$on监听$emit自定义事件来获取兄弟组件传过来的数据 $once直监听一次
        eventBus.$once("send",(val)=>{
            console.log(val);
            this.msg=val;
            this.$nextTick();
        })
    }
}
</script>

<style  scoped>

</style>