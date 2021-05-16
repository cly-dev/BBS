import { createApp,createRenderer,h } from 'vue'
import App from './App.vue'
import './index.css'
import mixins from "./fun.js"
import router from './router/index.js';
import about from './components/about.vue';
//vue 2.0采用实例化vue,通过vue全局对象来使用全局aqi,vue 3.0通过createApp()挂载vue对象在createApp拓展全局api 
//注:vue.filter()启用

//动态路由addRoute1
router.addRoute({
	path:'/about',
	name:'about',
	component:about
})
//动态路由2
router.addRoute('about',{
	path:'/about/info',
	name:'info',
	component:{
		render(){
			return h('h1','我是info')
		}
	}
})


createApp(App)
.use(router)
.component('comp',{
	render() {
		return h('div',"我是全局组件");
	}
})
.mixin(mixins)
//自定义指令变化(参数不变)
//bing=>beforeMount
//inserted=>mounted
//beforeUpdate(new):元素自身更新前调用，和组件的生命周期钩子很像
//componentUpdated=>updated
//beforeUnmount(new):和组件生命周期钩子相似，元素将要被移除前调用
//unbind=>unmounted
.directive('color',{
	// bind: 只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化动作。
	// inserted: 被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）。
	// update: 被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新（详细的钩子函数参数见下）。
	// componentUpdated: 被绑定元素所在模板完成一次更新周期时调用。
	// unbind=>unmounted: 只调用一次， 指令与元素解绑时调用。
	beforeMount:(el,binding)=>{
		el.style.color='red';
		console.log('bind:'+binding.value);
	},
	mounted:(el,binding)=>{
		el.style.color=binding.value;
		console.log(binding.value);
	},
	componentUpdated:(el,binding,vnode,oldVnode)=>{
		console.log(el);
	},
	unmounted : function(el, binding){
	　　　　console.log('componentUpdated:',binding.name);
	}
	
})
.mount('#app')
