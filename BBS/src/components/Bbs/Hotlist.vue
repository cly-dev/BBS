<template>
  <div>
  <div>
              <div v-for="(item,index) in data" class="campus_list" :key="index" @click="toArticledetail(item)">
                <div class="list_index" :style="stylecolor(index)">
                  {{index+1}}
                 </div>
                 <!-- 主体 -->
                <div class="list_des" :class="{'blod':item.questionImage==null}">
                  <h3> {{item.title}}</h3>
                  <p v-html="item.content"></p>
                  <span>{{item.allAnswerLikeNum}}热度</span>
                </div>
                <!-- 图片 -->
                <div class="list_img" v-if="item.questionImage!=null">
                  <div >
                    <el-image :src="item.questionImage" lazy style="text-align:center"></el-image>
                 </div>
                 </div>
              </div>
  </div>
  </div>
</template>
<script>
  import {getHomepage} from "../../api/data";
  import eventBus from '../../eventBus.js';
  let num=1;
  export default{
    name:"hotlist",
    data(){
      return{
          data:[],
           index:0,
           color:"#ff5500",
           activeName: 'second',
      }
    },
    async created(){
    let result=await getHomepage();
    this.data=result["data"].result; 
    },
    computed:{
      stylecolor(){
        //计算属性只能参数只能通过闭包读取
        return (index)=>{
        if(index>2){
          return {'color':'gray'}
        }
        }
      }
    },
    methods:{
            handleClick(tab, event) {
            if(tab.label=="关注"){
              this.$router.push({
                name:"follow"
              })
            }else if(tab.label=="热榜") {
              this.$router.push({
                name:'hoslist'
              }).catch(err=>{
                alert("已在当前页");
              })
            }
          },
          //点击跳转事件
          toArticledetail(item){
            localStorage.setItem("questionId",item.questionId);
            localStorage.setItem("question",JSON.stringify({
              questionname:item.title,
              desc:item.content
            }));
            eventBus.$emit('sentTitle',item.title);
            this.$router.push({
              name:'questdetail',params:{title:item.questionId}
            })
          }
    },
  }
</script>
<style lang="less" scoped>
  @import '../../../static/less/hoslist.less';
</style>
