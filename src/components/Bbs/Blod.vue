<template>
  <div class="blod_container">
    <header>
      <section class="Blod_header">
        <span>博客</span>
      </section>
    </header>
    <main>
      <mavon-editor
        class="md_editor"
        :toolbars="toolbars"
        v-model="content"
        :ishljs="true"
        @save="saveDoc"
        @change="updateDoc"
      />
      <section class="push_btn">
        <el-button @click="handleClick"
          >上传md文件<i class="el-icon-upload el-icon--right"></i
        ></el-button>
        <el-button type="primary" @click="handleTitleInput">确定</el-button>
      </section>
    </main>
    <!-- 上传文件 -->
    <input type="file" accept=".md" class="Upload" @change="handleUpload" />
    <!-- loading弹出框 -->
    <el-dialog
      center
      title="快给你的博客起个响亮的名号"
      :visible.sync="DialogVisible"
      width="500px"
    >
      <section class="input_container">
        <span>标题:</span> <input type="text" v-model="title" />
      </section>
      <span slot="footer" class="dialog-footer">
        <el-button @click="DialogVisible = false">稍等</el-button>
        <el-button type="primary" @click="hanlePush" :loading="loadingFlay"
          >发布</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //是否loading
      loadingFlay: false,
      //博客标题
      title: "",
      //弹出框
      DialogVisible: false,
      //md编辑器内容
      content: "内容过多推荐全屏编辑哦",
      text: "",
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        navigation: true, // 导航目录
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        subfield: true, // 单双栏模式
        preview: true // 预览
      }
    };
  },
  methods: {
    //发表事件
    hanlePush() {
      if (this.title.length > 0 && this.title.length <= 20) {
        this.loadingFlay = true;
      } else if (this.title.length == 0) {
        this.message("warning", "标题不能为空");
      } else if (this.title.length > 20) {
        this.message("warning", "标题字数不能超过20");
      }
    },
    //发表后弹出框提示输入标题
    handleTitleInput() {
      if (this.content == "") {
        this.message("warning", "博客内容不能为空哦");
      } else {
        this.DialogVisible = true;
      }
    },
    handleClick() {
      $(".Upload").click();
    },
    async handleUpload(e) {
      let file = e.target.files[0];
      if (file.name.split(".")[1] != "md") {
        this.message("warning", "不是md文件");
      } else {
        let content = await HandleReadFile(file);
        this.content = content;
        this.message("success", "上传成功");
      }
    },
    updateDoc(markdown, html) {
      // 此时会自动将 markdown 和 html 传递到这个方法中
      console.log("markdown内容: " + markdown);
      this.text = html;
      console.log("html内容:" + html);
    },
    saveDoc(markdown, html) {
      // 此时会自动将 markdown 和 html 传递到这个方法中
      console.log("markdown内容:" + markdown);
      console.log("html内容:" + html);
    }
  }
};
//读取文件
function HandleReadFile(file) {
  let promise = new Promise((resolve, reject) => {
    const FileRead = new FileReader();
    FileRead.readAsText(file);
    FileRead.onload = function(e) {
      resolve(e.currentTarget.result);
    };
  });
  return promise;
}
</script>

<style lang="less" scoped>
@import "../../../static/less/bbs/blod.less";
</style>
