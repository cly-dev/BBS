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
          <!-- 活动时间 -->
          <el-form-item label="活动时间" prop="data1">
            <div class="block activity_time">
              <el-date-picker
                v-model="ruleForm.data1"
                format="yyyy-MM-dd HH:mm:ss"
                value-format="yyyy-MM-dd HH:mm:ss"
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              >
              </el-date-picker>
            </div>
          </el-form-item>
          <!-- 报名时间 -->
          <el-form-item label="报名时间" prop="data2">
            <div class="block">
              <el-date-picker
                validate-event
                v-model="ruleForm.data2"
                format="yyyy-MM-dd HH:mm:ss"
                value-format="yyyy-MM-dd HH:mm:ss"
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              >
              </el-date-picker>
            </div>
          </el-form-item>
          <!-- 限制人数 -->
          <el-form-item label="限制人数" prop="num">
            <el-input v-model.number="ruleForm.num"></el-input>
          </el-form-item>
          <!-- 活动封面 -->
          <div class="activity_coverimg">
            <span style="color: #606266">活动封面</span>
            <div class="upload_container">
              <el-upload
                :limit="1"
                list-type="picture-card"
                class="avatar-uploader"
                multiple
                action="http://localhost:9090/image/uploadImageSingle"
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
          <!-- 活动性质 -->
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
let activityTime = [];
let enrollTime = [];
import { AddActivity } from "../../api/data";
import upload from "../../minxin/uploadImg";
export default {
  mixins: [upload],
  data() {
    return {
      filetype: "activity",
      value1: "",
      //图片
      active: 1,
      ruleForm: {
        name: "",
        region: "",
        place: "",
        date1: [],
        date2: [],
        num: null,
        type: [],
        desc: ""
      },
      rules: {
        that: this,
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          {
            min: 5,
            max: 20,
            message: "长度在 5 到 20 个字符",
            trigger: "blur"
          }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        place: [{ required: true, message: "请输入详细地址", trigger: "blur" }],
        num: [
          {
            type: "number",
            message: "请输入人数",
            required: true,
            trigger: "blur"
          },
          {
            pattern: /^(5|[5-9]\d?|100)$/,
            message: "人数在5 到100 以内",
            trigger: "blur"
          }
        ],
        data1: [
          {
            type: "array",
            required: true,
            trigger: "change",
            validator(rule, value, callback) {
              if (value == null) {
                callback("请输入日期");
              } else {
                let date1 = value[0];
                let data_Arr1 = date1.split(" ");
                let date_Arr2 = data_Arr1[0].split("-");
                let date_Arr3 = data_Arr1[1].split(":");
                DateFlay(date_Arr2, date_Arr3, callback);
                let date2 = value[1];

                let dateEnd = date2.split(" ");

                let date_Arr4 = dateEnd[0].split("-");
                if (date_Arr4[1] == date_Arr2[1]) {
                  if (date_Arr4[2] - date_Arr2[2] > 15) {
                    callback("活动时间最多为15天");
                  }
                } else {
                  if (date_Arr4[2] + 30 - date_Arr2[2] > 15) {
                    callback("活动时间最多为15天");
                  }
                }
                if (enrollTime != "") {
                  let enrollStart = enrollTime[1].split(" ");
                  let enroll_Arr1 = enrollStart[0].split("-");
                  let enroll_Arr2 = enrollStart[1].split(":");
                  if (date_Arr2[1] < enroll_Arr1[1]) {
                    callback("活动参与时间不能小于报名时间");
                  } else if (date_Arr2[1] == enroll_Arr1[1]) {
                    if (date_Arr2[2] < enroll_Arr1[2]) {
                      callback("活动参与时间不能小于报名截止时间");
                    } else if (date_Arr2[2] == enroll_Arr1[2]) {
                      if (date_Arr3[0] < enroll_Arr2[0]) {
                        callback("活动参与时间不能小于报名截止时间");
                      } else if (date_Arr3[0] == enroll_Arr2[0]) {
                        if (date_Arr3[1] < enroll_Arr2[1]) {
                          callback("活动参与时间不能小于报名截止时间");
                        } else if (date_Arr3[1] == enroll_Arr2[1]) {
                          if (date_Arr3[2] < enroll_Arr2[2]) {
                            callback("活动参与时间不能小于报名截止时间");
                          }
                        }
                      }
                    }
                  }
                }
                activityTime = value[0];
              }
              callback();
            }
          }
        ],
        data2: [
          {
            type: "array",
            required: true,
            trigger: "change",
            validator(rule, value, callback) {
              console.log(value);
              if (value == null) {
                callback("请输入日期");
              } else {
                let date1 = value[0];
                let data_Arr1 = date1.split(" ");
                let date_Arr2 = data_Arr1[0].split("-");
                let date_Arr3 = data_Arr1[1].split(":");

                let date2 = value[1];
                let date_Arr4 = date2.split(" ");
                let date_Arr5 = date_Arr4[0].split("-");
                let date_Arr6 = date_Arr4[1].split(":");
                DateFlay(date_Arr2, date_Arr3, callback);
                enrollTime = value;
                if (activityTime != "") {
                  let activityStart = activityTime.split(" ");
                  let activity_Arr1 = activityStart[0].split("-");
                  let activity_Arr2 = activityStart[1].split(":");
                  if (date_Arr5[1] > activity_Arr1[1]) {
                    callback("报名截止时间不能大于活动开始时间");
                  } else if (date_Arr5[1] == activity_Arr1[1]) {
                    if (date_Arr5[2] > activity_Arr1[2]) {
                      callback("报名截止时间不能大于活动开始时间");
                    } else if (date_Arr5[2] == activity_Arr1[2]) {
                      if (date_Arr6[0] > activity_Arr2[0]) {
                        callback("报名截止时间不能大于活动开始时间");
                      } else if (date_Arr6[0] == activity_Arr2[0]) {
                        if (date_Arr6[1] > activity_Arr2[1]) {
                          callback("报名截止时间不能大于活动开始时间");
                        } else if (date_Arr6[1] == activity_Arr2[1]) {
                          if (date_Arr6[2] > activity_Arr2[2]) {
                            callback("报名截止时间不能大于活动开始时间");
                          }
                        }
                      }
                    }
                  }
                }
                callback();
              }
            }
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            len: 1,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        //成功提交
        if (valid) {
          console.log("提交");
          async function addActivity(ruleForm, image) {
            let result = await AddActivity({
              activityTitle: ruleForm.name,
              activityContent: ruleForm.desc,
              activityImage: image,
              activityStartTime: ruleForm.data1[0],
              activityEndTime: ruleForm.data1[1],
              activityObject: "自愿报名",
              recruitStartTime: ruleForm.data2[0],
              recruitEndTime: ruleForm.data2[1],
              totalNum: ruleForm.num,
              joinNum: 0,
              activityPlace: ruleForm.region,
              activityAddress: ruleForm.place,
              activityType: ruleForm.type[0]
            });
            return result;
          }
          let result = addActivity(this.ruleForm, this.image);
          result
            .then(res => {
              console.log(res);
              if (res["data"].code == "200") {
                this.message("success", "创建成功");
                this.$router.push("watch-activity");
              }
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  mounted() {
    $(".el-step.is-vertical .el-step__line").css("top", "20px");
  }
};
function DateFlay(date_Arr2, date_Arr3, callback) {
  let date = new Date();
  //判断年月日
  if (
    date_Arr2[0] < date.getFullYear() ||
    date_Arr2[0] > date.getFullYear() + 1
  ) {
    callback("年份错误");
  } else {
    if (date_Arr2[1] == date.getMonth() + 1) {
      if (date_Arr2[2] < date.getDate()) {
        callback("日期错误");
      } else {
        if (date_Arr2[2] == date.getDate()) {
          if (date_Arr3[0] < date.getHours()) {
            callback("选择时间小于当前时间:小时错误");
          } else if (date_Arr3[0] == date.getHours()) {
            if (date_Arr3[1] < date.getMinutes()) {
              callback("选择时间小于当前时间:分钟错误");
            } else if (date_Arr3[1] == date.getMinutes()) {
              if (date_Arr3[2] < date.getSeconds()) {
                callback("选择时间小于当前时间:秒数错误");
              }
            }
          }
        }
      }
    } else if (date_Arr2[1] < date.getMonth() + 1) {
      callback("选择月份小于当前月份");
    } else if (date_Arr2[1] > date.getMonth() + 2) {
      callback("只能选择最近1个月");
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../../static/less/deportment/activity.less";
</style>
