<template>
  <div class="CollectionQuest_container">
    <div class="CollectionQuest_header">
      <span @click="comeBack">返回</span>
      <span>我收藏的问题</span>
    </div>
    <div class="CollectionQuest_mainer" v-if="total != 0">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column align="center" label="问题名" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.title }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="提问时间" width="180">
          <template slot-scope="scope">
            {{ scope.row.createTime }}
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-tooltip content="查看详情" placement="top" effect="light">
              <el-button
                icon="el-icon-search"
                circle
                size="medium"
                @click="handleWatch(scope.$index, scope.row)"
              ></el-button>
            </el-tooltip>
            <el-tooltip content="取消收藏" placement="top" effect="light">
              <el-button
                icon="el-icon-delete"
                circle
                size="medium"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
              ></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        style="text-align: center"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="6"
        layout="total, prev, pager, next"
        :total="total"
      >
      </el-pagination>
    </div>
    <!-- 当收藏为空时 -->
    <div class="CollectionQuest_null" v-else>
      <span>还未收藏任何问题呢</span>
      <router-link to="/campus/square">去逛逛</router-link>
    </div>
  </div>
</template>
<script>
import { CollectionQuestion } from "../../api/data";
export default {
  data() {
    return {
      //当前页码
      currentPage1: 1,
      //数据
      tableData: [],
      //总条数
      total: 0
    };
  },
  methods: {
    //返回
    comeBack() {
      this.$router.push({
        name: "collection"
      });
    },
    //跳转详情事件
    handleWatch(index, row) {
      localStorage.setItem("questionId", row.questionId);
      this.$router.push({
        name: "questdetail",
        params: { title: row.questionId }
      });
    },
    //取消收藏事件
    handleDelete(index, row) {
      this.$axios({
        url: "/collectionQuestion/delete",
        method: "POST",
        params: {
          questionId: row.questionId
        }
      }).then(res => {
        if (res.data.code == "200") {
          this.$message({
            type: "success",
            message: "取消收藏成功",
            offset: 100
          });
          this.tableData.splice(index, 1);
        }
      });
    },
    //
    handleSizeChange(val) {},
    //切换页码事件
    async handleCurrentChange(val) {
      let result = await CollectionQuestion(`${this.$GetUserId()}/${val}/6`);
      this.tableData = result["data"].result.data;
    }
  },
  async created() {
    let result = await CollectionQuestion(`${this.$GetUserId()}/1/6`);
    if (result["data"].result.allDataNum != 0) {
      this.tableData = result["data"].result.data;
      this.total = result["data"].result.allDataNUm;
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../../static/less/bbs/collection.less";
</style>
