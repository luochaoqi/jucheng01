import http from "../utils/http.js"




export const disList = ()=>http("get","/api/Search/getShowList?category=36&city_id=1&page=1&keywords=&&version=5.1.4&referer=2")



export const yanChu = ()=>http("get","/api/restTicket/getSchDetail?sch_id=96560&current_url=https%3A%2F%2Fm.juooo.com%2Fticket%2F96560&&version=5.1.4&referer=2")



export const Xunhuan = ()=>http("get","/api/Search/getShowList?category=35&city_id=1&&version=5.1.4&referer=2")





// 演出   全部接口
export const allList = ()=>http("get","/api/Search/getShowList?category=0&city_id=1&page=1&keywords=&&version=5.1.4&referer=2")


// 演唱会

export const songList = ()=>http("get","/api/Search/getShowList?category=35&city_id=1&page=1&keywords=&&version=5.1.4&referer=2")

// 音乐会

export const musicList = ()=>http("get","/api/Search/getShowList?category=36&city_id=1&page=1&keywords=&&version=5.1.4&referer=2")



// 话剧歌剧
export const threList = ()=>http("get","/api/Search/getShowList?category=37&city_id=1&page=1&keywords=&&version=5.1.4&referer=2")

// 儿童剧场

export const childList = ()=>http("get","/api/Search/getShowList?category=38&city_id=1&page=1&keywords=&&version=5.1.4&referer=2")

//芭蕾舞蹈

export const baleiList = ()=>http("get","/api/Search/getShowList?category=86&city_id=1&page=1&keywords=&&version=5.1.4&referer=2")




