<template>
  <div style="height: 100%">
    <main>
      <!-- 表单主体 -->
      <section class="Register_container">
        <h2 style="margin-top: 20px">注册页面</h2>
        <!-- 步骤条 -->
        <section class="Register_step">
          <el-steps
            :active="step"
            finish-status="success"
            simple
            style="margin-top: 20px"
          >
            <el-step title="填写账号信息"></el-step>
            <el-step title="填写个人基本信息"></el-step>
            <el-step title="校验身份"></el-step>
          </el-steps>
        </section>
        <form class="Register_form">
          <!-- 第一步骤 -->
          <section class="first_step" v-if="step == 1">
            <!-- 学号 -->
            <section class="Register_number">
              <span
                class="iconfont icon-shenfenzhenghaoma"
                style="font-size: 24px; color: #409eff"
              ></span>
              <input
                type="text"
                autocomplete="off"
                placeholder="学号"
                required
                v-model="formData.studentId"
                @blur="checkStudnetId"
                @keyup="checkStudnetId"
              />
              <span class="input_error"></span>
            </section>

            <!-- 用户名 -->
            <section class="Register_name">
              <span class="iconfont icon-yonghu" style="color: #f56c6c"></span>
              <input
                type="text"
                autocomplete="off"
                placeholder="请输入用户名"
                required
                v-model="formData.username"
                @blur="checkUsername"
              />
              <span class="input_error"></span>
            </section>
            <!-- 密码 -->
            <section class="Register_psd">
              <span class="iconfont icon-mimasuo" style="color: #909399"></span>
              <input
                type="password"
                autocomplete="off"
                placeholder="密码"
                required
                v-model="formData.password"
                @blur="checkPassword"
              />
              <span
                class="iconfont icon-zhengyan icon"
                @mousedown="handleText"
                @mouseup="handlePsd"
              ></span>
              <span class="input_error"></span>
            </section>
            <!-- 确认密码 -->
            <section class="Register_comfirmpsd">
              <span
                class="iconfont icon-querenmima"
                style="color: #67c23a; font-size: 24px"
              ></span>
              <input
                type="password"
                autocomplete="off"
                placeholder="确认密码"
                required
                v-model="formData.comfirmPassword"
                @blur="checkComfirmPsd"
              />
              <span
                class="iconfont icon-zhengyan icon"
                @mousedown="handleComfirmText"
                @mouseup="handleComfirmPsd"
              ></span>
              <span class="input_error"></span>
            </section>
          </section>
          <!-- 第二步骤 -->
          <section class="second_step" v-else-if="step == 2">
            <!-- 真实姓名 -->
            <section class="Register_realname">
              <span
                class="iconfont icon-shenfenzhenghaoma"
                style="color: #409eff; font-size: 24px"
              ></span>
              <input
                type="text"
                autocomplete="off"
                placeholder="请输入真实姓名"
                required
                v-model="formData.realname"
                @blur="checkRealname"
              />
              <span class="input_error"></span>
            </section>
            <!--性别 -->
            <section class="Register_sex">
              <span
                class="iconfont icon-xingbie"
                style="color: #e6a23c; font-size: 20px"
              ></span>
              <!-- <label for="sex"> <input type="radio"  required v-model="formData.sex" name="sex">男</label>
                <label for="sex"> <input type="radio"  required v-model="formData.sex" name="sex">女</label> -->
              <select name="sex" v-model="formData.sex">
                <option value="男" selected>男生</option>
                <option value="女">女生</option>
              </select>
            </section>
            <!-- 电话号码 -->
            <section class="Register_phone">
              <span
                class="iconfont icon-shouji"
                style="color: #67c23a; font-size: 22px"
              ></span>
              <input
                type="text"
                autocomplete="off"
                placeholder="请输入电话号码"
                required
                v-model="formData.phone"
                @blur="checkPhone"
              />
              <span class="input_error"></span>
            </section>
            <!-- 进入学校时间 -->
            <section class="Register_enterSchool">
              <span
                class="iconfont icon-canjiagongzuoshijian"
                style="color: #67c23a; font-size: 22px"
              ></span>
              <input
                type="date"
                autocomplete="off"
                required
                v-model="formData.enterShoolTime"
                @change="checkEnterTime"
              />
              <span class="input_error"></span>
            </section>

            <!-- 年级 -->
            <section class="Register_grade">
              <span
                class="iconfont icon-zhuanye"
                style="color: #e6a23c; font-size: 18px"
              ></span>
              <input
                type="text"
                autocomplete="off"
                placeholder="请输入专业年级"
                required
                v-model="formData.grade"
                @blur="checkMajor"
              />
              <span class="input_error"></span>
            </section>
            <!-- 出生日期-->
            <section class="Register_birthday">
              <span
                class="iconfont icon-shengrix"
                style="color: #f56c6c; font-size: 20px"
              ></span>
              <input
                type="date"
                autocomplete="off"
                placeholder="请输入生日"
                required
                v-model="formData.birthday"
                @change="checkBrithday"
              />
              <span class="input_error"></span>
            </section>
          </section>
          <!-- 第三步 -->
          <section v-else style="position: relative; height: 200px">
            <!-- 电子邮箱 -->
            <section class="Register_email">
              <span
                class="iconfont icon-icon-mail"
                style="color: #f56c6c; font-size: 17px"
              ></span>
              <input
                type="email"
                autocomplete="off"
                placeholder="请输入电子邮箱"
                required
                v-model="formData.email"
                @blur="checkEmail"
              />

              <span class="input_error"></span>
            </section>

            <!--激活码 -->
            <section class="Register_code">
              <span
                class="iconfont icon-yanzhengma"
                style="color: #67c23a; font-size: 17px"
              ></span>
              <input
                type="input"
                autocomplete="off"
                placeholder="请输入激活码"
                required
                v-model="formData.code"
                @blur="checkCode"
              />
              <span class="input_error"></span>
            </section>
            <!-- 获取验证码按钮 -->
            <el-button
              type="primary"
              @click="handlEmailCode"
              :disabled="disabled"
              :loading="loadingFlay"
            >
              获取验证码</el-button
            >
          </section>
        </form>
        <section class="Registe_btn">
          <el-button :disabled="disabledFlay" @click="step--">上一步</el-button>
          <el-button type="primary" :disabled="lastFlay" @click="nextStep"
            >下一步</el-button
          >
        </section>
        <section class="login_btn">
          <span>已有账号? <router-link to="/login">去登陆</router-link> </span>
        </section>
      </section>
    </main>
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
    <div>{{ msg }}</div>
  </div>
