<template>
    <div @click="navigate">
        {{route.name}}
    </div>
</template>

<script>
import {RouterLink, useLink} from 'vue-router';

    export default {
        props: {
            //暴露Router-link的属性和方法
            ...RouterLink.props
        },
       setup(props){
           //获取RouterLink内部属性或则方法
        const {route,href,isActive,isExactActive,navigate}=useLink(props);
            console.log(route,href,isActive,isExactActive,navigate);
           return{
               route,
               navigate
           }
    }
    }
</script>

<style scoped>

</style>