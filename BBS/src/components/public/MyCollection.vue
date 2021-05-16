<script>
let DataNull={
    template:`
    <section class='data_null' v-if="ShowFlay">
        <span>暂无数据哦</span>
    </section>
   `,
    computed:{
        ShowFlay(){
            if(this.length==0){
                return true;
            }else{
                return false;
            }
        }
   },
    props:{
        length:{
            type:Number,
        }
    }
}
import {CollectionQuestion,CollectionArticle,CollectionAnswer} from "../../api/data";
import EyeLoading from "../Bbs/Eyeloading";
    export default {
        data(){
            return{
                //loading加载
                isLoading:true,
                //记录当前页面
                index:1,
                //页码
                page:1,
                //条数
                total:0,
                //收藏问题数据
                collectionQuestion:[],
                QuestionTotal:0,
                //收藏文章数据
                collectionArticle:[],
                ArticleTotal:0,
                //收藏答案数据
                collectionAnswer:[],
                AnswerTotal:0,
            }
        },
        methods:{
            //事件委托
            async handleClick(e){
                if (e.target.nodeName=="LI") {
                        let data="";
                        let index=e.target.attributes["index"].value;
                        this.index=index;
                         $(".CollectionQuesition_container,.CollectionArticle_container,.CollectionAnswer_container").hide();
                     if (index==1) {
                         this.total=this.QuestionTotal;
                         $(".CollectionQuesition_container").show();
                     }else if (index==2) {
                           if (this.collectionArticle.length==0) {
                            data=await CollectionArticle(`${this.$GetUserId()}/1/8`);
                            this.ArticleTotal=data["data"].result.allDataNum;
                            this.collectionArticle=data["data"].result.data;
                         }
                         this.total=this.ArticleTotal;
                         $(".CollectionArticle_container").show();
                     }else{
                          if (this.collectionAnswer.length==0) {
                             data=await CollectionAnswer(`${this.$GetUserId()}/1/8`);
                            this.AnswerTotal=data["data"].result.allDataNum;
                            this.collectionAnswer=data["data"].result.data;
                         }
                         this.total=this.AnswerTotal;
                         $(".CollectionAnswer_container").show()
                     }
                     $(".nav_menu li").removeClass("activer");
                     e.target.classList.add("activer");
                }
            },
            //切换页码
            async handleCurrentChange(val){
                let result="";
                if (this.index==1) {
                    result=await CollectionQuestion(`${this.$GetUserId()}/${val}/8`);
                    this.collectionQuestion=result["data"].result.data;
                }else if(this.index==2) {
                    result=await CollectionArticle(`${this.$GetUserId()}/${val}/8`);
                    this.collectionArticle=result["data"].result.data;
                }else{
                    result=await CollectionAnswer(`${this.$GetUserId()}/${val}/8`);
                    this.collectionAnswer=result["data"].result.data; 
                }
            }
        },
        async created(){
        let result=await CollectionQuestion(`${this.$GetUserId()}/1/8`);
        this.collectionQuestion=result["data"].result.data;
        this.QuestionTotal=result["data"].result.allDataNum;
        this.total=result["data"].result.allDataNum;
        this.isLoading=false;
        },
        render(createElement){
            return(
                <section>
                        <header>
                            <nav>
                               <ul onClick={this.handleClick} class="nav_menu ">
                                <li index='1' class="activer">收藏的问题</li>
                                <li index='2'>收藏的文章</li>
                                <li index='3'>收藏的答案</li>
                               </ul>
                            </nav>
                        </header>
                        <EyeLoading v-show={this.isLoading}></EyeLoading>
                        <main>
                         <DataNull length={this.total}></DataNull>
                            <section class="CollectionQuesition_container" v-show={this.QuestionTotal!=0}>
                                {
                                    this.collectionQuestion.map(item=>{
                                        return(
                                            <section class="item_data">
                                                <span class="item_title">{item.title}</span>
                                                <span class="item_time">发布时间:{item.createTime}</span>
                                            </section>
                                        )
                                    })
                                }
                            </section>

                            <section class="CollectionArticle_container" v-show={this.AnswerTotal!=0}>
                                {
                                    this.collectionArticle.map(item=>{
                                        return(
                                            <section class="item_data">
                                                <span class="item_title">{item.title}</span>
                                                <span class="item_time">发布时间:{item.createTime}</span>
                                                <span>点赞数:{item.likeNum}</span>
                                                <span>评论数:{item.commentNum}</span>
                                            </section>
                                        )
                                    })
                                }
                            </section>

                            <section class="CollectionAnswer_container">
                              {
                                    this.collectionAnswer.map(item=>{
                                        return(
                                            <el-collapse>
                                             <el-collapse-item>
                                             <template slot="title">
                                            <section class="Answer_data" >
                                            <span class="item_title">{item.questionTitle}</span>
                                             <span class="item_time">回答时间:{item.createTime}</span>
                                                <span>点赞数:{item.likeNum}</span>
                                                <span>评论数:{item.commentNum}</span>
                                            </section>
                                            </template>
                                            <section class="content_contain">
                                            <span>回答内容:</span> 
                                                <section domPropsInnerHTML={item.content} class="content_mainer">
                                                </section>
                                            </section>
                                            </el-collapse-item>
                                            </el-collapse>
                                        )
                                    })
                                }

                            </section>
                              <section class="block">
                            <el-pagination
                            style="text-align:center"
                            on-current-change={this.handleCurrentChange}
                            on={{['update:current-page']:this.page}}
                            page-size={8}
                            layout="total, prev, pager, next"
                            total={this.total}>
                            </el-pagination>
                         </section>
                        </main>
                </section>
            )
        },
        components:{
            EyeLoading,
            DataNull
        }
    }
</script>



<style lang="less" scoped>
    @import "../../../static/less/public/mycollection.less";
</style>