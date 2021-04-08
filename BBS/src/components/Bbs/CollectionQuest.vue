<template>
  <div class="CollectionQuest_container">
    <div class="CollectionQuest_header">
      <span @click="comeBack">返回</span>
      <span>我收藏的问题</span>
    </div>
    <div class="CollectionQuest_mainer" v-if="tableData!=''">
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
        :total="tableData.length"
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
export default {
  data() {
    return {
      currentPage1: 5,
      tableData: [],
    };
  },
  methods: {
    //返回
    comeBack() {
      this.$router.push({
        name: "collection",
      });
    },
    //跳转详情事件
    handleWatch(index, row) {
      console.log(index, row);
      this.$router.push({
        name:"questdetail",params:{title:row.questionId}
      })
    },
    //q取消收藏事件
    handleDelete(index, row) {
      console.log(index, row);
      this.$axios({
        url:"/collectionQuestion/delete",
        method:"POST",
        params:{
            questionId:row.questionId
        }
      }).then(res=>{
        if(res.data.code=="200"){
          this.$message({
            type:"success",
            message:"取消收藏成功",
            offset:100
          })
        }
    })
    },
    //
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    //切换页码事件
    handleCurrentChange(val) {
      this.$axios({
        url:`/collectionQuestion/showByPage/6cae95a3-6052-4bcd-b55f-4ef36312c7cd/${val}/6`,
        method:"GET"
      }).then(res=>{
        console.log(res);
      })
      console.log(`当前页: ${val}`);
    },
  },
  created(){
    this.$axios({
      url:"/collectionQuestion/show/76f09dda-fdcf-45d6-aea4-5feb3e3c9a65",
      method:'GET',
    }).then(res=>{
      console.log(res);
      this.tableData=res.data.date;
    }).catch(err=>{
      console.log(err);
    })
  }
};
</script>


<style lang="less" scoped>
@import "../../../static/less/bbs/collection.less";
</style>