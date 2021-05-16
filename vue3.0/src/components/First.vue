<template>
    <div>
        <h1>我是组件A{{msg}}</h1>
        <button @click="send()">点我传送数据</button>
    </div>
</template>

<script>
import mitt from "../mitt.js";
//兄弟组件传输数据所依赖的第三方库

export default {
    data:()=>{
        return{
            msg:'First'
        }
    },
    methods:{
        send(){
            //通过发送自定义事件将值传给兄弟组件
            this.$emit('send',this.msg);
            //因为vue3将$on和$once api删掉了,我们只能通过第三方库来保持兄弟组件的信息传输
            // eventBus.$emit('send',this.msg);
            mitt.emit('send',this.msg);

        }
    }
}
</script>

<style  scoped>

</style>