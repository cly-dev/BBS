<template>
  <div>
    <transition
      enter-active-class="animated fadeInDown";
      leave-active-class="animated fadeOutDown"
  >
      <keep-alive><component :is="assembly"></component></keep-alive>
    </transition>
    <div class="campus">
    <div class="subject">
      <router-view v-if="isRouterShow"></router-view>
      </div>
      <div class="my">
            <div v-for="(item,index) in server":key="index" class="campus_fun">
            <router-link :to="{name:item.router}">
            <img :src="item.img" alt="请等待加载">
               <p>{{item.title}}</p>
               </router-link>
            </div>
            <div class="campus_fun_mine">
              <div><h4>我回答的</h4></div>
              <div><h4>我提问的</h4></div>
            </div>
      </div>
     </div>
     <el-backtop  :bottom="100"></el-backtop>
  </div>
</template>
<script>
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
                    {title:"提问",img:"../../static/images/question.png",router:'questions'},
                    {title:"文章",img:"../../static/images/campus_article.png",router:'article'},
                    {title:"回答",img:"../../static/images/answer.png",router:'answer'},
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
           doActive(index){
             let divs=document.querySelectorAll("[class^='centent_']");
             console.log(divs);
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
                console.log(res);
                if(res==""){
                    this.msg_null=true;
                  }else{
                    this.msglist=res;
                  }
              })
           },
           detailshowing(index){
              this.detail_show=true;
              this.detaillist=this.msglist[index];
              this.listindex=index;
              console.log(this.detaillist);
           },
           deletemsg(){
                this.loading=true;
                this.deletesuccess();
                console.log(this.detaillist);
                this.msglist.splice(this.listindex,1);
                if(this.msglist.length==0){
                  this.msg_null=true;
                }
                // this.$message.error('错了哦，这是一条错误消息');
           },
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
         window.addEventListener("scroll",(e)=>{
           if(localStorage.getItem("router")==""){
               this.assembly="headerForum";
            }else if(localStorage.getItem("router")=="campus"){
            if(window.pageYOffset>100){
                this.assembly="slideHeader";
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
       watch:{
            msglist:((newV,orderV)=>{
              if(newV.length==0){

              }
              console.log(newV.length);
            })
       },
       components:{
         headerForum,
         slideHeader,
         detailHeaader
       }

  }
</script>

<style lang="less" scoped>

  @import "../../static/less/campus.less";
</style>
