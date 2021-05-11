<template>
  <div class="TakeActivity_container">
    <div class="TAcontainer_header">
      <span @click="goBack">返回</span>
      <span>我参加的活动</span>
    </div>
    <div class="TAcontainer_mainer" v-if="total!=0">
      <el-table
        :data="
          tableData.filter(
            (data) =>
              !search || data.createTime.toLowerCase().includes(search.toLowerCase())
          )
        "
        style="width: 100%; font-size: 18px"
      >
        <el-table-column
          label="日期"
          prop="createTime"
          width="200"
          align="center"
          show-overflow-tooltip
          sortable
        >
        </el-table-column>
        <!-- <el-table-column
          label="活动地址"
          prop="date"
          width="300"
          align="center"
          show-overflow-tooltip
        >
        </el-table-column> -->
        <el-table-column
          label="活动名称"
          prop="activityTitle"
          width="250"
          align="center"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="activityStatus"
          label="活动状态"
          width="150"
          :filters="[
            { text: '报名中', value: '招募中' },
            { text: '已结束', value: '活动结束' },
            { text: '进行中', value: '进行中' },
          ]"
          :filter-method="filterTag"
          filter-placement="bottom-end"
        >
          <template slot-scope="scope">
            <el-tag :type="tagStyle(scope.row.activityStatus)" disable-transitions>{{
              scope.row.activityStatus
            }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          label="发起人"
          prop="realName"
          width="250"
          show-overflow-tooltip
          align="center"
        >
        </el-table-column>
        <el-table-column align="right">
          <template slot-scope="scope">
             <el-tooltip class="item" effect="dark" content="查看详情" placement="top-start">
            <el-button circle size="mini" icon="el-icon-search" @click="handleEdit(scope.$index, scope.row)"
              ></el-button
            >
            </el-tooltip>
             <el-tooltip class="item" effect="dark" content="取消报名" placement="top-start">
                <el-button type="danger" icon="el-icon-delete" circle  size="mini"
                     @click="handleDelete(scope.$index, scope.row)">
                </el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="8"
      style="text-align:center"
      layout="total, prev, pager, next"
      :total="total">
    </el-pagination>
    </div>
      <div class="null_container" v-else>
        <img src="../../../static/images/department/null_icon.png" alt="请检查网络" title="无">
        <span>您还未参加任何活动呢
          <router-link to="department/watch-activity">点击参加</router-link>
        </span>
    </div>
  </div>
</template>

<script>
import {GetJoinList,CancelJoin} from "../../api/data";
export default {
  data() {
    return {
      //数据
      tableData: [],
      search: "",
      currentPage1: 1,
      //条数
      total:''
    };
  },
  methods: {
    goBack() {
      this.$router.push({
        path: "/department/my-activity",
      });
    },
    handleEdit(index, row) {
      this.$router.push({
        name:'活动/活动详情',params:{activityId:row.activityId}
      });
      localStorage.setItem("activityId",row.activityId);
    },
    async handleDelete(index, row) {
      let result=await CancelJoin({activityId:row.activityId});
      if (result["data"].code=="200") {
        this.message("success","取消成功");
        this.tableData.splice(index,1);
      }
    },
    filterTag(value, row) {
      return row.tag === value;
    },

     handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
  },
  computed: {
    tagStyle() {
      return (val) => {
        if (val === "活动结束" || val==="已取消") {
          return "danger";
        } else if (val === "进行中") {
          return "primary";
        } else {
          return "success";
        }
      };
    },
  },
  async created() {
            let result=await GetJoinList({pageNum:1});
            this.tableData=result["data"].result.data;
            this.total=result["data"].result.total;
            console.log(result);
  },
};
</script>

<style lang="less" scoped>
@import "../../../static/less/deportment/takeactivity.less";
</style>