<template>
  <div>
    <transition
      enter-active-class="animated fadeInDown"
      leave-active-class="animated fadeOutDown"
  >
      <component :is="assembly"></component>
    </transition>
    <div class="campus">
    <div class="subject">
      <router-view v-if="isRouterShow"></router-view>
      </div>
      <div class="my">
            <div v-for="(item,index) in server" :key="index" class="campus_fun">
            <router-link :to="{name:item.router}">
            <img :src="item.img" alt="请等待加载">
               <p>{{item.title}}</p>
               </router-link>
            </div>
            <div class="campus_fun_mine">
            <div><router-link to="/campus/My-questision"><h4>我提问的</h4></router-link></div>
              <div><router-link to="/campus/My-propose"><h4>我创作的</h4></router-link></div>
            </div>
      </div>
      <!-- 信息归类 -->
      <div class="information">
      <div class="information_operation">
        <ul>
         <li> <router-link to="/campus/collection">我的收藏</router-link></li>
          <li><router-link to="/campus/track">我的足迹</router-link></li>
          <li><router-link to="/campus/collection">我的权益</router-link></li>
          <li><router-link to="/campus/help">帮助中心</router-link></li>
          <li><router-link to="/campus/collection">关于我们</router-link></li>
        </ul>
     </div>
        <!-- 相关推荐 -->
        <div class="information_recommend">
            <div class="recommend_title">
                猜你喜欢
            </div>
            <div class="recommed_content">
              <div class="content_detail">
                <img src="../../assets/logo.png" />
                <div class="detail_information">
                    <span>
                      wewe
                    </span>
                    <span>
                      阿勇
                    </span>
                    <span>
                      2222人浏览过
                    </span>
                </div>
              </div>
            </div>
        </div>
        <!-- 广告位 -->
           <div class="information_advert">
             <img src="../../../static/images/department_propaganda.jpg" alt="检测网络">
             <span>广告</span>
           </div>

      </div>

     </div>
     <el-backtop  :bottom="100"></el-backtop>
  </div>
