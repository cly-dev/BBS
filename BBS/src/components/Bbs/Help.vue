<script>
    export default {
        data(){
            return{

            }
        },
        render(createElement){
            return(
                <section>
                   <section class="Help_header">
                        <span>帮助中心</span>
                   </section>
                   <section class="Help_mainer">
                        <article>
                        抱歉,我们暂未开通网上自助本台,使用期中出现任何问题请联系管理员咨询解决,感谢您的使用
                        </article>
                        <section class="contact">
                        <section class="contact_qq">
                             <span class="iconfont icon-qq"></span>
                             <span>222222222</span>
                        </section>
                        <section class="contact_weixin">
                            <span class="iconfont icon-weixin "></span>
                            <span>222222222</span>
                        </section>
                        </section>
                   </section>
                </section>
            )
        }
    }
</script>

<style lang="less" scoped>
@import "../../../static/less/bbs/help.less";
</style>