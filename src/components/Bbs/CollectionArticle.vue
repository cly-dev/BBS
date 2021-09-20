<template>
  <div class="CollectionArticle_container">
    <!-- 头部 -->
    <div class="CollectionArticle_header">
      <span @click="comeBack">返回</span>
      <span>我收藏的文章</span>
    </div>
    <!-- 主体 -->
    <div class="CollectionArticle_mainer" v-if="total != 0">
      <!-- 数据 -->
      <el-table :data="tableData" style="width: 100%">
        <el-table-column align="center" label="文章名" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.title }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="作者" width="180">
          <template slot-scope="scope">
            {{ scope.row.authorName }}
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-tooltip content="查看详情" placement="top" effect="light">
              <el-button
                icon="el-icon-search"
                circle
                size="medium"
                @click="handleSearch(scope.$index, scope.row)"
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
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="6"
        layout="total, prev, pager, next"
        :total="total"
      >
      </el-pagination>
    </div>
    <!-- 当收藏为空时 -->
    <div class="CollectionArticle_null" v-else>
      <span>还未收藏任何文章呢</span>
      <router-link to="/campus/square">去逛逛</router-link>
    </div>
  </div>
</template>

<script>
import { CollectionArticle, CollectionArticledelete } from "../../api/data";
export default {
  data() {
    return {
      //当前页码
      currentPage1: 5,
      //数据
      tableData: [],
      //条数
      total: 0
    };
  },
  methods: {
    comeBack() {
      this.$router.push({
        name: "collection"
      });
    },
    handleSearch(index, row) {
      localStorage.setItem("articleId", row.articleId);
      this.$router.push({
        name: "articledetails",
        params: {
          articleId: row.articleId
        }
      });
    },
    async handleDelete(index, row) {
      let result = await CollectionArticledelete({
        articleId: row.articleId
      });
      if (result) {
        if (result["data"].code == "200") {
          this.message("success", "取消成功");
          this.tableData.splice(index, 1);
        } else {
          this.message("warning", "取消失败");
        }
      }
    },
    async handleCurrentChange(val) {
      let result = await CollectionArticle(`${this.$GetUserId()}/${val}/6`);
      this.tableData = result["data"].result.data;
    }
  },
  async created() {
    let result = await CollectionArticle(`${this.$GetUserId()}/1/6`);
    if (result) {
      if (result["data"].result.allDataNum != 0) {
        this.total = result["data"].result.allDataNum;
        this.tableData = result["data"].result.data;
      }
      console.log(result);
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../../static/less/bbs/collection.less";
</style>
