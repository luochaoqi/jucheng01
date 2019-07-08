import http from "../utils/http.js"

export const bottomList = ()=>http("get","/api/home/getClassifyItem?city_id=0&operation_limit=5&&version=5.1.4&referer=2")


//聚橙网剧院接口
export const TheaterList  = ()=>http("get","/api/RestTheatre/getTheatreList?page=1&&version=5.1.4&referer=2")

//详情页面接口
export const DetailList  = ()=>http("get","/api/restTicket/getSchDetail?sch_id=99365&current_url=https%3A%2F%2Fm.juooo.com%2Fticket%2F99365&&version=5.1.4&referer=2")

//https://m.juooo.com/restTicket/getTour?show_id=37962&venue_id=146&&version=5.1.4&referer=2
//场地接口
export const siteList = ()=>http("get","/api/restTicket/getTour?show_id=37962&venue_id=146&&version=5.1.4&referer=2")