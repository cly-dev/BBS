import {Activation} from "../api/data";
export default{
    methods: {
         //校验学号
      checkStudnetId(){
        if(this.formData.studentId.trim()==""){
            $(".Register_number .input_error").text("学号不能为空").fadeIn();
            return false;
        }else{
            if(this.formData.studentId.length!=10){
              $(".Register_number .input_error").text("学号个数应为10位,请检查").fadeIn();
              return false;
            }else{
              $(".Register_number .input_error").fadeOut();
              return true;
            }
        }
    },
    //校验用户名
      checkUsername(){
        if(this.formData.username.trim()==""){
            $(".Register_name .input_error").text("用户名不能为空").fadeIn();
            return false;
        }else if(this.formData.username.trim().length<3 || this.formData.username.trim().length >10){
            $(".Register_name .input_error").text("用户名字数在3~10位之间").fadeIn();
            return false;
        }else if(this.formData.username.trim().length>=3 &&  this.formData.username.trim().length <10){
            let parrern=/[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]/gim;
            let reg=/^[0-9]*$/g;
            if (parrern.test(this.formData.username)){
              $(".Register_name .input_error").text("用户名不能含有特殊符号").fadeIn();
              console.log(11);
              return false;
          }else if(reg.test(this.formData.username)){
              $(".Register_name .input_error").text("用户名不能全部为数字").fadeIn();
              console.log(111);

              return false;
          }else{
              $(".Register_name .input_error").fadeOut();
              return true;
          } 
        }
    },
    //校验密码
    checkPassword(){
        if(this.formData.password.trim()==""){
            $(".Register_psd .input_error").text("密码不能为空").fadeIn().css("color","#F56C6C");
            return false;
        }else{
                  let reg=/^(?=.*\d)(?=.*[a-z])[a-z0-9]{6,16}$/g;
                  let patternStrong=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9_].{6,16}$/g;
                  if(reg.test(this.formData.password)){
                      $(".Register_psd .input_error").text("当前密码强度:弱").fadeIn().css("color","#67C23A");
                       return true;
                  }else if(patternStrong.test(this.formData.password)){
                      $(".Register_psd .input_error").text("当前密码强度:强").fadeIn().css("color","#67C23A");
                      return true;
                  }else{
                      $(".Register_psd .input_error").text("密码必须由数字、字母组成,且在6~16位").fadeIn().css("color","#F56C6C");
                      return false;
                  }
        }
    },
    //校验确认密码
    checkComfirmPsd(){
        if (this.formData.comfirmPassword.trim()=="") {
            $(".Register_comfirmpsd .input_error").text("确认密码不能为空").fadeIn();
            return false;
        }else{
            if(this.formData.comfirmPassword!=this.formData.password){
            $(".Register_comfirmpsd .input_error").text("两次输入的密码不一致").fadeIn();
              return false;
            }else{
            $(".Register_comfirmpsd .input_error").fadeOut();
                return true;
            }
        }
    },
    //校验真实用户名
    checkRealname(){
        if(this.formData.realname.trim()==""){
            $(".Register_realname .input_error").text("真实名字不能为空").fadeIn();
            return false;
        }else{
            if(this.formData.realname.trim().length >10){
            $(".Register_realname .input_error").text("名字过长,特殊情况请联系管理员").fadeIn();
            return false;
            }else{
            let reg=/^[^0-9]*$/gim;
            if(!reg.test(this.formData.realname)){
                $(".Register_realname .input_error").text("真实姓名不能包含数字").fadeIn();
                return false;
            }else{
            $(".Register_realname .input_error").fadeOut();
                return true;
            }
        }
        }
    },
    //校验电话号码
    checkPhone(){
        if(this.formData.phone.trim()==""){
            $(".Register_phone .input_error").text("电话号码不能为空").fadeIn();
            return false;
        }else{
            let reg=/^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9]|17[0|1|2|3|5|6|7|8|9])\d{8}$/g;
            if(!reg.test(this.formData.phone)){
                $(".Register_phone .input_error").text("电话号码格式错误").fadeIn();
                return false;
            }else{
                $(".Register_phone .input_error").fadeOut();
                return true;
            }
        }
    },
    //校验进行学校时间
    checkEnterTime(){
        if(this.formData.enterShoolTime==""){
            $(".Register_enterSchool .input_error").text("进入学校时间不能为空").fadeIn();
            return false;
        }else{
            $(".Register_enterSchool .input_error").fadeOut();
            return true;
        }
    },
    //校验邮箱
    checkEmail(){
        if(this.formData.email==""){
            $(".Register_email .input_error").text("邮箱不能为空").fadeIn();
            return false;
        }else{
            let reg=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/g;
            if(reg.test(this.formData.email)){
                $(".Register_email .input_error").fadeOut();
                return true;
            }else{
                $(".Register_email .input_error").text("邮箱格式错误").fadeIn();
                return false;
            }
        }
    },
    // 校验年级
    checkMajor(){
        if(this.formData.grade.trim()==""){
            $(".Register_grade .input_error").text("专业年级不能为空").fadeIn();
            return false;
        }else{
            $(".Register_grade .input_error").fadeOut();
            return true;
        }
    },
    //校验生日
    checkBrithday(){
        if(this.formData.birthday==""){
            $(".Register_birthday .input_error").text("出生日期不能为空").fadeIn();
            return false;
        }else{
            $(".Register_birthday .input_error").fadeOut();
            return true;
        }
    },
    //校验激活码
    checkCode(){
        if(this.formData.code.trim()==""){
            $(".Register_code .input_error").text("激活码不能为空").fadeIn();
            return false;
        }else{
            $(".Register_code .input_error").fadeOut();
            return true;
        }
    },
    //查看密码
    handleText(){
      $(".icon").removeClass("icon-zhengyan").addClass("icon-biyan");
      $(".Register_psd input").attr("type","text");
    },
    //屏蔽密码
   handlePsd(){
     $(".icon").removeClass("icon-biyan").addClass("icon-zhengyan");
      $(".Register_psd input").attr("type","password");
    },
    //查看确认密码
    handleComfirmText(){
      $(".icon").removeClass("icon-zhengyan").addClass("icon-biyan");
      $(".Register_comfirmpsd input").attr("type","text");
    },
    //屏蔽确认密码
    handleComfirmPsd(){
     $(".icon").removeClass("icon-biyan").addClass("icon-zhengyan");
      $(".Register_comfirmpsd input").attr("type","password");
    },
    //获取验证码
    handlEmailCode(){
        if(this.checkEmail()){
            this.dialogVisible=true;
            this.loadingFlay=true;
        }
    },
    //点击下一步
    async nextStep(){
        if(this.step==1){
        if(this.checkStudnetId() && this.checkUsername() && this.checkPassword() && this.checkComfirmPsd()){

            this.step++;
        }else{
            this.message("warning","请检查输入数据");
        }
        }else if(this.step==2){
        if(this.checkRealname() && this.checkPhone()  && this.checkBrithday()){
            this.step++;   
        }else{
            this.message("warning","请检查输入数据");
        }
    }else if(this.step==3){
        if(this.checkCode()){
        let result=await Activation({
            studentId:this.formData.studentId,
            password:this.formData.password,
            activationCode:this.formData.code
            })
            console.log(result);
            if(result["data"].code=="200"){
                this.step++;
                this.message("success","注册成功,自动跳转到登录界面");
                setTimeout(()=>{
                this.$router.push({
                    name:'login',
                    params:{
                        studentId:this.formData.studentId
                    }
                },1000)
            })
            }else{
                this.message("error","验证码错误");
            }
        }
        
    }
    }
    },
}
