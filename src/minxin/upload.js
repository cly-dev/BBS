export default{
    data() {
        return {
          image:"",
          imageUrl:''
        }
    },
 methods: {
     //上传事件
    CoverImgUpload(e){
        let Formdata=new FormData();
        Formdata.append("multipartFile",e.file);
        this.$axios({
          url:e.action,
          data:Formdata,
          method:"POST",
          headers:{
           "Content-Type":"multipart/form-data"
          }
        }).then(res=>{
          this.image=res.data.result;
          this.message("success","上传成功");
          this.UploadSuccess&&this.UploadSuccess();
        }).catch(err=>{
            this.message('warning',"上传失败");
        })
      },
      beforeAvatarUpload(file) {
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          this.$message.error("上传头像图片大小不能超过 2MB!");
        }
        return isLt2M ;
      },
      
}
}