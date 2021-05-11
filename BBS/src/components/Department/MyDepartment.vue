<template>
<div>
  <!-- 头部 -->
    <div class="Departemnt_header">
      <span>我的部门</span>
    </div>
    <div class="Department_container" v-if="Department!=null">
        <!-- 部门图片 -->
        <div class="Department_img">
            <el-carousel :interval="5000"  indicator-position="outside" height="450px">
     <el-carousel-item v-for="item in Department.depImageList" :key="item">
      <img src="../../../static/images/user.png" class="Department_img">
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
                <span>{{Department.departmentName}}</span>
                <!-- <span>{{}}</span> -->
                <span>{{Department.peopleNum}}</span>
                <span>52</span>
                <span>{{Department.position}}</span>
                <span>{{Department.parentName}}</span>
                <span class="Department_introduction">{{Department.briefIntroduce}}</span>
                <div class="Department_operation">
                    <el-button>点我</el-button>
                    <el-button type="primary">查看近期活动 </el-button>
                    <el-button type="primary" @click="handleClick" v-if="Department.position!='干事'">管理部门</el-button>
                </div>
            </div>
        </div>
     </div>
     <div class="identification" v-else>
        <span>
          还未认证部门信息,你可以<router-link to="/department/identification">去认证</router-link>
        </span>
     </div>
    </div>
</template>

<script>
import {GetMyDep} from "../../api/data";
    export default {
        data(){
          return{
            //部门信息
              Department:{},
          }
        },
        methods:{
          handleClick(){
            this.$router.push({
              path:"/department/admin-department"
            })
          }
        },
        mounted(){
          
        },
        created(){
          GetMyDeps(this.$GetUserId()).then(res=>{
            console.log(this.$GetUserId());
            this.Department=res["data"].result;
            if(res["data"].result!=null){
              if(res["data"].result.position=="干事"){
                  this.$store.commit("JurisdictionUser");
              }else{
                  this.$store.commit("JurisdictionAdmin");
              }
            }else{

            }
          })

        }
    }
    //获取部门信息
    async function GetMyDeps(userId){
      let result=await GetMyDep({userId});
      return result;
    }

</script>

<style lang="less" scoped>
    @import "../../../static/less/deportment/mydepartment.less";
</style>