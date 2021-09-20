<template>
  <div>
    <div class="MyPopose_header">
      <span>我创作的</span>
    </div>
    <!-- 主体 -->
    <div class="CollectionArticle_mainer" v-if="totalNum != 0">
      <!-- 数据 -->
      <el-table :data="tableData" style="width: 100%">
        <el-table-column align="center" label="文章名" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.title }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="发布时间" width="180">
          <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
              {{ scope.row.createTime }}
            </div>
          </template>
        </el-table-column>
        <el-table-column align="center" label="点赞数" width="180">
          <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
              {{ scope.row.likeNum }}
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-tooltip content="查看详情" placement="top" effect="light">
              <el-button
                icon="el-icon-search"
                circle
                size="medium"
                @click="handleSeacher(scope.$index, scope.row)"
              ></el-button>
            </el-tooltip>
            <el-tooltip content="编辑" placement="top" effect="light">
              <el-button
                icon="el-icon-edit"
                circle
                size="medium"
                type="primary"
                @click="handleEdit(scope.$index, scope.row)"
              ></el-button>
            </el-tooltip>
            <el-tooltip content="删除该问题" placement="top" effect="light">
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
        :total="totalNum"
      >
      </el-pagination>
      <!-- 当收藏为空时 -->
    </div>
    <div class="MyPopose_null" v-else>
      <span>空空如也</span>
    </div>
  </div>
</template>

<script>
import eventBus from "../../eventBus";
import { ShowAllArticleByPage, DeleteArticle } from "../../api/data";
export default {
  data() {
    return {
      //当前页码
      currentPage1: 1,
      //存储数据
      tableData: [],
      //总条数
      totalNum: 0
    };
  },
  methods: {
    comeBack() {
      this.$router.push({
        name: "collection"
      });
    },
    //查看详情
    handleSeacher(index, row) {
      localStorage.setItem("articleId", row.articleId);
      this.$router.push({
        name: "articledetails",
        params: {
          articleId: row.articleId
        }
      });
      eventBus.$emit("sentTitle", row);
    },
    //编辑
    handleEdit(index, row) {
      localStorage.setItem("articleId", row.articleId);
      this.$router.push({
        name: "Revuseacticle",
        params: {
          articleId: row.articleId
        }
      });
    },
    //删除
    async handleDelete(index, row) {
      let result = await DeleteArticle({ articleId: row.articleId });
      if (result["data"].code == "200") {
        this.message("success", "删除成功");
        this.tableData.splice(index, 1);
        this.totalNum--;
      }
    },
    handleSizeChange(val) {},
    async handleCurrentChange(val) {
      let result = await ShowAllArticleByPage(`${this.$GetUserId()}/${val}/6`);
      this.tableData = result["data"].result.data;
    }
  },
  async created() {
    //请求我的创作的文章
    let result = await ShowAllArticleByPage(`${this.$GetUserId()}/1/6`);
    if (result) {
      if (result["data"].result.allDataNum != 0) {
        this.totalNum = result["data"].result.allDataNum;
        this.tableData = result["data"].result.data;
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../../static/less/bbs/mypopose.less";
</style>
