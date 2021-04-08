import {CommentAnswerLike,CommentArticleInsert,DeletecommentArticle} from "../api/data";
export default{
  methods:{
 //删除评论信息
      async deleteComment(value,index){
        let result=await DeletecommentArticle({commentId:value.commentId});
        if(result["data"].code=="200"){
          this.$message({
            message: '删除成功',
            type: 'success',
            offset: 100
          });
        }
        console.log(index);
        this.commentData.splice(index,1);

      },

      // 删除回复信息
      deleteReply(){
       this.$notify({
                 title: '成功',
                 message: '删除成功',
                 type: 'success',
                   offset: 100
               });
      },

      // 切换页码事件
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      //评论踩动作
      CommentStampclick(value){
        if (!value.stamp && value.support) {
          value.support = false;
          this.supPort(value.support);
          value.num--;
          value.stamp = true;
          this.stamp(value.stamp);
        } else if (value.stamp && !value.support) {
          // console.log(11);
          value.stamp = false;
          this.stamp(value.stamp);
        } else {
          value.stamp = true;
          this.stamp(value.stamp);
        }
      },
      //赞评论区动作
      CommentSupportclick(value){
          if(value.support){
            this.$message({
              message: '只能点赞一次哦',
              type: 'warning',
              offset:100
            });
          }else{
            value.support=true;
            this.supPort(value.support);
            value.num++;
            value.stamp=false;
            this.stamp(value.stamp);
          }
      },
      //踩动作
      Stampclick(index) {
        if (!this.data[index].stamp && this.data[index].support) {
          this.data[index].support = false;
          this.supPort(this.data[index].support);
          this.data[index].num--;
          this.data[index].stamp = true;
          this.stamp(this.data[index].stamp);
        } else if (this.data[index].stamp && !this.data[index].support) {
          // console.log(11);
          this.data[index].stamp = false;
          this.stamp(this.data[index].stamp);
        } else {
          this.data[index].stamp = true;
          this.stamp(this.data[index].stamp);
        }
      },
      //点赞动作
      async Clicksupport(value,index) {
        let result=await CommentAnswerLike({commentId:value.commentId});
        if(result["data".code=="200"]){
          $(".comment_support img").attr("src","../../../static/images/campus/detail/article_aftersupport.png");
          $(".comment_support span").text( $(".comment_support span").text()+1).css("color","#409EFF");
          this.$message({
                message: '点赞成功',
                type: 'success',
                offset:100
              });
        }
        // if (this.data[index].support) {
        //   this.$message({
        //     message: '只能点赞一次哦',
        //     type: 'warning',
        //     offset:100
        //   });
        // } else {
        //   this.data[index].support = true;
        //   this.supPort();
        //   this.data[index].num++;
        //   this.data[index].stamp = false;
        //   this.stamp(this.data[index].stamp);
        // }

      },
      //点击评论动作
      Scorllcomment() {
        $(document).scrollTop(this.componentInstance - 60);
      },
      //选择赞赏金额动作
      Choicemoney(value) {
        this.appreciateMoney = value;
      },
      //点击评论回复动作
      CommentReplyclick(index,value,key) {
        if (this.data[index].list[key].replyclick) {
          $(".reply_operation_content").eq(key).find("li").eq(0).text("回复");
          this.data[index].list[key].replyclick = false;
          
        } else {
         $(".reply_operation_content").eq(key).find("li").eq(0).text("取消回复");
          this.data[index].list[key].replyclick = true;
        }
      },

      //点击回复动作
      Replyclick(index) {
        if($(".operation_content").eq(index).get(0).getAttribute("data-flay")=="true"){
          $(".operation_content").eq(index).find("li").eq(0).text("取消回复");
          $(".operation_content").eq(index).get(0).setAttribute("data-flay","false");
          $(".comment_containers").eq(index).css("display","block");

        }else{
          $(".comment_containers").eq(index).css("display","none");
          $(".operation_content").eq(index).find("li").eq(0).text("回复");
          $(".operation_content").eq(index).get(0).setAttribute("data-flay","true");
        }  
       
      },
      //滑过回复盒子动作
      replyHovering(value,key) {
        console.log("1111");
        $(".reply_operation_content").get(key).style.display = "block";
      },
      //滑过回复盒子动作
      replyHoverout(value,key) {
        console.log("111122");
          $(".reply_operation_content").get(key).style.display = "none";
        
      },
      //滑出盒子动作
      Hoverout(index) {
        if($(".operation_content").eq(index).get(0).getAttribute("data-flay")=="true"){
          $(".operation_content").get(index).style.display = "none";
        }
      },
      //滑过盒子动作
      Hovering(index) {
        $(".operation_content").get(index).style.display = "block";

      },
      //获取输入框内容
      onInput(event) {
        //事件。数据包含文本区域的值
        //将输入的话和表情赋给newss
        this.content = event.data;
      },
      // 获取回复评论内容
      Reply(event) {
        this.replyCentent = event.data;
      },
      clearTextarea() {
        this.$refs.emoji.clear()
      },
      //发表评论动作
     async Pushing() {
        this.pushLoading = true;
        let result=await CommentArticleInsert({
          articleId:this.articleData.articleId,
          content:this.content
        })
        console.log(result);
          if(result["data"].code=="200"){
            this.$message({
              message:"发表成功",
              type:"success",
              offset:100
            })
            this.$nextTick(() => {
              this.content = "";
            })
            this.pushLoading=false;
            let date=new Date();
            if(this. commentData.length<10){
             this.commentData.unshift({
                answerId:result["data"].date,
                content:this.content,
                createTime:`${new Date().getFullYear().toString()}-${new Date().getMonth().toString()}-${new Date().getDate().toString() } ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
                name:"阿勇"
           })}else{
             this.commentData.pop();
             this.commentData.unshift({
                answerId:result["data"].date,
                content:this.content,
                createTime:`${new Date().getFullYear().toString()}-${new Date().getMonth().toString()}-${new Date().getDate().toString() } ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
                name:"阿勇"
           })
           }
          }
      },
      //回复他们评论
      commentReplying(index){
        console.log($(".reply_comment_input").eq(index).find(".emoji-wysiwyg-editor").html());
        this.$axios({
          url:"接口地址",
          method:"GET",
          params:{

          }
        }).then((res)=>{
          console.log(res);
        }).catch((err)=>{
          console.log(err);
        })
      },
      //回复评论动作
      Replying(index) {
        console.log($(".comment_containers").eq(index-1).find(".emoji-wysiwyg-editor").html());
        this.$axios({
          url:"接口地址",
          method:"GET",
          params:{

          }
        }).then((res)=>{
          console.log(res);
        }).catch((err)=>{
          console.log(err);
        })
        // console.log($(".comment_input .emoji-wysiwyg-editor").eq(index+1).html());
        // this.data[index].replyloading = true;
      }
  }
}
