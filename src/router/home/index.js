import Home from "../../views/Home"
import Zimulu from "../../views/Home/Zimulu/index.vue"
import Main from "../../views/Home/Main/index.vue"
export default {
    path:"/home",
    alias: '/',
    component:Home,
    // component:()=>import("views/cinema"),
    name:"home",
    meta:{
        tabBarFlag:true,
    },
    children:[
        {
            path:"",
            component:Main,
            meta:{
                tabBarFlag:true,
            }
        },
        {
            path:"zimulu",
            component:Zimulu,
            meta:{
                tabBarFlag:false,
            }
        }
    ]
}