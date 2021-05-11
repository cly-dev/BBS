<template>
  <div class="campus_header">
      <div class="campus_nav">
        <!-- 导航栏 -->
        <div class="nav_field">
          <ul>
            <li>
              <div class="logo-content">
              <router-link to="/index">
                 <img src="../../../static/images/logo.png" class="logo">
                <span>1楼2楼</span>
              </router-link>
              </div>
            </li>
            <li>
              <router-link to="/campus/hotlist">首页</router-link>
            </li>
            <li>
             <router-link to="/campus/follow">关注
                
           </router-link>
            </li>
            <li>
             <router-link to="/campus/squre">
              广场
            </router-link>
            </li>
            <li>
              <router-link to="/">
              下载app
               </router-link>
              <div class="extension">
                <p>
                  请大大扫码下载吧
                </p>
                <img src="../../../static/images/extension.jpg" alt="请检查网络">
              </div>
            </li>
          </ul>
          </div>

          <!-- 搜索框 -->
          <div class="nav_search">
             <el-input
                @input="seeking"
                @focus="hotsearchfocus"
                placeholder="请输入内容"
                prefix-icon="el-icon-search"
                v-model="result"
                clearable
                name="navsearch"
                 >
              </el-input>
              <!--搜索内容-->
              <transition
                enter-active-class="animated fadeIn"
              >
              <div class="nav_result" v-show="search_result">
                  <span class="el-icon-loading" v-show="result_loading"></span>
                  <span class="result_null" v-show="result_null">无匹配结果</span>
                  <div class="result_content">
                  <div class="result_list">
                      <ul>
                        <li v-for="(value,index) in hot_search" :key="index" >
                          <div  v-if="focusflag==true">
                            <div class="hotsearch_list">
                                <span :style="judgefront(index)" class="hotseach_number">{{index+1}}</span><a href="javascript:void(0)" @click="jumptodetails(value)">{{value.title}}</a>
                                <span class="hotseach_status" :style="judgingwordBgc(value)">{{judgingWord(value)}}</span>
                            </div>
                            <div class="hotsearch_tocomplete hotsearch_list" v-if="index==8">
                                <router-link to="/campus/hoslist">查看所有榜单
                                  <span class="el-icon-d-arrow-right" style="color:#000000;"></span>
                                </router-link>
                            </div>
                          </div>
                        </li>

                        <li v-for="(value,index) in searchlist" :key="index + '1'"   class="result_data" @click="searchData(value)">
                          <div v-if="focusflag!=true">
                          <span>{{index+1}}</span>
                          {{value.title}}
                          </div>
                      </li>
                      </ul>
                  </div>
                </div>
              </div>
              </transition>
          </div>

          <!-- 个人信息和功能 -->
          <div class="nav_person">
            <ul class="person_fun">
              <li>
                <el-tooltip content="暂无消息" placement="bottom" effect="light">
                    <i class="el-icon-chat-dot-round"  @click="getshow()"></i>
                </el-tooltip>
                  <!-- 信息 -->
                  <transition
                  enter-active-class="animated fadeIn"
                  >
                  <div class="person_msg" v-show="show">
                    <div>
                      <ul class="msg_header">
                          <li v-for="(title,index) in msg_title" :key="index"  @click="doActive(index)" :class="{active:current==index}"><i :class="title"></i></li>
                      </ul>
                    </div>
                    <div class="msg_centent">
                      <div class="centent_natice">
                          <div v-for="(list,index) in msglist" :key="index" class="natice_information">
                            <div class="information_type">
                            <i :class="identification(list.type)"></i>
                            </div>
                            <div class="information_details">
                            <span>来自<ins style="pointer-events: none;">{{list.title}}</ins>的消息</span>
                            <br />
                            <span>{{list.centent}}</span>
                            </div>
                            <div class="details_btn">
                             <a type="text" @click="detailshowing(index)" class="btn_see">详情</a>
                            </div>
                          </div>
                      </div>
                      <div class="centent_letter">
                      </div>
                      <div class="centent_follow">
                        2
                      </div>
                      <div class="msg_loading">
                          <div class="coffee_cup" v-show="loading_show"></div>
                      </div>
                      <div class="msg_null" v-show="msg_null">
                        <p>暂无信息</p>
                       </div>
                    </div>
                  </div>
                  </transition>
              </li>
              <!-- 用户头像 -->
              <li>
                 <el-popover
                    placement="bottom"
                    width="50"
                    trigger="click"
                    >
                    <div class="person_setting">
                      <ul>
                        <router-link to="/people"> <li>我的主页</li></router-link>
                        <li>退出</li>
                      </ul>
                    </div>
                     <img src="../../../static/images/user.png" alt="请检查网络" class="person_photo" slot="reference">
                  </el-popover>
              </li>
            </ul>
          </div>
          <!-- 消息框 -->
          <el-dialog
            title="信息"
            :visible.sync="detail_show"
            width="40%"
            center
            :data="detaillist"
             v-loading="loading"
             style="width:100%"
             :modal-append-to-body='false'
             custom-class="msg_cen"
                >
                <div class="details_centent">
                  <div class="centent_source">
                  <h3>来源:{{detaillist.title}}</h3>
                  </div>
                  <div class="centnet_information">
                   <p>内容:{{detaillist.centent}}</p>
                   </div>
                   <p>时间:{{detaillist.time}}</p>
                 </div>
            <span slot="footer" class="dialog-footer">
              <el-popconfirm
                confirm-button-text='好的'
                cancel-button-text='不用了'
                icon="el-icon-info"
                icon-color="red"
                title="确认删除这条信息？"
               @confirm="deletemsg"
              >
               <el-button slot="reference">
                    删除
                </el-button>
              </el-popconfirm>
              <el-button type="primary" @click="reader">已读</el-button>
            </span>
          </el-dialog>
         </div>
  </div>
