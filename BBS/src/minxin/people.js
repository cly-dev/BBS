import {ShowFansByPage} from "../api/data";
export const MyFans={
    async created() {
        let result=await ShowFansByPage("/1/10");
        this.list=result["data"].result.data;
        this.total=result["data"].result.allDataNum;
    },
}