<template>
  <div>
    <!-- 富文本 -->
    <quill-editor
      :options="editorOption"
      ref="myQuillEditor"
      v-model="content"
      @keyup.native="editorInput"
      :style="{ width: width, height: height }"
    >
      <div id="toolbar" slot="toolbar">
        <!-- <form :action="url" enctype="multipart/form-data" method="POST" id="fileForm"> -->
        <input
        
          @change="upload"
          name="multipartFile"
          style="display: none"
          type="file"
          id="file"
          accept="image/gif, image/jpeg,image/png"
        />
        <!-- </form> -->
        <!-- Add a bold button -->
        <button class="ql-bold" title="加粗">Bold</button>
        <button class="ql-italic" title="斜体">Italic</button>
        <button class="ql-underline" title="下划线">underline</button>
        <button class="ql-strike" title="删除线">strike</button>
        <button class="ql-blockquote" title="引用"></button>
        <button class="ql-code-block" title="代码"></button>
        <button class="ql-header" value="1" title="标题1"></button>
        <button class="ql-header" value="2" title="标题2"></button>
        <!--Add list -->
        <button class="ql-list" value="ordered" title="有序列表"></button>
        <button class="ql-list" value="bullet" title="无序列表"></button>
        <!-- Add font size dropdown -->
        <select class="ql-header" title="段落格式">
          <option selected>段落</option>
          <option value="1">标题1</option>
          <option value="2">标题2</option>
          <option value="3">标题3</option>
          <option value="4">标题4</option>
          <option value="5">标题5</option>
          <option value="6">标题6</option>
        </select>
        <select class="ql-size" title="字体大小">
          <option value="10px">10px</option>
          <option value="12px">12px</option>
          <option value="14px">14px</option>
          <option value="16px" selected>16px</option>
          <option value="18px">18px</option>
          <option value="20px">20px</option>
        </select>
        <select class="ql-font" title="字体">
          <option value="SimSun">宋体</option>
          <option value="SimHei">黑体</option>
          <option value="Microsoft-YaHei">微软雅黑</option>
          <option value="KaiTi">楷体</option>
          <option value="FangSong">仿宋</option>
          <option value="Arial">Arial</option>
        </select>
        <!-- Add subscript and superscript buttons -->
        <select class="ql-color" value="color" title="字体颜色"></select>
        <select
          class="ql-background"
          value="background"
          title="背景颜色"
        ></select>
        <select class="ql-align" value="align" title="对齐"></select>
        <button class="ql-clean" title="还原"></button>
        <!-- You can also add your own -->
        <button type="button" class="ql-image">
          <svg viewBox="0 0 18 18">
            <rect class="ql-stroke" height="10" width="12" x="3" y="4"></rect>
            <circle class="ql-fill" cx="6" cy="7" r="1"></circle>
            <polyline
              class="ql-even ql-fill"
              points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"
            ></polyline>
          </svg>
        </button>
      </div>
    </quill-editor>
      <div style="margin-top: 68px;width:99%;height: 20px;">
                      <div style="float: right;">
                          <i>您还可输入<span :class="{redTis:text > num}">{{num-text}}</span>个字</i>
                      </div>
        </div>

    <!--上传提示 -->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span style="padding-left: 10px">图片上传中</span>
      <span class="upload_loading"></span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelUpload">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { Quill, quillEditor } from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import "../../../static/css/font.css";