</template>
<script>
import List from '../public/List.vue';
  let searchlist=[
          {title:"我是今日热词",number:2220,id:1111111},
          {title:"我是今日热词",number:2220,id:1111111},
          {title:"我是今日热词",number:2220,id:1111111},
          {title:"我是今日热词知",number:100,id:1111111,},
          {title:"我是今日热词",number:2220,id:1111111},
          ];
  let hotdata=[
          {title:"我是今日热词",number:2220,id:1111111},
          {title:"我是今日热词",number:2220,id:1111111},
          {title:"我是今日热词",number:2220,id:1111111},
          {title:"我是今日热词知",number:100,id:1111111,},
          {title:"我是今日热词",number:2220,id:1111111},
          {title:"我是今日热词知",number:100,id:1111111,},
          {title:"我是今日热词",number:2220,id:1111111},
          {title:"我是今日热词知",number:100,id:1111111,},
          {title:"我是今日热词",number:2220,id:1111111},
    ];
  let datalist=[
    {type:"system",title:"系统通知",centent:"恭喜你",time:"2020-12-11 10:36:12"},
    {type:"system",title:"系统通知",centent:"恭喜你",time:"2020-12-11 10:36:12"},
    {type:"system",title:"系统通知",centent:"恭喜你",time:"2020-12-11 10:36:12"},
    {type:"user",title:"系统通知",centent:"恭喜你",time:"2020-12-11 10:36:12"},
    {type:"system",title:"系统通知",centent:"恭喜你",time:"2020-12-11 10:36:12"},
    {type:"system",title:"系统通知",centent:"恭喜你",time:"2020-12-11 10:36:12"},
    {type:"system",title:"系统通知",centent:"恭喜你",time:"2020-12-11 10:36:12"},
    {type:"user",title:"系统通知",centent:"恭喜你",time:"2020-12-11 10:36:12"},
    {type:"system",title:"系统通知",centent:"恭喜你",time:"2020-12-11 10:36:12"},
    {type:"user",title:"系统通知",centent:"恭喜你",time:"2020-12-11 10:36:12"},
  ];
  export default{
  components: { List },
    name:'headerForum',
    inject: ['reload'],
    data(){
      return {
          //侦听输入框获得焦点事件
          focusflag:'',
          //控制当搜索为空时
          result_null:false,
          //搜索结果数据
          searchlist:"",
          //控制搜索等待
          result_loading:false,
          //搜索显示框
          search_result:false,
          classlist:["el-icon-message","el-icon-suitcase-1","el-icon-user","active","msg_centent","el-icon-bell","information_details","details_title","details_centent","information_type","btn_see","details_btn"],
          //当信息为空时
          msg_null:false,
          //等待信息加载
          loading_show:true,
          //保存信息数据
          msglist:"",
          current:0,
          msg_title:["el-icon-message","el-icon-setting","el-icon-user"],
          show:false,
          //搜索框输入内容
          result:'',
          detail_show:false,
          detaillist:'',
          listindex:'',
          loading:"",
          P:'',
          //接收搜素热词数据
          hot_search:"",
          //接收热词promise对象
          Hot_P:'',
      }
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
      },
      //根据次序给颜色
      judgefront(){
        return index=>{
          if(index<=2){
            return {
              "background-color":"#f85d00"
            }
          }else{
            return{
            "background-color":"#d5d5d5",
            }
          }
        }
      },
      //根据热度给背景色
       judgingwordBgc(){
              return value=>{
                if(value.number>1000){
                  return {
                    "background":"#ff9406"
                  }
                }else if(value.number<1000 && value.number>=500){
                   return {
                          "background":"#ff3852"
                     }
                  }else if(value.number>2000){
                    return {
                      "background":"#f86400"
                    }
                  }else{
                    return {
                       "background":"#00b7ee"
                    };
                }
              }
       },
       //根据热度给状态词
       judgingWord(){
         return value=>{
            if(value.number>=1000){
              return "热";
            }else if(value.number<1000 && value.number>=500){
              return "新";
            }else if(value.number>2000){
              return "爆";
            }else{
              return "平";
            }

         }
       }
    },
    methods:{
     To_hotlist(){
      localStorage.setItem("campusmenu","second");
      this.$router.push({
        path:"/campus/hotlist"
      })
      this.reload();

      },

      //搜索结果点击事件
        searchData(value){
        this.result=value.title;
        localStorage.setItem("title",value.title);
         this.search_result=false;
        this.$router.push({
          name:'articledetails',
          params:{title:value.id}
        })
        //重新加载组件
        this.reload();
      },
      //点击热词跳转到详情页
     jumptodetails(value){
        this.result=value.title;
           localStorage.setItem("title",value.title);
           this.search_result=false;
        this.search_result=false;
        this.$router.push({
          name:'articledetails',
          params:{title:value.id}
        })
        this.reload();
      },
      //输入框查询
      seeking(){
         if(this.result!=""){
           // this.$axios({
           //   url:"",
           //   method:"get",
           //   data:{
           //     result:this.result
           //   }
           // }).then(res=>{
           //   console.log(res);
           // }).catch(err=>{
           //   console.log(err);
           // })

           this.searchlist="";
           this.focusflag=false;
           this.result_loading=true;
           setTimeout(()=>{
              this.result_loading=false;
              this.searchlist=searchlist;
           },2000);
           this.search_result=true;
         }else{
           this.focusflag=true;
         }

      },
      //删除信息
      deletemsg(){
           this.loading=true;
           this.deletesuccess();
           this.msglist.splice(this.listindex,1);
           if(this.msglist.length==0){
             this.msg_null=true;
           }
           // this.$message.error('错了哦，这是一条错误消息');
      },
      //
      reader(){
        this.detail_show=false;
      },
      //获取信息
      getshow(){
         this.P.then(res=>{
            this.loading_show=false;
           if(res==""){
               this.msg_null=true;
             }else{
               this.msglist=res;
             }
         })
      },
      //信息详情
      detailshowing(index){
         this.detail_show=true;
         this.detaillist=this.msglist[index];
         this.listindex=index;
      },
      //
      deletesuccess(){
        this.$message({
                message: '删除成功',
                type: 'success'
             });
          this.detail_show=false;
          this.loading=false;
      },
      doActive(index){
        let divs=document.querySelectorAll("[class^='centent_']");
        for(let i=0;i<divs.length;i++){
        divs[i].style.display="none";
        }
        divs[index].style.display="block";
        this.current=index;
      },
      //输入框焦点事件
      hotsearchfocus(){
        if(this.result==""){
          this.Hot_P.then((res)=>{
            this.hot_search=res;
          })
          this.search_result=true;
          this.focusflag=true;
          }else{
            this.seeking();
          }
      },
      hotsearchblur(){
        this.search_result=false;

      }

    },
    mounted(){
      let search_div=document.querySelector(".nav_result");
      let search_input=document.getElementsByName("navsearch");
      let msg_icon=document.querySelector(".el-icon-chat-dot-round");
      let msg_div=document.querySelector(".person_msg");
      let msg_centent=document.querySelector(".msg_cen");
      search_input[0].addEventListener('click',function(event){
     　　 event=event||window.event;
     　　 search_div.style.display="block";
          msg_div.style.display="none";
     　　event.stopPropagation();
     })
      document.addEventListener('click',function(event){
      　　event=event||window.event;
          msg_div.style.display="none";
     　　 search_div.style.display="none";
     　　event.stopPropagation();
     })
       search_div.addEventListener('click',function(event){
      　　event=event||window.event;
      　　 search_div.style.display="block";
      　　event.stopPropagation();
       })
       msg_icon.addEventListener("click",(event)=>{
         event=event||window.event;
          msg_div.style.display="block";
          search_div.style.display="none";
          event.stopPropagation();
       })
       msg_div.addEventListener("click",(event)=>{
         event=event||window.event;
          msg_div.style.display="block";
          event.stopPropagation();
       })
       msg_centent.addEventListener("click",(event)=>{
         event=event||window.event;
          msg_div.style.display="block";
          event.stopPropagation();
       })
    },
    created(){
      this.$nextTick(()=>{
        localStorage.setItem("campusmenu",'second');
      })

      this.P=new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve(datalist);
        },2000)
      });
      this.Hot_P=new Promise((resolve,reject)=>{
         setTimeout(()=>{
           resolve(hotdata);
         },2000);
      })
    },

  }
</script>

<style lang="less">
@import "../../../static/less/campus.less";
</style>
