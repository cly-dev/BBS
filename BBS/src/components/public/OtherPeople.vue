<script>
import {ShowUSerInfo,IsFocus,CancelFocus,FocusOther} from "../../api/data";
import NavHeader from "./IndexHeader";
    export default {
        data(){
            return{
                isLoading:false,
                //记录用户Id
                userId:"",
                //是否关注
                isFans:false,
                //记录路由信息
                router:'',
                //存储用户信息
                user:{},
                //查看信息标识
                watchDetail:false,
                //图标还有数据
                 Userinfo:[
                    {
                        icon:'iconfont icon-guanzhu',
                        value:''
                    },{
                        icon:'iconfont icon-fensipa',
                        value:''
                    },{
                    icon:'iconfont icon-canjiagongzuoshijian',
                    value:'',
                    },{
                    icon:'iconfont icon-shengrix',
                    value:'',
                    },{
                    icon:'iconfont icon-zhuanye',
                    value:'',
                    label:'major'
                    },{
                    icon:'iconfont icon-xingbie',
                    value:'',
                    }, 
                ],
                //导航菜单
                nav:[
                    {
                        title:'动态',
                        path:'/people/other/trends',
                        value:'',
                    },
                     {
                        title:'文章',
                        path:'/people/other/article',
                        value:'',
                    },{
                        title:'提问',
                        path:'/people/other/question',
                        value:'',
                    },{
                        title:'收藏',
                        path:'/people/other/collection',
                        value:'',
                    },{
                        title:'发布',
                        path:'/people/other/release',
                        value:'',
                    },
                    ],
                
            }
        },
        methods:{
            //查看详细信息
            handleWatch(){
                if(!this.watchDetail){
                    $(".info_container").animate({"height":"+=240"});
                    this.watchDetail=true;
                }else{
                    $(".info_container").animate({"height":"-=240"});
                    this.watchDetail=false;
                }
            },
            //取消关注某人
            async handleCancelFocus(){
                let result=await CancelFocus({userId:this.userId});
                console.log(result);
                if (result["data"].code=="200") {
                    this.message("success","取消关注成功");
                    this.isFans=false;
                }else{
                    this.message("warning","取消失败");
                }
                
            },
            //关注某人
            async hanleFocusOther(){
                this.isLoading=true;
                let result=await FocusOther({userId:this.userId});
                if (result["data"].code=="200") {
                    this.isLoading=false;
              
                    this.message("success","关注成功");
                    this.isFans=true;
                }
            }
        },
        components:{
            NavHeader
        },
        mounted(){
    $(".moreInfo_header li").on("click", (e) => {
      $(".moreInfo_header li").css({
        "border-bottom": "none",
        "font-weight": "100",
      });
      e.target.style.borderBottom = "2px solid #409EFF";
      e.target.style.fontWeight = "bold ";
    });
        },
        created(){
            this.router=this.$route.path;
           let id=this.$route.params.userId?this.$route.params.userId:localStorage.getItem("userId");
           this.userId=id;
           let p1=GetShowUSerInfo(id);
           let p2=getIsFocus(id);
           Promise.all([p1,p2]).then(res=>{
               this.user=res[0]["data"].result;
               if(res[1]["data"].msg=="关注过了"){
                   this.isFans=true;
               }
                this.Userinfo.forEach((item,index)=>{
                    switch(index){
                        case 0:item.value=this.user.idolSum;break;
                        case 1:item.value=this.user.fansSum;break;
                        case 2:item.value=this.user.createTime;break;
                        case 3:item.value=this.user.birthday;break;
                        case 4:item.value=this.user.major;break;
                        case 5:item.value=this.user.sex;break;
                    }
                })

           }).catch(err=>{
               this.message("warning","请求失败");
           })
           
           
        },
        render(createElement){
            return(
                <section>
                    <header>
                        <NavHeader></NavHeader>
                    </header>
                    <main>
                     <section class="person_container">
                        <img src={this.user.selfImage} class="person_img"/>
                     <section class="info_user">
                        <section class="info_container">
                        <section class="info_data">
                            <span class="info_nickName">用户名:{this.user.userName}</span>
                            <span class="info_autograph">
                                个性签名:随风而行
                             </span>
                             <a href="javascript:;" onClick={this.handleWatch}>点击查看详细信息</a>
                             <el-popconfirm
                             on-confirm={this.handleCancelFocus}
                             v-show={this.isFans}
                             style="margin-top:-20px"
                             title="是否取消关注"
                            >
                              <el-button slot="reference" type='default' style="float:right;margin-right:40px">已关注</el-button>
                        </el-popconfirm>
                        <el-button v-show={!this.isFans} type='primary' style="float:right;margin-right:40px" onClick={this.hanleFocusOther} loading={this.isLoading}>关注ta</el-button>
                       </section>
                        <section class="info_detail">
                            {
                                this.Userinfo.map(item=>{
                                    return(
                                        <section class="detail_item">
                                            <span class={item.icon}></span>
                                            <span class="item_value">{item.value?item.value:'该用户太懒了,暂无信息'}</span>
                                        </section>
                                    )
                                })
                            }
                             <span class="info_sildeUp" onClick={this.handleWatch}> 收起</span>

                        </section>
                        </section>
                    </section>
                </section>
                
                <section class="moreInfo_container">
                <section class="moreInfo_header">
                <ul>
                    {
                        this.nav.map(item=>{
                            return(
                                    <router-link tag="li" to={item.path}  class={this.router===item.path?'activer':''}>{item.title}</router-link>
                            )
                        })
                    }
                </ul>
                </section>
                <section class="moreInfo_mainer">
                <router-view/>
                </section>
                </section>

                </main>
                </section>
            )
        }
    }
    //获取用户信息
    async function GetShowUSerInfo(userId){
        let result=await ShowUSerInfo(userId);
        return result;
      
    }
    //是否关注
    async function getIsFocus(userId){
        let result=await IsFocus({userId});
        return result;
    }

</script>

<style lang="less" scoped>
@import "../../../static/less/public/otherPeolple.less";
</style>