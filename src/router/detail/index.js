import Detail from "../../views/Detail"
export default {
    path:"/detail/:id",
    component:Detail,
    // component:()=>import("views/cinema"),
    name:"detail",
    props:true,
}