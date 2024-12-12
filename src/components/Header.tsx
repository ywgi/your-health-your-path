import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <div className='ayurveda-logo'>
                <Link to='/' aria-label='Go to homepage'>
                    <img src='src\images\ayurveda\yhyp-nobackground-modified.png' 
                        alt='The company logo for Your Health Your Path'/>
                </Link>
                <img id='your-health-your-path' 
                    src='src\images\ayurveda\yhyp-logo_processed.jpg'/>
            </div>
            <Navbar/> 
            <div className='user-logo'>
                <img src="src\images\person logo light-green_processed.png" />
            </div>

        </header>
    );
}

export default Header