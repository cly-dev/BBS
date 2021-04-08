<template>
  <div>
    <!-- 首页内容 -->
    <div class="main_container">
      <div class="active_contain">
        <span class="active_title">近期活动</span>
        <div class="active_content">
          <el-table ref="filterTable" height="400" :data="tableData" style="width: 100%;font-size:18px">
            <el-table-column
              prop="date"
              label="日期"
              align="center"
              sortable
              width="180"
              column-key="date"
              fit=false
              lazy
              fixed
            >
            </el-table-column>
            <el-table-column prop="name" label="活动名" width="180" align="center" show-overflow-tooltip fixed>
            </el-table-column>
            <el-table-column prop="address" label="活动地址"  align="center" fixed  width="420">
            </el-table-column>
            <el-table-column
              prop="tag"
              label="状态"
              width="150"
              fixed
              :filters="[
                { text: '报名中', value: '报名中' },
                { text: '已结束', value: '已结束' },
                { text:'进行中',value:'进行中' }
              ]"
              :filter-method="filterTag"
              filter-placement="bottom-end"
            >
              <template slot-scope="scope">
                <el-tag
                  :type=tagStyle(scope.row.tag)
                  disable-transitions
                  >{{ scope.row.tag }}</el-tag
                >
              </template>
            </el-table-column>
              
             <el-table-column  label="操作" align="center" prop="id" width="140" fixed>
               <!-- <span @click="hand()">
                 查看详情
               </span> -->
              <template slot-scope="scope">
                <span @click="hand(scope.row.id)">
                  查看详情
                </span>                
                </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <!-- 公告 -->
      <div class="notice_container">
        <span class="notice_title"> 公告 </span>
        <div class="natice_content"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小222222222222222222222222虎",
          address: "上海市普陀区金沙江路 1518 弄",
          tag: "报名中",
          id:"11"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          tag: "进行中",
          id:"111"

        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          tag: "已结束",
          id:"1111"

        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          tag: "已结束",
          id:"1111"

        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          tag: "已结束",
          id:"1111"

        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          tag: "已结束",
          id:"1111"

        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          tag: "报名中",
          id:"1111"

        },
      ],
    };
  },
  methods: {  
    hand(id){
      console.log(id);
    },
    resetDateFilter() {
      this.$refs.filterTable.clearFilter("date");
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter();
    },
    formatter(row, column) {
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
  },
  computed:{
    tagStyle(){
      return val=>{
        if(val==="已结束"){
          return "danger";
        }else if(val === "进行中") {
          return "primary";
        }else{
          return "success";
        }
      }
    }
  },
  mounted() {
    $(".vertical").hover(
      (e) => {
        $(".vertical").css({
          fliter: "blur(10px)",
        });
      },
      () => {
        $(".poetry_contain").slideUp();
        $(".vertical").css("transform", "matrix(1, 0, 0, 1, 0, 0)");
      }
    );
  },
};
</script>

<style lang="less" scoped>
@import "../../../static/less/deportment/index.less";
</style>
