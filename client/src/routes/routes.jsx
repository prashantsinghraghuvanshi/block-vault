import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import Wallet from "../pages/Wallet";

export const routes=createBrowserRouter([
    {path:'/', element:<Wallet/>},
    {path:'/home', element:<Home/>}
])