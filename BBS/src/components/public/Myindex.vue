<template>
    <!--我的主页 -->
    <div class="myindex_container">
        <!-- 主体 -->
    <section class="person_container">
        <!-- 头像 -->
        <img :src="!user.selfImage?'../../../static/images/user.png':user.selfImage" alt="请检查网络">
        <div class="img_cover" @click="handleUpload">更换头像</div>
        <!-- 个人信息 -->
       <section class="person_data">
           <section class="info_person">
            <section class="info_user">
            <!-- 昵称和签名 -->
             <span>{{user.userName}}</span>
                <span class="person_autograph">
                    <!-- 个性签名: <p v-if="edit">{{autograph}}</p> -->
                    <!-- <input type="text" v-model="autograph" v-else  class="autograph_input" @blur="edit=true"> -->
                </span>
             <!-- <span class="el-icon-edit" @click="handleEdit"></span> -->
             </section>
             <!-- 修改密码 -->
             <span class="modify_psd" @click="modifyPsd=true">修改密码</span>
            <!-- 查看个人信息 -->
             <a href="javascript:;" @click="handleWatch">点击查看详细信息</a>
             <!-- 编辑个人信息 -->
             <el-button  :style="{'right':modify? '100px' : ''}"  :icon=" modify?'': 'el-icon-edit'" type="primary" @click="handleModify">{{ modify?'保存':'编辑个人信息'}}</el-button>
             <el-button style="right:20px" v-if="modify" @click="handleCanle">取消</el-button>
             <!-- 全部信息 -->
             <section class="total_info">
                 <section class="info_data" v-for="(value,index) in Userinfo" :key="value.icon">
                     <span :class="value.icon"></span>
                     <input type="text" v-if="index!=7" readonly v-model="value.value"> 
                     <select v-else  disabled v-model="value.value">
                         <option value="女">女</option>
                         <option value="男">男</option>
                     </select>
                 </section>
             </section>
           </section>
           <!-- 收起按钮 -->
           <section class="slideUp">
                <span  @click="handleSlideUp">收起</span>
           </section>
       </section>
       </section>
       <!-- 主体 -->
       <section class="info_container">
           <!-- 导航菜单 -->
           <section class="info_header">
           <ul>
               <router-link tag="li" v-for="(value,index) in nav" :key="index" :to="{path:value.path}" :class="{activer:router==value.path}"> {{value.title}}</router-link>
           </ul>
       </section>
       <section class="info_mainer">
           <router-view></router-view>
       </section>
       </section>
        <!-- 上传图片 -->
         <el-upload
         style="display:none"
            list-type="picture-card"
            class="avatar-uploader"
            multiple
            action="/user/uploadSelfImage2"
            :show-file-list="true"
            :before-upload="beforeAvatarUpload"
            :http-request="CoverImgUpload"
          >
         </el-upload>
        <!-- 弹出校验框 -->
        <el-dialog
        title="校验"
        :visible.sync="visible"
        width="360px"
        center
        >
          	<slide-verify 
                        ref="slideblock"
                        @again="onAgain"
                        @fulfilled="onFulfilled"
                        @success="onSuccess"
                        @fail="onFail"
                        @refresh="onRefresh"
                        :accuracy="accuracy"
                        :slider-text="text"
                    ></slide-verify>
                <div>{{msg}}</div>
        </el-dialog>
        <!-- 修改密码弹出框 -->
        <el-dialog
        title="修改密码"
        :visible.sync="modifyPsd"
        width="500px"
        center
        >
        <!-- 修改密码 -->
        <section class="modifypsd_container">
            <!-- 旧密码-->
            <section class="oldPsd_input">
                <span>旧密码:</span>
                <input type="password" v-model="PsdFormdata.oldPsd">
            </section>
            <!--新密码 -->
             <section class="newPsd_input">
                <span>新密码:</span>
                <input type="password" v-model=" PsdFormdata.newPsd">
            </section>
            <!-- 确认密码 -->
            <section class="comfirmPsd_input">
                <span>确认密码:</span>
                <input type="password" v-model="PsdFormdata.comfirmPsd">
            </section>
        </section>
          <span slot="footer" class="dialog-footer">
             <el-button @click="modifyPsd = false">取 消</el-button>
            <el-button type="primary" @click="handleModifyPsd">确 定</el-button>
        </span>
        </el-dialog>
    </div>
</template>

