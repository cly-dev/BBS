<template>
  <div class="slideHeader">
      <div class="slideHeader_header">
          <ul>
            <li>logo</li>
             <li @click="to_follow" :class="{actives:this.$route.name==='follow'}">关注</li>
            <li @click="to_hotlist" :class="{actives:this.$route.name==='hotlist'}">热榜 </li>
            <li @click="to_square"  :class="{actives:this.$route.name==='square'}">广场</li>
          </ul>
      </div>
  </div>
</template>

<script>
  export default{
    name:'slideHeader',
    inject: ['reload'],
    data(){
      return{

      }
    },
    methods:{
        to_hotlist(){
          localStorage.setItem("campusmenu","second");
          this.reload();
          this.$router.push({
            name:"hotlist"
          })
        },
        to_follow(){
            localStorage.setItem("campusmenu","first");
            this.reload();
          this.$router.push({
            name:"follow"
          })

        },
        to_square(){
          localStorage.setItem("campusmenu","three");
          this.reload();
          this.$router.push({
            name:"square"
          })
        }

    },
    computed:{
 
    },

    mounted() {
  
    },
    created() {

    }
  }
</script>

<style lang="less">
  @import '../../../static/less/slideheader.less';
</style>
