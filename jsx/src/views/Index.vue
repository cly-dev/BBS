<template>
	<div>
		<h1>我是主页</h1>
		<h1 @click="clicks">{{name}}</h1>
		<Jsx :lever="label"></Jsx>
			<button type="button" @click="getshow">我是异步组件</button>
		<div v-if="show">
			<Async></Async>
		</div>
		<First @send='send'></First>
		<Second :message="msg"></Second>
		<h1>我是来自子组件{{msg}}</h1>
		<slide-verify 
    ref="slideblock"
    @again="onAgain"
    @fulfilled="onFulfilled"
    @success="onSuccess"
    @fail="onFail"
    @refresh="onRefresh"
    :accuracy="accuracy"
    :slider-text="text"
></slide-verify>
<div>{{msg}}</div>

<button @click="handleClick">在父组件可以点我刷新哦</button>
	</div>
</template>

<script>
	import Second from '../components/Second.vue';
	import First from '../components/First.vue';
	import Loading from '../components/Loading.vue';
	import Error from '../components/Error.vue';
	//异步函数工程化配置函数
	const Async=()=>({
		//加载的目标组件component:
		component:import('../components/Async.vue'),
		//等待时加载的组件loading:
		loading:Loading,
		//错误时加载的组件error:
		error:Error,
		//设置超时时间timeout:
		timeout:5,
		//延迟加载的时间delay
		delay:4000
	});
	
	import Jsx from "../components/Jsx.vue";
	import min from "../../minxins.js";
	export default{
		mixins:[min],
		provide:{
			title:"lalala"
		},
		data(){
			return {
				 msg: '',
            text: '向右滑',
            accuracy: 1,
				show:false,
				label:'ul',
				msg:''
			}
		},
		methods:{
		getshow(){
			this.show=true;
		},
		send(value){
				console.log(value);
				this.msg=value;
		},
		onSuccess(times){
            this.msg = `login success, 耗时${(times / 1000).toFixed(1)}s`
        },
        onFail(){
            console.log('验证不通过');
            this.msg = ''
        },
        onRefresh(){
            console.log('点击了刷新小图标');
            this.msg = ''
        },
        onFulfilled() {
            console.log('刷新成功啦！');
        },
        onAgain() {
            console.log('检测到非人为操作的哦！');
            this.msg = 'try again';
            // 刷新
            this.$refs.slideblock.reset();
        },
        handleClick() {
        	// 父组件直接可以调用刷新方法
            this.$refs.slideblock.reset();
        },
		},
		created(){
			this.$my();
		},
		components:{
			Jsx,
			Loading,
			Error,
			//异步组件,需要时通过ajax请求
			Async,
			First,
			Second,
		}
	}
</script>

<style>
</style>
