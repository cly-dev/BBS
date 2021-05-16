<template>
	<div>
		{{countr}}
		<button type="button" @click="counter">点我</button>
	</div>
</template>

<script>
	import {state, mutations} from '../store/store.js'
	export default {
		created() {
			console.log(state);
		},
		//通过计算属性来检测数组的变化
		computed:{
			countr(){
				return state.count;
			}
		},
		data:()=>{
			return{
				count:state.count
			}
		},
		methods:{
			counter(){
				mutations.setCount();
			}
		}
	}
</script>

<style>
</style>
