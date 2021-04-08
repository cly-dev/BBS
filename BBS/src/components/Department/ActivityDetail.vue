<template>
<div>
  <!-- 头部 -->
  <div class="ActivityDetail_header">
      <span>活动详情</span>
  </div>
  <div class="ActivityDetail_container">
    <!-- 照片 -->
    <div class="ActivityDetail_img">
      <div class="img_container">
        <el-carousel height="400px" direction="vertical" :autoplay="false">
          <el-carousel-item v-for="item in 3" :key="item">
            <h3 class="medium">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <!-- 信息 -->
    <div class="ActivityDetail_info">
      <div class="ActivityDetail_tis">
        <span>活动名称:</span>
        <span>发起人:</span>
        <span>活动时间:</span>
        <span>活动地址:</span>
        <span>活动人数:</span>
        <span>活动状态:</span>
        <span>活动描述:</span>
      </div>
      <div class="ActivityDetail_data">
        <span>学雷锋</span>
        <span>阿勇</span>
        <span>20210313~20120314</span>
        <span>教学楼</span>
        <span>60人</span>
        <span>进行中</span>
        <span>学雷锋,作新风</span>
        <div class="ActivityDetail_btn">
          <el-button type="primary">点击报名</el-button>
          <el-button type="info" @click="backActivityList">返回</el-button>
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
    backActivityList(){
      this.$router.push({
        name:"活动/全部活动"
      })
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../../static/less/deportment/activitydetail.less";
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

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
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

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>