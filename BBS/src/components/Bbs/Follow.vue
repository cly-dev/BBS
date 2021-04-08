<template>
  <div>
    <!-- 头部 -->
    <div class="follow_header">
      <!-- 导航 -->
      <div class="follow_nav">
        <ul @click="handleClick">
          <li>关注我的</li>
          <li>我关注的</li>
        </ul>
      </div>
    </div>
    <!-- 主体 -->
    <div class="follow_container">
      <!-- 我关注的 -->
      <div class="my_care">
        <div v-if="MycareData != ''" class="care_container">
          <div class="care_user" v-for="(value, key) in MycareData" :key="key">
            <el-popover placement="right-end" width="200" trigger="hover">
              <div class="core_info">
                <span>邮箱:{{ value.email }}</span>
                <span>性别:{{ value.sex }}</span>
                <span>生日:{{ value.birthday }}</span>
                <span>注册时间:{{ value.createTime }}</span>
              </div>
              <div slot="reference">
                <img
                  src="../../../static/images/cablecar.jpg"
                  alt="请检查网络"
                  class="user_img"
                />
                <span class="user_name">用户名:{{ value.userName }}</span>
              </div>
            </el-popover>

            <div class="user_operation">
              <el-button size="mini">访问</el-button>
              <el-button size="mini" type="danger" @click="handleCancel(value,key)">取消关注</el-button>
            </div>
          </div>
        </div>
        <div class="mycare_null" v-else>
          <span>空空如也</span>
        </div>
        <el-pagination
          style="text-align: center; margin-top: 20px"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage1"
          :page-size="8"
          layout="total, prev, pager, next"
          :total="100"
        >
        </el-pagination>
      </div>
      <!-- 关注我的 -->
      <div class="care_my">
        <div v-if="CaremyData != ''" class="care_container">
          <div class="care_user" v-for="(value, key) in CaremyData" :key="key">
            <el-popover placement="right-end" width="200" trigger="hover">
              <div class="core_info">
                <span>邮箱:{{ value.email }}</span>
                <span>性别:{{ value.sex }}</span>
                <span>生日:{{ value.birthday }}</span>
                <span>注册时间:{{ value.createTime }}</span>
              </div>
              <div slot="reference">
                <img
                  src="../../../static/images/cablecar.jpg"
                  alt="请检查网络"
                  class="user_img"
                />
                <span class="user_name">用户名:{{ value.userName }}</span>
              </div>
            </el-popover>
            <div class="user_operation" style="padding-left: 10px">
              <el-button size="mini">访问</el-button>
              <el-button
                size="mini"
                type="primary"
                @click="handleSupport(value)"
                >关注ta</el-button
              >
            </div>
          </div>
        </div>

        <div class="mycare_null" v-else>
          <span>空空如也</span>
        </div>
        <el-pagination
          style="text-align: center; margin-top: 20px;position:bottom:0"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage2"
          :page-size="8"
          layout="total, prev, pager, next"
          :total="100"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import {ShowFocus,ShowFans,ShowFansByPage,ShowFocusByPage,FocusOther,CancelFocus} from "../../api/data";
