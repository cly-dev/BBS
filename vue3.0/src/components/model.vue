<template>
	<button type="button" @click="modelOpen =true">我是teleport传送门</button>
	<!-- 
	teleport传送门
	to:将传送们绑定对应的节点上
	disabled:控制teleport显示
	 -->
	<teleport to="body">
		<div v-if="modelOpen" class="model">
			<p>我是teleport传送门</p>
			<button type="button" @click="modelOpen=false">点击关闭</button>
		</div>
	</teleport>
	
</template>

<script>
	import {ref} from "vue";
	export default{
		name:'model',
		setup(){
			let modelOpen=ref(false)
			return{
				modelOpen
			}
		}
	}
</script>

<style>
	.model{
		width:500px;
		height: 300px;
		background-color:white;
		position: absolute;
		top: 50%;
		left: 50%;
		box-shadow:0 0 5px #2C3E50;
		margin:-250px 0 0 -150px;
	}
	.model div{

	}
</style>
