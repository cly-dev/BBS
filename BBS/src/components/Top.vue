<template>
  <div class="top">
    <div class="top_container">
    <div class="top_title">
      <span>{{name}}排行榜</span>
      <span>{{modification}}</span>
    </div>
    <div class="top_cenent">
        <ol>
          <li v-for="(item,index) in list">
              <div class="top_information">
                  <div :style="color(index)">
                    <span>{{index+1}}</span>
                  </div>
                  <div>
                    <img :src="item.imgsrc" alt=""/>
                   </div>
                  <div>
                    <span>{{item.name}}</span>
                    <span>活跃度:{{item.active}}</span>
                  </div>
              </div>
          </li>
        </ol>
    </div>
  </div>
  </div>
</template>

<script>
  export default{
    inheritAttrs: false,
    name:'top',
    data:function(){
    return{

    }
  },
  computed:{
    color(){
      return (index)=>{
        if(index==0){
          return {color:"#FA5055"};
        }else if(index==1){
          return {color:"#FF7130"};
        }else if(index==2){
          return {color:"#FFB425"};
        }
      }
    }
  },
  methods:{

  },
  mounted(){
    console.log(this.$attrs);
  },
  watch:{
     departmentlist:(newV,orderV)=>{
       console.log(newV);
     }
  },
  props:{
    name:{
      type:String,
      require:false
    },
      modification:{
        type:String,
        require:false
      },
      list:{
        type:Array,
        require:false
      },

  }
  }
</script>

<style lang="less" scoped="scoped">
  @import "../../static/less/top.less";
</style>
