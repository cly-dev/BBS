<template>
    <div style="height:100%;position:relative">
        <!-- 头部 -->
        <header>
            <!-- 导航 -->
            <nav>
                <!-- logo -->
                <section class="logo">
                    <img src="../../../static/images/bridge.jpg" alt="请检查网络">
                    <span><router-link to="/login">返回登陆</router-link></span>
                </section>
                <section class="help">
                    <span>
                        出现问题,无法找回?
                        <section class="tips">
                        <span>请联系管理员</span>
                        <span>QQ:123456</span>
                        <span>微信:2666</span>
                    </section>
                    </span>
                    <span></span>
                    <span></span>
                </section>
            </nav>
        </header>
        <!-- 主体 -->
        <main>
            <section class="Forget_container">
                <section class="container_header">
                 <!-- <span class="iconfont icon-shenfenzhenghaoma"></span> -->
                   <span>输入账号</span> 
                </section>
                <section class="container_main">
                    <section class="main_form">
                        <section v-if="step==0">
                            <span>请输入要重置密码的账号邮箱</span>
                            <input type="email" placeholder="请输入邮箱" v-model="email">
                        </section>
                        <section v-else-if="step==1">
                            <span>请输入验证码</span>
                            <input type="text" placeholder="请输入验证码" >
                        </section>  
                        <section v-else>
                            <span>新密码</span>
                            <input type="password" placeholder="请输入密码" >
                            <span>确认密码</span>
                            <input type="password" placeholder="确认密码" >
                        </section>  
                         <el-button type="primary" :loading="loadingFlay" @click="handleNext" >下一步</el-button>                      
                    </section>
                </section>

            </section>
            <aside></aside>
        </main>
        
        <footer>
            <Footer></Footer>
        </footer>
        
        <!-- 验证弹出框 -->
        <el-dialog
            center
            title="请校验"
            :visible.sync="dialogVisible"
             width="358px"
           >
            <slide-verify 
                        ref="slideblock"
                        @again="onAgain"
                        @fulfilled="onFulfilled"
                        @success="onSuccess"
                        @fail="onFail"
                        @refresh="onRefresh"
                        :accuracy="accuracy"
                        :slider-text="text"
                    ></slide-verify>
                <div>{{msg}}</div>
            <span slot="footer" class="dialog-footer">
              
  </span>
</el-dialog>
    </div>
</template>

<script>
import slideverify from "../../minxin/slide-verify.js";
    export default {
        mixins:[slideverify],
        data(){
            return{
                //滑动校验
                checkFlay:false,
                //按钮loading
                loadingFlay:false,
                //步骤
                step:0,
                 //弹出框
                dialogVisible:false,
                //邮箱
                email:''
            }
        },
         methods: {
            onSuccess(times){
            this.dialogVisible=false;
            this.step=1;
            this.message("success",`校验成功,耗时${(times / 1000).toFixed(1)}s`);
            this.msg = `校验成功, 耗时${(times / 1000).toFixed(1)}s`
        },
             //校验邮箱
            checkEmail(){
            if(this.email==""){
                this.message("warning","邮箱不能为空");
             return false;
            }else{
            let reg=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/g;
            if(reg.test(this.email)){
                return true;
            }else{
                this.message("warning","邮箱格式错误");
                return false;
            }
        }
            },
             handleNext(){
                 if(this.step==0){
                    //  if(this.checkEmail()){
                         this.dialogVisible=true;
                         if(this.checkFlay){
                         }
                    //  }
                 }else if (this.step==1) {
                     this.step++;
                 }
             }
    },
    watch:{
      step:((newV,orderV)=>{
          console.log(newV);
          console.log(orderV);
      })  
    },
    components:{
        Footer:()=>import("../public/Footer")
    },
    mounted(){
            $(".help>span").hover(()=>{
                $(".tips").slideDown();
            },()=>{
                $(".tips").slideUp();
            })
        }
    }
</script>

<style lang="less" scoped>
@import "../../../static/less/public/forgetpassword.less";
</style>