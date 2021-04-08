<template>
  <div class="questdetail_contain">
    <!-- 问题详情 -->
      <div class="questdetail_content" >
        <!-- 标题 -->
           <h2 align="left" class="question_title">{{questionData.title}}</h2>
           <!-- 信息 -->
           <div class="question_info">
            <span>回答数:</span>
            <span class="">{{questionData.answer}}</span>
            <span>浏览数:</span>
            <span class="">{{questionData.browse}}</span>
          </div>
          <!-- 提问人 -->
            <span class="question_content" v-html="questionData.content"></span>
          <div class="question_operation">
            <ul>
              <li><el-button type="primary" plain   icon="el-icon-edit" @click="editorInput">写答案</el-button></li>
              <li @click="handSupport(value)"><img src="../../../static/images/campus/detail/article_beforesupport.png" class="question_support" :class="{active:questionData.hasCollection}"/>好问题</li>
              <li @click="handCollection(questionData.questionId)">收藏</li>
              <li @click="dialogVisible=true">举报</li>
              <li><el-checkbox v-model="anonymous">使用匿名身份回答</el-checkbox></li>
              <li><span class="question_user">提问人:<router-link to="#">阿22222勇</router-link> </span></li>
            </ul>
          </div>
      </div>
      <!-- 回答 -->
      <div class="answer_contain" v-if='editorState'>
        <!-- 富文本 -->
          <quillEditor @editor="input" :url="'answer/uploadAnswerImage'" :height="'300px'" :num="num"  @text="handText">
          </quillEditor>
          <!-- 提交按钮 -->
          <div class="reply_contain">
                <el-button type="primary" v-once class="reply_btn" @click='replySubmit'>提交答案</el-button>
          </div>
      </div>

      <div class="answerdata_contain">
            <!-- loading组件 -->
            <!-- <Eyeloading></Eyeloading> -->
            <!-- 回答数据 -->
             <div class="contain_content">
               <div class="contain_title">
                    <span>{{ answerFlay( answerNum)}}</span>
               </div>
               <!-- 数据列表 -->
               <div class="reply_data" v-for="(value,key) in answerData" :key="key">
                  <div class="reply_user">
                    <img src="../../../static/images/user.png" alt="请检查网络">
                    <span>阿勇</span>
                    <span>{{value.createTime}}</span>
                  </div>
                  <div class="reply_content">
                    <span v-html="value.content"></span>
                  </div>
                  <div class="reply_operation">
                      <ul>
                          <li @click="handAnswerSupport(value,key)" :class="{'activer' :value.hasLike}">赞同</li>
                          <li @click="handAnswerStamp(value,key)">踩</li>
                          <li @click=" dialogVisible=true">举报</li>
                          <li>
                          <el-popconfirm
                      title="要删除此条回复嘛"
                      @confirm='deleteReply(value,key)'
                      offset="100"
                    >
                      <span slot="reference">删除</span>
                    </el-popconfirm>
                    </li>
                      </ul>
                  </div>
               </div>
               <div class="block" align="center">
                 <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage1"
                   :page-size="6" layout="total, prev, pager, next" :total="answerNum">
                 </el-pagination>
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
           <textarea cols="30" rows="10" placeholder="请输入详细理由(选填)" class="report_input" v-model="reportContent"></textarea>
         </div>

         <!-- 按钮 -->
         <span slot="footer" class="dialog-footer">
           <el-button @click="dialogVisible = false">取 消</el-button>
           <el-button type="primary" @click="dialogVisible = false">举报</el-button>
         </span>
       </el-dialog>
  </div>
