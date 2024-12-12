import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            {/* <div className='nav-links'>
                <h2>Navigation</h2>
                <p>About Jacky</p>
                <p>About Ayurveda</p>
                <p>Services</p>
                <p>Contact</p>
            </div> */}
            <div className='logo-container'>
                <img src='src\images\ayurveda\yhyp-green_processed.jpg'/>
                <p>Your Health Your Path ©</p>
            </div>
            {/* <div className='socials-links'>
                <h2>socials</h2>
                <p>Blog</p>
                <p>Instagram</p>
                <p>FAQ</p>
            </div> */}
        </footer>
    );
}

export default Footer;