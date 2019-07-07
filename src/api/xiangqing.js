import http from "../utils/http.js"

export const showList = ()=>http("get","/api/Search/getShowList?category=35&city_id=1&page=1&keywords=&&version=5.1.4&referer=2")


export const disList = ()=>http("get","/api/Search/getShowList?category=36&city_id=1&page=1&keywords=&&version=5.1.4&referer=2")



export const yanChu = ()=>http("get","/api/restTicket/getSchDetail?sch_id=96560&current_url=https%3A%2F%2Fm.juooo.com%2Fticket%2F96560&&version=5.1.4&referer=2")



export const Xunhuan = ()=>http("get","/api/Search/getShowList?category=35&city_id=1&&version=5.1.4&referer=2")
