import axios from "axios";
import {host} from "../config/host";
const baseUrl=host.baseUrl;
class HttpRequest{
    constructor(url){
        this.baseUrl=url
        this.queue={}
    }
    getInsideConfig(){
         const config={
            baseUrl:this.baseUrl,
            headers:{

            }
        }
        return config;
    }
    interception(instance,url){
        instance.interceptors.request.use(config=>{
            console.log(config);
            console.log("请求");
            return config
        })
        instance.interceptors.response.use(res=>{
            console.log(res);
            return res;
        },(err)=>{
            console.log(err);
            console.log("出错了");
        })
    }
    request(options){
        const instance=axios.create();
        options=Object.assign(this.getInsideConfig(),options);
        this.interception(instance,options.url);
        return instance;
    }
}

const axiosObj=new HttpRequest(baseUrl);
export default axiosObj;