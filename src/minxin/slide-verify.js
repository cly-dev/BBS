export default{
    data() {
        return {
            //滑动校验提示
            accuracy: 1,
            text: '向右滑',
             msg: '',
        }
    },
    methods: {
       
        onFail(){
           this.message("error","校验失败");
            this.msg = ''
        },
        onRefresh(){
          
            this.msg = ''
        },
        onFulfilled() {
            
        },
        onAgain() {
            this.msg = 'try again';
            // 刷新
            this.$refs.slideblock.reset();
        },
        handleClick() {
        	// 父组件直接可以调用刷新方法
            this.$refs.slideblock.reset();
        },
    },
}