<template>
  <!-- 登录界面 -->
  <section style="height:100%">
    <!-- 背景 -->
    <section id="shape-shifter">
      <!-- 登录表单 -->
      <section class="loginform">
        <h2>登录界面</h2>
        <section class="myform">
          <form>
            <!-- 学号 -->
            <section class="login_number">
              <span
                class="iconfont icon-shenfenzhenghaoma"
                style="font-size:24px;color:#409EFF"
              ></span>
              <input
                type="text"
                autocomplete="off"
                placeholder="学号"
                required
                v-model.trim="formData.studentId"
              />
            </section>
            <!-- 密码 -->
            <section class="login_psd">
              <span class="iconfont icon-mimasuo" style="color:#909399"></span>
              <input
                type="password"
                autocomplete="off"
                placeholder="密码"
                required
                v-model.trim="formData.password"
              />
              <!-- 小眼睛 -->
              <span
                class="iconfont icon-zhengyan icon"
                @mousedown="handleText"
                @mouseup="handlePsd"
              ></span>
            </section>
            <!-- 点击按钮 -->
            <section class="submit_btn">
              <el-button
                type="primary"
                @click="handleSumbit"
                @keyup.enter="handleSumbit"
                >登录</el-button
              >
            </section>
          </form>
          <!-- 忘记密码 -->
          <section class="register">
            <span
              ><router-link to="/ForgetpassWord">忘记密码?</router-link></span
            >
            <!-- 注册 -->
            <span>暂无账号?</span
            ><router-link to="/register">去注册</router-link>
          </section>
        </section>
      </section>
    </section>
    <footer>
      <Footer Backcolor="#69b4ca" color="#303133"></Footer>
    </footer>
    <el-dialog center title="校验" :visible.sync="dialogVisible" width="355px">
      <!-- 滑动校验 -->
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
    </el-dialog>
  </section>
</template>
<script>
import slideVerify from "../../minxin/slide-verify.js";
import { Login } from "../../api/data";
export default {
  name: "login",
  mixins: [slideVerify],
  data() {
    return {
      //表单数据
      formData: {
        studentId: "",
        password: "",
        code: "1221"
      },
      dialogVisible: false,
      width: 1500,
      height: 1000,
      fontSize: 180,
      time: 2000
    };
  },
  computed: {
    checkForm() {
      if (!this.formData.studentId) {
        this.message("warning", "账号不能为空");
        return false;
      } else {
        if (this.formData.password.trim() == "") {
          this.message("warning", "密码不能为空");
          return false;
        } else {
          if (this.formData.code.trim() == "") {
            this.message("warning", "验证码不能为空");
            return false;
          } else {
            return true;
          }
        }
      }
    }
  },
  methods: {
    //查看密码
    handleText() {
      $(".icon")
        .removeClass("icon-zhengyan")
        .addClass("icon-biyan");
      $(".login_psd input").attr("type", "text");
    },
    //屏蔽密码
    handlePsd() {
      $(".icon")
        .removeClass("icon-biyan")
        .addClass("icon-zhengyan");
      $(".login_psd input").attr("type", "password");
    },
    //校验成功
    async onSuccess() {
      let result = await Login({
        studentId: this.formData.studentId,
        password: this.formData.password,
        check: this.formData.code,
        confirmCheck: this.formData.code
      });
      if (result["data"].code == "200") {
        this.message("success", "登录成功");
        localStorage.setItem("token", result["data"].result.token);
        this.$store.commit("handleLogin");
        this.$store.commit("handleUser", {
          user: result["data"].result
        });
        this.$router.push({
          name: "index"
        });
      } else {
        this.message("error", `登录失败,${result["data"].result}`);
      }
      this.dialogVisible = false;
      this.$refs.slideblock.reset();
    },
    //提交表单事件
    handleSumbit() {
      this.dialogVisible = this.checkForm ? true : false;
    }
  },
  components: {
    Footer: () => import("../public/Footer")
  },
  created() {
    this.formData.studentId =
      this.$route.params.studentId && this.$route.params.studentId;
  }
};
</script>

<style lang="less" scoped="scoped">
@import "../../../static/less/login.less";
* {
  padding: 0;
  margin: 0;
}
html,
body {
  height: 100%;
}
#shape-shifter {
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
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
