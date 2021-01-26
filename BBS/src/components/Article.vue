<template>
  <div>
  <!--文章头部-->
  <div class="article_header">
      <span>文章</span>
  </div>

  <!--文章内容-->
    <div class="article_main">
     <!--文章标题 -->
      <div class="article_title" style="padding-left:20px;">
        <label for="articleTitle"><span style="color: #606266;">文章标题<font color="red">*</font>:</span><input type="search" name="articleTitle" class="title_input" autocomplete="off" placeholder="请输入标题" v-model="mainTitle" @keyup="TitleCheck()" required="required"></label>
         <transition
         enter-active-class="animated fadeInDown";
         >
            <p class="title_warn" :style="{color:titleWarn.color}" v-show="warnTitleFlag"><span :class="titleWarn.icon"></span>{{titleWarn.msg}}</p>
         </transition>
      </div>
       <!--文章副标题 -->
      <div class="article_title">
        <label for="articleTitle"><span style="color: #606266;">&nbsp;&nbsp;文章副标题:</span><input type="search" name="articleTitle" class="title_input" autocomplete="off" placeholder="请输入副标题(可选)" v-model="subTitle" @keyup="subTitleCheck()"></label>
        <transition
        enter-active-class="animated fadeInDown";
        >
            <p class="title_warn" :style="{color:subtitleWarn.color}" v-show="warnSTitleFlag"><span :class="subtitleWarn.icon"></span>{{subtitleWarn.msg}}</p>
        </transition>
      </div>
      <!-- 文章封面 -->
       <div class="article_coverimg">
         <span style="color: #606266;">文章封面:</span>
         <div class="coverimg_upload">
         <el-upload
           class="avatar-uploader"
           action="https://jsonplaceholder.typicode.com/posts/"
           :show-file-list="true"
           :on-success="handleAvatarSuccess"
           :before-upload="beforeAvatarUpload">
           <img v-if="imageUrl" :src="imageUrl" class="avatar">
           <i v-else class="el-icon-plus avatar-uploader-icon"></i>
         </el-upload>
         </div>
       </div>
      <!-- 文章性质 -->
      <div class="article_nature">
        <span style="color: #606266;">文章类型<font color="red">*</font>:</span>
        <label ><input type="checkbox" name="articletype" v-model="nature" value="情感" @change="NatureCheck()">情感</label>
        <label ><input type="checkbox" name="articletype" v-model="nature" value="考试" @change="NatureCheck()">考试</label>
        <label ><input type="checkbox" name="articletype" v-model="nature" value="学校" @change="NatureCheck()">学校</label>
        <label ><input type="checkbox" name="articletype" v-model="nature" value="生活" @change="NatureCheck()">生活</label>
        <label ><input type="checkbox" name="articletype" v-model="nature" value="周边" @change="NatureCheck()">周边</label>
         <label ><input type="checkbox" name="articletype" v-model="nature" value="热点" @change="NatureCheck()">热点</label>
         <p class="nature_wran" :style="{color:natureWarn.color}" v-show="NatureFlag"><span :class="natureWarn.icon"></span>{{natureWarn.msg}}</p>
       </div>
      <!-- 文章内容 -->
      <div class="article_content">
      <span style="color: #606266;">文章内容:</span>
      <el-card style="height:542px;margin-left: 70px;margin-top: -24px;">
        <quill-editor v-model="content" ref="myQuillEditor" style="height: 540px;margin:-20px;" :options="editorOption">
               <!-- 自定义toolar -->
               <div id="toolbar" slot="toolbar">
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
                 <select class="ql-background" value="background" title="背景颜色"></select>
                 <select class="ql-align" value="align" title="对齐"></select>
                 <button class="ql-clean" title="还原"></button>
                 <!-- You can also add your own -->
                 <button type="button" class="ql-image">
                   <svg viewBox="0 0 18 18">
                   <rect class="ql-stroke" height="10" width="12" x="3" y="4">
                   </rect> <circle class="ql-fill" cx="6" cy="7" r="1">
                   </circle>
                    <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12">
                    </polyline>
                    </svg>
                 </button>
               </div>
             </quill-editor>
      </el-card>
      </div>
    </div>
    <el-dialog
      title="温馨提示"
      :visible.sync="Promptinput"
      width="30%"
     >
      <span>
       亲爱的创作者,创作不能出现故意辱骂、网暴、贬低他人或者他人家属，不能出现破坏社会的过激和敏感言论,本平台不承担任何法律责任，
        一切后果由本人承担,净化网络环境，人人有责
      </span>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="Promptinput = false">我已知晓</el-button>
        </span>
    </el-dialog>
  <el-dialog
      title="预览"
      :visible.sync="preview"
      width="50%"
      center>
      <div class="preview ql-editor">
        <h1 align="center">标题:{{mainTitle}}</h1>
        <h2 align="center">副标题:{{subTitle}}</h2>
        <div v-html="content"></div>
      </div>
    </el-dialog>
    <div class="fun_btn">
    <el-button  @click=" preview = true" type="primary">预览</el-button>
     <el-button type="success" @click="publishing">发表</el-button>
    </div>
  </div>
