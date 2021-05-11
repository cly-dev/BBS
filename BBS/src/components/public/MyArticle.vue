<script>
import {ShowAllArticleByPage} from "../../api/data";
import TitleHeader from "./TitleHeader";
    export default {
        data(){
            return{
                //文章信息
                ArticleData:[]
            }
        },
        methods: {
            //跳转文章详情页
            ToArticledetail(val){
                this.$router.push({
                name:'articledetails',
                parmas:{articleId:val.articleId}
                })
                localStorage.setItem("articleId",val.articleId);
            }
        },
        created(){
            console.log(this.$GetUserId());
            ShowAllArticle(`${this.$GetUserId()}/1/10`).then(res=>{
              this.ArticleData=res["data"].result.data;
            })
        },
         components:{
            // TitleHeader:()=>import("../public/TitleHeader")
            TitleHeader
        },
        render(createElement){
            return(
                <section>
                    <header>
                        <TitleHeader title="我的文章">
                            <span slot="right">显示最近10篇文章</span>
                        </TitleHeader>
                    </header>

                    <main>
                        <section class="info_container" v-show={this.ArticleData.length!=0}>
                        {
                            this.ArticleData.map(item=>{
                                return(
                                <section class="article_info">
                                <span onClick={()=>this.ToArticledetail(item)}>
                                <a href="javascript:;">
                                    {item.title}
                                </a>
                                </span>
                                <span>
                                    {item.createTime} {item.commentNum}条评论 {item.likeNum}条点赞
                                </span>
                            </section>
                                )
                            })
                        }
                           
                        </section>
                        <section class="article_null" v-show={this.ArticleData.length==0}>
                            <span>
                                暂无文章
                                <router-link to="/campus/article">去创作</router-link>
                            </span>
                        </section>
                    </main>
                </section>
            )
        }
    }
    //获取所有提问
 async function ShowAllArticle(userId){
     let result=await ShowAllArticleByPage(userId);
     return result;
 }
</script>

<style lang="less" scoped>
@import "../../../static/less/public/myarticle.less";
</style>