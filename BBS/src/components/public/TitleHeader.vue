<template>
  <div class="Header">
    <span>{{title}}</span>
    <slot name="right"></slot>
  </div>
</template>

<script>
  export default{
    
    props:{
      title:{
        type:String,
        require:true
      }
    }
  }
</script>

<style lang="less" scoped>
.Header{
      height: 50px;
    border-bottom: 1px solid #F2F6FC;
    span{
        font-size: 16px;
        line-height: 50px;
        &:first-of-type{
            font-weight:550;
        }
    }
}
</style>
