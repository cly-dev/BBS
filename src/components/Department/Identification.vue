<template>
  <div>
    <!-- 头部 -->
    <div class="Identification_header">认证</div>
    <!-- 主体 -->
    <div class="Identification_container">
      <el-collapse v-model="activeNames" @change="handleChange" accordion>
        <!-- 部门列表 -->
        <el-collapse-item
          v-for="(value, index) in departmentGrade"
          :key="value.departmentId"
          :title="value.departmentName"
          :name="index"
        >
          <!-- 子级部门 -->
          <el-collapse v-model="activeName" accordion>
            <el-collapse-item
              v-for="(item, index) in departmentChild"
              :key="index"
              :title="item.departmentName"
              :name="index + 1"
            >
              <div
                class="Department_post"
                v-for="(value, key) in charge"
                :key="key"
              >
                {{ value }}
                <div class="Identification_btn">
                  <el-button
                    type="danger"
                    size="mini"
                    @click="Identifacationling(item, value)"
                    >去认证</el-button
                  >
                </div>
              </div>
            </el-collapse-item>
          </el-collapse>
        </el-collapse-item>
      </el-collapse>
    </div>
    <el-dialog
      title="认证"
      :visible.sync="centerDialogVisible"
      width="800px"
      center
    >
      <div class="Identification_form">
        <div style="width:80%">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="姓名:" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="年级:" prop="grade">
              <el-input v-model="ruleForm.grade"></el-input>
            </el-form-item>
            <div class="Identification_img">
              <span style="color: #606266">工作证照:</span>
              <div class="upload_container">
                <el-upload
                  :limit="2"
                  list-type="picture-card"
                  class="avatar-uploader"
                  multiple
                  action="/image/uploadImageSingle"
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
            <span
              style="text-indent:100px;display:block;margin-top:10px;color:red"
              >注:上传照片需要工作证正反面</span
            >
          </el-form>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
let num = 4;
import { GetDepList, AddDepCheck } from "../../api/data";
import uploadImg from "../../minxin/uploadImg";
export default {
  mixins: [uploadImg],
  data() {
    return {
      //上传照片类型
      filetype: "head",
      //父级部门
      departmentGrade: [],
      //子级部门
      departmentChild: [],
      //认证表单
      ruleForm: {
        name: "",
        grade: ""
      },
      //校验表单
      rules: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        grade: [{ required: true, message: "请输入年级", trigger: "blur" }]
      },
      activeName: ["1"],
      centerDialogVisible: false,
      activeNames: ["1"],
      //学生会主要职位
      post: ["学生会主席", "学生会副主席"],
      //子部门
      charge: ["第一负责人", "第二负责人", "干事"]
    };
  },
  methods: {
    //请求子部门
    async handleChange(val) {
      if (typeof val != "string") {
        if (num != val) {
          num = val;
          let parentId = this.departmentGrade[val].departmentId;
          let result = await GetDepList({
            parentId: this.departmentGrade[val].departmentId
          });
          console.log(result);
          this.departmentChild = result["data"].result;
        }
      }
    },
    //校验表单
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid && this.image != "") {
          DepCheck(this.ruleForm, this.image).then(res => {
            console.log(res);
            if (res["data"].code == "200") {
              this.message("success", "提交成功,请等待审核");
            } else {
              this.message("warning", "提交失败");
            }
          });
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    //核心职位
    handMainIdent(value) {
      $(".el-dialog__title").text(`${value}认证`);
      this.centerDialogVisible = true;
    },
    //显示认证职位
    Identifacationling(item, value) {
      Object.defineProperty(this.ruleForm, "departmentId", {
        value: item.departmentId
      });
      $(".el-dialog__title").text(`${item.departmentName}${value}认证`);
      this.centerDialogVisible = true;
    }
  },
  mounted() {
    $(".first .el-collapse-item__header")
      .eq(0)
      .css("font-size", "18px");
    $(".second .el-collapse-item__header")
      .eq(0)
      .css("font-size", "18px");
    $(".thead .el-collapse-item__header")
      .eq(0)
      .css("font-size", "18px");
  },

  async created() {
    console.log(this.$store.state.identity);
    if (!this.$store.state.identity) {
      this.message("warning", "已认证完成");
      setTimeout(() => {
        this.$router.push({
          name: "部门/我的部门"
        });
      }, 1000);
    }
    //获取部门列表
    let result = await GetDepList({ departmentGrade: "一级部门" });
    console.log(result);
    this.departmentGrade = result["data"].result;
  }
};
async function DepCheck(ruleForm, image) {
  let result = await AddDepCheck({
    departmentId: ruleForm.departmentId,
    realName: ruleForm.name,
    grade: ruleForm.grade,
    imagePath: image
  });
  return result;
}
</script>

<style lang="less" scoped>
@import "../../../static/less/deportment/identification.less";
</style>
