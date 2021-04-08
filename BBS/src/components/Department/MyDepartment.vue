<template>
<div>
  <!-- 头部 -->
    <div class="Departemnt_header">
      <span>我的部门</span>
    </div>
    <div class="Department_container">
        <!-- 部门图片 -->
        <div class="Department_img">
            <el-carousel height="450px" direction="vertical" :autoplay="false">
    <el-carousel-item v-for="item in 3" :key="item">
      <h3 class="medium">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
        </div>
        <!-- 部门信息 -->
        <div class="Department_info">
            <div class="Dapartment_tis">
            <span>部门名称:</span>
            <span>建立时间:</span>
            <span>部门人数:</span>
            <span>活跃程度:</span>
            <span>我的职位:</span>
            <span>部门所属</span>
            <span class="Department_introduction">部门简介:</span>
            </div>
            <div class="Department_data">
                <span>宣传部</span>
                <span>20200304</span>
                <span>64人</span>
                <span>52</span>
                <span>干事</span>
                <span>学生会</span>
                <span class="Department_introduction">来sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss自晚点</span>
                <div class="Department_operation">
                    <el-button>点我</el-button>
                    <el-button type="primary">查看近期活动 </el-button>
                </div>
            </div>
        </div>
     </div>
    </div>
</template>

<script>
    export default {
        data(){
          return{

          }
        },
        methods:{

        },
        mounted(){
          
        }
    }
</script>

<style lang="less" scoped>
    @import "../../../static/less/deportment/mydepartment.less";
      .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>