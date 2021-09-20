import ElementUI from 'element-ui';
const Message={};
Message.install=function(Vue){
    Vue.prototype.message=((type,message)=>{
        ElementUI.Message({
            type,
            message,
            offset:100
        })
    })
}
export default Message;