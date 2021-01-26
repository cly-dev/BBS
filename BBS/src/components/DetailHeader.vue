<template>
  <!-- 头部 -->
  <div class="detailHeaader_header">
    <div class="detailHeaader_nav">
      <!-- 文章标题 -->
     <div class="article_title">
       <span>腾冲的春天好像比其他地方来得更早一腾冲的春天好像比其他地方来得更早一些，刚刚进入一月，腾冲的樱花就</span>
     </div>
     <!-- 文章浏览数和点赞数 -->
     <div class="article_browse">
      <el-tooltip class="item" effect="dark" content="写的很好" placement="top">
            <img :src="SupportImg"  alt="请检查网络" class="article_support" @click="SupportClick()">
       </el-tooltip>
       <el-tooltip class="item" effect="dark" content="写的不行" placement="top">
            <img :src="StampImg" alt="请检查网络" class="article_stamp" @click="StampClick()">
      </el-tooltip>
     </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'detailHeader',
    data:()=>{
      return{
         //支持图片路劲
         SupportImg:'../../static/images/campus/detail/article_beforesupport.png',
         //踩图片路径
         StampImg:'../../static/images/campus/detail/article_beforestamp.png',
      }
    },
    methods:{
      SupportClick(){
       
        this.SupportImg="../../static/images/campus/detail/article_aftersupport.png";
        this.StampImg="../../static/images/campus/detail/article_beforestamp.png";
      },
      StampClick(){
        this.SupportImg="../../static/images/campus/detail/article_beforesupport.png";
        this.StampImg="../../static/images/campus/detail/article_afterstamp.png";
      }
    }
  }
</script>

<style lang="less" scoped="scoped">
@import  "../../static/less/detailheaader.less";
</style>
