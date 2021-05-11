<template>
  <div class="WatchActivity_container">
    <!-- 头部 -->
    <div class="WatchActivity_header">
      <span>全部活动</span>
    </div>
    <!-- 主体 -->
    <div class="WatchActivity_mainer">
      <!-- 全部活动 -->
      <div class="WatchActivity_content">
        <div>
        <!-- 查看活动导航 -->
        <div class="WatchActivity_nav">
          <!--根据活动状态查找 -->
          <div class="search_status">
            <span @click="getActivityAll">全部活动</span>
            <span>活动状态:</span>
            <select v-model="status" @change="getActivityByStatus">
              <option value="未开始">未开始</option>
              <option value="招募中">报名中</option>
              <option value="进行中">进行中</option>
              <option value="招募人数已满">报名人数已满</option>
              <option value="活动结束">活动结束</option>
            </select>
          </div>
          <!-- 输入框搜索 -->
          <div class="Activity_search">
            <button type="button" @click="handleSearch" >搜索</button>
            <input type="search" v-model="result" placeholder="活动主题/活动地点" @keyup.enter="handleSearch">
          </div>

        </div>
        <!-- 活动列表 -->
        <div class="WatchActivity_data" v-for="(value,key) in data" :key="key">
          <!-- 活动照片 -->
          <img :src="value.activityImage" />
          <!-- 活动信息 -->
          <div class="activity_info">
            <div class="info_tips">
              <span>活动主题:</span>
              <span>发起人:</span>
              <span>发起时间:</span>
              <span>活动状态:</span>
            </div>
            <div class="info_content">
              <span>{{value.activityTitle}}</span>
              <span>{{value.realName}}</span>
              <span>{{value.createTime}}</span>
              <span>{{value.activityStatus}}</span>
            </div>
            <div class="info_operation">
                <span @click="ToActivityDetail(value)">查看详情</span>
            </div>
          </div>
        </div>
        </div>
          <el-pagination
          style="text-align: center;"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage1"
          :page-size="8"
          layout="total, prev, pager, next"
          :total="totalnum"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import {GetActivityList,CancelJoin} from "../../api/data";
export default {
  data() {
    return {
      status:'',
      //搜索类型
      searchType:0,
      //输入框内容
      result:'',
      //总条数
      totalnum:0,
      //页码
      currentPage1:1,
      //数据
      data:[]
    };
  },
  methods: {
    //查找全部活动
    async getActivityAll(){
    let result =await GetActivityList({pageNum:1})
    this.data=result["data"].result.data;
    this.totalnum=result["data"].result.total;
    this.currentPage1=1;
    },
    //按照活动状态搜索
    async getActivityByStatus(){
      let result=await GetActivityList({activityStatus:this.status,pageNum:1});
        console.log(result);
        if (result["data"].code=="200") {
          this.data=result["data"].result.data;
          this.totalnum=result["data"].result.total;
          this.searchType=3;
          this.message("success",`共找到${this.totalnum}条记录`);
          this.currentPage1=1;
        }else if(result["data"].code=="500"){
          this.message("warning",`暂无${this.status}的活动`);
        }
    },
    //搜索活动
    async handleSearch(){
      let result=await GetActivityList({activityTitle:this.result,pageNum:1});
      if (result["data"].code=="200") {
        this.data=result["data"].result.data;
        this.totalnum=result["data"].result.total;
        this.searchType=1;
        this.currentPage1=1;
      this.message("success",`共找到${this.totalnum}条记录`)
      }else if(result["data"].code=="500"){
        let res=await GetActivityList({activityPlace:this.result,pageNum:1});
         if (res["data"].code=="200") {
            this.currentPage1=1;
             this.data=res["data"].result.data;
            this.totalnum=res["data"].result.pageNum;
            this.searchType=2;
            this.message("success",`共找到${this.totalnum}条记录`)
        }else if(res["data"].code=="500"){
        this.message("warning",`暂无关于 ${this.result} 搜索结果,请检查关键词`);
        }
      }
    },
    handleSizeChange(val) {
    },
    //切换页面
    async handleCurrentChange(val) {
      let obj={pageNum:val};
      if (this.searchType==1) {
        Object.defineProperty(obj,'activityTitle',{
          value:this.result,
          writable:true,
			    enumerable:true,
			    configurable:true
        })
      }else if (this.searchType==2) {
        Object.defineProperty(obj,'activityPlace',{
          value:this.result,
           writable:true,
			    enumerable:true,
			    configurable:true
        })
      }else if(this.searchType==3){
          Object.defineProperty(obj,'activityStatus',{
          value:this.status,
           writable:true,
			    enumerable:true,
			    configurable:true
        })
      }
      let result=await GetActivityList(obj)
      this.data=result["data"].result.data;
    },
    ToActivityDetail(value){
      localStorage.setItem("activityId",value.activityId);
      this.$router.push({
        path:"/department/detail-activity",params:{activityId:value.activityId}
      })
    }
  },
  async created() {
    let result =await GetActivityList({
      pageNum:1
    })
    this.data=result["data"].result.data;
    this.totalnum=result["data"].result.total;
  },
};
</script>

<style lang="less" scoped>
@import "../../../static/less/deportment/watchactivity.less";
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>