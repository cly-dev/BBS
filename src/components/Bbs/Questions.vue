<template>
  <div>
    <!-- 头部 -->
    <div class="question_title">
      <span>提问</span>
    </div>
    <!-- 提问主体 -->
    <div class="question_form">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <!-- 问题名称 -->
        <el-form-item label="问题名称:" prop="questionname">
          <el-input v-model="ruleForm.questionname"></el-input>
        </el-form-item>
        <!-- 问题封面 -->
        <el-form-item label="问题封面:">
          <div style="height: 130px">
            <el-upload
              :limit="1"
              list-type="picture-card"
              class="avatar-uploader"
              multiple
              action="/question/uploadQuestionImage"
              :show-file-list="true"
              :before-upload="beforeAvatarUpload"
              :http-request="CoverImgUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i
                style="margin: -20px"
                v-else
                class="el-icon-plus avatar-uploader-icon"
              ></i>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item label="问题性质:" prop="type">
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="学习" name="type"></el-checkbox>
            <el-checkbox label="感情" name="type"></el-checkbox>
            <el-checkbox label="生活" name="type"></el-checkbox>
            <el-checkbox label="考试" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>

        <el-form-item label="具体描述:" prop="desc">
          <div style="line-height: 15px; width: 600px">
            <quillEditor
              @imgSrc="handleImgUpload"
              @editor="input"
              :url="url"
              :text.sync="text"
              :width="'600px'"
              :height="'300px'"
              ref="editor"
              :num="num"
              :numFlay.sync="numFlay"
            >
            </quillEditor>
          </div>
        </el-form-item>
        <center>
          <el-form-item>
            <div>
              <el-button type="primary" @click="submitForm('ruleForm')"
                >立即创建</el-button
              >
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </div>
          </el-form-item>
        </center>
      </el-form>
    </div>
  </div>
</template>

<script>
import { UploadQuestion } from "../../api/data";
import quillEditor from "./Quill.vue";
import upload from "../../minxin/upload";
import eventBus from "../../eventBus.js";

export default {
  mixins: [upload],
  data() {
    return {
      imageSrc: "",
      numFlay: true,
      //纯文本字数
      num: 200,
      //富文本图片传输地址
      url: "/article/uploadArticleImage",
      //纯文本
      text: "",
      //问题具体富文本描述
      content: "",
      //表单数据
      type: [],
      ruleForm: {
        questionname: "",
        region: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      //表单校验
      rules: {
        questionname: [
          { required: true, message: "请输入问题名称", trigger: "blur" },
          { min: 6, max: 20, message: "长度在 6到20 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个问题性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [
          {
            required: true
          }
        ]
      }
    };
  },
  methods: {
    //获取上传图片
    handleImgUpload(val) {
      this.ruleForm.desc += val;
    },
    //获取输入框内容
    input(content) {
      this.ruleForm.desc = content;
    },
    //表单校验事件
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        console.log(this.image);

        if (valid) {
          if (this.numFlay) {
            async function pushing(ruleForm, image, UploadQuestion) {
              let result = await UploadQuestion({
                title: ruleForm.questionname,
                content: ruleForm.desc,
                question_image: image,
                label1: ruleForm.type[0],
                label2: ruleForm.type[1] ? ruleForm.type[1] : "",
                label3: ruleForm.type[2] ? ruleForm.type[2] : "",
                label4: ruleForm.type[3] ? ruleForm.type[3] : ""
              });
              return result["data"];
            }
            let result = pushing(this.ruleForm, this.image, UploadQuestion);
            result
              .then(res => {
                console.log(res);
                if (res.code == "200") {
                  this.$message({
                    message: "创建成功",
                    type: "success",
                    offset: 100
                  });
                  eventBus.$emit("sentTitle", this.ruleForm.questionname);
                  this.$router.push({
                    name: "questdetail",
                    params: { title: res.result }
                  });
                  localStorage.setItem("questionId", res.result);
                }
              })
              .catch(err => {
                console.log(err);
              });
          } else {
            this.$message({
              type: "error",
              message: "请输入正确的数据",
              offset: 80
            });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs.editor.content = "";
      this.$refs[formName].resetFields();
    }
  },
  computed: {},
  components: {
    quillEditor
  },
  mounted() {}
};
</script>

<style lang="less" scoped="scoped">
@import "../../../static/less/questions.less";
</style>
