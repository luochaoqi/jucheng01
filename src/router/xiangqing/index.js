import Xiangqing from "../../views/Xiangqing"
import Content from "../../views/Xiangqing/content"
export default {
    path:"/xiangqing",
    component:Xiangqing,
    // component:()=>import("views/cinema"),
   
    
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
         name:""
    },
   

]
}