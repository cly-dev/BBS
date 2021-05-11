<script>
import {ShowFansByPage, FocusOther} from '../../api/data';
    export default {
        data(){
            return{
                //记录数据
                list:[ ],
                //条数
                total:0
            }
        },
        render(createElement){
            return(
                //用v-show代替v-if
                //用map代替v-for
                //事件:用原生事件绑定on(事件类型) ()=>--传递参数
               <section class="core_contianer">
                    <section v-show={this.total!=0}>
                    {
                        this.list.map((item,index)=>{
                            return (
                                <section class="core_mainer">
                                 <section class="core_data">
                                    <img src={item.img}> </img>
                                    <span>{item.name}</span>
                                </section>
                                <section class="core_btn">
                                    <el-button  icon="el-icon-position" size="mini"  onClick={()=>this.handleSearch(item,index)}>访问</el-button>
                                    <el-button type="primary" icon="el-icon-star-on" size="mini" onClick={()=>this.handleFollow(item,index)}>关注ta</el-button>
                                </section>
                               </section>
                            )
                            
                        })
                    }
                      <section class="page_container">
                       <section class="page_mainer">
                    <el-pagination
                    background
                    on-current-change={this.handleCurrentChange}
                    layout="prev, pager, next"
                    total={this.total}>
                    </el-pagination>
                    </section>
                    </section>
                    </section>
                    <section class="core_null" v-show={this.total==0}>
                        <span>暂时还没有粉丝</span>
                    </section>
                    
               </section>
            )
        },
    methods: {
            //查看详情
            handleSearch(val){
                console.log(val);
                console.log("111");
            },
            //关注某人
            async handleFollow(val,index){
                console.log(val);
                let result=await  FocusOther({
                     userId:value.userId
                })
                if (result["data"].code=="200") {
                    this.message("success","关注成功");
                }else{
                    this.message("warning",result["data"].result);
                }
            },
            //分页
            async handleCurrentChange(val){
               let result=await ShowFansByPage(`/${val}/10`)
                this.list=result["data"].result.data;
            }
        },
        async created(){
          let result=await ShowFansByPage("/1/10");
               console.log(result);
            this.list=result["data"].result.data;
            this.total=result["data"].result.allDataNum;
        },
              
    }
</script>

<style lang="less" scoped>
@import "../../../static/less/public/mycore.less";
</style>