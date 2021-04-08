<template>
  <div class="questheader_contain">
       <div class="questheader_content">
          <span>{{title}}</span>
          <div class="questheader_btn">
              <el-button type="primary" icon="el-icon-edit" @click="editor">写答案</el-button>
          </div>
       </div>
  </div>
</template>

<script>
  import eventBus from "../../eventBus.js";
  export default{
    data(){
      return{
        title:"",
      }
    },
     methods:{
       editor(){
         eventBus.$emit('editor',true);
       }
     },
     mounted(){
      
     },
     created(){
         eventBus.$on("sentTitle",val=>{
                this.title=val;
         })
         if(this.$route.params.question !=""){
            this.title=JSON.parse(localStorage.getItem("question")).questionname;
         
       }
     }
  }
</script>
<style lang="less" scoped="scoped">
@import "../../../static/less/questheader.less";
</style>
