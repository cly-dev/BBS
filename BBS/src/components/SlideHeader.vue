<template>
  <div class="slideHeader">
      <div class="slideHeader_header">
          <ul>
            <li>logo</li>
            <li @click="to_hotlist">热榜</li>
            <li @click="to_follow">关注</li>
            <li>广场</li>
          </ul>
      </div>
  </div>
</template>

<script>
  export default{
    name:'slideHeader',
    data(){
      return{

      }
    },
    methods:{
        to_hotlist(){
          this.$router.push({
            name:"hostlist"
          })
        },
        to_follow(){
          this.$router.push({
            name:"follow"
          })
        }
    },
    mounted() {

    },
    created() {

    }
  }
</script>

<style lang="less">
  @import '../../static/less/slideheader.less';
</style>
