//自定义组件白名单 配置vueCompilerOptions
module.exports={
	vueCompilerOptions:{
		isCustomElement:tag=>tag==='自定义组件名称'
	}
}