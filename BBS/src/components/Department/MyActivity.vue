<template>
    <div class="MyActivity_container">
        <div class="nav_icon">
            <div>
            <router-link to="/department/take-activity">
                <span class="iconfont icon-huodong"></span>
                <br/>
                <span>我参加的</span>
            </router-link>

            </div>
            <div>
            <router-link to="/department/release-activity">
                <span class="iconfont icon-chuangjianhuodong"></span>
                <br/>
                <span>我发布的</span>
            </router-link>

            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
@import "../../../static/less/deportment/myactivity.less";
</style>