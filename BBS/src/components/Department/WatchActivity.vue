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
          <ul>
            <li>按时间排序</li>
            <li>全部</li>
            <li>今天</li>
            <li>最近7天</li>
            <li>最近一个月</li>
          </ul>
        </div>
        <!-- 活动列表 -->
        <div class="WatchActivity_data" v-for="(value,key) in data" :key="key">
          <!-- 活动照片 -->
          <img :src="value.img" />
          <!-- 活动信息 -->
          <div class="activity_info">
            <div class="info_tips">
              <span>活动主题:</span>
              <span>发起人:</span>
              <span>发起时间:</span>
              <span>活动状态:</span>
            </div>
            <div class="info_content">
              <span>{{value.title}}</span>
              <span>{{value.name}}</span>
              <span>{{value.time}}</span>
              <span>{{value.status}}</span>
            </div>
            <div class="info_operation">
              <router-link to="/department/detail-activity">
                <span>查看详情</span>
              </router-link>
            </div>
          </div>
        </div>
        </div>
          <el-pagination
          style="text-align: center;"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage1"
          :page-size="100"
          layout="total, prev, pager, next"
          :total="1000"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage1: 5,
      data:[
            {title:"学雷锋",name:'阿勇',time:"2021/3/5",status:"进行中",img:"../../../static/images/lanterns.jpg"},
            {title:"学雷锋",name:'阿勇',time:"2021/3/5",status:"进行中",img:"../../../static/images/lanterns.jpg"},
            {title:"学雷锋",name:'阿勇',time:"2021/3/5",status:"进行中",img:"../../../static/images/lanterns.jpg"},
            {title:"学雷锋",name:'阿勇',time:"2021/3/5",status:"进行中",img:"../../../static/images/lanterns.jpg"},
            {title:"学雷锋",name:'阿勇',time:"2021/3/5",status:"进行中",img:"../../../static/images/lanterns.jpg"},
            {title:"学雷锋",name:'阿勇',time:"2021/3/5",status:"进行中",img:"../../../static/images/lanterns.jpg"},
           
          ]
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
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