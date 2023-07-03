import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <ScrollRestoration></ScrollRestoration>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;