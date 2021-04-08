<template>
  <div>
    <div class="MyQuesition_header">
      <span>我提问的</span>
    </div>
    <div class="CollectionArticle_mainer">
      <!-- 数据 -->
      <el-table :data="tableData" style="width: 100%">
        <el-table-column align="center" label="问题名" width="180">
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
        <el-table-column align="center" label="回答数" width="180">
          <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
              {{ scope.row.allAnswerLikeNum}}
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
                @click="handleWatch(scope.$index, scope.row)"
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
        :total=" tableData.length"
      >
      </el-pagination>
      <!-- 当收藏为空时 -->
    </div>
  </div>
</template>

<script>
import {ShowAllQuestionByPage,DeleteQuestion} from "../../api/data";
export default {
  data() {
    return {
      currentPage1: 1,
      tableData: [],
    };
  },
  methods: {
    comeBack() {
      this.$router.push({
        name: "collection",
      });
    },
    handleWatch(index, row) {
      localStorage.setItem("questionId",row.questionId);
      this.$router.push({
              name:'questdetail',params:{title:row.questionId}
      })
    },
    handleEdit(index,row){
      localStorage.setItem("questionId",row.questionId);
      this.$router.push({
        name:"Revisequestion",params:{questionId:row.questionId}
      })
    },
    //删除文章
    async handleDelete(index, row) {
      let result=await DeleteQuestion({questionId:row.questionId})
        if(result["data"].code=="200"){
          this.$message({
            type:"success",
            message:"删除成功",
            offset:100
          })
         this.tableData.splice(index,1); 
        }
    },
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
    },
    async handleCurrentChange(val) {
      let result=await ShowAllQuestionByPage(`6cae95a3-6052-4bcd-b55f-4ef36312c7cd/${val}/6`)
      this.tableData=result["data"].date;
    },
  },
    async created(){
      let result=await ShowAllQuestionByPage("6cae95a3-6052-4bcd-b55f-4ef36312c7cd/1/6");
      this.tableData=result["data"].date;
    }
};
</script>

<style lang="less">
@import "../../../static/less/bbs/myquesition.less";
</style>