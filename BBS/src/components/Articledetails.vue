<template>
  <div class="detail">
    <!-- 头部 -->
    <div class="detail_header">
      <!-- 用户头像 -->
      <div class="author_portrait">
        <img src="../assets/logo.png" class="portrait_img" />
      </div>
      <!-- 用户信息 -->
      <div class="author_information">
        <span class="author_name">阿勇</span>
        <el-tooltip placement="top">
          <div slot="content">{{grade}}</div>
          <img src="../../static/images/grade/用户_等级3.png" class="author_grade">
        </el-tooltip>
        <span class="push_time">2021-01-22</span>
      </div>
    </div>
    <!-- 主体 -->
    <div class="detail_main">
      <!--文章的标题和副标题 -->
      <div class="detail_title">
        <h2 align="center">腾冲的春天好像比其他地方来得更早一腾冲的春天好像比其他地</h2>
        <h3 align="center">腾冲的春天腾冲的春天好像比其他地方来得更早一腾冲的</h3>
      </div>
      <!--文章内容 -->
      <div class="detail_content">
        <p>腾冲的春天腾冲的春天好像比其他地方来得更早一腾冲的腾冲的春天腾冲的春天好像比其他地方来得更早一腾冲的腾冲的春天腾冲的春天好像比其他地方来得更早一腾冲的腾冲的春天腾冲的春天好像比其他地方来得更早一腾冲的
          腾冲的春天腾冲的春天好像比其他地方来得更早一腾冲的腾冲的春天腾冲的春天好像比其他地方来得更早一腾冲的</p>
        <p>
          腾冲的春天腾冲的春天好像比其他地方来得更早一腾冲的腾冲的春天腾冲的春天好像比其他地方来得更早一腾冲的腾冲的春天腾冲的春天好像比其他地方来得更早一腾冲的腾冲的春天腾冲的春天好像比其他地方来得更早一腾冲的
        </p>
        <p>
          腾冲的春天腾冲的春天好像比其他地方来得更早一腾冲的腾冲的春天腾冲的春天好像比其他地方来得更早一腾冲的腾冲的春天腾冲的春天好像比其他地方来得更早一腾冲的腾冲的春天腾冲的春天好像比其他地方来得更早一腾冲的
        </p>
      </div>
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
          <li>浏览1000+</li>
          <li @click="Scorllcomment()">168条评论</li>
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
          <li>收藏</li>
          <li @click="dialogVisible = true">举报</li>
        </ul>
      </div>
      <!-- <VueEmoji ref="emoji" @input="onInput"  /> -->
      <div class="article_comment">
        <!-- 输入框和发表 -->
        <div class="commment_number">
          <span>168条评论</span>
        </div>
        <div class="comment_container">
          <div class="comment_input">
            <VueEmoji ref="emoji" @input="onInput" :value="content" />
          </div>
          <div class="comment_push">
            <el-button type="primary" size="medium" :loading="pushLoading" @click="Pushing()">{{pushTis}}</el-button>
          </div>
        </div>
        <!-- loading加载 -->
        <div class="loading_container" v-if="commentLoading">
          <div class="eye"></div>
        </div>

        <div class="comment_content" v-for="(item,index) in data">
          <!-- 评论人信息 -->
          <div class="comment_user">
            <img src="../../dist/static/images/user.png" />
            <span>{{item.name}}</span>
            <span>01-25</span>
          </div>
          <!-- 评论内容 -->
          <div class="content_data">
            <p>{{item.content}}</p>
          </div>
          <!--评论操作-->
          <div class="comment_operation" @mouseover="Hovering(index)" @mouseout="Hoverout(index)">
            <div class="comment_support">
              <img :src="supPort(item.support)" @click="Clicksupport(index)">
              <span>{{item.num}}</span>
            </div>
            <div class="operation_content">
              <ul>
                <li @click="Replyclick(index)">{{item.replyTxt}}</li>
                <li @click="Stampclick(index)">{{stamp(item.stamp)}}</li>
                <li @click="dialogVisible = true">举报</li>
              </ul>
            </div>
            <div style="clear: both;"></div>
            <!-- 回复评论输入 -->
            <div class="comment_container" v-if="item.replyclick">
              <div class="comment_input">
                <VueEmoji ref="emoji" @input="Reply" :value="replyCentent" />
              </div>
              <div class="comment_push">
                <el-button type="primary" size="medium" :loading="item.replyloading" @click="Replying(index)">{{item.replybtn}}</el-button>
              </div>
            </div>
          </div>

          <!-- 回复评论数据 -->
          <div class="reply_list" v-for="(value,key) in item.list">
            <!--回复人信息-->
            <div class="comment_user">
              <img src="../../dist/static/images/user.png" />
              <span>{{value.name}}</span>
              <span>01-25</span>
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
                  <li @click="CommentReplyclick(index,value,key)">{{value.replyTxt}}</li>
                  <li @click="CommentStampclick(value)">{{stamp(value.stamp)}}</li>
                  <li @click="dialogVisible = true">举报</li>
                </ul>
              </div>
              <div style="clear: both;"></div>
              <!-- 回复输入 -->
            </div>
           <div class="reply_comment_container" v-if="item.list[key].replyclick">
             <div class="reply_comment_input">
               <VueEmoji ref="emoji" @input="Reply" :value="replyCentent" :width="width" />
             </div>
             <div class="reply_comment_push">
               <el-button type="primary" size="medium" :loading="value.replyloading" @click="commentReplying(value)">{{value.replybtn}}</el-button>
             </div>
           </div>

          </div>

        </div>
        <div class="block" align="center">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage1"
            :page-size="100" layout="total, prev, pager, next" :total="1000">
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
        <span v-for="value in  appreciateMoneyList" @click="Choicemoney(value)">{{value}}</span>
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
  let Data = [{
      name: "阿勇",
      content: '阿勇是帅哥',
      num: 20,
      support: true,
      stamp: false,
      reply: false,
      replyTxt: '回复',
      replyload: false,
      replyclick: false,
      replybtn: '回复',
      replyloading: false,
      list: [{
        name: "阿勇",
        content: '阿勇是帅哥',
        num: 20,
        support: false,
        stamp: false,
        reply: false,
        replyTxt: '回复',
        replyload: false,
        replyclick: false,
        replybtn: '回复',
        replyloading: false
      }, {
        name: "阿勇",
        content: '阿勇是帅哥',
        num: 20,
        support: true,
        stamp: false,
        reply: false,
        replyTxt: '回复',
        replyload: false,
        replyclick: false,
        replybtn: '回复',
        replyloading: false
      }]
    },
    {
      name: "阿勇",
      content: '阿勇是帅哥',
      num: 20,
      support: false,
      stamp: false,
      reply: false,
      replyTxt: '回复',
      replyload: false,
      replyclick: false,
      replybtn: '回复',
      replyloading: false
    }
  ];
  import VueEmoji from 'emoji-vue';
  export default {
    data: () => {
      return {
        width: "400",
        // 页码
        currentPage1: 5,
        //模拟数据
        data: [],
        //点赞信息对象
        Support: {
          //点赞图片地址
          supportImg: '../../static/images/campus/detail/article_beforesupport.png',
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
        //加载评论loading
        commentLoading: true,
        //回复按钮点击状态
        replyStatu: false,
        // clientHeight 评论框到底部的距离
        commentDistance: '',
        //发表提示按钮
        pushTis: "发表",
        //发表loading
        pushLoading: false,
        //回复提示按钮
        replyTis: "回复",
        //回复loading
        replyLoading: false,

        grade: '等级三',
        //评论内容
        content: '',
        //回复评论内容
        replyCentent: '',
      }
    },
    methods: {
      // 切换页码事件
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      //评论踩动作
      CommentStampclick(value){
        if (!value.stamp && value.support) {
          value.support = false;
          this.supPort(value.support);
          value.num--;
          value.stamp = true;
          this.stamp(value.stamp);
        } else if (value.stamp && !value.support) {
          // console.log(11);
          value.stamp = false;
          this.stamp(value.stamp);
        } else {
          value.stamp = true;
          this.stamp(value.stamp);
        }
      },
      //赞评论区动作
      CommentSupportclick(value){
          if(value.support){
            this.$message({
              message: '只能点赞一次哦',
              type: 'warning'
            });
          }else{
            value.support=true;
            this.supPort(value.support);
            value.num++;
            value.stamp=false;
            this.stamp(value.stamp);
          }
      },
      //踩动作
      Stampclick(index) {
        if (!this.data[index].stamp && this.data[index].support) {
          this.data[index].support = false;
          this.supPort(this.data[index].support);
          this.data[index].num--;
          this.data[index].stamp = true;
          this.stamp(this.data[index].stamp);
        } else if (this.data[index].stamp && !this.data[index].support) {
          // console.log(11);
          this.data[index].stamp = false;
          this.stamp(this.data[index].stamp);
        } else {
          this.data[index].stamp = true;
          this.stamp(this.data[index].stamp);
        }
      },
      //点赞动作
      Clicksupport(index) {
        if (this.data[index].support) {
          this.$message({
            message: '只能点赞一次哦',
            type: 'warning'
          });
        } else {
          this.data[index].support = true;
          this.supPort();
          this.data[index].num++;
          this.data[index].stamp = false;
          this.stamp(this.data[index].stamp);
        }

      },
      //点击评论动作
      Scorllcomment() {
        $(document).scrollTop(this.componentInstance - 60);
      },
      //选择赞赏金额动作
      Choicemoney(value) {
        this.appreciateMoney = value;
      },
      //点击评论回复动作
      CommentReplyclick(index,value,key) {
        if (this.data[index].list[key].replyclick) {
          this.data[index].list[key].replyTxt = "回复";
          this.data[index].list[key].replyclick = false;
          console.log(11);
        } else {
          this.data[index].list[key].replyTxt = "取消回复";
          this.data[index].list[key].replyclick = true;
          console.log(111);
          console.log(this.data[index].list[key].replyclick);
        }
        console.log(index+""+value+key)
      },

      //点击回复动作
      Replyclick(index) {
        if (!this.data[index].replyclick) {
          this.data[index].replyTxt = "取消回复";
          this.data[index].replyclick = true;
        } else {
          this.data[index].replyTxt = "回复";
          this.data[index].replyclick = false;
        }
      },
      //滑过回复盒子动作
      replyHovering(value,key) {
        $(".reply_operation_content").get(key).style.display = "block";
        console.log(key);
      },
      //滑过回复盒子动作
      replyHoverout(value,key) {
        if(!value.replyclick) {
          $(".reply_operation_content").get(key).style.display = "none";
        }

      },
      //滑出盒子动作
      Hoverout(index) {
        if (!this.data[index].replyclick) {
          $(".operation_content").get(index).style.display = "none";
        }
      },
      //滑过盒子动作
      Hovering(index) {
        $(".operation_content").get(index).style.display = "block";

      },
      //获取输入框内容
      onInput(event) {
        //事件。数据包含文本区域的值
        //将输入的话和表情赋给newss
        this.content = event.data;
      },
      // 获取回复评论内容
      Reply(event) {
        this.replyCentent = event.data;
      },
      clearTextarea() {
        this.$refs.emoji.clear()
      },
      //发表评论动作
      Pushing() {
        this.pushLoading = true;
        this.pushTis = "发表中";
        this.$nextTick(() => {
          this.content = "";
        })
      },
      //回复他们评论
      commentReplying(value){
          value.replybtn='回复中';
          value.replyloading=true;
      },
      //回复评论动作
      Replying(index) {
        console.log(1);
        this.data[index].replybtn = "回复中";
        this.data[index].replyloading = true;
      }

    },
    computed: {
      supPort() {
        return data => {
          if (data) {
            return "../../static/images/campus/detail/article_aftersupport.png";
          } else {
            return "../../static/images/campus/detail/article_beforesupport.png"
          }
        }
      },
      stamp() {
        return data => {
          if (!data) {
            return "踩";
          } else {
            return "取消踩";
          }
        }
      }
    },
    watch: {
      content: (newV, orderV) => {
        console.log(newV);
      },
      data: (newV, orderV) => {
        console.log(newV);
      }
    },
    components: {
      VueEmoji
    },
    created() {
      let replylist = {
        replyTxt: '回复',
        replyBtn: false,
      }
      let P = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(Data);
          this.commentLoading = false;
        }, 2000);
      })
      P.then(res => {
        this.data = res;
        this.data.forEach((value) => {
          // Object.defineProperties(value,"replys",{
          //   value:false,
          //   writable:true,
          //   enumerable:true,
          //   configurable:true,
          // })
          console.log(value);
        })
        console.log(this.data);
      })
    },
    mounted() {
      this.$nextTick(() => {
        // console.log(document.querySelector(".article_comment").clientHeight);
        this.componentInstance = $(".article_comment").offset().top;
      })
    }
  }
</script>

<style lang="less" scoped="scoped">
  @import "../../static/less/articledetail.less";
</style>
