import { createBrowserRouter } from "react-router-dom";
import PrivateRout from "../../Context/PrivateRout";
import Main from "../../Layout/Main";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Orders from "../../Pages/Orders/Orders";
import Signup from "../../Pages/Signup/Signup";

export const router=createBrowserRouter([
{
  path:'/' ,
  element:<Main></Main> ,
  children:[
    {
        path:'/',
        element:<Home></Home>
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/signup',
        element:<Signup></Signup>
    },

    {
      path:'/checkout/:id',
      element:<PrivateRout><CheckOut></CheckOut></PrivateRout>,
      loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
    },

    {
      path:'/orders',
      element:<PrivateRout><Orders></Orders></PrivateRout>
    }


  ]
}
])