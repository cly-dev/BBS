import { ShowUSerInfo,ShowAllCommentByPage,CollectionArticledelete,CommentArticleLike,CommentArticleInsert,DeletecommentArticle,CollectionArticles,FocusOther} from "../api/data";
export default{
  methods:{
    //跳转到某人主页
    handleVisit(val){
      if (val==this.$GetUserId()) {
        this.$router.push({
           name:'my' 
        })
    }else{
      localStorage.setItem("userId",val);
      this.$router.push({
        name:'peopleInfo',
        params:{
          userId:val
        }
      })
    }
    },

    //查看某人主页
    async getUSerInfo(item){
      if(item.userId!=this.UserInfo.userId){
        let result=await ShowUSerInfo(item.userId);
        this.UserInfo=result["data"].result;
      
      }
      this.UserInfo.userId=item.userId;
    },
    //关注某人
    async handleCore(val){
      console.log(val);
      let result=await FocusOther({userId:val.userId});
      if(result["data"].code=="200"){
        this.message("success","关注成功");
      }else if(result["data"].code=="500"){
        this.message("warning","不能重复关注");
      }
      console.log(result);
    },

    //跳转到修改文章
    ToEditor(){
      localStorage.setItem("articleId",this.articleId);
      this.$router.push({
        name:"Revuseacticle",
        params:{
          articleId: this.articleId
        }
      })
    },
 //删除评论信息
      async deleteComment(value,index){
        let result=await DeletecommentArticle({commentId:value.commentId});
        if(result["data"].code=="200"){
          this.$message({
            message: '删除成功',
            type: 'success',
            offset: 100
          });
          this.total--;
        }
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
      //收藏某篇文章
     async handleCollection(val){
        if(!this.collection){
        let result=await CollectionArticles({
          articleId:val
        })
        console.log(result);
        if(result["data"].code=="200"){
          this.message("success","收藏成功");
          $(".collection").css("color","#F56C6C").text("已收藏");
          this.collection=true;
        }
      }else{
          let result=await CollectionArticledelete({articleId:val});
          if(result["data"].code=="200"){
            this.message("success","取消收藏");
            $(".collection").css("color","#626262").text("收藏");
            this.collection=false;
          }
      }
      },
  
      // 切换页码事件
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      async handleCurrentChange(val) {
        let result=await ShowAllCommentByPage(`${this.articleId}`+`/${val}`+"/10");
        console.log(result);
        this.commentData=result["data"].result.data;
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
            value.stamp=false;
            this.stamp(value.stamp);
            console.log("1111");
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
        let result=await CommentArticleLike({commentId:value.commentId});
        if(result["data"].code=="200"){
        value.likeNum++;
          $(".comment_support").eq(index).find("img").attr("src","../../../static/images/campus/detail/article_aftersupport.png");
          $(".comment_support ").eq(index).find("span").css("color","#409EFF");
          this.$message({
                message: '点赞成功',
                type: 'success',
                offset:100
              });
        }else{
          this.message("warning","已经点过赞了");
        }
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
        this.comment_content=event.data;
        let str=$(".emoji-wysiwyg-editor").html().slice($(".emoji-wysiwyg-editor").html().indexOf("alt=")+5);
        let arr=str.split(":");
        let reg_str=`<img src="data:image/gif;base64,R0lGODlhAQABAJH/AP///wAAAMDAwAAAACH5BAEAAAIALAAAAAABAAEAAAICVAEAOw==" class="img" style="display:inline-block;width:25px;height:25px;background:url('/static/img/emoji_spritesheet_0.cce267d.png')-125px-75px no-repeat;background-size:675px 175px;" alt=":${arr[1]}:">`;
        console.log(event.data);
        this.content=event.data;
        
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
       if(this.content!=""){
        this.pushLoading = true;
        let result=await CommentArticleInsert({
          articleId:this.articleData.articleId,
          content:this.content
        })
        console.log(result["data"]);
          if(result["data"].code=="200"){
            this.$message({
              message:"发表成功",
              type:"success",
              offset:100
            })
            this.$nextTick(() => {
              this.content = "";
              this.comment_content="";
            })
            this.total++;
            this.pushLoading=false;
            let date=new Date();
            if(this.commentData.length<10){
             this.commentData.unshift({
                hasSelf:true,
                userId:this.$GetUserId(),
                likeNum:0,
                commentId:result["data"].result,
                content:this.content,
                createTime:`${new Date().getFullYear().toString()}-${new Date().getMonth().toString()}-${new Date().getDate().toString() } ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
                authorName:this.$store.state.user.userName,
                authorImage:this.$store.state.user.selfImage
           })}else{
             this.commentData.pop();
             this.commentData.unshift({
                hasSelf:true,
                userId:this.$GetUserId(),
                likeNum:0,
                commentId:result["data"].result,
                content:this.content,
                createTime:`${new Date().getFullYear().toString()}-${new Date().getMonth().toString()}-${new Date().getDate().toString() } ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
                authorName:this.$store.state.user.userName,
                authorImage:this.$store.state.user.selfImage
           })
           }
          }else{
            this.message('warning',"发表失败");
            this.pushLoading=false;
          }
        }else{
          this.message("warning","评论内容不能为空");
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
      }
  }
}