</template>

 <script>
  import {Quill,quillEditor} from 'vue-quill-editor'
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  import '../../static/css/font.css'
   let Size = Quill.import('attributors/style/size')
    Size.whitelist = ['10px', '12px', '14px', '16px', '18px', '20px']
    Quill.register(Size, true)

    // 自定义字体类型
    var fonts = ['SimSun', 'SimHei', 'Microsoft-YaHei', 'KaiTi', 'FangSong', 'Arial', 'Times-New-Roman', 'sans-serif',
      '宋体', '黑体'
    ]
    var Font = Quill.import('formats/font')
    Font.whitelist = fonts
    Quill.register(Font, true)
   export default {
     name: 'FuncFormsEdit',
     components: {
       quillEditor
     },
     data() {
       return {
          //文章封面
         imageUrl: '',
         //控制副标题提示信息显示
         warnSTitleFlag:false,
         //控制主标题提示信息显示
         warnTitleFlag:false,
         //控制类型提示信息显示
         NatureFlag:false,
         //主标题提示信息
         titleWarn:{
           msg:'',
           color:'red',
           result:200,
           icon:''
         },
         //副标题提示信息
         subtitleWarn:{
           msg:'',
           color:'',
           result:200,
           icon:''
         },
         //文章性质提示消息
         natureWarn:{
            msg:'',
            color:'',
            icon:''
         },
         //主标题
         mainTitle:'',
         //副标题
         subTitle:'',
         //文章性质
         nature:[],
         percentage:20,
         preview:false,
         Promptinput:false,
         //问文章内容
         content: null,
         editorOption: {
           placeholder: "请输入",
           theme: "snow", // or 'bubble'
           modules: {
             toolbar: {
               container: '#toolbar'
             }
           }
         },
       }
     },
     watch:{
       content:((newV,orderV)=>{
         // console.log(newV);
       }),


      '$route'(to,from){
         // console.log(to);
         // console.log("1");
       }
     },
     methods:{

        handleAvatarSuccess(res, file) {
               this.imageUrl = URL.createObjectURL(file.raw);
             },
             beforeAvatarUpload(file) {
               const isJPG = file.type === 'image/jpeg';
               const isLt2M = file.size / 1024 / 1024 < 2;

               if (!isJPG) {
                 this.$message.error('上传头像图片只能是 JPG 格式!');
               }
               if (!isLt2M) {
                 this.$message.error('上传头像图片大小不能超过 2MB!');
               }
               return isJPG && isLt2M;
             },


       //校验主标题
      TitleCheck(){
         if(this.mainTitle.trim().length>=5 && this.mainTitle.length<20){
           this.$store.commit("nocanQuit");
           this.titleWarn.msg="正确";
           this.titleWarn.color="green";
           this.titleWarn.icon="el-icon-success";
           return true;
         }else if(this.mainTitle.trim()==""){
            this.$store.commit("canQuit");
           this.warnTitleFlag=true;
           this.titleWarn.color="red";
           this.titleWarn.msg="标题不能为空";
           this.titleWarn.icon="el-icon-error";
           return false;
         }else{
           this.$store.commit("nocanQuit");
           this.titleWarn.msg="标题长度在5~20之间!";
           this.warnTitleFlag=true;
           this.titleWarn.color="red";
           this.titleWarn.icon="el-icon-error";
           return false;
         }
      },
      //校验副标题
      subTitleCheck(){
        if(this.subTitle.trim().length<20 && this.subTitle.trim().length>5){
           this.$store.commit("nocanQuit");
          this.subtitleWarn.msg="正确";
          this.subtitleWarn.color="green";
          this.subtitleWarn.icon="el-icon-success";
           return true;
          }else if(this.subTitle.trim()==""){
             this.$store.commit("canQuit");
            this.subtitleWarn.msg="副标题不能为空!";
            this.warnSTitleFlag=true;
            this.subtitleWarn.color="red";
            this.subtitleWarn.icon="el-icon-error";
            return false;
          }else{
          this.$store.commit("nocanQuit");
          this.subtitleWarn.msg="副标题长度在5~20之间!";
          this.warnSTitleFlag=true;
          this.subtitleWarn.color="red";
          this.subtitleWarn.icon="el-icon-error";
          return false;
        }
      },
      //校验类型选择
    NatureCheck(){
          if(this.nature.length==0){
            this.NatureFlag=true;
            this.natureWarn.msg="至少选择一个类型";
            this.natureWarn.icon="el-icon-error";
            this.natureWarn.color="red";
            return false;
          }else if(this.nature.length>=4){
            this.NatureFlag=true;
            this.natureWarn.msg="至多选择三个类型";
            this.natureWarn.icon="el-icon-error";
            this.natureWarn.color="red";
            return false;
          }else{
            this.natureWarn.msg="正确";
            this.natureWarn.icon="el-icon-success";
            this.natureWarn.color="green";
            return true;
          }
    },
      ContentCheck(){
        console.log("11111");
      },
      //发布文章
       publishing(){
         if(!((this.TitleCheck() && this.subTitleCheck() && this.NatureCheck()) && this.content==null)){
            this.$message.error('请检测输入内容是否有效');
            if(this.content!=""){
               this.$store.commit("nocanQuit");
            }
         }else{
         if(true){ //发表成功
         this.$message({
                 message:"发表成功",
                 type: 'success'
           });
           this.$router.push({
             name:"hoslist"
           })
        }else{
          this.$message.error('发表失败');
        }
        }
       }
     },
     mounted(){
     },
     created(){
      this.Promptinput=true;
     }
  }


</script>


<style lang="less" scoped>
  @import '../../static/less/article.less';
</style>
