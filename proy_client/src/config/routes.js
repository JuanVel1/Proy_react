import LayoutAdmin from "../layouts/LayoutAdmin"
import LayoutBasic from "../layouts/LayoutBasic"
import AdminHome from "../pages/Admin"
import Login from "../components/AdminComponents/Login/Login"
import Home from "../pages/Home"
import Modulo_1 from "../pages/modulo_1"
import Modulo_2 from "../pages/modulo_2"
import Modulo_3 from "../pages/modulo_3"
import NotFound from "../pages/NotFound"


const routesAdmin = [
    {
        path:"/admin",
        layout:LayoutAdmin, 
        component:AdminHome,
    },
    {
        path:"/admin/login",
        layout:LayoutAdmin,
        component:Login,
    }
] 

const routesClient =[
    {
        path:"/",
        layout:LayoutAdmin,
        component:Home,
    },
    {
        path:"/modulo1",
        layout:LayoutBasic,
        component:Modulo_1,
    },
    {
        path:"/modulo2",
        layout:LayoutBasic,
        component:Modulo_2,
    },
    {
        path:"/modulo3",
        layout:LayoutBasic,
        component:Modulo_3,
    }
]

const routesNotFound =[
    {
        path:"*",
        layout:LayoutAdmin,
        component:NotFound,
    }
]
const routes =[...routesAdmin, ...routesClient, ...routesNotFound]
export default routes;