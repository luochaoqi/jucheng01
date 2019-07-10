import http from "../utils/http.js"

 export const locallist = ()=>http("get","/api/Index/getCityList")

