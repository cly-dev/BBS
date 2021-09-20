<template>
  <div>
    <!-- 头部 -->
    <div class="Track_header">
      <span>我的足迹</span>
    </div>
    <!-- 主体 -->
    <div class="Track_container" v-if="total != 0">
      <span class="Track_tis">只显示最近3天浏览记录</span>
      <!-- 数据 -->
      <div class="Track_main" v-for="(value, key) in list" :key="key">
        <span>{{ key + 1 }}</span>
        <span></span>
        <span>{{ value.time }}浏览了{{ value.title }}</span>
        <el-tooltip content="删除" placement="top" effect="light">
          <span class="el-icon-delete" @click="handleDelete(value, key)"></span>
        </el-tooltip>
      </div>
      <div class="Delete_btn">
        <el-button size="mini" icon="el-icon-delete">删除全部</el-button>
      </div>
      <div class="block">
        <el-pagination
          style="text-align: center"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage1"
          :page-size="10"
          layout="total, prev, pager, next"
          :total="total"
        >
        </el-pagination>
      </div>
    </div>
    <div v-else class="Track_null">
      <span>空空如也&nbsp;</span
      ><router-link to="/campus/hotlist">去逛逛</router-link>
    </div>
  </div>
</template>

<script>
import { ShowAllLimitTimeByPage, DeleteHistory } from "../../api/data";
export default {
  data() {
    return {
      //当前页码
      currentPage1: 1,
      //数据
      list: [],
      total: 0
    };
  },
  methods: {
    //删除足迹
    async handleDelete(id, key) {
      let result = await DeleteHistory({ scanHistoryId: id.articleId });
      console.log(result);

      if (result["data"].code == "200") {
        this.$message({
          type: "success",
          message: "删除成功",
          offset: "100"
        });
        this.list.splice(key, 1);
        this.total--;
      }
    },

    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    async handleCurrentChange(val) {
      let result = await ShowAllLimitTimeByPage(val);
      //  this.list=result["data"].result;
      this.list = result["data"].result.data;
      console.log(result);
    }
  },
  async created() {
    let result = await ShowAllLimitTimeByPage(1);
    console.log(result);
    if (result["data"].result.allDataNum != 0) {
      this.total = result["data"].result.allDataNum;
      this.list = result["data"].result.data;
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../../static/less/bbs/track.less";
</style>
