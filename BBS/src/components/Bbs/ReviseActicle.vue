<template>
    <div>
        <div class="ReviseActicle_header">
                <span>修改文章</span>
        </div>
            <!--文章内容-->
    <div class="article_main">
      <!--文章标题 -->
      <div class="article_title" style="padding-left: 20px">
        <label for="articleTitle"
          ><span style="color: #606266"
            ><font color="red">*</font>文章标题:</span
          ><input
            type="search"
            name="articleTitle"
            class="title_input"
            autocomplete="off"
            placeholder="请输入标题"
            v-model="formdata.title"
            @keyup="TitleCheck()"
            required="required"
        /></label>
        <transition enter-active-class="animated fadeInDown">
          <p
            class="title_warn"
            :style="{ color: titleWarn.color }"
            v-show="warnTitleFlag"
          >
            <span :class="titleWarn.icon"></span>{{ titleWarn.msg }}
          </p>
        </transition>
      </div>
      <!-- 文章封面 -->
      <div class="article_coverimg">
        <span style="color: #606266">文章封面:</span>
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
               <i style="margin:-20px" v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
      </div>
      <!-- 文章性质 -->
       <div class="article_nature">
        <span style="color: #606266;"><font color="red">*</font>文章类型:</span>
        <div class="check_container">
        <el-checkbox-group v-model="formdata.type" :max="4" :min="1">
          <el-checkbox label="学习"></el-checkbox>
          <el-checkbox label="感情"></el-checkbox>
          <el-checkbox label="考试"></el-checkbox>
          <el-checkbox label="生活"></el-checkbox>
          <el-checkbox label="自然"></el-checkbox>
        </el-checkbox-group>
        </div>
         <p class="nature_wran" :style="{color:natureWarn.color}" v-show="NatureFlag"><span :class="natureWarn.icon"></span>{{natureWarn.msg}}</p>
       </div>
      <!-- 文章内容 -->
      <div class="article_content">
        <span style="color: #606266;margin-left:-25px">文章内容:</span>
        <div style=" margin-left: 70px; margin-top: -24px">
          <!-- 富文本组件 -->
          <quillEditor
          
            :num="num"
            :text.sync="text"
            @editor="input"
            ref="editor"
            :url="url"
            :height="'450px'"
            style="margin: -20px"
             @imgSrc="handleImgUpload"
          ></quillEditor>
        </div>
      </div>
    </div>
     <div class="fun_btn">
      <el-button @click="preview = true" type="primary">预览</el-button>
      <el-button type="success" @click="publishing">确定修改</el-button>
    </div>
    </div>
</template>

<script>
 import upload from "../../minxin/upload";
 import { UploadArticle,ShowArticle} from "../../api/data";
export default {
  name: "FuncFormsEdit",
  mixins:[upload],
  components: {
    quillEditor: () => import("./Quill.vue"),
  },
  data() {
    return {
      //富文本纯文字
      text:"",
      //文章字数限制
      num:400,
      dialogImageUrl: "",
      dialogVisible: false,
      //存储表单数据
      formdata:{
        title:"",
        subtitle:"",
        content:"",
        type:[],
      },
      //上传地址
      url:'/article/uploadArticleImage',
      //文章封面
      //控制副标题提示信息显示
      warnSTitleFlag: false,
      //控制主标题提示信息显示
      warnTitleFlag: false,
      //控制类型提示信息显示
      NatureFlag: false,
      //主标题提示信息
      titleWarn: {
        msg: "",
        color: "red",
        result: 200,
        icon: "",
      },
      //副标题提示信息
      subtitleWarn: {
        msg: "",
        color: "",
        result: 200,
        icon: "",
      },
      //文章性质提示消息
      natureWarn: {
        msg: "",
        color: "",
        icon: "",
      },
      //主标题
      mainTitle: "",
      //副标题
      subTitle: "",
      //文章性质
      nature: [],
      percentage: 20,
      preview: false,
      Promptinput: false,
      //文章内容
      content: null,
    };
  },
  methods: {
    //封面图片上传
      handleImgUpload(val){
      this.formdata.content+=val;
    },
    input(content) {
      this.formdata.content = content;
    },
    //获取文章纯文本
    handText(text){
              this.text=text;
            },
    //校验主标题
    TitleCheck() {
      if (this.formdata.title.trim().length >= 5 && this.formdata.title.length < 20) {
        this.$store.commit("nocanQuit");
        this.titleWarn.msg = "正确";
        this.titleWarn.color = "#67C23A";
        this.titleWarn.icon = "el-icon-success";
        return true;
      } else if (this.formdata.title.trim() == "") {
        this.$store.commit("canQuit");
        this.warnTitleFlag = true;
        this.titleWarn.color = "#F56C6C";
        this.titleWarn.msg = "标题不能为空";
        this.titleWarn.icon = "el-icon-error";
        return false;
      } else {
        this.$store.commit("nocanQuit");
        this.titleWarn.msg = "标题长度在5~20之间!";
        this.warnTitleFlag = true;
        this.titleWarn.color = "#F56C6C";
        this.titleWarn.icon = "el-icon-error";
        return false;
      }
    },
    //校验类型选择
    NatureCheck() {
      if (this.formdata.type.length == 0) {
        this.NatureFlag = true;
        this.natureWarn.msg = "至少选择一个类型";
        this.natureWarn.icon = "el-icon-error";
        this.natureWarn.color = "#F56C6C";
        return false;
      } else if (this.formdata.type.length>=5) {
        this.NatureFlag = true;
        this.natureWarn.msg = "至多选择四个类型";
        this.natureWarn.icon = "el-icon-error";
        this.natureWarn.color = "#F56C6C";
        return false;
      } else {
        this.natureWarn.msg = "正确";
        this.natureWarn.icon = "el-icon-success";
        this.natureWarn.color = "#67C23A";
        return true;
      }
    },
    //发布文章
    async publishing() {
      if (
        !(this.TitleCheck() && this.formdata.content != null && this.NatureCheck())
      ) {
        this.$message({
          type: "error",
          message: "请检查输入的内容",
          offset: 100,
        });
        if (this.content != "") {
          this.$store.commit("nocanQuit");
        }
      } else {
        let result=await UploadArticle({
            title:this.formdata.title,
            content:this.formdata.content,
            article_image:this.image,
            label1:this.formdata.type[0],
            label2:this.formdata.type[1],
            label3:this.formdata.type[2],
            label4:this.formdata.type[3]})
            if(result["data"].code=="200"){
                  this.$message({
                     message: "发表成功",
                     type: "success",
                      offset:100,
                   });
                this.$store.commit("canQuit");
                localStorage.setItem("articleId",result["data"].result);
                this.$router.push({
                 name: "articledetails"
                 })
            }
      }
    },
  },
  mounted() {},
  async created() {
      let id="";
      if(!this.$route.params.articleId) {
          id=localStorage.getItem("articleId");        
      }else{
          id=this.$route.params.articleId;
      }
    let result=await ShowArticle(id);
    let data=result["data"].result;
    this.formdata.title=data.title;
    this.image=data.articleImage;
    this.formdata.type=data.label;
    this.$refs.editor.content=data.content;
    this.Promptinput = true;
  },
};
</script>

<style lang="less" scoped>
@import "../../../static/less/bbs/revisearticle.less";

</style>