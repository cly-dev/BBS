<template>
  <div>
 <div class="item" v-for="item in list">
      <div class="know_img">
        <el-image :src="item.src" lazy></el-image>
      </div>
     <div class="know_describe">
       <span class="subject">{{item.seject}}</span>
       <p class="know_uploader">上传:阿勇</p>
       <p class="upnum">下载次数:{{item.date}}</p>
     </div>
   </div>

   </div>
</template>

<script>
  export default{
    name:'knowlist',
    data:()=>{
      return{

      }
    },
    props:{
      list:{
        type:Array
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../static/less/knowlist.less";
</style>
