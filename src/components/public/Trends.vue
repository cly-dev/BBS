<template>
  <div class="Trends_container">
    <header>
      <TitleHeader
        :title="
          $route.path === '/people/other/trends' ? 'ta的动态' : '我的动态'
        "
      >
        <span slot="right">显示最近10条动态</span>
      </TitleHeader>
    </header>
    <main>
      <section class="Trends_mainer" v-if="TrendsData.length != 0">
        <section class="Trends_tips">
          <span>发布了文章</span>
          <span>2021/04/20</span>
        </section>
        <article>我是阿勇</article>
      </section>
      <section class="Trends_null" v-else>
        <span>
          暂无动态
        </span>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      TrendsData: []
    };
  },
  components: {
    TitleHeader: () => import("../public/TitleHeader")
  },
  created() {
    console.log(this.$route.path);
  }
};
</script>

<style lang="less" scoped>
@import "../../../static/less/public/trends.less";
</style>
