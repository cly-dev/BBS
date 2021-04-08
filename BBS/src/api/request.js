import axios from "axios";
import {host} from "../config/host";
let baseUrl=host.BaseUrl;
export default (url,data={},params={},method="get")=>{
        return new Promise((resolve,reject)=>{
            axios({
                url:`${baseUrl}${url}`,
                method:method,
                data:data,
                params:params
            }).then(res=>{
                resolve(res)
            }).catch(err=>{
                console.log(err);
                reject(err);
            })
        })
}