<script>
import Upload from "../../minxin/upload";
import SlideVerify from "../../minxin/slide-verify";
import {FixSelfInfo,ShowSelf,UpdatePassword} from "../../api/data";
import {checkStudentId,checkUsername,checkPhone,checkEmail,checkRealname,checkMajor, checkBrithday,CheckPsd,CheckComfirmPsd} from "../../api/check";
let AnimateMove=false;
let user={};
    export default {
        mixins:[SlideVerify,Upload],
        data(){
            return{
                //修改密码对象
                PsdFormdata:{
                    //旧密码
                    oldPsd:'',
                    //新密码
                    newPsd:'',
                    //确认密码
                    comfirmPsd:''
                },
                //修改密码弹出框
                modifyPsd:false,
                //校验状态
                checkFlay:false,
                //校验跳出框
                visible:false,
                //修改状态
                modify:false,
                //个性签名修改状态
                edit:true,
                //路由path
                router:'',
                //签名
                autograph:"啦啦啦啦啦",
                //个人信息
                Userinfo:[
                    {
                    icon:'iconfont icon-yonghu',
                    value:'',
                    }, {
                    icon:'iconfont icon-shenfenzhenghaoma',
                    value:'',
                    }, {
                    icon:'iconfont  icon-xingming',
                    value:'',
                    },{
                    icon:'iconfont icon-icon-mail',
                    value:'',
                    }, {
                    icon:'iconfont icon-shouji',
                    value:'',
                    }, {
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
                //路由菜单
                nav:[
                    {
                        title:'动态',
                        path:'/people/index/trends',
                        value:'',
                    },
                     {
                        title:'文章',
                        path:'/people/index/article',
                        value:'',
                    },{
                        title:'提问',
                        path:'/people/index/question',
                        value:'',
                    }, {
                        title:'关注',
                        path:'/people/index/core',
                        value:'',
                    }, {
                        title:'粉丝',
                        path:'/people/index/fans',
                        value:'',
                    }, {
                        title:'收藏',
                        path:'/people/index/collection',
                        value:'',
                    },{
                        title:'发布',
                        path:'/people/index/release',
                        value:'',
                    },
                    ],

            }
        },
         methods: {
             //修改密码
           async handleModifyPsd(){
               if (this.PsdFormdata.oldPsd.trim()=="") {
                   this.message("warning","旧密码不能为空");
               }else{
                   if (this.PsdFormdata.newPsd===this.PsdFormdata.oldPsd) {
                       this.message("warning","旧密码和新密码不能相同");
                   }else{
                   if (CheckPsd({value:this.PsdFormdata.newPsd}) && CheckComfirmPsd(this.PsdFormdata.newPsd,this.PsdFormdata.comfirmPsd)) {
                        let result=await UpdatePassword({
                            oldPassword:this.PsdFormdata.oldPsd,
                            newPassword:this.PsdFormdata.newPsd,
                            repeatPassword:this.PsdFormdata.comfirmPsd
                        })  
                        if (result["data"].code==="200") {
                            this.message("success","密码修改成功,请重新登录");
                            localStorage.clear();
                            this.$store.commit("handleCance");
                            setTimeout(()=>{
                            this.router.push({
                                name:"login",
                                params:{
                                    studentId:this.user.studentId
                                }
                            })
                            },1000)
                           
                        }else if (result["data"].code==="500") {
                            this.message("warning","原密码错误");
                        }{
                        
                        }
                   }
                   }
               }
            },
             //向上收
           handleSlideUp(){
               if(AnimateMove){
                    if (this.modify){
                        this.message("info","退出编辑");
                    }
                    $(".slideUp").hide();
                    AnimateMove=false;
                    this.modify=false;
                     $(".info_data select").prop("disabled",true);
                     $(".info_data input").prop("readonly",true);
                     $(".person_data").animate({"height":"-=410px"},500);
               }
             },
             //更换头像事件
            handleUpload(){
                $(".el-upload__input").click();
            },
            //图片上传成功
            UploadSuccess(){
                console.log("11111");
                let iterator=FixSelfInfos(this.Userinfo,this.image);
                let result=iterator.next();
                result.then(res=>{
                if (res.value["data"].code=="200") {
                    this.modify=false;
                   localStorage.setItem("token",res.value["data"].result);
                    this.user.selfImage=this.image;
               }else{
                   this.message("warning","修改失败");
               }
            })

            },
             //编辑签名事件
           handleEdit(){
             this.edit=false;
           },
           //校验成功
            async onSuccess(times){
            this.message("success",`校验成功,耗时${(times / 1000).toFixed(1)}s`);
            this.msg = `校验成功, 耗时${(times / 1000).toFixed(1)}s`
            setTimeout(() => {
                this.$refs.slideblock.reset();
                this.visible=false;
                this.$refs.slideblock.reset();
                this.msg="";
            },1000);
            this.checkFlay=true;
            this.image=this.image!=''?'../../../static/images/user.png':this.user.selfImage;
            //生成器
             let iterator=FixSelfInfos(this.Userinfo,this.image);
                let result=iterator.next();
                result.then(res=>{
                    console.log(res);
                if (res.value["data"].code=="200") {
                    this.modify=false;
                   this.message("success","修改成功");
                   localStorage.setItem("token",res.value["data"].result);
                   let data=iterator.next();
                   data.then(res=>{
                    if(res.value["data"].code=="200"){
                    let user=res.value["data"].result;
                    this.user=user;
                   this.$store.commit('handleUser',{
                        user
                    });

                    }else{
                   this.message("warning","获取用户信息失败");
                        
                    }
                   })

               }else{
                   this.message("warning","修改失败");
               }
            })
        },
           //点击取消退出编辑事件
           handleCanle(){
                this.Userinfo.forEach((item,index)=>{
                switch(index){
                    case 0:item.value=user.userName;break;
                    case 1:item.value=user.studentId;break;
                    case 2:item.value=user.userName;break;
                    case 3:item.value=user.email;break;
                    case 4:item.value=user.mobilePhone;break;
                    case 5:item.value=user.birthday;break;
                    case 6:item.value=user.major;break;
                    case 7:item.value=user.sex;break;
                }

            })
               this.modify=false;
                $(".info_data select").prop("disabled",true);
                $(".info_data input").prop("readonly",true);
                this.message("info","退出编辑");
           },
           //点击查看详细信息
           handleWatch(){
               if(!AnimateMove){
                    $(".person_data").animate({"height":"+=410px"},500);
                   $(".slideUp").show();
                    AnimateMove=true;
                }
           },
           //点击修改个人信息按钮
          handleModify(){
               if (!this.modify) {
                if(!AnimateMove){
                    $(".person_data").animate({"height":"+=410px"},500);
                    AnimateMove=true;
                    $(".slideUp").show();

                }
               this.message("success","开始编辑个人信息");
               $(".info_data select").prop("disabled",false);
               $(".info_data input").prop("readonly",false).eq(0).focus();
               this.modify=true;
               }else{
                   if(
                       checkUsername({username:this.Userinfo[0].value,max:10,min:3})
                      && checkPhone({value:this.Userinfo[4].value})
                      && checkEmail({value:this.Userinfo[3].value})
                      && checkRealname({value:this.Userinfo[2].value})
                      && checkBrithday({value:this.Userinfo[5].value})  
                      && checkMajor({value:this.Userinfo[6].value})
                      && checkStudentId({value:this.Userinfo[1]})
                   ){
                       this.visible=true;
                   }
                   this.Userinfo.forEach(item=>{
                       console.log(item.value);
                   })
               }
           }
        },
        mounted(){
            $(".info_header li").on("click",(e)=>{
               $(".info_header li").css({"border-bottom":"none","font-weight":"100"});
               e.target.style.borderBottom="2px solid #409EFF";
               e.target.style.fontWeight="bold ";
            })
        },
        created(){
            this.user=this.$store.state.user;
            this.image=this.$store.state.user.selfImage;
            this.router=this.$route.path;
            user=this.$store.state.user;
            console.log(user);
            this.Userinfo.forEach((item,index)=>{
                switch(index){
                    case 0:item.value=user.userName;break;
                    case 1:item.value=user.studentId;break;
                    case 2:item.value=user.userName;break;
                    case 3:item.value=user.email;break;
                    case 4:item.value=user.mobilePhone;break;
                    case 5:item.value=user.birthday;break;
                    case 6:item.value=user.major;break;
                    case 7:item.value=user.sex;break;
                }

            })
        }
    }
   //生成器
  async  function * FixSelfInfos(Userinfo,image){
       yield await FixSelfInfo({
                selfImageUrl:image,
                studentId:Userinfo[1].value,
                userName:Userinfo[0].value,
                realName:Userinfo[2].value,
                sex:Userinfo[7].value,
                birthday:Userinfo[5].value,
                major:Userinfo[6].value,
                mobilePhone:Userinfo[4].value,
                email:Userinfo[3].value,
                enterSchoolTime:Userinfo[5].value
            });
        yield await ShowSelf();
   }
</script>

<style lang="less" scoped>
@import "../../../static/less/public/myindex.less";
</style>