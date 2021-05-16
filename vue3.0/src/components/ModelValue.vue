<template>
	<div @click="$emit('update:modelValue',modelValue+1)">
			我是counter:{{modelValue}}
	</div>
</template>

<script>
	export default{
		props:{
			modelValue:{
				type:Number,
				default:0
			}
		}
	}
</script>

<style>
</style>
