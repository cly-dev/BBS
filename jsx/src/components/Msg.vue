<template>
	<div>
		{{msg}}
		<slot name="header"></slot>
	</div>
</template>

<script>
	export default{
		name:'msg',
		props:{
			msg:String
		}
	}
</script>

<style>
</style>
