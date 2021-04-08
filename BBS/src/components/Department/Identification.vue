<template>
  <div>
    <!-- 头部 -->
    <div class="Identification_header">认证</div>
    <!-- 主体 -->
    <div class="Identification_container">
      <el-collapse v-model="activeNames" @change="handleChange" accordion>
        <el-collapse-item title="学生会 Student-union" name="1" class="first">
          <div class="Department_post" v-for="(value, key) in post" :key="key">
            {{ value }}
            <div class="Identification_btn">
              <el-button type="danger" size="mini" @click="handMainIdent(value)">去认证</el-button>
            </div>
          </div>
          <el-collapse v-model="activeName" accordion>
            <el-collapse-item  v-for="(item,index) in department" :key="index" :title="item" :name="index+1">
              <div
                class="Department_post"
                v-for="(value, key) in charge"
                :key="key"
              >
                {{ value }}
                <div class="Identification_btn">
                  <el-button type="danger" size="mini" @click="Identifacationling(item,value)">去认证</el-button>
                </div>
              </div>
            </el-collapse-item>
          </el-collapse>
        </el-collapse-item>
        <el-collapse-item title="团委 League-committee" name="2" class="second">
          <div>
            控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
          </div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </el-collapse-item>
        <el-collapse-item
          title="自律办 SelfdisciplineAssociation"
          name="3"
          class="thead"
        >
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>
            清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；
          </div>
          <div>
            帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
          </div>
        </el-collapse-item>
        <!-- <el-collapse-item title="可控 Controllability" name="4">
          <div>
            用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
          </div>
          <div>
            结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
          </div>
        </el-collapse-item> -->
      </el-collapse>
    </div>
    <el-dialog
      title="认证"
      :visible.sync="centerDialogVisible"
      width="40%"
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
           <span style="text-indent:100px;display:block;margin-top:10px;color:red">注:上传照片需要工作证正反面</span>
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
import upload from "../../minxin/upload";
export default {
 mixins:[upload],
  data() {
    return {
         ruleForm: {
          name: '',
          grade: '',
        },
        rules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
          ],
          grade: [
            { required: true, message: '请输入年级', trigger: 'blur' }
          ],
        },
        activeName:["1"],
      centerDialogVisible:false,
      activeNames: ["1"],
      //学生会主要职位
      post: ["学生会主席", "学生会副主席"],
      //部门名
      department:["艺术团","体育部","宣传部"],

      charge: ["第一负责人", "第二负责人","干事"],
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
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
      },

    //核心职位
    handMainIdent(value){
        console.log(value);
        $(".el-dialog__title").text(`${value}认证`);
        this.centerDialogVisible=true;
    },
      //显示认证职位
    Identifacationling(item,value){
        console.log(item,value);
        $(".el-dialog__title").text(`${item}${value}认证`);
        this.centerDialogVisible=true;

    }

  },
  mounted() {
    $(".first .el-collapse-item__header").eq(0).css("font-size", "18px");
    $(".second .el-collapse-item__header").eq(0).css("font-size", "18px");
    $(".thead .el-collapse-item__header").eq(0).css("font-size", "18px");
  },
};
</script>

<style lang="less" scoped>
@import "../../../static/less/deportment/identification.less";
</style>