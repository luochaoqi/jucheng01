

import { locallist } from "../../api/local.js";

 const state= {
    citylist: [],
    hotlist:[],
    curcity:"全国"
}
  const mutations={
     getmutationlist(state,params){


        let hot =[]
        data = params.city_list;
        for(var key in this.citylist){
           
            this.citylist[key].lists.map((data)=>{
               if(data.is_city==0){
                  hot.push(data.name)
               }
            })
        }
        hot.unshift("全国")

        
        state.citylist=params.data;
        state.hotlist=params.hot
     }
}
const  actions={
    async   getactionlist({commit}){
        let data = await locallist();
    
        commit("getmutationlist",data)
    }
   
}

export default {
    state,
    mutations,
    actions,
   
    namespaced:true
}
