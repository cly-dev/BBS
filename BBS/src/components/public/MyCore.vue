<script>
import {ShowFocusByPage,CancelFocus} from '../../api/data';
import TitleHeader from "./TitleHeader";
    export default {
        data(){
            return{
                //列表数据
                list:[],
                //总条数
                total:0
            }
        },
        components:{
            TitleHeader
        },
        render(createElement){
            return(
                //用v-show代替v-if
                //用map代替v-for
                //事件:用原生事件绑定on(事件类型) ()=>--传递参数
                //自定义事件on+自定义事件名
               <section class="core_contianer">
                <header>
                <TitleHeader title="我的关注">
                </TitleHeader>
                </header>
                <main>
                    <section v-show={this.total!=0}>
                    {
                        this.list.map((item,index)=>{
                            return (
                                <section class="core_mainer">
                                 <section class="core_data">
                                    <img src={item.selfImage}> </img>
                                    <span>{item.userName}</span>
                                </section>
                                <section class="core_btn">
                                    <el-button  icon="el-icon-position" size="mini"  onClick={()=>this.handleSearch(item,index)}>访问</el-button>
                                    <el-button type="danger" icon="el-icon-close" size="mini" onClick={()=>this.handleDetele(item,index)}>取关</el-button>
                                </section>
                               </section>
                            )
                            
                        })
                    }
                    <section class="page_container">
                    <el-pagination
                    style="text-align:center;"
                    background
                    on-current-change={this.handleCurrentChange}
                    layout="prev, pager, next"
                    total={this.total}>
                    </el-pagination>
                    </section>
                    </section>
                    <section class="core_null" v-show={this.total==0}>
                        <span>还没有关注的人</span>
                    </section>
                    </main>
               </section>
            )
        },
    methods: {
            //查看详情
            handleSearch(val){
                console.log(val);
                console.log("111");
            },
            //取消关注
            async handleDetele(val,index){
                console.log(val);
                let result=await CancelFocus({
                     userId:val.userId
                })
                if (result["data"].code=="200") {
                    this.message("success","取消成功");
                    this.list.splice(index,1);
                }
            },
            //分页
            async handleCurrentChange(val){
              let result=await ShowFocusByPage(`/${val}/10`);
                this.result=result["data"].result;
            }
        },
        async created(){
            let result=await ShowFocusByPage("1/10");
            console.log(result);
            this.total=result["data"].result.allDataNum;
            this.list=result["data"].result.data;
        },
              
    }
</script>

<style lang="less" scoped>
@import "../../../static/less/public/mycore.less";
</style>