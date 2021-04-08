<template>
	<div id="shape-shifter">
    <div class="loginform">
         <h2>登录界面</h2>
         <div class="myform">
           <form>
              <div class="login_number">
                <span class="iconfont icon-shenfenzhenghaoma" style="font-size:24px;color:#409EFF"></span>
                  <input type="text" autocomplete="off" placeholder="学号/手机号/账号" required v-model="formData.studentId">
              </div>
              <!-- <div class="login_name">
                <span class="iconfont icon-yonghu" style="color:#F56C6C"></span>
                <input type="text"  autocomplete="off" placeholder="请输入用户名" required>
              </div> -->
              <div class="login_psd">
                 <span class="iconfont icon-mimasuo" style="color:#909399"></span>
                <input type="password" autocomplete="off" placeholder="密码" required v-model="formData.password">
                <span class="iconfont icon-zhengyan icon"  @mousedown="handleText" @mouseup="handlePsd"></span>
              </div>
              <div class="login_code">
                <span class="iconfont icon-yanzhengma" style="color:#67C23A" ></span>
                <input type="password" autocomplete="off" placeholder="验证码" required v-model="formData.code">
              </div>
              <div class="submit_btn">
                 <el-button type="primary" @click="handleSumbit" @keyup.enter="handleSumbit">登录</el-button>
              </div>
           </form>
           <div class="register">
                <span>暂无账号?</span><router-link to="/register">去注册</router-link>
           </div>
         </div>
    </div>
    <div class="footer">
      <span>权归所有:国之重才团队&copy;</span>
      <br/>
       
    </div>
	</div>
</template>
<script>
import {Login} from "../../api/data";
	export default {
		name: 'login',
    data(){
      return {
        //表单数据
        formData:{
          studentId:'',
          password:'',
          code:''
        },

        // show:true,
        // content: "解惑|求真|娱乐|做实事我们是认真的|",
        width:1500,
        height:1000,
        fontSize:180,
        time:2000
      }
    },
    computed:{
      checkForm(){
          if(this.formData.studentId.trim()==""){
            this.message('warning','账号不能为空');
            return false;
          }else{
            if(this.formData.password.trim()==""){
              this.message('warning','密码不能为空');
                return false;
            }else{
              if(this.formData.code.trim()==""){
                this.message("warning","验证码不能为空");
                return false;
              }else{
                return true;
              }
            }
          }
      },
    },
    methods:{
      //查看密码
      handleText(){
        $(".icon").removeClass("icon-zhengyan").addClass("icon-biyan");
        $(".login_psd input").attr("type","text");
      },
      //屏蔽密码
     handlePsd(){
       $(".icon").removeClass("icon-biyan").addClass("icon-zhengyan");
        $(".login_psd input").attr("type","password");
      },
      //提交表单事件
      async handleSumbit(){
          if(this.checkForm){
            let result=await Login({
              studentId:this.formData.studentId,
              password:this.formData.password,
              check:this.formData.code,
              confirmCheck:this.formData.code,
            });
            if(result["data"].code=="200"){
              this.message('success','登录成功');
              localStorage.setItem("token",result["data"].result);
              this.$store.commit("handleLogin");
              this.$router.push({
                name:"index"
              })
            }
          }
      }
    },
		mounted () {
          
         
    }
	}
</script>

<style lang="less" scoped="scoped">
  @import '../../../static/less/login.less';
    * {
        padding: 0;
        margin: 0;
    }
    html,body{
    height:100%
    }
    #shape-shifter {
        position:relative;
        width:100%;
        height:100%;
        box-sizing:border-box;
        text-align: center;
        line-height: 100%;
        background-color: #69b4ca;
        /*background: -webkit-linear-gradient(top, rgb(203, 235, 219) 0%, rgb(55, 148, 192) 120%);
        background: -moz-linear-gradient(top, rgb(203, 235, 219) 0%, rgb(55, 148, 192) 120%);
        background: -o-linear-gradient(top, rgb(203, 235, 219) 0%, rgb(55, 148, 192) 120%);
        background: -ms-linear-gradient(top, rgb(203, 235, 219) 0%, rgb(55, 148, 192) 120%);
        background: linear-gradient(top, rgb(203, 235, 219) 0%, rgb(55, 148, 192) 120%);*/
    }
</style>
