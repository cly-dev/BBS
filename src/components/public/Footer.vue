<template>
    <!--主体-->
    <div class="Footer_container" :style="{background:Backcolor}">
        <!-- 关于我们 -->
        <section class="about"  >
            <ul>
                <li>关于我们</li>
                <li>招贤纳士</li>
                <li>联系我们</li>
                <li>
                    <span class="iconfont icon-icon-mail"></span>
                    <a href="mailto:2663118046@qq.com" target="_blank">
                        {{email}}
                    </a>
                </li>
                <li>友情链接:
                    <a>jQuery</a>
                    <a>Vue.js</a>
                    <a>ElementUI</a>
                </li>
                <li></li>
            </ul>
        </section>
        <!-- 版权备案信息 -->
        <section class="copyright">
            <span>权归所有:国之重才团队&copy;</span>
        </section>
    </div>
</template>

<script>
    export default {
        props:{
            email:{
                type:String,
                default:"222"
            },
            Backcolor:{
                type:String,
                default:'white'
            },
            color:{
                type:String,
                default:'#606266'
            }
        },
        mounted(){
            $(".about li,.about a,.about span").css("color",this.color);
        }
    }
</script>

<style lang="less" scoped>
    .Footer_container{
        line-height: 100px;
        font-size: 20px;
        position:fixed;
        width:2000px;
        bottom:0;
        left: 50%;
        margin-left: -1000px;
        height:100px;
        background-color: white;
    }
    .about{
        height: 50px;
        width: 60%;
        margin:  0 auto;
        text-align: center;
        max-width: 600px;
    }
    .copyright{
        height: 30px;
        line-height:30px;
        span{
            text-indent: 100px;
            width: 50%;
            display:block;
            margin: 0 auto;
        }
    }
    .about{
        cursor: pointer;
        ul{
            width:100%;
            text-align: center;
            height:50px;
            white-space: nowrap;
        }
        li{
            text-align: center;
            line-height: 50px;
            min-width:80px;
            float: left;
            height:50px;
            color: #909399;
            font-size: 16px;
            a{
                color: #909399;
                &:hover{
                    color: #409EFF;
                }
            }
        .icon-icon-mail{
            color: #909399;
        }
        }
    }
   

</style>