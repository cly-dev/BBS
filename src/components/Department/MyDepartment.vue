<template>
  <div>
    <!-- 头部 -->
    <div class="Departemnt_header">
      <span>我的部门</span>
    </div>
    <div class="Department_container" v-if="checkStatus == 1">
      <!-- 部门图片 -->
      <div class="Department_img">
        <el-carousel
          :interval="5000"
          indicator-position="outside"
          height="450px"
        >
          <el-carousel-item v-for="item in Department.depImageList" :key="item">
            <img src="../../../static/images/user.png" class="Department_img" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 部门信息 -->
      <div class="Department_info">
        <div class="Dapartment_tis">
          <span>部门名称:</span>
          <!-- <span>建立时间:</span> -->
          <span>部门人数:</span>
          <span>活跃程度:</span>
          <span>我的职位:</span>
          <span>部门所属</span>
          <span class="Department_introduction">部门简介:</span>
        </div>
        <div class="Department_data">
          <span>{{ Department.departmentName }}</span>
          <!-- <span>{{}}</span> -->
          <span>{{ Department.peopleNum }}</span>
          <span>52</span>
          <span>{{ Department.position }}</span>
          <span>{{ Department.parentName }}</span>
          <span class="Department_introduction">{{
            Department.briefIntroduce
          }}</span>
          <div class="Department_operation">
            <el-button>点我</el-button>
            <el-button type="primary">查看近期活动 </el-button>
            <el-button type="primary" @click="handleClick" v-if="position"
              >管理部门</el-button
            >
          </div>
        </div>
      </div>
    </div>
    <div class="verify" v-else-if="checkStatus == 0">
      认证还在审核中哦
    </div>
    <div class="identification" v-else>
      <span>
        还未认证部门信息,你可以<router-link to="/department/identification"
          >去认证</router-link
        >
      </span>
    </div>
    <!-- <el-button type="primary" @click="handleClick" v-if="!position">管理部门</el-button> -->
  </div>
</template>

<script>
import addRoute from "../../router/addRouter";
import { GetMyDep, GetDepCheckUserSelf } from "../../api/data";
export default {
  data() {
    return {
      //认证状态 0--已提交还未通过 1--通过 -1--未提交也未通过
      checkStatus: 0,
      //部门信息
      Department: {},
      //职位
      position: false
    };
  },
  methods: {
    handleClick() {
      this.$router.push({
        path: "/department/admin-department"
      });
    }
  },
  mounted() {},
  created() {
    if (!this.position) {
      console.log("1111");
      console.log(addRoute);
      this.$router.addRoutes(addRoute);
    }
    let studentId = this.$store.state.user.studentId;
    const itertor = GetDepartDetail(studentId, this.$GetUserId());
    let result = itertor.next();
    result.then(async res => {
      if (res.value.data.msg == "未查询到数据") {
        let data = await itertor.next();
        if (data.value.data.result) {
          this.checkStatus = 1;
          this.Department = data.value.data.result;
          switch (res["data"].result.position) {
            case "干事":
              this.position = false;
              break;
            case "管理员":
              this.position = true;
              this.$store.commit("handlePosition");
              break;
          }
          // if (this.position) {
          //   console.log("1111");
          //   console.log(addRoute);
          //   this.$router.addRoutes(addRoute);
          // }
        } else {
          this.checkStatus = -1;
        }
      } else {
        this.checkStatus = res.value.data.result.data.checkStatus;
      }
    });
  }
};
//生成器
async function* GetDepartDetail(studentId, userId) {
  yield await GetDepCheckUserSelf(studentId);
  yield await GetMyDep({ userId });
}

//获取自己的认证状态
function GetDepCheckUser(studentId) {
  let result = GetDepCheckUserSelf(userId);
  return result;
}

//获取部门信息
async function GetMyDeps(userId) {
  let result = await GetMyDep({ userId });
  return result;
}
</script>

<style lang="less" scoped>
@import "../../../static/less/deportment/mydepartment.less";
</style>
