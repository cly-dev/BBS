// import axios from "./axios";

// export const getDa=()=>{
//     return axios.request({
//         url:"",
//         method:"get"
//     })
// }
// 数据请求层
import request from "./request";
import axios from "axios";
import ElementUI from 'element-ui';
import NProgress from 'nprogress';
import 'element-ui/lib/theme-chalk/index.css';
axios.defaults.timeout="5000";
//请求拦截器
axios.interceptors.request.use(config=>{
    NProgress.start();
    if (localStorage.getItem("token")) {
      config.headers.token = localStorage.getItem("token");//把localStorage的token放在Authorization里
    }
    console.log(config);
    return config;
  },err=>console.log(err));
  //响应拦截器
  axios.interceptors.response.use(config=>{
    NProgress.done(true);
    if(config["status"]=="200"){
      if(config["data"].code=="200"){
        return config;
      }
      else{
        if(config["data"].code=="500"){
          ElementUI.Message({
            type:"error",
            message:`服务器内部错误`,
            offset:100
          })
      }
     }
    }else{
    if(config.status=="500"){
      ElementUI.Message({
        type:"error",
        message:"服务器出错",
        offset:100
      })
    }else if(config.status=="400"){
      ElementUI.Message({
        type:"error",
        message:"参数错误",
        offset:100
      })
    }
  }
    
  },err=>{
    ElementUI.Message({
      type:"error",
      message:`${err}`,
      offset:100
    })
  });
  
//登录请求
export const Login=(params=>{
  return request("/user/login","",params);
})
// 请求论坛首页数据
export const getHomepage=()=>{
    return request("/homePage");
}
//详细展示问题内容
export const ShowQuestion=(questionId=>{
  return request(`/question/showQuestion/${questionId}`)
})
//请求问题详情信息
export const getQuestion=(questionId)=>{
  return request(`/question/showQuestionByPage3/${questionId}/1/6`);
}
//收藏问题信息
export const getQuestCollection=(questionId)=>{
  return request(`/collectionQuestion/insert`,"",questionId,"POST");
}
//取消收藏问题
export const getQuestCollectionDelete=(questionId)=>{
  return request(`/collectionQuestion/delete`,"",questionId,"POST");
}
export const UploadAnswer=(params=>{
  return request("/answer/uploadAnswer","",params,"POST");
})
//点赞答案事件
export const getAnswerSupport=(answerId)=>{
  return request("/answer/likeAnswer","",answerId,"POST");
}
//取消答案点赞事件
export const getCancelLikeAnswer=(answerId)=>{
  return request("/answer/cancelLikeAnswer","",answerId,"POST");
}
//删除答案事件
export const DeleteAnswer=(answerId=>{
  return request("/answer/deleteAnswer","",answerId,"POST");
})
//查看答案分页事件
export const ShowQuestionByPage=(answerId,page)=>{
  return request(`/question/showQuestionByPage3/${answerId}/${page}/6`)
}
//提问事件
export const UploadQuestion=(params=>{
  return request(`/question/uploadQuestion`,"",params,"POST");
})

//上传文章
export const UploadArticle=(params=>{
  return request(`/article/uploadArticle`,"",params,"POST");
})
//修改问题
export const FixQuestion=(params=>{
  return request(`/question/fixQuestion`,"",params,"POST");
})
//修改文章
export const FixArticle=(params=>{
  return request(`/article/fixArticle`,"",params,"POST");
})
//请求文章详情
export const ShowArticle=(articleId=>{
  return request(`/article/showArticle/${articleId}`);
})
//请求文章所有的标签
export const ShowLabel=(articleId=>{
  return request(`/article/showAllArticle/${articleId}`)
})
//请求文章的评论
export const ShowAllCommentByPage=(articleId=>{
  return request(`/commentAnswer/showAllCommentByPage/${articleId}/1/6`)
})
//点赞评论事件
export const CommentAnswerLike=(commentId=>{
  return request(`/commentArticle/addLike`,"",commentId,"POST")
})
//发表评论
export const CommentArticleInsert=(params=>{
  return request(`/commentArticle/insert`,"",params,"POST")
})
//删除评论事件
export const DeletecommentArticle=(commentId=>{
  return request(`/commentArticle/delete`,"",commentId,"POST");
})
//我提问所有问题
export const ShowAllQuestionByPage=(userId=>{
  return request (`/question/showAllQuestionByPage/${userId}`,"","");
})
//我创作的所有文章
export const ShowAllArticleByPage=(userId=>{
  return request (`/article/showAllArticleByPage/${userId}`);
})
//删除我创作的文章
export const DeleteArticle=(articleId=>{
  return request(`/article/deleteArticle`,"",articleId,"POST");
})
//删除我提问的问题
export const DeleteQuestion=(questionId=>{
  return request(`/question/deleteQuestion`,"",questionId,"POST");
})
//查看自己的足迹
export const ShowAllLimitTimeByPage=(page)=>{
  return request(`/scanHistory/showAllLimitTimeByPage2/${page}/10`);
}
//删除自己的足迹
export const DeleteHistory=(scanHistoryId)=>{
  return request(`/scanHistory/delete`,"",scanHistoryId,"POST");
}
//查看自己关注的人
export const ShowFocus=()=>{
  return request(`/fans/showFocus`,"","","POST");
}
//查看自己的粉丝
export const ShowFans=()=>{
  return request(`/fans/showFans`,"","","POST");
}
//分页查询自己的关注的人
export const ShowFocusByPage=(params)=>{
  return request(`/fans/showFocusByPage`,"",params,"POST");
}
//分页查询自己的粉丝
export const ShowFansByPage=(params)=>{
  return request(`/fans/showFansByPage`,"",params,"POST");
}
//关注某人
export const FocusOther=(userId=>{
  return request(`/fans/focusOther`,"",userId,"POST");
})
//取消关注某人
export const CancelFocus=(userId=>{
  return request(`/fans/cancelFocus`,"",userId,"POST")
})

//添加活动
export const AddActivity=(params=>{
  return request(`/activity/addActivity`,"",params,"PUT")
})
//修改信息
export const UpdateActivity=(params=>{
  return request(`/activity/updateActivity`,"",params,"POST");
})
//获取自己发布的活动
export const GetReleaseActivityById=(pagenum=>{
  return request(`/activity/getReleaseActivityById`,"",pagenum);
})
//条件查询活动内容
export const GetActivityList=(params=>{
  return request(`/activity/getActivityList`,"",params);
})
//获取活动详细内容
export const GetDetailActivity=(activityId=>{
  return request(`/activity/getDetailActivity`,"",activityId);
})
//删除活动
export const DeleteActivity=(activityId=>{
  return request(`/activity/deleteActivity`,"",activityId,"DELETE");
})