<template>
	<h1></h1>
	<div @click="$emit('click')">点击</div>
	<div @click="$emit('tis')">我来啦</div>
</template>

<script>
	export default{
		name:'Emait',
		//emits:防止自定义事件和原生事件重名,将原生事件覆盖掉
		emits:{
			click:null,
			tis:payload => {
				if (payload.username && payload.psd) {
				return true
			} else {
				console.warn(`Invalid submit event payload!`)
				return false
			}
			}
				
		},
	}
</script>

<style>
</style>
