import { Helmet } from "react-helmet-async";
import image from '../assets/Tiyasa.jpg'
import Banner from "./Banner/Banner";
import Introduction from "./Introduction/Introduction";
import ConatctPath from "./ContactPath/ConatctPath";

const Home = () => {
    return (
        <div className="">
            <Helmet>
            <title>Home | Tiyasa Tagore</title>
                <link rel="shortcut icon" href={image} type="image/x-icon" />

            </Helmet>
            <Banner/>
            <Introduction/>
            <ConatctPath/>
        </div>
    );
};

export default Home;