let Size = Quill.import("attributors/style/size");
Size.whitelist = ["10px", "12px", "14px", "16px", "18px", "20px"];
Quill.register(Size, true);
// 自定义字体类型
let fonts = [
  "SimSun",
  "SimHei",
  "Microsoft-YaHei",
  "KaiTi",
  "FangSong",
  "Arial",
  "Times-New-Roman",
  "sans-serif",
  "宋体",
  "黑体",
];
let Font = Quill.import("formats/font");
Font.whitelist = fonts;
Quill.register(Font, true);
export default {
  name: "FuncFormsEdit",
  components: {
    quillEditor,
  },
  data: () => {
    return {
      //图片路劲
      imageSrc:'',
      //纯文本
      text:"",
      //上传提示框
      dialogVisible: false,
      //存放图片
      // formData: new FormData(),
      content: "",
      editorOption: {
        placeholder: "请输入",
        theme: "snow", // or 'bubble'
        modules: {
          toolbar: {
            container: "#toolbar",
            handlers: {
              image: function (value) {
                if (value) {
                  // 调用iview图片上传
                  $("#file").click();
                } else {
                  this.quill.format("image", false);
                }
              },
            },
          },
        },
      },
    };
  },
  props: {
    url: {
      type: String,
      default: "/",
    },
    height: {
      type: String,
      default: "100%",
    },
    width: {
      type: String,
      default: "100%",
    },
    num:{
      type:Number,
      default:200
    }
  },
  mounted(){
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },

    cancelUpload() {
      this.dialogVisible = false;
      this.$axios.CancelToken.source().cancel();
    },

    //自定义事件传参
    editorInput(e) {
      this.text=$(".ql-editor").text().trim().length;
      let flay;
      if(this.text >this.num){
        flay=false;
      }else{
        flay=true;
      }
      this.$emit("update:numFlay",flay);
      this.$emit("editor", this.content);
      this.$emit("update:text", $(".ql-editor").text());
      // this.$emit("")
    },
    upload() {
      //上传事件
      let file = document.querySelector("#file");
      let fileInfo = file.files[0];
      let filetype = fileInfo.type;
      let imgWidth = 0;
      let imgHeight = 0;
      //FileReader对象读取上传文件
      let Fileread = new FileReader();
      let ImgData = Fileread.readAsDataURL(fileInfo);
      let P = new Promise((resolve, reject) => {
        Fileread.onload = (e) => {
          let img = new Image();
          img.src = e.target.result;
          setTimeout(() => {
            resolve(img.naturalHeight + "." + img.naturalWidth);
          }, 1000);
        };
      });
      // this.formData.append("multipartFile","");
      //类型判断
      if (
        filetype != "image/jpeg" &&
        filetype != "image/png" &&
        filetype != "image/gif"
      ) {
        this.$message({
          type: "error",
          message: "只允许上传png、jpg、git图片",
          offset: 100,
        });
      } else {
        //大小判断
        if (fileInfo.size > 5242880) {
          this.$message({
            type: "error",
            message: "文件超过5M",
            offset: 100,
          });
        } else {
          P.then((res) => {
            let arr = res.split(".");
            imgHeight = arr[0];
            imgWidth = arr[1];
          //图片长宽判断
            if (imgHeight > 600 && imgWidth > 800) {
                this.$message({
                  message:"图片长宽应为600 x 800",
                  type:"error",
                  offset:100
                })
            } else {
              let timer;
              timer = setInterval(() => {
                if (
                  document.querySelector(".upload_loading").innerText != "....."
                ) {
                  document.querySelector(".upload_loading").innerText += ".";
                }
                if (
                  document.querySelector(".upload_loading").innerText == "....."
                ) {
                  document.querySelector(".upload_loading").innerText = "";
                }
              }, 2000);
              this.dialogVisible = true;
              //校验通过可上传
              let formData = new FormData();
              formData.append(
                "multipartFile",
                document.querySelector("#file").files[0]
              );
              let source = this.$axios.CancelToken.source();
              this.$axios({
                url: this.url,
                method: "post",
                data: formData,
                headers: {
                  "Content-Type": "multipart/form-data",
                },
                //上传进度
                onUploadProgress: (e) => {},
              })
                .then((res) => {
            
                  //查看图片尺寸
                  if (res.data.code == "200") {
                    this.dialogVisible = false;
                    this.$message({
                      type: "success",
                      message: "上传成功",
                      offset: 100,
                    });
                  }
                  clearInterval(timer);
                  // 生成富文本图片
                  this.content += `<p class="ql-align-center"><img src=${res["data"].result} style='text-align:center' width='${imgWidth}' height='${imgHeight}'/></p>`;
                  this.$emit("imgSrc",this.content);
                })
            }
          });
        }
      }
    },
  },
};
</script>

<style>
.upload_loading {
  font-size: 20px;
}
  .redTis{
    color: red;
  }
</style>
