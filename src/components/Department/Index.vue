<template>
  <div>
    <!-- 首页内容 -->
    <div class="main_container">
      <div class="active_contain">
        <span class="active_title">近期活动</span>
        <div class="active_content">
          <el-table
            ref="filterTable"
            height="400"
            :data="tableData"
            style="width: 100%;font-size:18px"
          >
            <el-table-column
              prop="createTime"
              label="日期"
              align="center"
              sortable
              width="180"
              column-key="createTime"
              fit="false"
              lazy
              fixed
            >
            </el-table-column>
            <el-table-column
              prop="activityTitle"
              label="活动名"
              width="180"
              align="center"
              show-overflow-tooltip
              fixed
            >
            </el-table-column>
            <el-table-column
              prop="realName"
              label="发起人"
              align="center"
              fixed
              width="420"
            >
            </el-table-column>
            <el-table-column
              prop="activityStatus"
              label="状态"
              width="150"
              fixed
              filter-placement="bottom-end"
            >
            </el-table-column>

            <el-table-column
              label="操作"
              align="center"
              prop="id"
              width="140"
              fixed
            >
              <!-- <span @click="hand()">
                 查看详情
               </span> -->
              <template slot-scope="scope">
                <span @click="hand(scope.row.activityId)">
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
        <div class="natice_content" style="text-indent:20px">
          <h1>暂无通知</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GetActivityList } from "../../api/data";
export default {
  data: () => {
    return {
      tableData: []
    };
  },
  methods: {
    hand(id) {
      this.$router.push({
        path: "/department/detail-activity",
        params: { activityId: id }
      });
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
    }
  },
  computed: {
    tagStyle() {
      return val => {
        if (val === "已结束") {
          return "danger";
        } else if (val === "进行中") {
          return "primary";
        } else {
          return "success";
        }
      };
    }
  },
  mounted() {
    $(".vertical").hover(
      e => {
        $(".vertical").css({
          fliter: "blur(10px)"
        });
      },
      () => {
        $(".poetry_contain").slideUp();
        $(".vertical").css("transform", "matrix(1, 0, 0, 1, 0, 0)");
      }
    );
  },
  async created() {
    let result = await GetActivityList({ pageNum: 1 });
    this.tableData = result.data.result.data;
    console.log(this.tableData);
  }
};
</script>

<style lang="less" scoped>
@import "../../../static/less/deportment/index.less";
</style>
