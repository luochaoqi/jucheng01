import list from "../../views/Xiangqing"
import Content from "../../views/Xiangqing/content"
export default {
    path:"/list",
    component:list,
    // component:()=>import("views/cinema"),
    meta:{
        tabBarFlag:false,
    },
    children:[
        {
            path:"",
            component:Content,
            props:true,
         
        },
        {
         path:":id",
         component:Content,
         props:true,
         name:"con"
    },
   

]
}