<template>
  <div class="ReleaseActivity_container">
    <div class="RLcontainer_header">
      <span @click="goBack">返回</span>
      <span>我发布的活动</span>
    </div>
    <div class="RLcontainer_mainer" v-if="tableData==''">
      <el-table
        :data="
          tableData.filter(
            (data) =>
              !search || data.name.toLowerCase().includes(search.toLowerCase())
          )
        "
        height="400"
        style="width: 100%; font-size: 18px"
      >
        <el-table-column
          label="日期"
          prop="date"
          width="200"
          align="center"
          show-overflow-tooltip
          sortable
        >
        </el-table-column>
        <el-table-column
          label="活动地址"
          prop="date"
          width="300"
          align="center"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          label="活动名称"
          prop="date"
          width="250"
          align="center"
          show-overflow-tooltip
        >
        </el-table-column>
         <el-table-column
          label="活动类型"
          prop="date"
          width="200"
          align="center"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="tag"
          label="状态"
          width="150"
          :filters="[
            { text: '报名中', value: '报名中' },
            { text: '已结束', value: '已结束' },
            { text: '进行中', value: '进行中' },
          ]"
          :filter-method="filterTag"
          filter-placement="bottom-end"
        >
          <template slot-scope="scope">
            <el-tag :type="tagStyle(scope.row.tag)" disable-transitions>{{
              scope.row.tag
            }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          label="报名人数"
          prop="name"
          width="250"
          show-overflow-tooltip
          align="center"
        >
        </el-table-column>
        <el-table-column align="right">
          <template slot="header">
            <el-input
              v-model="search"
              size="medium"
              placeholder="输入关键字搜索"
            />
          </template>
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" content="查看详情" placement="top-start">
            <el-button circle size="mini" icon="el-icon-search" @click="handleEdit(scope.$index, scope.row)"
              ></el-button
            >
            </el-tooltip>

            <el-tooltip class="item" effect="dark" content="编辑活动" placement="top-start">
                <el-button type="primary" icon="el-icon-edit" circle size="mini"></el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="取消活动" placement="top-start">
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
        :page-size="100"
        style="text-align: center"
        layout="total, prev, pager, next"
        :total="1000"
      >
      </el-pagination>
    </div>
    <div class="null_container" v-else>
        <img src="../../../static/images/department/null_icon.png" alt="">
        <span>您还未发布任何活动呢
          <router-link to="/department/createactivity">点击发起</router-link>
        </span>
    </div>
  </div>
</template>

<script>
import {GetReleaseActivityById,DeleteActivity} from '../../api/data';
export default {
  data() {
    return {
      flag:false,
      tableData: [],
      search: "",
      currentPage1: 5,
    };
  },
  methods: {
    goBack() {
      this.$router.push({
        path: "/department/my-activity",
      });
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    async handleDelete(index, row) {
      let result=await DeleteActivity({activityId:row.activityId})
      if(result["data"].code=="200"){
        this.message("success","删除成功");
        this.tableData.splice(index,1);
      }
    },
    filterTag(value, row) {
      return row.tag === value;
    },

    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
   async handleCurrentChange(val) {
      let result=await GetReleaseActivityById({
      pageNum:val
    })
    },
  },
  computed: {
    tagStyle() {
      return (val) => {
        if (val === "已结束" || val === "已取消") {
          return "danger";
        } else if (val === "进行中") {
          return "primary";
        } else {
          return "success";
        }
      };
    },
  },
  async created(){
    let result=await GetReleaseActivityById({
      pageNum:1
    })
    if(result["data"].code!="500"){
    this.tableData=result["data"].result;
      
    }
  }
};
</script>


<style lang="less" scoped>
@import "../../../static/less/deportment/releaseactivity.less";
</style>e