<template>
  <div class="list_main">
    <div class="title">
      <i class="el-icon-s-shop"></i>
      <span>玩转跳蚤</span>
    </div>
    <div class="list">
    <div class="waterfull">
      <div class="item" v-for="item in data">
          <el-image :src="item.img">
            <div slot="placeholder" class="image-slot">
              加载中<span class="dot">...</span>
            </div>
          </el-image>
          <div class="list_describe">
            <span class="shop_name">{{item.user}}2132112312</span>
             <span class="shop_der">{{item.liked}}123123123122112312</span>
            <i class="el-icon-view">{{item.num}}</i>
          </div>
        </div>
    </div>
    </div>
    <div class="lunbo">
      <div class="active_ranking">
        <div class="active_title">
          今日活跃排行
        </div>
             <div class="rank unite">
               <ul>
                  <li v-for="(item,index) in ranklist">
                    <p>{{index+1}}</p>
                      <img :src="item.img" alt="网络错误" class="use_portrait">
                    <span class="use_name">{{item.name}}</span>
                     <i v-if="index==0" class="el-icon-medal-1"></i>
                       <i v-if="index==1" class="el-icon-medal"></i>
                       <i v-if="index==2" class="el-icon-medal"></i>
                  </li>
               </ul>
             </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name:"list",
      data:()=>{
    	        return{
    	            col:4,
                  activeName: 'second',
    	        }
    	    },
    	    props:{
              data:{
                type:Array
              },
               ranklist:{
                 type:Array
               }
    	    },
    	    methods:{
                scroll(scrollData){
                    console.log(scrollData)
                },
    	        switchCol(col){
    	            this.col = col
    	            console.log(this.col)
    	      },
    	      loadmore(index){
    	            this.data = this.data.concat(this.data)
    	      },
              handleClick(tab, event) {
                    console.log(tab, event);
                  }
    	    }

  }
</script>
<style lang="less">
@import "../../static/less/list.less";
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
