<script>
export default {
  data() {
    return {};
  },
  render(createElement) {
    return (
      <section class="NotFount_container">
        <section class="mainer">
          <span class="iconfont icon-404"></span>
          <p>
            404,抱歉你要找的网页不存在,你可以
            <router-link to="/index">去首页</router-link>
          </p>
        </section>
      </section>
    );
  }
};
</script>

<style lang="less" scoped>
.NotFount_container {
  width: 100%;
  height: 100%;
  background: white;
  position: relative;
  .mainer {
    border-radius: 10px;
    line-height: 50px;
    text-align: center;
    top: 50%;
    left: 50%;
    position: absolute;
    width: 50vw;
    height: 50vh;
    transform: translate(-50%, -50%);
    .icon-404 {
      font-size: 150px;
      color: #f56c6c;
    }
    p {
      font-size: 25px;
      color: #909399;
      font-style: italic;
      a {
        color: #409eff;
        cursor: pointer;
      }
    }

    span {
      display: inline-block;
      font-size: 28px;
    }
  }
}
</style>
