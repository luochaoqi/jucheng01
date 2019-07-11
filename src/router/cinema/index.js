
import Cinema from "../../views/Cinema"
import Recreation from "../../views/Cinema/recreation.vue"
import Introduce from "../../views/Cinema/introduce.vue"
export default {
    path:"/cinema",
    component:Cinema,
    // component:()=>import("views/cinema"),
    name:"cinema",
    meta:{
        tabBarFlag:true,
    },
    children:[
        {
            path:"recreation",
            component:Recreation,
            name:"recreation",
            children:[
                {
                    path:"intro",
                    component:Introduce,
                    name:"intro"
                }
            ]
        }
    ]
}