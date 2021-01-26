<template>
	<div id="shape-shifter">
		<canvas class="canvas"></canvas>
    <transition
     enter-active-class="animated fadeIn"
    >
    <div class="loginform" v-show="show">
         <h1>logo+名字</h1>
         <div class="myform">
           <form>
              <div class="login_name">
                  <input type="text">
              </div>
              <div class="login_name">
                <input type="text">
              </div>
              <div class="login_psd">
                <input type="password">
              </div>
              <div class="login_psd">
                <input type="password">
              </div>
              <div class="login_psd">
                 <el-button type="primary">登录</el-button>
              </div>
           </form>
         </div>
    </div>
    </transition>
	</div>
</template>
<script>
	import ShapeShifter from "../../static/js/shape-shifter.js";
	export default {
		name: 'login',
    data(){
      return {
        show:false,
        content: "解惑|求真|娱乐|做实事我们是认真的|",
        width:1500,
        height:1000,
        fontSize:180,
        time:2000
      }
    },

		// props: {
		// 	content: {
		// 		type: String,
		// 		default: 'hello shape-shifter'
		// 	},
		// 	width: {
  //               type: Number,
  //               default: 1000
  //           },
  //           height: {
  //               type: Number,
  //               default: 600
  //           },
  //           fontSize: {
  //               type: Number,
  //               default: 200
  //           },
  //           time: {
  //               type: Number,
  //               default: 2000
  //           }
		// },
		mounted () {
            ShapeShifter(this.content, this.width, this.height, this.fontSize, this.time);
            setTimeout(()=>{this.show=true},8500);
        }
	}
</script>

<style lang="less" scoped="scoped">
  @import '../../static/less/login.less';
    * {
        padding: 0;
        margin: 0;
    }
    html,body{
    height:100%
    }
    #shape-shifter {
        position:relative;
        width:100%;
        height:100%;
        box-sizing:border-box;
        text-align: center;
        line-height: 100%;
        background-color: #69b4ca;
        /*background: -webkit-linear-gradient(top, rgb(203, 235, 219) 0%, rgb(55, 148, 192) 120%);
        background: -moz-linear-gradient(top, rgb(203, 235, 219) 0%, rgb(55, 148, 192) 120%);
        background: -o-linear-gradient(top, rgb(203, 235, 219) 0%, rgb(55, 148, 192) 120%);
        background: -ms-linear-gradient(top, rgb(203, 235, 219) 0%, rgb(55, 148, 192) 120%);
        background: linear-gradient(top, rgb(203, 235, 219) 0%, rgb(55, 148, 192) 120%);*/
    }
</style>
