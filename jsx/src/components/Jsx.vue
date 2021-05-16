<script>
	import msg from "./Msg.vue";
	import obser from "./Observeable.vue";
	export default{
		name:"Jsx",
		props:{
			lever:String,
			
		},
		data(){
			return {
				tag:'hello 我是渲染函数',
				person:["小明","小白"],
				message:'你好,我是msg组件1',
				inputattrs:{
					type:'text',
					placeholder:'请输入'
				}
			}
		},
		methods:{
			clicks(){
				console.log("点击");
			}
		},
		components:{
			msg,
			obser
		},
		// render:tag.render,
		//渲染函数 利用JavaScript的完全编程能力 去模板化,减少代码量
		/* render(createElement) {
			createElement(tag,attt,data(string,array))
		} */
		
		 render(createElement){
			// return createElement('obser');
			
			// return createElement(this.lever,{},this.person.map(value=>createElement('li',
			// {
			// 	attrs:{
			// 		'class':'lis',
			// 		},
			// 	on:{
			// 		click:this.clicks
			// 	}
			// },
			// `${value}`)));
			// attrs 标签的原生属性
			// on-XXX事件
			// 可以通过解构的方式来给予属性
			// return <input {...{attrs:this.inputattrs}}/>
			//实现.sync绑定
			// on={{['update:current-page']:this.page}}
			//实现v-html
			//domPropsInnerHTML={this.html}
		return (
				//动态绑定style
				//  <section class="info_data" style={'height:'+this.height}>
				// <msg msg={this.message}>
				//  <div slot='header'>我是头部</div>
				// </msg> 
				<obser> </obser>
				
			
		)
		
			
		},
		created() {
			this.$nextTick(()=>{
				console.log(this.tag);
				console.log(this.$props);
			})
		},
		
		
	}
</script>

<style>
</style>
