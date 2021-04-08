<template>
  <div class="CollectionArticle_container">
      <!-- 头部 -->
    <div class="CollectionArticle_header">
      <span @click="comeBack">返回</span>
      <span>我收藏的文章</span>
    </div>
    <!-- 主体 -->
    <div class="CollectionArticle_mainer" v-if="tableData.lenth!=''">
        <!-- 数据 -->
      <el-table :data="tableData" style="width: 100%">
        <el-table-column align="center" label="文章名" width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="作者" width="180">
          <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
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
                @click="handleEdit(scope.$index, scope.row)"
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
        :total="tableData.length"
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
export default {
  data() {
    return {
      currentPage1: 5,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods: {
    comeBack() {
      this.$router.push({
        name: "collection",
      });
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
  created(){
    this.$axios({
      url:"/collectionArticle/show/76f09dda-fdcf-45d6-aea4-5feb3e3c9a65",
      method:"GET",
    }).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
  }
};
</script>

<style lang="less" scoped>
@import "../../../static/less/bbs/collection.less";
</style>