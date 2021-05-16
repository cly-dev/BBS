<template>
  <div>

      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="2" :xs="6" :sm="4" :md="2" :lg="3" :xl="2"
          ><div class="logo-content">
            <h3>
              <router-link to="/index">
               <img src="../../../static/images/logo.png" class="logo">
                      <span>1楼2楼</span>
              </router-link>
            </h3>
          </div></el-col
        >
        <el-col :span="7" :xs="6" :sm="8" :md="10" :lg="9" :xl="9">
          <div class="grid-content">
            <ul class="nav">
              <li>
                <router-link to="/index"> 首页 </router-link>
              </li>
              <li>
                <router-link to="/department"> 部门 </router-link>
              </li>
              <li>
                <router-link to="/"> 跳蚤市场 </router-link>
              </li>
              <li>
                <router-link to="/campus/hotlist"> 微论坛 </router-link>
              </li>
              <li>
                <router-link to="/"> 下载app </router-link>
                <div class="extension">
                  <p>请大大扫码下载吧</p>
                  <img
                    src="../../../static/images/extension.jpg"
                    alt="请检查网络"
                  />
                </div>
              </li>
            </ul></div
        ></el-col>
        <el-col :span="8" :xs="8" :sm="8" :md="8" :lg="9" :xl="8"
          ><div class="grid-content">
            <div class="nav_search">
              <el-row>
                <el-col :span="12">
                  <div class="grid-content hidden-md-and-down">
                    <el-input placeholder="请输入内容" style="width: 100%">
                      <el-button
                        slot="append"
                        icon="el-icon-search"
                        style="background-color: #00c758; color: white"
                      ></el-button>
                    </el-input>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="grid-content nav_msg hidden-sm-and-down">
                    <ul>
                      <li>
                        <!-- <span>{{ user.userName }}</span> -->
                      </li>
                      <li>
                        <router-link to="#">关于我们</router-link>
                      </li>
                    </ul>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>
   
  </div>
</template>

<script>
export default {
  data(){
    return{
      //用户信息
      user:{}  
    }
  },
  created(){
    this.user=this.$store.state.user;
  }, 
};
</script>

<style lang="less" scoped>
@import "../../../static/less/index.less";
</style>