</template>
<script>
import {getQuestion,getQuestCollection,getQuestCollectionDelete,getAnswerSupport,getCancelLikeAnswer,UploadAnswer,DeleteAnswer,ShowQuestionByPage} from "../../api/data";
  import eventBus from "../../eventBus.js";
  export default{
    data:()=>{
      return{
        //是否收标识
        CollectionFlay:false,
        //是否点赞标识
        SupportFlay:false,
        //存储答案数据
        answerData:[],
        answerNum:0,
        //富文本纯文字
         text:"",
         //回答字数限制
        num:200,
        //存储文章信息
        questionData:{
          title:'',
          content:'',
          answer:0,
          browse:0,
          questionId:'',
          hasCollection:false,
          hasFocus:false
        },
        url:'answer/uploadAnswerImage',
        //举报内容
        reportContent:'',
        //页码
        currentPage1: 1,
        //
        dialogVisible:false,
        //举报内容
        checkList:[],
        //富文本
        editorState:false,
        //上传地址
        url:'',
        content:'',
        //匿名身份
        anonymous:false,
        //点赞辨识
        support:false,
      }
    },
    computed:{
    
    },
    methods:{
        answerFlay(num){
          if(num==0){
            return "暂无回答,马上去回答";
          }else{
            return `${num}条回答`;
          }
        
      },
      //取消答案点赞事件
      handAnswerStamp(value,key){
      $(".reply_operation").eq(key).find("li").css("color","");
      $(".reply_operation").eq(key).find("li:nth-of-type(2)").css("color","#F56C6C");
      },
      //点赞答案事件
      async handAnswerSupport(value,key){
        console.log(value);
        console.log(key);
        console.log( $(".question_operation").eq(key));
        this.SupportFlay=value.hasLike;
        if(value.hasLike){
          let result=await getCancelLikeAnswer({answerId:value.answerId});
           if(result["data"].code=="200"){
            this.$message({
                type:"success",
                message:"已取消",
                offset:100
            })
              value.hasLike=false;
              //  $(".question_operation").eq(key).find("li:nth-of-type(1)").css("color","#616161");
           }
        }else{
        let result=await getAnswerSupport({answerId:value.answerId});
        if(result["data"].code=="200"){
          this.$message({
              type:"success",
              message:"点赞成功",
              offset:100
            })
            value.hasLike=true;  
        }
       
      }
      },
      //收藏事件
      async handCollection(questionId){
        if(this.CollectionFlay){
          let result=await getQuestCollectionDelete({questionId:questionId});
           if(result["data"].code=="200"){
          this.$message({
              type:"success",
              message:"已取消",
              offset:100
            })
            $(".question_operation li:nth-of-type(3)").css("color","#909399").text("收藏");
            this.CollectionFlay=false;
        }
      }else{
          let result=await getQuestCollection({questionId:questionId});
        if(result["data"].code=="200"){
          this.$message({
              type:"success",
              message:"收藏成功",
              offset:100
            })
            $(".question_operation li:nth-of-type(3)").css("color","#F56C6C").text("取消收藏");
            this.CollectionFlay=true;
        } 
        }
      },
      //获取文章纯文本
         handText(text){
              this.text=text;
            },
      //点赞事件
      handSupport(){
        if(!this.support){
          $(".question_operation li:nth-of-type(2)").css("color","#32a4e0");
          $(".question_support").attr("src","../../../static/images/campus/detail/article_aftersupport.png");
          this.support=true;
         }else{
           $(".question_operation li:nth-of-type(2)").css("color","#909399");
           $(".question_support").attr("src","../../../static/images/campus/detail/article_beforesupport.png");
           this.support=false;
         }
      },
      //获取输入框内容
      input(content){
         this.content=content;
      },
      //显示输入框
      editorInput(){
         this.editorState=true;
          $(document).scrollTop($('.answer_contain').scrollTop() + 170);
      },
      //提交答案
     async replySubmit(){
        if(this.content.trim()==""){
             this.$message({
                    message: '请输入内容!',
                    type: 'warning',
                    offset:'100'
                  });
        }else{
          if(this.text.trim().length>this.num){
              this.$message({
                    message: '超过字数,请检查输入!',
                    type: 'warning',
                    offset:'100'
                  });
          }else{
            let result=await UploadAnswer({questionId:this.questionData.questionId,content:this.content});
            console.log(result["data"].date);
             if(result["data"].code=="200"){
               this.$message({
                  type:"success",
                  message:"回答成功",
                  offset:100
                });
                let date=new Date();
                if(this.answerData.length<6){
                 this.answerData.unshift({
                    answerId:result["data"].date,
                    content:this.content,
                    createTime:`${new Date().getFullYear().toString()}-${new Date().getMonth().toString()}-${new Date().getDate().toString() } ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
                    hasLike:false
               })}else{
                 this.answerData.pop();
                 this.answerData.unshift({
                    answerId:result["data"].date,
                    content:this.content,
                    createTime:`${new Date().getFullYear().toString()}-${new Date().getMonth().toString()}-${new Date().getDate().toString() } ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
                    hasLike:false
               })
               }
                this.answerNum++;
                this.content="";
                $(".ql-editor").text("");
             }
          }
        }
      },
      //数据消失并请求数据
      handAnswerList(){
          $(".answer_num").slideUp();
      },
      // 切换页码事件
      handleSizeChange(val) {
      
      },
     async handleCurrentChange(val) {
          let result=await ShowQuestionByPage(`${this.questionData.articleId}`,val);
         if(result["data"].code=="200"){
               this.answerData=result["data"].date;
             }
      },
      //删除回答
      async deleteReply(value,key){
        let result=await DeleteAnswer({answerId:value.answerId});
           if(result["data"].code=="200"){
             this.answerData.splice(key,1,);
            this.$message({
              type:"success",
              message:"删除成功",
              offset:100
            })
             this.answerNum--;
           }
      },
    },
    computed:{
    },
    components:{
      quillEditor:()=>import ("./Quill.vue"),
      Eyeloading:()=>import ("./Eyeloading.vue")
    },
    watch:{
      content:(ordV,newV)=>{
        // console.log(ordV);
      }
    },
   async created() {
      //判断路由来源
      if(this.$route.params.router=="question"){
        let data=JSON.parse(localStorage.getItem("question"));
        this.questionData.title=data.questionname;
        this.questionData.content=data.desc;
        this.questionData.browse++;
      }else{
        //防止刷新
        if(JSON.stringify(this.$route.params)==="{}"){
           let result=await getQuestion(`${localStorage.getItem("questionId")}`);
           this.questionData=result["data"].date[0];
            this.answerData=result["data"].date[1];
             this.answerNum=result["data"].date[1].length;
         this.SupportFlay=result["data"].date[1].hasLike;
           if(result["data"].date[0].hasCollection){
                     $(".question_operation li:nth-of-type(3)").css("color","#F56C6C").text("取消收藏");
                     this.CollectionFlay=true;
            }
            if(result["data"].date[0].hasFocus){
              $(".question_operation li:nth-of-type(1)").css("color","#409EFF");
            $(".question_support").attr("src","../../../static/images/campus/detail/article_aftersupport.png");
            }
        }else{
        //正常请求
        let result=await getQuestion(`${this.$route.params.title}`);
        console.log(result);
        this.questionData=result["data"].date[0];
        this.answerData=result["data"].date[1];
        this.answerNum=result["data"].date[1].length;
         this.SupportFlay=result["data"].date[1].hasLike;
           if(result["data"].date[0].hasCollection){
                     $(".question_operation li:nth-of-type(3)").css("color","#F56C6C").text("取消收藏");
                     this.CollectionFlay=true;
            }
            if(result["data"].date[0].hasFocus){
              $(".question_operation li:nth-of-type(1)").css("color","#409EFF");
            $(".question_support").attr("src","../../../static/images/campus/detail/article_aftersupport.png");
            }
        }
      }

    },
    mounted(){
      eventBus.$on("editor",(val)=>{
        this.editorState=val;
       $(document).scrollTop($('.answer_contain').scrollTop() + 20);
      })
    }
  }

</script>

<style lang="less" scoped="scoped">
  @import "../../../static/less/questdetail.less";
 
</style>
