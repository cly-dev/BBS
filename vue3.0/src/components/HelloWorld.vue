<template>
	

	<First></First>
	<Second></Second>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  <h1 v-color="'red'">{{message}}</h1>
  <h2>{{couter}}</h2>
  <h3>{{name}}</h3>
  <p ref="desc"></p>
  <comp></comp>
<!--用v-model统一v-bind.sync-->
<Render v-model:counter='models'>
	<!-- 将作用域插槽放统一到 $slot中 v-slot:default='slotInnerData' 访问作用域插槽的值 -->
	<template v-slot:default='slotInnerData'>title{{slotInnerData.text}}</template>
	<template v-slot:content='slotInnerData'>body{{slotInnerData.text}}</template>
</Render>
  <model v-model:modelValue='models'></model>
  
  <!-- 函数化组件 -->
	<Functionnal :level='1' align="center" @click="send">
		我是函数化组件
	</Functionnal>
	<button @click="show=true">点我</button>
	<!-- 异步组件 -->
	<Async v-if="show"></Async>
	<button @click="transitionshow=!transitionshow">出来</button>
	<transition name="fade">
		<div v-show="transitionshow">
			<h1>我是transition</h1>	
		</div>
	</transition>
	
</template>

<script>	
//用setup取代data,computed以及生命周期函数，防止上下横跳
//reactive 设置复杂类型响应数据
//ref:设置可响应似的简单数据
//computed:计算属性
//函数组件
import Second from './Second.vue';
import First from './First.vue';
import Functionnal from "./Functionnal.vue";
import Model from './ModelValue.vue'
import Error from './Error.vue';
import Loading from './Loading.vue'
import {reactive,computed,onMounted,onUnmounted,ref,toRefs,watch,h,defineAsyncComponent} from 'vue';
//异步组件工程化配置函数 vue3.0通过defineAsyncComponent函数对异步组件进行配置
const Async=defineAsyncComponent({
	//导入的目标组件loader: 相当于vue2的component
	loader:()=> import('./Async.vue'),
	//延迟加载delay:
	delay:200,
	//timeout:
	timeout:500,
	errorComponent:Error,
	loadingComponent:Loading
});

export default {
  name: 'HelloWorld',
  setup(){
	const {message,couter,count}=useCounter();
	let name=ref("我叫阿勇");
	//引用dom节点
	const desc=ref(null);
	//监听
	watch(couter,(newV,orderV)=>{
		const p=desc.value;
		p.textContent=`couter change from ${orderV} to ${newV}`;
	})
	
	let models=ref(123);
	function send(){
		console.log("拉拉");
	}
	
	let show=ref(false);

	let transitionshow=ref(false)
	
	return {message,couter,count,name,desc,models,send,show,transitionshow}
  },
  props: {
    msg: String
  },
  components:{
	  Model,
	  First,
	  Second,
	  Functionnal,
	  //异步组件没有配置的情况下
	  // Async:defineAsyncComponent(()=>import('./Async.vue')),
	  // Async:defineAsyncComponent({
		 //  // loader:new Promise((resolve,reject)=>{
			// 	// 	setTimeout(()=>{
			// 	// 		resolve({
			// 	// 			import('./Async.vue')
			// 	// 		})
			// 	// 	},1000)
			// 	// }),
		 //  loader:()=>import ('./Async.vue'),
		 //  timeout:3000,
		 //  delay:2000,
	  // }),
	  Async:Async,
	  Render:{
		  data:()=>{
			  return{
				  msg:'哈哈哈哈哈啊哈',
			  }
		  },
		  props:{
		  		counter:{
		  			type:Number,
		  			default:0
		  		}
		  },
		  methods:{
			 onClick(){
				 console.log("我睡觉哦");
				this.$emit("update:counter",this.counter+1);
			 } 
		  },
		  //渲染函数变化,不用将H作为形参,事件前面加on
		  render() {
		  	return h('div',[
				h('div',{onClick:this.onClick},[
					`我是渲染函数${this.counter}`,
					this.$slots.default({
						text:this.msg
					}),
					this.$slots.content({
						text:this.msg
					})
				])
			])
		  }
	  }
  }
}

function useCounter(){
	const data =reactive({
		message:"我是vue3.0",
		count:1,
		couter:computed(()=>data.count * 2)
	})
	let timer;
	onMounted(()=>{
		 timer=setInterval(()=>{
			data.count++;
		},1000);
	})
	onUnmounted(()=>{
		clearInterval(timers);
	})
	//toRefs(将对象的属性变成单值的ref的形式)
	return toRefs(data);
}
</script>

<style scoped>
	/*vue3.0transition只有3个状态 */
	.fade-enter-active, .fade-leave-active{
		transition:all 0.5s ease;
	}
	.fade-enter-from,.fade-leave-to{
		opacity: 0;
	}
</style>
