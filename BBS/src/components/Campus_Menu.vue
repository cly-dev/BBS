<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">
      <el-tab-pane label="关注" name="first">
        <keep-alive> <router-view></router-view></keep-alive>
      </el-tab-pane>
      <el-tab-pane label="热榜" name="second">
       <keep-alive> <router-view></router-view></keep-alive>
      </el-tab-pane>
      <el-tab-pane label="广场" name="three">
       <keep-alive> <router-view></router-view></keep-alive>
      </el-tab-pane>
    </el-tabs>
    
  </div>
</template>
<script>
  export default{
    name:"hotlist",
    data(){
      return{
           activeName: 'second',
      }
    },
    methods:{
            handleClick(tab, event) {
            if(tab.label=="关注"){
              this.$router.push({
                name:"follow"
              })
            }else if(tab.label=="热榜"){
              this.$router.push({
                name:'hoslist'
              })
            }else{
                this.$router.push({
                  name:'square'
                })
              }
          },
    },
    watch:{
      index:(newV,orderV)=>{
        console.log(newV);
        console.log(orderV);
    }
  },
  }
</script>

<style>
</style>
