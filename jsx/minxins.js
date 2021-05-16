export default{
	data(){
		return{
			name:'我是minxins',
		}
	},
	methods:{
			clicks(){
				console.log("我被点击");
				this.name="哈哈哈";
			}
	}
}