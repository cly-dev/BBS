
// 数据请求层
import request from "./request";
import axios from "axios";
import ElementUI from 'element-ui';
import NProgress from 'nprogress';
import {host} from "../config/host";
import 'element-ui/lib/theme-chalk/index.css';
axios.defaults.timeout=host.Timeout;
//请求拦截器
axios.interceptors.request.use(config=>{
    NProgress.start();
    if (localStorage.getItem("token")) {
      config.headers.token = localStorage.getItem("token");//把localStorage的token放在Authorization里
    }
    return config;
  },err=>{
    console.log(err)
  });
  //响应拦截器
  axios.interceptors.response.use(config=>{
    NProgress.done(true);

    if(config["status"]=="200"){
      
      return config;

    }
     

    // if(config.status=="500"){
      // ElementUI.Message({
      //   type:"error",
      //   message:"服务器出错",
      //   offset:100
      // })
    // }else if(config.status=="400"){
    //   ElementUI.Message({
    //     type:"error",
    //     message:"参数错误",
    //     offset:100
    //   })
    // }
  
  },err=>{
    let msg=err.message;
    if(msg.indexOf(`${host.Timeout}ms exceeded`)){
      ElementUI.Message({
        type:"error",
        message:`网络连接超时`,
        offset:100
      })
    }else if(msg=="Network Error"){
      ElementUI.Message({
        type:"error",
        message:`请检查网络`,
        offset:100
      })
    }
    NProgress.done(true);
  
  });
//登录请求
export const Login=(params=>{
  return request("/user/login","",params);
})
//修改密码
export const UpdatePassword=(params=>{
  return request(`/user/updatePassword`,"",params,"PUT");
})
//注册请求
export const Register=(params=>{
  return request(`/user/register`,"",params,"POST");
})
//激活账号
export const Activation=(params=>{
  return request(`/user/activation`,"",params,"POST");
})
//修改自己的信息
export const FixSelfInfo=(params=>{
  return request(`/user/fixSelfInfo2`,"",params,"POST");
})
//获取自己的信息
export const ShowSelf=()=>{
  return request(`/user/showSelfPage2/`,"","");
}


//论坛模块
// 请求论坛首页数据
export const getHomepage=()=>{
    return request("/homePage2");
}
//详细展示问题内容
export const ShowQuestion=(questionId=>{
  return request(`/question/showQuestion/${questionId}`);
})
//请求问题详情信息
export const getQuestion=(questionId)=>{
  return request(`/question/showQuestion2/${questionId}`);
}
//分页请求问题的回答
export const ShowQuestionAnswerByPage=(questionId)=>{
  return request(`/question/showQuestionByPage3/${questionId}`)
}
//收藏问题信息
export const getQuestCollection=(questionId)=>{
  return request(`/collectionQuestion/insert`,"",questionId,"POST");
}
//收藏某篇文章
export const CollectionArticles=(articleId=>{
  return request(`/collectionArticle/insert`,"",articleId,"POST");
})
//取消收藏文章
export const CollectionArticledelete=(articleId=>{
  return request(`/collectionArticle/delete`,"",articleId,"POST");
})
//我收藏的文章
export const CollectionArticle=(userId)=>{
  return request(`/collection2/article2/showByPage2/${userId}/6`);
}
//我收藏的问题
export const CollectionQuestion=((userId)=>{
  return request(`/collection2/question2/showByPage2/${userId}`);
})
//取消收藏问题
export const getQuestCollectionDelete=(questionId)=>{
  return request(`/collectionQuestion/delete`,"",questionId,"POST");
}
//修改
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
//点赞文章事件
export const LikeArticle=(articleId=>{
  return request(`/article/likeArticle`,"",articleId,"POST");
})
//取消文章点赞事件
export const CancelLikeArticle=(articleId=>{
  return request(`/article/cancelLikeArticle`,"",articleId,"POST");
})
//判断是否点赞文章
export const IsLikeArticle=(articleId=>{
  return request(`/article/isLikeArticle`,"",articleId,"POST");
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
  return request(`/article/showArticle2/${articleId}`);
})
//请求文章所有的标签
export const ShowLabel=(articleId=>{
  return request(`/article/showArticleLabel/${articleId}`)
})
//请求文章的评论
export const ShowAllCommentByPage=(articleId=>{
  return request(`/comment2/showArticleAllCommentByPage2/${articleId}`)
})
//点赞评论事件
export const CommentArticleLike=(commentId=>{
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
  return request (`/question/showAllQuestionByPage2/${userId}`,"","");
})
//我创作的所有文章
export const ShowAllArticleByPage=(userId=>{
  return request (`/article/showAllArticleByPage2/${userId}`);
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
  return request(`/fans/showFocusByPage2/${params}`,"","");
}
//分页查询自己的粉丝
export const ShowFansByPage=(params)=>{
  return request(`/fans/showFansByPage2/${params}`,"","",);
}
//关注某人
export const FocusOther=(userId=>{
  return request(`/fans/focusOther`,"",userId,"POST");
})
//展示个人主页信息
export const ShowUSerInfo=(userId=>{
  return request(`/user/showSbPage2/${userId}`,"","");
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
//获取自己参加的活动
export const GetJoinList=(pagenum=>{
  return request(`/joinActivity/getJoinList`,"",pagenum);
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
//参加活动
export const AddJoinActivity=(activityId=>{
  return request(`/joinActivity/addJoinActivity`,"",activityId,"PUT")
})
//取消参加活动
export const CancelJoin=(activityId=>{
  return request(`/joinActivity/cancelJoin`,"",activityId,"DELETE");
})
//部门认证
export const AddDepCheck=(params=>{
  return request(`/depCheck/addDepCheck`,"",params,"PUT");
})
//获取部门介绍信息
export const ShowDepInfo=(departmentName=>{
  return request(`/depIntroduce/showDepInfo`,"",departmentName);
})
//修改部门介绍信息
export const UpdateDepIntroduce=(params=>{
  return request(`/depIntroduce/updateDepIntroduce`,"",params,"POST");
})
//获取部门列表
export const GetDepList=(params=>{
  return request(`/department/getDepList`,"",params);
})
//查看自己的部门
export const GetMyDep=(userId=>{
  return request(`/department/getMyDep`,"",userId);
})
