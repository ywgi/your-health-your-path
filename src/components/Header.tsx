import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import './Header.css'
import images from "../content/images";

const Header = () => {
    return (
        <header className="header">
            <div className='yhyp-logos'>
                <Link to='/' aria-label='Go to homepage'>
                    <img className='header-ayurveda-logo' src={images.yhypLogo}
                        alt='The company logo for Your Health Your Path'/>
                </Link>
                <img className='header-text-logo' 
                    src={images.yhypTextLogo}/>
            </div>
            <Navbar/>
        </header>
    );
}

export default Header