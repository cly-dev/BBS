<template>
  <div style="height:100%">
    <!-- 部门管理头部 -->
    <header>
      <section class="AdminDapartment_header">部门管理</section>
    </header>
    <!-- 主体 -->
    <main>
      <!-- 侧边栏 -->
      <aside>
        <h1>我是侧边栏</h1>
      </aside>
      <div class="AdminDepartment_container">
        <!-- 菜单 -->
        <span>宣传部</span>
        <span @click="modifyDialogVisible = true">修改部门信息</span>
        <span @click="centerDialogVisible = true">查看部门人数</span>
        <span>发起部门活动</span>
        <span>查看近期活动</span>
      </div>
    </main>
    <!-- 修改部门信息 -->
    <el-dialog
      title="修改信息"
      :visible.sync="modifyDialogVisible"
      width="30%"
      center
    >
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="部门名称">
          <el-input v-model="ruleForm.name" readonly></el-input>
        </el-form-item>

        <el-form-item label="部门所属">
          <el-input v-model="ruleForm.belong" readonly></el-input>
        </el-form-item>

        <el-form-item label="部门图片">
          <div class="department_imgcontainer">
            <span class="el-icon-delete"></span>
            <img
              src="../../../static/images/clouds.jpg"
              alt=""
              class="department_img"
            />
          </div>
          <div class="department_imgcontainer">
            <span class="el-icon-delete"></span>
            <img
              src="../../../static/images/clouds.jpg"
              alt=""
              class="department_img"
            />
          </div>
          <div class="department_imgcontainer">
            <span class="el-icon-delete"></span>
            <img
              src="../../../static/images/clouds.jpg"
              alt=""
              class="department_img"
            />
          </div>
        </el-form-item>

        <el-form-item label="上传图片">
          <div class="article_coverimg">
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
                style="margin:-20px"
                v-else
                class="el-icon-plus avatar-uploader-icon"
              ></i>
            </el-upload>
          </div>
        </el-form-item>

        <el-form-item label="部门描述" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="modifyDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="modifyDialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    <!-- 部门人数 -->
    <el-dialog
      title="部门人数"
      :visible.sync="centerDialogVisible"
      width="40%"
      center
    >
      <el-table :data="tableData" style="width: 100%">
        <el-table-column align="center" label="姓名" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="职位" width="180">
          <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
              {{ scope.row.name }}
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-tooltip content="查看" placement="top" effect="light">
              <el-button
                circle
                icon="el-icon-search"
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
              ></el-button>
            </el-tooltip>
            <el-tooltip content="设置" placement="top" effect="light">
              <el-button
                type="primary"
                icon="el-icon-edit"
                circle
                size="mini"
                @click="handleChange(scope.$index, scope.row)"
              ></el-button>
            </el-tooltip>
            <el-tooltip content="移除" placement="top" effect="light">
              <el-button
                icon="el-icon-delete"
                circle
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
              ></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <!-- 内层弹出框 -->
      <el-dialog
        width="30%"
        title="设置权限"
        :visible.sync="innerVisible"
        center
        append-to-body
      >
        <section class="change_container">
          <span>部员阿勇:</span>
          <select>
            <option value="干事">干事</option>
            <option value="老干事">老干事</option>
            <option value="第一负责人">第一负责人</option>
            <option value="第二负责人">第二负责人</option>
          </select>
          <p>注:设置干事为第一负责人或第二负责人默认换届</p>
        </section>
        <span slot="footer" class="dialog-footer">
          <el-button @click="innerVisible = false">取 消</el-button>
          <el-button type="primary" @click="innerVisible = false"
            >确 定</el-button
          >
        </span>
      </el-dialog>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="100"
        layout="total, prev, pager, next"
        style="text-align:center"
        :total="1000"
      >
      </el-pagination>

      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import upload from "../../minxin/upload";
export default {
  mixins: [upload],
  data() {
    return {
      innerVisible: false,

      modifyDialogVisible: false,
      currentPage1: 5,
      //查看人数显示框
      centerDialogVisible: false,

      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      ruleForm: {
        name: "宣传部",
        belong: "学生会",
        desc: "来"
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
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
    //
    handleChange(index, row) {
      this.innerVisible = true;
      console.log(row);
    },
    //查看部门人员事件
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  mounted() {},
  created() {
    //   this.$router.beforeEach((to, from, next) => {
    //         console.log(to.name);
    //         next();
    //   })
    //判断认证信息
  }
};
</script>

<style lang="less" scoped>
@import "../../../static/less/deportment/admindepartment.less";
</style>
