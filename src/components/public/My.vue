<template>
  <div style="height：100%">
    <header>
      <transition
        enter-active-class="animated fadeInDown"
        :duration="{ enter: 1000, leadve: 1000 }"
      >
        <component :is="header"></component>
      </transition>
    </header>

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: "NavHeader"
    };
  },
  methods: {},
  components: {
    NavHeader: () => import("../public/IndexHeader"),
    MyHeader: () => import("../public/NavHeader")
  },
  mounted() {
    let start = 0;

    $(document).on("scroll", () => {
      //防抖
      let end = new Date().getTime();
      if (end - start >= 1000) {
        start = end;
        if ($(document).scrollTop() >= 200) {
          this.header = "MyHeader";
        } else {
          this.header = "NavHeader";
        }
      }
    });
  },
  created() {}
};
</script>

<style lang="less" scoped>
@import "../../../static/less/public/my.less";
</style>
