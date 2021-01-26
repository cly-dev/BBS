<template>
  <div>
    <!-- 头部 -->
      <div class="question_title">
          <span>提问</span>
      </div>
      <!-- 提问主体 -->
      <div class="question_form">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <!-- 问题名称 -->
          <el-form-item label="问题名称" prop="questionname">
            <el-input v-model="ruleForm.questionname"></el-input>
          </el-form-item>
        <!--  <el-form-item label="活动区域" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item> -->

          <!--截止时间-->
          <el-form-item label="截止时间" required>
            <el-col :span="11">
              <el-form-item prop="date1">
                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-form-item prop="date2">
                <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <!-- 问题性质 -->
          <el-form-item label="问题性质" prop="type">
            <el-checkbox-group v-model="ruleForm.type">
              <el-checkbox label="学习" name="type"></el-checkbox>
              <el-checkbox label="感情" name="type"></el-checkbox>
              <el-checkbox label="生活" name="type"></el-checkbox>
              <el-checkbox label="考试" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
         <!-- <el-form-item label="特殊资源" prop="resource">
            <el-radio-group v-model="ruleForm.resource">
              <el-radio label="线上品牌商赞助"></el-radio>
              <el-radio label="线下场地免费"></el-radio>
            </el-radio-group>
          </el-form-item> -->
          <!-- 问题描述 -->
          <el-form-item label="具体描述" prop="desc">
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
          </el-form-item>
          <center>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
           </center>
        </el-form>
      </div>
  </div>
</template>

<script>
  export default{
       data() {
            return {
              ruleForm: {
               questionname: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
              },
              rules: {
               questionname: [
                  { required: true, message: '请输入问题名称', trigger: 'blur' },
                  { min:6, max: 20, message: '长度在 6到20 个字符', trigger: 'blur' }
                ],
                region: [
                  { required: true, message: '请选择活动区域', trigger: 'change' }
                ],
                date1: [
                  { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                ],
                date2: [
                  { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                ],
                type: [
                  { type: 'array', required: true, message: '请至少选择一个问题性质', trigger: 'change' }
                ],
                resource: [
                  { required: true, message: '请选择活动资源', trigger: 'change' }
                ],
                desc: [
                  { min:1, max:50,required: true, message: '请填写具体的问题描述,最多可输入50个字符', trigger: 'blur' }
                ]
              }
            };
          },
          methods: {
            submitForm(formName) {
              this.$refs[formName].validate((valid) => {
                if (valid) {
                      console.log(JSON.stringify(this.ruleForm));
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

<style lang="less" scoped="scoped">
  @import '../../static/less/questions.less';
</style>