</template>
<script>
  import questHeader from './QuestHeader.vue';
  import headerForum from './HeaderForum.vue';
  import slideHeader from './SlideHeader.vue';
  import detailHeaader from "./DetailHeader.vue";
  let datalist=[
    {type:"system",title:"系统通知",centent:"恭喜你",time:"2020-12-11 10:36:12"},
    {type:"system",title:"系统通知",centent:"恭喜你",time:"2020-12-11 10:36:12"},
    {type:"system",title:"系统通知",centent:"恭喜你",time:"2020-12-11 10:36:12"},
    {type:"user",title:"系统通知",centent:"恭喜你",time:"2020-12-11 10:36:12"},
  ];
  export default{
    name:'campus',
    provide(){
      return {
            reload: this.reload
          }
    },
      data() {
          return {
            //控制组件是否重新加载
             isRouterShow: true,
            //检查是否在详情页
            router:localStorage.getItem("articledetails"),
            //控制动态组件
            assembly:"headerForum",

            listindex:'',
            loading:"",
            //
            detail_show:false,
            // 消息详情
            detaillist:'',
            //存储信息
            msglist:"",
            //控制没有信息时的情况
            msg_null:false,
            //控制loding
            loading_show:true,
            //功能类名
            msg_title:["el-icon-message","el-icon-setting","el-icon-user"],
            //识别区域类名
            classlist:["el-icon-message","el-icon-suitcase-1","el-icon-user","active","msg_centent","el-icon-bell","information_details","details_title","details_centent","information_type","btn_see","details_btn"],
            //存储index
            current:0,
            routerlist:['hoslist','follow'],
            centerDialogVisible: false,
            activeName: 'second',
            //功能
            server:[
                    {title:"提问",img:"../../../static/images/question.png",router:'questions'},
                    {title:"文章",img:"../../../static/images/campus_article.png",router:'article'},
                    {title:"回答",img:"../../../static/images/answer.png",router:'answer'},
                   ],
            data:[
                {title:"333342323",des:"哈哈哈111111111111111111111111111111",imgsrc:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",num:1111},
                {title:"333342323",des:"哈哈哈111111111111111111111111111111",imgsrc:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",num:1111},
                {title:"333342323",des:"哈哈哈111111111111111111111111111111",imgsrc:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",num:1111},
                {title:"333342323",des:"哈哈哈111111111111111111111111111111",imgsrc:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",num:1111},
                {title:"333342323",des:"哈哈哈111111111111111111111111111111",imgsrc:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",num:1111},
                {title:"333342323",des:"哈哈哈111111111111111111111111111111",imgsrc:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",num:1111},
                {title:"333342323",des:"哈哈哈111111111111111111111111111111",imgsrc:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",num:1111},
                {title:"333342323",des:"哈哈哈111111111111111111111111111111",imgsrc:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",num:1111},
                {title:"333342323",des:"哈哈哈111111111111111111111111111111",imgsrc:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",num:1111},
            ],
            result:'',
            show:false,
             dialogVisible: false,
            //存储promise对象
             P:'',
          };
        },
        methods: {
            async reload () {
                this.isRouterShow = false
                await this.$nextTick()
                this.isRouterShow = true
              },

          handleClick(tab, event) {
            if(tab.label=="关注"){
              this.$router.push({
                name:"follow"
              })
            }else if(tab.label=="热榜") {
              this.$router.push({
                name:'hoslist'
              }).catch(err=>{
                alert("已在当前页");
              })
            }
          },
          handleClose(done) {
              this.$confirm('确认关闭？')
                   .then(_ => {
                      done();
                    })
                    .catch(_ => {});
           },
           //tabs切换事件
           doActive(index){
             let divs=document.querySelectorAll("[class^='centent_']");
             for(let i=0;i<divs.length;i++){
             divs[i].style.display="none";
             }
             divs[index].style.display="block";
             this.current=index;
           },
           getshow(){
             this.show=!this.show;
              this.P.then(res=>{
                 this.loading_show=false;
                if(res==""){
                    this.msg_null=true;
                  }else{
                    this.msglist=res;
                  }
              })
           },
           //
           detailshowing(index){
              this.detail_show=true;
              this.detaillist=this.msglist[index];
              this.listindex=index;
              console.log(this.detaillist);
           },
           //删除信息动作
           deletemsg(){
                this.loading=true;
                this.deletesuccess();
                console.log(this.detaillist);
                this.msglist.splice(this.listindex,1);
                if(this.msglist.length==0){
                  this.msg_null=true;
                }
           },
           //删除成功
           deletesuccess(){
             this.$message({
                     message: '删除成功',
                     type: 'success'
                  });
               this.detail_show=false;
               this.loading=false;
           },

           reader(){
             this.show=true;
             this.detail_show=false;
           }
        },
        mounted(){
          this.$nextTick(()=>{
          
           //侧边保持不动事件
          $(document).on("scroll",()=>{
            let end=new Date().getTime();
            if($(document).scrollTop() > 300){
              $(".information").css({top:$(document).scrollTop() + 30,right:"60px"});
            }else{
              $(".information").css({"position":"absolute",top:"220px"});
            }
          })
          })
            // let TimeStart=0;
          //头部切换事件
         window.addEventListener("scroll",(e)=>{
           //防抖
          //  let now=new Date().getTime();
          //  if(now-TimeStart>=100){
            //  TimeStart=now;
           if(localStorage.getItem("router")==""){
               this.assembly="headerForum";
            }else if(localStorage.getItem("router")=="campus"){
            if(window.pageYOffset>150){
                this.assembly="slideHeader";
            }
            else{
               this.assembly="headerForum";
            }
            }else if(localStorage.getItem("router")=='questdetail'){
               if(window.pageYOffset>100){
                 this.assembly="questHeader";
               }else{
                 this.assembly="headerForum";
               }
            }else{
              if(window.pageYOffset>100){
                  this.assembly="detailHeaader";
              }else{
                 this.assembly="headerForum";
              }
            }
          //  }
          })
        },
        created(){
          this.P=new Promise((resolve,reject)=>{
            setTimeout(()=>{
              resolve(datalist);
            },2000)
          })
        },
        computed:{
          identification(){
            return identity=>{
             if(identity=="system"){
               return "el-icon-setting";
             }else{
               return "el-icon-user-solid";
             }
            }
          }
        },
       components:{
         headerForum,
         slideHeader,
         detailHeaader,
         questHeader
       }

  }
</script>

<style lang="less" scoped>

  @import "../../../static/less/campus.less";
</style>
