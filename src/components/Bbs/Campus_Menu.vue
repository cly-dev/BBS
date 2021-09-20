<template>
  <div class="menu_container">
    <div class="menu_nav">
      <ul>
        <router-link to="/campus/follow">
          <li :class="{ actives: this.$route.name === 'follow' }">关注</li>
        </router-link>
        <router-link to="/campus/hotlist">
          <li :class="{ actives: this.$route.name === 'hotlist' }">热榜</li>
        </router-link>
        <router-link to="/campus/square">
          <li :class="{ actives: this.$route.name === 'square' }">广场</li>
        </router-link>
        <router-link to="/campus/blodlist">
          <li :class="{ actives: this.$route.name === 'blodlist' }">博客园</li>
        </router-link>
        <router-link to="/campus/list">
          <li :class="{ actives: this.$route.name === 'blodli' }">资料库</li>
        </router-link>
      </ul>
    </div>
    <keep-alive><router-view></router-view></keep-alive>
  </div>
</template>
<script>
export default {
  name: "hotlist",
  data() {
    return {
      activeName: "hoslist"
    };
  },
  methods: {},
  created() {
    this.$nextTick(() => {
      this.activeName = this.$route.name;
    });
  },
  mounted() {
    $(".menu_nav li").on("click", e => {
      $(".menu_nav li").css("color", "");
      e.target.style.color = "#409EFF";
    });
  }
};
</script>

<style lang="less">
@import "../../../static/less/campusmune.less";
.actives {
  color: #409eff !important;
}
</style>