export default {
  data() {
    return {
      //我关注的页码
      currentPage2: 1,
      //关注我的页码
      currentPage1: 1,
      //标识事件状态
      PageEnum:false,
      //我关注的
      MycareData: [
        {
          userId: "528de48c-7fa8-467d-8fe4-cd60820b80c6",
          studentId: "1550888880",
          password: null,
          userName: "阿勇",
          realName: null,
          sex: null,
          birthday: null,
          enterSchoolTime: null,
          major: null,
          mobilePhone: null,
          email: null,
          selfImage: null,
          createTime: null,
          status: 1,
          idolSum: 2,
          fansSum: 0,
        },
        {
          userId: "e257c2f7-30df-4235-a5c4-6d0f7dd5df66",
          studentId: "15503077799003",
          password: null,
          userName: null,
          realName: null,
          sex: null,
          birthday: null,
          enterSchoolTime: null,
          major: null,
          mobilePhone: null,
          email: null,
          selfImage: null,
          createTime: null,
          status: 1,
          idolSum: 1,
          fansSum: 0,
        },
      ],
      //关注我的
      CaremyData: [
        {
          userId: "528de48c-7fa8-467d-8fe4-cd60820b80c6",
          studentId: "1550888880",
          password: null,
          userName: "阿勇",
          realName: null,
          sex: "男",
          birthday: "2000",
          enterSchoolTime: null,
          major: null,
          mobilePhone: null,
          email: "266311",
          selfImage: null,
          createTime: "2021/3/21",
          status: 1,
          idolSum: 2,
          fansSum: 0,
        },
        {
          userId: "e257c2f7-30df-4235-a5c4-6d0f7dd5df66",
          studentId: "15503077799003",
          password: null,
          userName: null,
          realName: null,
          sex: null,
          birthday: null,
          enterSchoolTime: null,
          major: null,
          mobilePhone: null,
          email: null,
          selfImage: null,
          createTime: null,
          status: 1,
          idolSum: 1,
          fansSum: 0,
        },
      ],
    };
  },
  methods: {
    //取消关注
   async handleCancel(value,index){
     let result=await CancelFocus({
          userId:value.userId
     });
     if(result["data"].code=="200"){
        this.$message({
           message:"已取消",
           type:'success',
           offset:100
         });
         this.MycareData.splice(index,1);
     }
   },
    //关注关注我的人
    async handleSupport(value) {
      let result=await FocusOther({
        userId: value.userId
      })
      
      if(result["data"].code=="200"){
          this.$message({
            type: "success",
            message: "关注成功",
            offset: 100,
          });
          this.MycareData.unshift({
            userId:value.userId,
            studentId:value.studentId,
            userName: value.userName,
            sex:value.sex,
            birthday:value.birthday,
            email:value.email,
            selfImage: null,
            createTime:value.createTime,
            status: 1,
            idolSum: 2,
            fansSum: 0,
          })
      }
    },
    handleClick(e) {
      $(".follow_nav li").css("border-bottom", "none");
      $(".follow_nav li").css("color", "#606266");
      e.target.style.borderBottom = "2px solid #409EFF";
      e.target.style.color = "#409EFF";
      if (e.target.innerText == "关注我的") {
        this.PageEnum=false;
        $(".care_my").fadeIn();
        $(".my_care").fadeOut();
      } else {
        this.PageEnum=true;
        $(".my_care").fadeIn();
        $(".care_my").fadeOut();
      }
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    //分页查询
    async handleCurrentChange(val) {
      let result;
      if(!this.PageEnum){
         result=await ShowFocusByPage({
          pageNum:val,
          pageSize:8
        });
            this.CaremyData=result["data"].date;
      }else{
         result=await ShowFansByPage({
          pageNum:val,
          pageSize:8
        });
        this.MycareData=result["data"].date;
      }
    },
  },
  async created() {

      async function Focus(){
        let result=await ShowFocus();
          return result;
      }

      async function Fans(){
        let result=await ShowFans();
        return result;
      }
      let p1=Focus();
      let p2=Fans();

      Promise.all([p1,p2]).then(res=>{
        console.log(res);

      })
      

    // let that = this;
    // function getMyCare() {
    //   return that.$axios.post("/fans/showFans");
    // }
    // function getCareMy() {
    //   return that.$axios.post("/fans/showFocus");
    // }
    // this.$axios.all([getMyCare(), getCareMy()]).then(
    //   this.$axios.spread((acct, perms) => {
    //     // this.MycareData=acct.data.date;
    //     // this.CaremyData=perms.data.date;
    //   })
    // );
  },
};
</script>

<style lang="less" scoped>
@import "../../../static/less/bbs/follow.less";
</style>
