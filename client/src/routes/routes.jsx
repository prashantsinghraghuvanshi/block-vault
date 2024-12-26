import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import Wallet from "../pages/Wallet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const routes=createBrowserRouter([
    {path:'/', element:(
        <div className="w-screen h-full flex flex-col items-center justify-center">
            <Wallet/>
            <Footer />
        </div>
    )},
    {path:'/home', element:(
        <div className="w-screen h-full flex flex-col items-center justify-center">
            <Navbar />
            <Home />
            <Footer />
        </div>
    )}
])