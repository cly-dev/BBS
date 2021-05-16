<template>
  <div class="detail">
    <!-- 头部 -->
    <div class="detail_header">
      <!-- 用户头像 -->
      <div class="author_portrait">
        <el-popover
            placement="top-start"
            width="300"
            trigger="hover"
            @show="getUSerInfo(articleData)"
            >
            <!-- 个人信息 -->
            <div class="portrait_hover">
              <!-- 头像、姓名、签名 -->
              <div class="author_container">
                <img :src="UserInfo.userImage?UserInfo.userImage:'../../../static/images/user.png' " alt="请检查网络">
                <div class="author_message">
                  <span>{{UserInfo.userName}}</span>
                  <!-- <span>岁月悠长</span> -->
                </div>
              </div>
              <!-- 其他信息 -->
              <div class="author_otherinfo">
                  <ul>
                    <li>
                        <span>专业</span>
                        <span class="mojor">{{UserInfo.major}}</span>
                    </li>
                    <li>
                        <span>粉丝</span>
                        <span>{{UserInfo.fansSum}}</span>
                    </li>
                    <li>
                        <span>关注</span>
                        <span>{{UserInfo.idolSum}}</span>
                   </li>
                </ul>
              </div>
              <div class="author_operation">
                <el-button type="primary" icon="el-icon-plus" @click="handleCore(articleData)">关注</el-button>
                <el-button  icon="el-icon-s-promotion" @click="handleVisit(UserInfo.userId)">访问</el-button>
              </div>
            </div>

            <div slot="reference">
            <img :src="articleData.userImage?articleData.userImage:'../../../static/images/user.png'" class="portrait_img" />
            </div>
          </el-popover>
      </div>
      <!-- 用户信息 -->
      <div class="author_information">
        <span class="author_name">{{articleData.userName}}</span>
        <el-tooltip placement="top">
          <div slot="content">{{grade}}</div>
          <img src="../../../static/images/grade/用户_等级3.png" class="author_grade">
        </el-tooltip>   
        <span class="push_time" style="transform: translate(0px,5px);">{{articleData.createTime}}</span>
        <span class="article_label">标签: <el-button size="mini" v-for="(value,key) in label" :key="key">{{value}}</el-button></span>
      </div>
    </div>
    <!-- 主体 -->
    <div class="detail_main">
      <!--文章的标题和副标题 -->
      <div class="detail_title">
        <h2 align="center">{{articleData.title}}</h2>
      </div>
      <!--文章内容 -->
      <article class="detail_content" v-html="articleData.content">
      </article>
    </div>
    <!-- 文章尾部-->
    <div class="detail_comment">
      <span class="detail_bottom">我也是有底线的呦......</span>
      <div align="center" class="article_appreciate">
        <!-- 赞赏 -->
        <div class="appreciate_btn">
          <el-button type="danger" plain @click="appreciateOuter = true">赞赏</el-button>
        </div>
      </div>
      <!-- 操作 -->
      <div class="article_operation">
        <ul>
          <li>浏览{{ articleData.scanNum}}</li>
          <li @click="Scorllcomment()">{{  CommentFlay}}</li>
          <li>
            <!-- 分享 -->
            <span class="demonstration">分享</span>
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>QQ</el-dropdown-item>
                <el-dropdown-item>微信</el-dropdown-item>
                <el-dropdown-item>微博</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
          <li @click="handleCollection(articleData.articleId)" class="collection">收藏</li>
          <!--作者浏览才会显示-->
          <li v-if="articleData.hasSelf" @click="ToEditor">编辑</li>
          <li @click="dialogVisible = true">举报</li>
        </ul>
      </div>
      <div class="article_comment">

        <!-- 输入框和发表 -->
        <div class="commment_number">
          <span>{{ CommentFlay}} </span>
        </div>
        <!-- 评论框 -->
        <div class="comment_container" style="display:block">
          <div class="comment_input">
            <VueEmoji ref="emoji" @input="onInput" :value="comment_content" />
          </div>
          <div class="comment_push">
            <el-button type="primary" size="medium" :loading="pushLoading" @click="Pushing()">发表</el-button>
          </div>
        </div>
        <!-- loading加载 -->
        <div class="loading_container">
          <div class="eye"></div>
        </div>
        <!-- 当评论区为空的情况 -->
        <div class="comment_null" v-if="commentData==''">
            <span>空空如也</span>
        </div>
        <div class="comment_content" v-for="(item,index) in commentData" :key="index">
          <!-- 评论人信息 -->
          <div class="comment_user">
            <el-popover
                width="300"
                trigger="hover"
                placement="bottom-start"
                @show="getUSerInfo(item)"
                >
            <!-- 个人信息 -->
            <div class="portrait_hover">
              <!-- 头像、姓名、签名 -->
              <div class="author_container">
                <img :src="item.authorImage">
                <div class="author_message">
                  <span>{{item.authorName}}</span>
                  <!-- <span>岁月悠长</span> -->
                </div>
              </div>
              <!-- 其他信息 -->
              <div class="author_otherinfo">
                  <ul>
                   <li>
                        <span>专业</span>
                        <span class="mojor">{{UserInfo.major}}</span>
                    </li>
                    <li>
                        <span>粉丝</span>
                        <span>{{UserInfo.fansSum}}</span>
                    </li>
                    <li>
                        <span>关注</span>
                        <span>{{UserInfo.idolSum}}</span>
                   </li>
                  </ul>
              </div>
              <div class="author_operation">
                <el-button type="primary" icon="el-icon-plus" @click="handleCore(item)">关注</el-button>
                <el-button  icon="el-icon-s-promotion" @click="handleVisit(UserInfo.userId)">访问</el-button>
              </div>
            </div>
                <img :src="item.authorImage" slot="reference"/>
            </el-popover>
            <span class="comment_name">{{item.authorName}}</span>
            <span class="comment_time">{{item.createTime}}</span>
          </div>

          <!-- 评论内容 -->
          <div class="content_data">
            <p>{{item.content}}</p>
          </div>
          <!--评论操作-->
          <div class="comment_operation" @mouseover="Hovering(index)" @mouseout="Hoverout(index)">
            <div class="comment_support" data-support="" >
              <img :src="item.hasLike ?'../../../static/images/campus/detail/article_aftersupport.png': '../../../static/images/campus/detail/article_beforesupport.png'" @click="Clicksupport(item,index)">
              <span style="white-space: nowrap;">{{item.likeNum}} </span>
            </div>
            <div class="operation_content" data-flay='true'>
              <ul>
                <li @click="Replyclick(index)">回复</li>
                <li @click="Stampclick(index)">{{stamp(item.stamp)}}</li>
                <li @click="dialogVisible = true">举报</li>
                <!--只对改条评论的评论者显示-->
                <li v-if="item.hasSelf">
                  <el-popconfirm
                    title="要删除此条评论嘛"
                    @confirm="deleteComment(item,index)"
                  >
                    <span slot="reference">删除</span>
                  </el-popconfirm>
                 </li>
              </ul>
            </div>
            <div style="clear: both;"></div>
            <!-- 回复评论输入 -->
            <div class="comment_containers">
              <div class="comment_input">
                <VueEmoji ref="emoji"  class="reply"/>
              </div>
              <div class="comment_push">
                <el-button type="primary" size="medium" :loading="item.replyloading" @click="Replying(index)">回复</el-button>
              </div>
            </div>
          </div>

          <!-- 回复评论数据 -->
          <div class="reply_list" v-for="(value,key) in item.list" :key="key">
            <!--回复人信息-->
            <div class="comment_user">
              <el-popover
                  width="300"
                  trigger="hover"
                  placement="bottom-start"
                  >
                  <!-- 个人信息 -->
                  <div class="portrait_hover">
                    <!-- 头像、姓名、签名 -->
                    <div class="author_container">
                      <img src="../../assets/logo.png" alt="请检查网络">
                      <div class="author_message">
                        <span>阿勇</span>
                        <span>岁月悠长</span>
                      </div>
                    </div>
                    <!-- 其他信息 -->
                    <!-- <div class="author_otherinfo">
                        <ul>
                          <li>
                              <span>回答</span>
                              <span>1122</span>
                          </li>
                          <li>
                              <span>文章</span>
                              <span>1122</span>
                          </li>
                          <li>
                              <span>关注者</span>
                              <span>4545</span>
                         </li>
                        </ul>
                    </div> -->
                    <div class="author_operation">
                      <el-button type="primary" icon="el-icon-plus">关注</el-button>
                      <el-button  icon="el-icon-s-promotion">访问</el-button>
                    </div>
                  </div>
              <img src="../../../static/images/user.png" slot="reference" />
              </el-popover>
              <span  class="comment_name">{{value.name}}</span>
              <span class="comment_time">01-25</span>
            </div>
            <!-- 回复内容 -->
            <div class="content_data">
              <p>{{value.content}}</p>
            </div>
            <!-- 回复操作 -->
            <div class="reply_comment_operation" @mouseover.stop="replyHovering(value,key)" @mouseout.stop="replyHoverout(value,key)">
              <div class="reply_comment_support">
                <img :src="supPort(value.support)" @click="CommentSupportclick(value)">
                <span>{{value.num}}</span>
              </div>
              <div class="reply_operation_content">
                <ul>
                  <li @click="CommentReplyclick(index,value,key)">回复</li>
                  <li @click="CommentStampclick(value)">{{stamp(value.stamp)}}</li>
                  <li @click="dialogVisible = true">举报</li>
                  <li>
                    <el-popconfirm
                      title="要删除此条回复嘛"
                      @confirm='deleteReply()'
                      offset="100"
                    >
                      <span slot="reference">删除</span>
                    </el-popconfirm>

                    </li>
                </ul>
              </div>
              <div style="clear: both;"></div>
              <!-- 回复输入 -->
            </div>
           <div class="reply_comment_container" v-if="item.list[key].replyclick">
             <div class="reply_comment_input">
               <VueEmoji ref="emoji"  :width="'350'" />
             </div>
             <div class="reply_comment_push">
               <el-button type="primary" size="medium" :loading="value.replyloading" @click="commentReplying(index)">回复</el-button>
             </div>
           </div>

          </div>

        </div>
        <div class="block" align="center">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage1"
            :page-size="10" layout="total, prev, pager, next" :total="total">
          </el-pagination>
        </div>
      </div>
    </div>
    <!-- 赞赏 -->
    <el-dialog width='30%' center :visible.sync="appreciateOuter">
      <span slot="title">
        <h3>赞赏(您的鼓励是对创作者最大的支持)</h3>
      </span>
      <el-dialog width="30%" title="支付" :visible.sync="appreciateInner" center append-to-body>
        <el-button @click="appreciateInner = false">取 消</el-button>
        <el-button type="primary" @click="appreciateInner = true">我已支付</el-button>
      </el-dialog>
      <div class="appreciate_container">
        <span v-for="(value,index) in  appreciateMoneyList" :key="index"  @click="Choicemoney(value)">{{value}}</span>
        <input type="number" placeholder="任意金额" class="appreciate_money" v-model="appreciateMoney">
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="appreciateOuter = false">取 消</el-button>
        <el-button type="primary" @click="appreciateInner = true">确定</el-button>
      </div>
    </el-dialog>
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
  import {ShowArticle,ShowAllCommentByPage} from "../../api/data";
  import minxins from "../../minxin/artDetail.js";
  import VueEmoji from 'emoji-vue';
  export default {
    mixins:[minxins],
    data: () => {
      return {
        //评论信息
        comment_content:'',
        //用户信息
        UserInfo:{},
        //是否为作者标识
        authorEnum:false,
        //收藏标识
        collection:true,
        //评论信息
        commentData:[],
        //标签数据
        label:[],
        data:{},
        // 页码
        currentPage1:1,
        //模拟数据
       articleData:{},
        //点赞信息对象
        Support: {
          //点赞图片地址
          supportImg: '../../../static/images/campus/detail/article_beforesupport.png',
          //点赞数
          supportNum: 18,
          supportStatu: false,
        },
        //踩信息对象
        Stamp: {
          stampStatu: false,
          stampTxt: '踩',
        },
        //举报内容
        reportContent: '',
        //举报选项
        checkList: [],
        //举报dialog
        dialogVisible: false,
        //赞赏金额数组
        appreciateMoneyList: ['1.00', '5.00', '10.00', '20.00', '50.00', '100.00'],
        //赞赏金额
        appreciateMoney: '',
        //赞赏外层div
        appreciateOuter: false,
        //赞赏内层div
        appreciateInner: false,
        //按钮提示
        btnTis: '回复',
        //鼠标滑过盒子
        hoverStatu: false,
        //回复按钮点击状态
        replyStatu: false,
        // clientHeight 评论框到底部的距离
        commentDistance: '',
        //发表loading
        pushLoading: false,
        //回复loading
        replyLoading: false,
        //等级
        grade: '等级三',
        //评论内容
        content: '',
        //回复评论内容
        replyCentent: '',
        //评论总条数
        total:0,
        //文章id
        articleId:''
      }
    },
    methods: {
      
    },
    computed: {
		//判断点击
      supPort() {
        return data => {
          if (data) {
            return "../../../static/images/campus/detail/article_aftersupport.png";
          } else {
            return "../../../static/images/campus/detail/article_beforesupport.png"
          }
        }
      },
      //判断踩
      stamp() {
        return data => {
          if (!data) {
            return "踩";
          } else {
            return "取消踩";
          }
        }
      },
      //判断评论
      CommentFlay(){
        if(this.total>0){
          return `${this.total}条评论`;
        }else{
          return `暂无评论`;
        }
      },
    },
    components: {
      VueEmoji
    },
     async created() {
       let id="";
        if(!this.$route.params.articleId) {
           id=localStorage.getItem("articleId");        
         }else{
           id=this.$route.params.articleId;
         }
         this.articleId=id;
      //请求评论
      let result=await ShowAllCommentByPage(`${id}`+'/1/10');
      if (result) {
            $(".loading_container").css("display","none");
            this.total=result["data"].result.allDataNum;
           this.commentData=result["data"].result.data;
      }
       getArticle(id).then(res=>{
           localStorage.setItem("article",JSON.stringify(res.data.result));
            this.articleData=res.data.result;
            this.label=res.data.result.label;
            console.log(res);
            if (res.data.result.hascollection) {
                 $(".collection").css("color","#F56C6C").text("已收藏");
                this.collection=true;
            }else{
              $(".collection").css("color","#626262").text("收藏");
              this.collection=false;

            }
       })
    },
    mounted() {
      this.$nextTick(() => {
        // console.log(document.querySelector(".article_comment").clientHeight);
        this.componentInstance = $(".article_comment").offset().top;
        $(document).scrollTop(0);
      })
    },
    watch:{
      content:(newV,orderV)=>{
        console.log(newV);
        console.log(orderV);
      }
    }
  }
 async function getArticle(id){
         let result=await ShowArticle(id);
         return result;
        }
</script>

<style lang="less" scoped="scoped">
  @import "../../../static/less/articledetail.less";
</style>
