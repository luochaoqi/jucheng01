import http from "../utils/http.js"

export const bottomList = ()=>http("get","/api/home/getClassifyItem?city_id=0&operation_limit=5&&version=5.1.4&referer=2")


// 轮播图
export const slideList = ()=>http("get","/api/home/getSildeList?abbreviation=&limit=&&version=5.1.4&referer=2")


// 热门演出
export const hotList = ()=>http("get","/api/home/getHotsRecommendList?city_id=0&rows=50&&version=5.1.4&referer=2")


// 巡回演出
export const floorList = ()=>http("get","/api/home/getFloorShow?city_abb=&city_id=0&&version=5.1.4&referer=2")



// 演唱会
export const yanChang = ()=>http("get","/api/home/getFloorShow?city_abb=&city_id=0&&version=5.1.4&referer=2")
export const bottomList = ()=>http("get","/api/home/getClassifyItem?city_id=0&operation_limit=5&&version=5.1.4&referer=2")
