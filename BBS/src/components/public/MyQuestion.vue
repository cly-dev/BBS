<script>
import TitleHeader from '../public/TitleHeader';
import {ShowAllQuestionByPage} from '../../api/data';
    export default {
        data(){
            return{
                QuestionData:[]
            }
        },
        methods:{
            //跳转到问题详情页
            ToQuestiondetail(val){
                this.$router.push({
                    name:'questdetail',
                    params:{
                        title:val.questionId
                    }
                })
                localStorage.setItem("questionId",val.questionId);
            }
        },
        components:{
            TitleHeader
        },
        render(createElement){
            return(
                <section>
                    <header>
                        <TitleHeader title="我的问题">
                            <span slot="right">只显示最近的10条问题</span>
                        </TitleHeader>
                    </header>
                    <main>
                        <section class="info_container" v-show={this.QuestionData.length!=0}> 
                        {
                            this.QuestionData.map(item=>{
                                return (
                                       <section class="question_info">
                                        <span onClick={()=>this.ToQuestiondetail(item)}>
                                        <a href="javcscript:;">
                                             {item.title}
                                        </a>
                                </span>
                                <span>{item.createTime} {item.allAnswerLikeNum}人收藏</span>
                            </section>
                                )
                            })
                        }
                                            
                        </section>
                        <section class="question_null" v-show={this.QuestionData.length==0}>
                            <span>暂无提问 <router-link to="/campus/questions">去提问</router-link></span>
                        </section>
                    </main>
                </section>
            )
        },
        created(){
            ShowAllQuestion(this.$GetUserId()).then(res=>{
               this.QuestionData=res["data"].result.data;
            })
        }
        
    }
    async function ShowAllQuestion(userId){
        let result=await ShowAllQuestionByPage(`${userId}/1/10`);
        return result;
    }
</script>

<style lang="less" scoped>
@import "../../../static/less/public/myarticle.less";

</style>