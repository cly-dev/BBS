<template>
  <div id="app">
       <keep-alive><router-view/></keep-alive></keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  // data:()=>{
  //   let checkAge = (rule, value, callback) => {
  //               if (!value) {
  //                 return callback(new Error('验证码不能为空'));
  //               }
  //               setTimeout(() => {
  //                  callback();
  //                 }, 1000);
  //             };
  //             let validatePass = (rule, value, callback) => {
  //               if (value === '') {
  //                 callback(new Error('请输入账号'));
  //               } else {
  //                 callback();
  //               }
  //             };
  //             let validatePass2 = (rule, value, callback) => {
  //               if (value === '') {
  //                 callback(new Error('请输入密码'));
  //               }else {
  //                 callback();
  //               }
  //               };
  //   return{
  //     dep_name:"",
  //     sign:"12",
  //     show:true,
  //     routerlist:['hoslist','follow'],
  //     centerDialogVisible: false,
  //            ruleForm: {
  //                     userid: '',
  //                     pass: '',
  //                     code: ''
  //                   },
  //                   rules: {
  //                    userid: [
  //                       { validator: validatePass, trigger: 'blur' }
  //                     ],
  //                     pass: [
  //                       { validator: validatePass2, trigger: 'blur' }
  //                     ],
  //                     code: [
  //                       { validator: checkAge, trigger: 'blur' }
  //                     ]
  //                   },

  //   }
  // },
  //  methods:{
  //      submitForm(formName) {
  //        this.$refs[formName].validate((valid) => {
  //          if (valid) {
  //            alert('submit!');
  //          } else {
  //            console.log('error submit!!');
  //            return false;
  //          }
  //        });
  //      },
  //      resetForm(formName) {
  //        this.$refs[formName].resetFields();
  //      },
  //     show_err() {
  //          this.$message.error('错了哦，这是一条错误消息');
  //       }
  //    },
  //    watch:{
  //      '$route'(to,from){
  //        console.log(to);
  //         if(this.routerlist.some((value,index)=>{
  //           return value==to.name;
  //         })){
  //           this.show=true;
  //         }else{
  //           this.show=true;
  //         }
  //      }
  //    }
}
</script>
<style lang="less" scoped>
  body{
      background:#f7f7f7;
  }
</style>
