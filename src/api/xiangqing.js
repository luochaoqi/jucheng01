import http from "../utils/http.js"

export const showList = ()=>http("get","/api/Search/getShowList?category=35&city_id=1&page=1&keywords=&&version=5.1.4&referer=2")


export const disList = ()=>http("get","/api/Search/getShowList?category=36&city_id=1&page=1&keywords=&&version=5.1.4&referer=2")