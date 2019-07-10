import http from "../utils/http.js"

// =a&page=1&sort_type=1&version=6.0.1&referer=
export const search=(data)=>http("get","/api/Search/getShowList",{keywords:data,page:1,sort_type:1,version:"6.0.1",referer:2})




