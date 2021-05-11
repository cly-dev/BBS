
export default{
    data() {
        return {
          imageUrl: "",
          image:'',
        }
    },
 methods: {
     //上传事件
    CoverImgUpload(e){
        let Formdata=new FormData();
        // Formdata.append('type',this.filetype);
        Formdata.append("file",e.file);
        console.log(e);
        this.$axios({
          url:e.action,
          params:{
            type:this.filetype
          },
          data:Formdata,
          method:"POST",
          headers:{
           "Content-Type":"multipart/form-data"
          }
        }).then(res=>{
          console.log(res);
          this.image=res.data.result;
        }).catch(err=>{
          console.log(err);
        })
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === "image/jpeg";
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG) {
          this.$message.error("上传头像图片只能是 JPG 格式!");
        }
        if (!isLt2M) {
          this.$message.error("上传头像图片大小不能超过 2MB!");
        }
        return isJPG && isLt2M;
      },
      
}
}