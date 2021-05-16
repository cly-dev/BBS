<template>
  <div id="app">
      <header>
        <nav>
         <div>
            <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="2" :xs="6" :sm="4" :md="2" :lg="2" :xl="3"><div class="grid-content">
              <h3> <router-link :to="{name:'index'}">logo+名字</router-link></h3>
            </div></el-col>
            <el-col :span="7" :xs="6" :sm="8" :md="10" :lg="9" :xl="9">
           <div class="grid-content">
            <ul class="nav">
              <li>
                <router-link to="/">
                  首页
                </router-link to="/">
              </li>
              <li>
                <router-link to="/">
                  部门
                </router-link to="/">
                  <div class="dep_box">
                    <p>xxx 为您提供优质的部门生活</p>
                    <div class="dep_name">
                     <h3>学生会</h3>
                     <!-- v-for -->
                     <br/>
                      <div class="box1">
                       <span>1</span>
                        <span>1</span>
                        <span>1</span>
                         <span>1</span>
                         <span>1</span>
                         <span>1</span>
                         <span>1</span>
                      </div >
                      <h3>团委</h3>
                      <br/>
                      <div class="box1">
                        <span>1</span>
                        <span>1</span>
                        <span>1</span>
                         <span>1</span>
                         <span>1</span>
                         <span>1</span>
                         <span>1</span>
                         <span>1</span>
                      </div>
                       <h3>艺术团</h3>
                        <br/>
                       <div class="box1">
                         <span>1</span>
                         <span>1</span>
                         <span>1</span>
                         <span>1</span>
                         <span>1</span>
                         <span>1</span>
                     </div>
                    </div>
                  </div>
                </li>

              <li>
              <router-link to="/">
                跳蚤市场
              </router-link>
              </li>
              <li>
              <router-link to="/">
                微论坛
              </router-link>
              </li>
              <li>
                <router-link to="/">
                下载app
                 </router-link>
                <div class="extension">
                  <p>
                    请大大扫码下载吧
                  </p>
                  <img src="../static/images/extension.jpg" alt="请检查网络">
                </div>

              </li>
            </ul>
            </div></el-col>
            <el-col :span="8" :xs="8" :sm="8" :md="8" :lg="9" :xl="8"><div class="grid-content">
            <div class="nav_search">
              <el-row>
                <el-col :span="12">
                <div class="grid-content hidden-md-and-down">
                <el-input placeholder="请输入内容" v-model="dep_name" style="width:100%">
                  <el-button slot="append" icon="el-icon-search" style="background-color:#00c758;color: white;"></el-button>
                </el-input>
                </div>
                </el-col>
                <el-col :span="12">
                 <div class="grid-content nav_msg hidden-sm-and-down">
                <ul>
                  <li class="unlogin">
                    <a @click="centerDialogVisible = true">登陆</a> <router-link to="#">注册</router-link>
                   </li>
                  <li>
                     <router-link to="#">关于我们</router-link>
                  </li>
                </ul>

                </div></el-col>
              </el-row>
            </div>
            </div>
            </el-col>
          </el-row>
          </div>
          </nav>

          <el-dialog
            title="登录"
            :visible.sync="centerDialogVisible"
            width="30%"
            center>
            <div class="myform">
              <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="账号" prop="userid">
                  <el-input type="input" v-model="ruleForm.userid" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                  <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="验证码" prop="code">
                  <el-input v-model.number="ruleForm.code" style="width:100px;"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="">提交</el-button>
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
              </el-form>
              </div>
          </el-dialog>
      </header>
      <br/>
    <main>
      <div>
  <el-row type="flex" class="row-bg" justify="center">
    <el-col :span="20"><div class="grid-content bg-purple">
     <router-view/>
    </div></el-col>
    </el-row>
      </div>
    </main>

  </div>
</template>

<script>
export default {
  name: 'App',
  data:()=>{
     let checkAge = (rule, value, callback) => {
            if (!value) {
              return callback(new Error('验证码不能为空'));
            }
            setTimeout(() => {
               callback();
              }, 1000);
          };
          let validatePass = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入账号'));
            } else {
              if (this.ruleForm.checkPass !== '') {
                this.$refs.ruleForm.validateField('checkPass');
              }
              callback();
            }
          };
          let validatePass2 = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm.pass) {
              callback(new Error('两次输入密码不一致!'));
            } else {
              callback();
            }
            };
    return{
      dep_name:"",
      sign:"12",
      centerDialogVisible: false,
       ruleForm: {
                userid: '',
                pass: '',
                code: ''
              },
              rules: {
               userid: [
                  { validator: validatePass, trigger: 'blur' }
                ],
                pass: [
                  { validator: validatePass2, trigger: 'blur' }
                ],
                code: [
                  { validator: checkAge, trigger: 'blur' }
                ]
              }
    }
  },
    methods:{
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>
<style lang="less" scoped>
  @import "../static/less/index.less";
  header{
    width: 100%;
    height:50px;
    border-bottom:1px solid #f8f8f8;
    background-color: #ffffff;
    div[class^="grid"]{
    height: 50px;
    line-height: 50px;
    }
  }
  main div[class^="grid"]{

    height: 50px;
  }
  body{
     background-color: #f7f7f7;
  }
</style>
