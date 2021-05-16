//z自定义插件
const MyPlugin={ };
MyPlugin.install=function(Vue){
        Vue.component("test",{
            template:"<h1>我是插件</h1>"
        }) 
    Vue.prototype.$my=()=>{
            alert("我是插件");
        }
}
    // MyPlugin.install=((Vue=>{
    //     // Vue.component("test",{
    //     //     template:`<h1>我是插件</h1>`
    //     // })
    //     Vue.prototype.$my=()=>{
    //         alert("我是插件");
    //     }
    // })
export default MyPlugin;
