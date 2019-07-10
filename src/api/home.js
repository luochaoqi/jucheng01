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




//聚橙网剧院接口
export const TheaterList  = ()=>http("get","/api/RestTheatre/getTheatreList?page=1&&version=5.1.4&referer=2")

//详情页面接口
export const DetailList  = ()=>http("get","/api/restTicket/getSchDetail?sch_id=99365&current_url=https%3A%2F%2Fm.juooo.com%2Fticket%2F99365&&version=5.1.4&referer=2")

//https://m.juooo.com/restTicket/getTour?show_id=37962&venue_id=146&&version=5.1.4&referer=2
//场地接口
export const siteList = ()=>http("get","/api/restTicket/getTour?show_id=37962&venue_id=146&&version=5.1.4&referer=2")
