<template>
  <div class="loading_contain">
    <div class="eye"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.loading_contain {
  width: 100px;
  background-color: rgba(255, 255, 255, 1);
  height: 100px;
  vertical-align: middle;
  border-radius: 1px;
  margin: 20px auto;
}
.eye {
  width: 20px;
  height: 20px;
  background-color: rgba(0, 170, 255, 0.8);
  border-radius: 50%;
  box-shadow: 30px 0px 0px 0px rgba(0, 170, 255, 0.8);
  position: relative;
  margin: 36px 26px;
}

.eye:after {
  background-color: #59488b;
  width: 10px;
  height: 10px;
  box-shadow: 30px 0px 0px 0px #59488b;
  border-radius: 50%;
  left: 9px;
  top: 8px;
  position: absolute;
  content: "";
  -webkit-animation: eyeball 2s linear infinite alternate;
  -moz-animation: eyeball 2s linear infinite alternate;
  animation: eyeball 2s linear infinite alternate;
}
@-webkit-keyframes eyeball {
  0% {
    left: 9px;
  }
  100% {
    left: 1px;
  }
}
@-moz-keyframes eyeball {
  0% {
    left: 9px;
  }
  100% {
    left: 1px;
  }
}
@keyframes eyeball {
  0% {
    left: 9px;
  }
  100% {
    left: 1px;
  }
}
</style>
