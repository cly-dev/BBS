<script>
export default {
  data() {
    return {
      data: []
    };
  },
  methods: {
    handleClick(userId) {
      console.log(userId);
    }
  },
  render(createElement) {
    return (
      <section class="Boldlist_container">
        <section class="item_container">
          <section class="item_title">我是标题</section>
          <section class="item_info">
            <img
              src="../../../static/images/department.png"
              class="item_auctor"
            />
            <article class="item_content">
              lalaaaaallalalalalaaaaallalalalalaaaaallalalalalaaaaallalalalalaaaaallalalalalaaaaallalalalalaaaaallalalalalaaaaallalalalalaaaaallalalalalaaaaal
              lalaaaaallalalalalaaaaallalalalalaaaaallalalalalaaaaallalalalalaaaaallalalalalaaaaallalalalalaaaaallalalalalaaaaallalalalalaaaaallalalalalaaaaal
              lalalaaaaallalalalalaaaaallalalalalaaaaallalalalalaaaaallalalalalaaaaallalalalalaaaaallalalalalaaaaallalalalalaaaaallalalalalaaaaallalalalalaaaaal
            </article>
          </section>
          <section class="item_user">
            <span onClick={() => this.handleClick("userId")}>
              <a href="javascript:;">我是阿勇</a>
            </span>
            <span>20210523213000</span>
            <span>2</span>
            <span>20</span>
          </section>
        </section>
      </section>
    );
  }
};
</script>
<style lang="less" scoped>
@import "../../../static/less/bbs/blodlist.less";
</style>
