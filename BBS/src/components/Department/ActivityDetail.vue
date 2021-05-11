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
        <span>限制人数:</span>
        <span>活动人数:</span>
        <span>活动状态:</span>
        <span>活动描述:</span>
      </div>
      <div class="ActivityDetail_data">
        <span>{{data.activityTitle}}</span>
        <span>{{data.userRealName}}</span>
        <span>{{data.recruitStartTime}}~{{data.recruitEndTime}}</span>
        <span>{{data.activityPlace}}</span>
        <span>{{data.totalNum}}</span>
        <span>{{data.joinNum}}/{{data.totalNum}}</span>
        <span>{{data.activityStatus}}</span>
        <span>{{data.activityContent}}</span>
        <div class="ActivityDetail_btn">
          <el-button type="primary" :disabled="DisabledFlay()" @click="handleSingUp(data)">{{JoinFlay()}}</el-button>
          <el-button  @click="backActivityList">返回</el-button>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import{GetDetailActivity,AddJoinActivity,CancelJoin}from '../../api/data';
export default {
  data(){
    return{
        data:{ }
    }
  },
  methods:{
    //返回
    backActivityList(){
      this.$router.push({
        name:"活动/全部活动"
      })
    },
    //点击报名
    async handleSingUp(value){
      if (value.join) {
        let result=await CancelJoin({activityId:value.activityId});
        console.log(result);
        if(result['data'].code=="200"){
          this.message("success","取消成功");
        value.joinNum--;
         value.join=false;
        }
      }else{
      let result=await AddJoinActivity({activityId:value.activityId});
      console.log(result);
      if(result["data"].code=="200"){
        this.message("success","报名成功");
        value.joinNum++;
         value.join=true;
      }
      }
    },
    //按钮状态
    DisabledFlay(){
    if(!($.isEmptyObject(this.data))){
      if(!this.data.join){
         if(this.data.joinNum<this.data.totalNum){
          return false;
        }else{
          return true;
        }
      }
    }
  },
   //按钮文字提醒
  JoinFlay(){
    if(!($.isEmptyObject(this.data))){
      if (!this.data.join) {
        if (this.data.joinNum==this.data.totalNum) {
          return "人数已满";
        }else{
          return "点击报名";
        }
      }else{
        return "取消报名";
      }
    }
  },
  },
  computed:{
 
  },
  async created(){
    let activityId;
    if(JSON.stringify(this.$route.params)=="{}"){
      activityId=localStorage.getItem("activityId");
    }else{
      activityId=this.$route.params.activityId;
    }
    let result=await GetDetailActivity({activityId:activityId});
    this.data=result["data"].result;
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