<template>
  <div class="activity_container">
    <span class="container_title">发布活动</span>
    <div class="activity_form">
      <div style="width: 60%; margin-left: 20px">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
          size="medium"
        >
          <el-form-item label="活动名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="活动区域" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="教学楼" value="shanghai"></el-option>
              <el-option label="综合楼" value="beijing"></el-option>
              <el-option label="篮球场" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="详细地址" prop="place">
            <el-input v-model="ruleForm.place"></el-input>
          </el-form-item>
          <el-form-item label="活动时间" required>
            <el-col :span="11">
              <el-form-item prop="date1">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="ruleForm.date1"
                  style="width: 100%"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-form-item prop="date2">
                <el-time-picker
                  placeholder="选择时间"
                  v-model="ruleForm.date2"
                  style="width: 100%"
                ></el-time-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="限制人数" prop="num">
            <el-input v-model.number="ruleForm.num"></el-input>
          </el-form-item>
          <!-- 上传图片 -->
          <div class="activity_coverimg">
            <span style="color: #606266">活动照片</span>
            <div class="upload_container">
            <el-upload
              :limit="2"
              list-type="picture-card"
              class="avatar-uploader"
              multiple
              action="/article/uploadArticleImage"
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
          </div>
          <el-form-item label="活动性质" prop="type">
            <el-checkbox-group v-model="ruleForm.type">
              <el-checkbox label="日常聚会" name="type"></el-checkbox>
              <el-checkbox label="部门面试" name="type" disabled></el-checkbox>
              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="活动描述" prop="desc">
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
          </el-form-item>
          <el-form-item style="text-align: center">
            <el-button type="primary" @click="submitForm('ruleForm')"
              >立即创建</el-button
            >
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="Activity_step">
        <div style="height: 300px; top: -20px; margin-top: 50px">
          <el-steps
            :active="active"
            direction="vertical"
            finish-status="success"
          >
            <el-step title="第1步" description="发布活动"></el-step>
            <el-step title="第2步" description="审核成功"></el-step>
            <el-step title="第3步" description="成功发布"></el-step>
          </el-steps>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import upload from "../../minxin/upload";
export default {
  mixins: [upload],
  data() {
    return {
      //图片
      active: 1,
      ruleForm: {
        name: "",
        region: "",
        place: "",
        date1: "",
        date2: "",
        num: null,
        type: [],
        desc: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 5, max: 20, message: "长度在 5 到 20 个字符", trigger: "blur" },
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
        place: [{ required: true, message: "请输入详细地址", trigger: "blur" }],
        num: [
          {
            type: "number",
            message: "请输入数字",
            required: true,
            trigger: "blur",
          },
          {
            pattern: /^(5|[5-9]\d?|100)$/,
            message: "人数在5 到100 以内",
            trigger: "blur",
          },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
        desc: [{ required: true, message: "请填写活动", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  mounted() {
    $(".el-step.is-vertical .el-step__line").css("top", "20px");
  },
};
</script>

<style lang="less" scoped>
@import "../../../static/less/deportment/activity.less";
</style>