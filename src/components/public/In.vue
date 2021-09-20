<template>
  <div
    style="background: #42B983; width: 100%;
    border: 1px solid red;
    height: 1000px;"
  >
    <h1>啦啦啦啦</h1>
    Scroll down to see the bottom-right button.
    <el-backtop :bottom="0"></el-backtop>
  </div>
</template>

<script>
export default {
  name: "loginless"
};
</script>

<style>
.login {
  width: 100%;
  border: 1px solid red;
  height: 1000px;
}
.page-component__scroll {
  height: 100vh;
  overflow-x: hidden;
}
</style>
