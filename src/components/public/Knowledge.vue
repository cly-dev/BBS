<template>
  <div class="know_main">
    <div class="title">
      <i class="el-icon-notebook-1"></i>
      <span>知识学堂</span>
    </div>
    <div class="know">
      <el-tabs type="border-card" @tab-click="handle">
        <el-tab-pane>
          <span slot="label"><i class="el-icon-date"></i>我的收藏</span>
          <knowlist :list="data"></knowlist>
        </el-tab-pane>
        <el-tab-pane label="计算机">
          <knowlist :list="data"></knowlist>
          <!-- <knowlist :knowlist="data"></knowlist> -->
        </el-tab-pane>
        <el-tab-pane label="四六级">
          <knowlist :list="data"></knowlist>
        </el-tab-pane>
        <el-tab-pane label="艺术">
          <knowlist :list="data"></knowlist>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import knowlist from "./Knowlist.vue";
export default {
  name: "know",
  data() {
    return {
      data: [
        {
          seject: "c语言",
          date: "2020-12-4",
          src:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
        },
        {
          seject: "c语言",
          date: "2020-12-4",
          src:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
        },
        {
          seject: "c语言",
          date: "2020-12-4",
          src:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
        },
        {
          seject: "c语言",
          date: "2020-12-4",
          src:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
        },
        {
          seject: "c语言",
          date: "2020-12-4",
          src:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
        },
        {
          seject: "c语言",
          date: "2020-12-4",
          src:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
        },
        {
          seject: "c语言",
          date: "2020-12-4",
          src:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
        },
        {
          seject: "c语言",
          date: "2020-12-4",
          src:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
        },
        {
          seject: "c语言",
          date: "2020-12-4",
          src:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
        },
        {
          seject: "c语言",
          date: "2020-12-4",
          src:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
        }
      ]
    };
  },
  components: {
    knowlist
  },
  methods: {
    handle(tab, event) {
      console.log(tab.label, event);
    }
  }
};
</script>

<style lang="less" scoped="scoped">
@import "../../../static/less/know.less";
</style>
