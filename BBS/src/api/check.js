import ElementUI from 'element-ui';
function message(message,type="error"){
        ElementUI.Message({
            type,
            message,
            offset:100
        })
}

//校验用户名函数
export const checkUsername=({username,max,min,require=true})=>{
    if(require || username!=''){
    if(username==""){
        message("用户名不能为空");
        return false;
    }else if(username.length<min || username.length >max){
        message(`用户名在 ${min} ~ ${max}之间`);
        return false;
    }else if(username.length>3 && username.length <10){
        let parrern=/[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]/gim;
        let reg=/^[0-9]*$/g;
        if (parrern.test(username)){
          message("用户名不能出现特殊符号");
          return false;
      }else if(reg.test(username)){
          message("用户名不能全为数字");
          return false;
      }else{
          return true;
      } 
    }
    }else{
    return true;

    }
}
//校验手机号函数
export const checkPhone=({value,require=true})=>{
    // if(fn!=null){
    //      message=fn;
    // }
    if(require || value!=''){
    if(value==""){
        message("手机号不能为空");
        return false;
    }else{
        let reg=/^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9]|17[0|1|2|3|5|6|7|8|9])\d{8}$/g;
        if(!reg.test(value)){
            message("手机格式错误");
            return false;
        }else{
            return true;
        }
    }
}else{
    return true;
}
}
//校验邮箱信息
export const checkEmail=({value,require=true})=>{
    if(value!='' || require){
        if(value==""){
            message("邮箱不能为空");
            return false;
        }else{
            let reg=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/g;
            if(reg.test(value)){
                return true;
            }else{
                message("邮箱格式错误");
                return false;
            }
        }
    }else{
        return true;
    }
}
//校验用户真实姓名
export const checkRealname=({value,require=true})=>{
    if(value!='' || require){
        if(value==""){
            message("真实姓名不能为空");
            return false;
        }else{
            if(value >10){
            message("姓名过长,特殊情况请联系管理员");
            return false;
            }else{
            let reg=/^[^0-9]*$/gim;
            if(!reg.test(value)){
                message("姓名不能出现数字");
                return false;
            }else{
                return true;
            }
        }
        }
    }else{
        return true;
    }
}
//校验用户年级
export const checkMajor=({value,require=true})=>{
    if(value!='' || require){
        if(value==""){
            message("专业年级不能为空");
            return false;
        }else{
            return true;
        }
    }else{
        return true;
    }
}
//校验生日
export const checkBrithday=({value,require=true})=>{
    if(value!="" || require){
        if(value==""){
            message("生日不能为空");
            return false;
        }else{
            return true;
        }
    }else{
        return true;
    }
}
//校验学号
export const checkStudentId=({value,require=true})=>{
    console.log(value.value);
    if(value!="" ||require){
        if(value==" "){
            message("学号不能为空");
            return false;
        }else{
            let reg=/^[0-9]{10}$/;
            if(reg.test(value)){
                message("学号格式错误");
                return false;
            }else{
                return true;
            }
        }
    }else{
        return true;
    }
}

//校验密码
export const CheckPsd=({value,require=true})=>{
    if(value!=''|| require){
        if(value==""){
            message("密码不能为空");
            return false;
        }else{
            let reg=/^(?=.*\d)(?=.*[a-z])[a-z0-9]{6,16}$/g;
            if(!reg.test(value)){
                message("密码格式错误");
                return false;
            }else{
                return true;
            }
        }
    }else{
        return true;
    }
}
//校验确认密码
export const CheckComfirmPsd=(value,comfirmval)=>{
    if(value!=comfirmval){
        message("两次输入的密码不一致");
        return false;
    }else{
        return true;
    }
}
