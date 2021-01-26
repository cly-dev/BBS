<template>
  <div>
  <div style="margin-top:-15px;">
              <div v-for="(item,index) in data" class="campus_list">
                 <router-link :to="{name:'articledetails',query:{title:item.title}}">
                <div class="list_index" :style="stylecolor(index)">
                  {{index+1}}
                 </div>
                <div class="list_des">
                  <h3> <router-link :to="{name:'articledetails',query:{title:item.title}}">{{item.title}}</router-link></h3>
                  <p>{{item.des}}</p>
                  <span>{{item.num}}热度</span>
                </div>
                <div class="list_img">
                  <div v-if="item.imgsrc!=''">
                 <el-image :src="item.imgsrc" lazy></el-image>
                 </div>
                 </div>
                 </router-link>
              </div>
  </div>
  </div>
</template>
<script>
  let num=1;
 let datalist=[
         {title:"333342323",des:"哈哈哈111111111111111111111111111111",imgsrc:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",num:1111},
         {title:"阿勇帅3333333344422222222",des:"哈哈哈",imgsrc:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",num:1111},
         {title:"阿勇帅3333333344422222222",des:"哈哈哈",imgsrc:"",num:1111},
         {title:"阿勇帅3333333344422222222",des:"哈哈哈",imgsrc:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",num:1111},
         {title:"阿勇帅3333333344422222222",des:"哈哈哈",imgsrc:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",num:1111},
         {title:"阿勇帅3333333344422222222",des:"哈哈哈",imgsrc:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",num:1111},
         {title:"333342323",des:"哈哈哈111111111111111111111111111111",imgsrc:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",num:1111},
         {title:"阿勇帅3333333344422222222",des:"哈哈哈",imgsrc:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",num:1111},
         {title:"阿勇帅3333333344422222222",des:"哈哈哈",imgsrc:"",num:1111},
         {title:"阿勇帅3333333344422222222",des:"哈哈哈",imgsrc:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",num:1111},
         {title:"阿勇帅3333333344422222222",des:"哈哈哈",imgsrc:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",num:1111},
         {title:"阿勇帅3333333344422222222",des:"哈哈哈",imgsrc:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",num:1111},
         {title:"333342323",des:"哈哈哈111111111111111111111111111111",imgsrc:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",num:1111},
         {title:"阿勇帅3333333344422222222",des:"哈哈哈",imgsrc:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",num:1111},
         {title:"阿勇帅3333333344422222222",des:"哈哈哈",imgsrc:"",num:1111},
         {title:"阿勇帅3333333344422222222",des:"哈哈哈",imgsrc:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",num:1111},

           ];
  export default{
    name:"hotlist",
    data(){
      return{
          data:[],
           index:0,
           color:"#ff5500",
           activeName: 'second',
      }
    },
    created() {
      const p=new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve(datalist)
        },1000)
      })
      p.then(res=>{
        this.data=res;
      })
    },
    computed:{
      stylecolor(){
        //计算属性只能参数只能通过闭包读取
        return (index)=>{
        if(index>2){
          return {'color':'gray'}
        }
        }
      }
    },
    methods:{
            handleClick(tab, event) {
            if(tab.label=="关注"){
              this.$router.push({
                name:"follow"
              })
            }else if(tab.label=="热榜") {
              this.$router.push({
                name:'hoslist'
              }).catch(err=>{
                alert("已在当前页");
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

<style lang="less" scoped>
  @import '../../static/less/hoslist.less';
</style>
