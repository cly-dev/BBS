<template>
  <div>
    <div
      class="square"
      v-for="(value, index) in list"
      :key="index"
      @click="toQuestDetail(value)"
    >
      <div class="square_title">
        {{ value.title }}
      </div>
      <div class="square_container">
        <router-link :to="{ name: 'articledetails', parmas: { id: value.id } }">
          <img :src="value.articleImage" v-if="value.articleImage" />
        </router-link>
        <div class="square_content" :style="imgFlag(value.articleImage)">
          <span>
            {{ value.content }}
          </span>
          <button type="button" class="more_btn">阅读全文</button>
          <el-dropdown placement="bottom">
            <button type="button">
              <span class="el-icon-more"></span>
            </button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="Uninterested(index)"
                >不感兴趣</el-dropdown-item
              >
              <el-dropdown-item @click.native="dialogVisible = true"
                >举报</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>

    <!-- 举报 -->
    <el-dialog center :visible.sync="dialogVisible" width="20%">
      <!-- 标题 -->
      <div slot="title">
        <h2>举报</h2>
        <p style="color:#C0C4CC ;">(请选择理由)</p>
      </div>
      <!-- 内容 -->
      <div style="width: 106%;">
        <el-checkbox-group v-model="checkList" :max="3">
          <el-checkbox label="垃圾广告"></el-checkbox>
          <el-checkbox label="不实信息"></el-checkbox>
          <el-checkbox label="有害信息"></el-checkbox>
          <el-checkbox label="涉嫌侵权"></el-checkbox>
          <el-checkbox label="诱导赞同、关注等行为"></el-checkbox>
          <el-checkbox label="辱骂、人身攻击等不友善行为"></el-checkbox>
        </el-checkbox-group>
        <textarea
          cols="30"
          rows="10"
          placeholder="请输入详细理由(选填)"
          class="report_input"
          v-model="reportContent"
        ></textarea>
      </div>

      <!-- 按钮 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >举报</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { ShowRandomArticle } from "../../api/data";
export default {
  data: () => {
    return {
      reportContent: "",
      dialogVisible: false,
      checkList: [],
      imgPath: "../../static/images/department_propaganda.jpg",
      list: []
    };
  },
  methods: {
    //跳转到问题详情事件
    toQuestDetail(value) {
      localStorage.setItem("articleId", value.articleId);
      this.$router.push({
        name: "articledetails",
        params: {
          articleId: value.articleId
        }
      });
    },
    //不感兴趣
    Uninterested(index) {
      this.$nextTick(() => {
        this.list.splice(index, 1);
      });
      this.$message("以后会减少此类文章的推荐");
    }
  },
  computed: {
    imgFlag() {
      return doc => {
        if (doc) {
          return { width: "68%" };
        } else {
          return { width: "96%" };
        }
      };
    }
  },
  async created() {
    let result = await ShowRandomArticle();
    console.log(result);
    result ? (this.list = result["data"].result) : "";
  }
};
</script>

<style lang="less" scoped="scoped">
@import "../../../static/less/square.less";
</style>
