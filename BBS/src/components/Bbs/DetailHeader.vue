<template>
  <!-- 头部 -->
  <div class="detailHeaader_header">
    <div class="detailHeaader_nav">
      <!-- 文章标题 -->
     <div class="article_title">
       <span>{{title}}</span>
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
  import {LikeArticle,CancelLikeArticle,IsLikeArticle} from "../../api/data";
  export default {
    name:'detailHeader',
    data:()=>{
      return{
        articleId:"",
          SupportFlay:true,
          //标题
          title:'',
         //支持图片路劲
         SupportImg:'../../../static/images/campus/detail/article_beforesupport.png',
         //踩图片路径
         StampImg:'../../../static/images/campus/detail/article_beforestamp.png',
      }
    },
    methods:{
     async SupportClick(){
       if(this.SupportFlay){
         let result=await LikeArticle({articleId:this.articleId})
         if (result) {
           if(result["data"].code=="200"){
            this.$message({
              type:"success",
              message:"点赞成功",
              offset:100
            })
            this.SupportFlay=false;
             this.SupportImg="../../../static/images/campus/detail/article_aftersupport.png";
            this.StampImg="../../../static/images/campus/detail/article_beforestamp.png";
          }
         }
          
       }else{
         let res= await CancelLikeArticle({
            articleId:this.articleId
         })
         if(res){
          if(res["data"].code=="200"){
            this.$message({
              type:"success",
              message:"取消点赞成功",
              offset:100
            })
              this.SupportFlay=true;
             this.SupportImg="../../../static/images/campus/detail/article_beforesupport.png";
          }
         }
       }
      },
      StampClick(){
        this.SupportImg="../../../static/images/campus/detail/article_beforesupport.png";
        this.StampImg="../../../static/images/campus/detail/article_afterstamp.png";
      }
    },
    async created(){
          this.articleId=localStorage.getItem("articleId");
          this.title=JSON.parse(localStorage.getItem("article")).title;
          let result=await IsLikeArticle({articleId:this.articleId});
          if(result["data"].code=="200"){
            this.SupportFlay=false;
            this.SupportImg=" .../../../static/images/campus/detail/article_aftersupport.png";
         }else if(result["data"].code=="500"){
           this.SupportImg=" .../../../static/images/campus/detail/article_beforesupport.png"
        }
    },
    mounted() {
    }
  }
</script>

<style lang="less" scoped="scoped">
@import  "../../../static/less/detailheaader.less";
</style>
