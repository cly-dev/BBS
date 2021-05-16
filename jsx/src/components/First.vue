<template>
    <div>
        <h1>我是组件A{{msg}}</h1>
        <button @click="send()">点我传送数据</button>
    </div>
</template>

<script>
import eventBus from "../eventBus.js";

export default {
    inject:['title'],
    data:()=>{
        return{
            msg:'First'
        }
    },
    methods:{
        send(){
            //通过发送自定义事件将值传给兄弟组件
            this.$emit('send',this.msg);
            eventBus.$emit('send',this.msg);
        }
    },
    created(){
        console.log(this.title);
    }
}
</script>

<style  scoped>

</style>