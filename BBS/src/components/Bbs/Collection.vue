<template>
    <div class="collection_container">
        <!-- 头部 -->
        <div class="collection_header">
                <span>我的收藏</span>
        </div>
        <!--主体  -->
        <div class="collection_mainer">
            <div>
        <router-link to="/campus/collection-article">

                <img src="../../../static/images/campus/collection/collection_article.png" alt="请检查网络" title="收藏的文章">
              <span>收藏的文章</span>
        </router-link>

            </div>

            <div>
         <router-link to="/campus/collection-question">

                <img src="../../../static/images/campus/collection/collection_question.png" alt="请检查网络" title="收藏的问题">
              <span>收藏的问题</span>
        </router-link>

            </div>

        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
@import "../../../static/less/bbs/collection.less";
</style>