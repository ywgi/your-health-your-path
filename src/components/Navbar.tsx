import { Link } from 'react-router-dom';
//styles
import './Navbar.css';

const Navbar = () =>  {
    console.log("Navbar loaded!");
    return(
        <header>
            <nav role='navigation' aria-label='Main Navigation'>
                <div className='links'>
                    <ul className='navigation-links'>
                        <li>
                            <Link to='/about-jacky'>
                                About Jacky
                            </Link>
                        </li>
                        <li>
                            <Link to='/about-ayurveda'>
                                About Ayurveda
                            </Link>
                        </li>
                        <li>
                            <Link to='/services'>
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to='/contact'>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;