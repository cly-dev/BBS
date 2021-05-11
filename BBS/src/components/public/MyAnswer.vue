<script>
    export default {
        
        methods: {
            handleClick(){
                console.log("111");
            }
        },
        render(createElement){
            return(
                <h1 onClick={this.handleClick}>我是答案</h1>
            )
        }
    }
</script>

<style lang="less" scoped>

</style>