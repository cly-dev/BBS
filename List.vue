<template>
  <div>
    <waterfall :col='col' :width="itemWidth" :gutterWidth="gutterWidth"  :data="data"  @loadmore="loadmore"  @scroll="scroll"  >
      <template >
        <div class="item" v-for="(item,index) in data">
          <img v-if="item.img" :src="item.img" alt="加载错误"  />
          <div class="item-body">
              <div class="item-desc">{{item.title}}</div>
              <div class="item-footer">
                  <div class="avatar" :style="{backgroundImage : `url(${item.avatar})` }"></div>
                  <div class="name">{{item.user}}</div>
                  <div class="like" :class="item.liked?'active':''" >
                      <i ></i>
                      <div class="like-total">{{item.liked}}</div>
                  </div>
              </div>
          </div>
        </div>
      </template>
    </waterfall>

  </div>
</template>


<script>
  export default{
    name:"list",
      data(){
    	        return{
    	            data:[
                    {img:"../../static/images/bridge.jpg",user:"瀑布流",liked:"www"},
                    {img:"../../static/images/bridge.jpg",user:"瀑布流",liked:"www"},
                    {img:"../../static/images/bridge.jpg",user:"瀑布流",liked:"www"},
                    {img:"../../static/images/bridge.jpg",user:"瀑布流",liked:"www"},
                    {img:"../../static/images/bridge.jpg",user:"瀑布流",liked:"www"},
                    {img:"../../static/images/bridge.jpg",user:"瀑布流",liked:"www"},
                    {img:"../../static/images/bridge.jpg",user:"瀑布流",liked:"www"},
                    {img:"../../static/images/bridge.jpg",user:"瀑布流",liked:"www"},
                    {img:"../../static/images/bridge.jpg",user:"瀑布流",liked:"www"}
                    ],
    	            col:5,
    	        }
    	    },
    	    computed:{
    	      itemWidth(){
    	            return (138*0.5*(document.documentElement.clientWidth/375)) //rem布局 计算宽度
    	      },
    	      gutterWidth(){
    	            return (9*0.5*(document.documentElement.clientWidth/375))	//rem布局 计算x轴方向margin(y轴方向的margin自定义在css中即可)
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
    	      }
    	    }
  }
</script>
<style lang="less">
@import "../../static/less/list.less";
</style>