</template>
<script>
import { Register } from "../../api/data";
import check from "../../minxin/register";
export default {
  mixins: [check],
  data() {
    return {
      //关闭按钮
     disabled:false,
      //等待发送
      loadingFlay: false,
      //是否发送给校验码
      codeFlay: false,
      //校验
      dialogVisible: false,
      //滑动校验
      checkFlay: false,
      //活动消息提示
      msg: "",
      text: "向右滑",
      accuracy: 2,
      //记录步骤
      step: 1,
      //注册信息
      formData: {
        studentId: "",
        username: "",
        password: "",
        comfirmPassword: "",
        realname: "",
        email: "",
        birthday: "",
        grade: "",
        phone: "",
        sex: "男",
        enterShoolTime: "",
        //激活码
        code: "",
      },
    };
  },
  computed: {
    //判断当前步骤
    disabledFlay() {
      if (this.step == 1) {
        return true;
      } else if (this.step > 1) {
        return false;
      }
    },
    //判断是否到最后一步
    lastFlay() {
      if (this.step == 4) {
        return true;
      } else if (this.step == 3) {
        if (this.checkFlay) {
          return false;
        } else {
          return true;
        }
      } else {
        return false;
      }
    },
  },
  methods: {
    getshow() {
      this.show = true;
    },
    send(value) {
      this.msg = value;
    },
    //校验成功
    async onSuccess(times) {
      this.message("success", `校验成功,耗时${(times / 1000).toFixed(1)}s`);
      this.checkFlay = true;
      this.dialogVisible = false;
      this.msg = `校验成功, 耗时${(times / 1000).toFixed(1)}s`;
      let result = await Register({
        studentId: this.formData.studentId,
        password: this.formData.password,
        userName: this.formData.username,
        realName: this.formData.realname,
        sex: this.formData.sex,
        birthday: this.formData.birthday,
        major: this.formData.birthday,
        email: this.formData.email,
        mobilePhone: this.formData.phone,
        enterSchoolTime: this.formData.enterShoolTime,
        selfImage:'../../../static/images/logo.png'
      });
      if (result["data"].code == "200") {
        this.disabled=true;
        this.loadingFlay = false;
        this.message("success", "发送成功");
      } else {
        this.message("warning", `${result["data"].msg}`);
        this.loadingFlay = false;
      }
    },
    onFail() {
      this.message("error", "校验失败");
      this.msg = "";
    },
    onRefresh() {
      this.msg = "";
    },
    onFulfilled() {},
    onAgain() {
      this.msg = "try again";
      // 刷新
      this.$refs.slideblock.reset();
    },
    handleClick() {
      // 父组件直接可以调用刷新方法
      this.$refs.slideblock.reset();
    },
  },
  components: {
    Footer: () => import("../public/Footer"),
  },
};
</script>

<style lang="less" scoped>
@import "../../../static/less/public/register.less";
</style>