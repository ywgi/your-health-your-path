import './Footer.css';
import images from '../content/images';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='nav-container'>
                <div className='nav-links'>
                    <h2>Navigation</h2>
                    <p>About Jacky</p>
                    <p>About Ayurveda</p>
                    <p>Services</p>
                    <p>Contact</p>
                </div>
            </div>
            <div className='logo-company'>
                <div className='image-container'>
                    <img src={images.yhypLogoOutline}/>
                </div>
                <div className='text-container'>
                    <p>Your Health Your Path ©</p>
                </div>
            </div>
            <div className='socials-container'>
                <div className='socials-links'>
                    <h2>Socials</h2>
                    <p>Blog</p>
                    <p>Instagram</p>
                    <p>FAQ</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;