import './Footer.css';
import images from '../content/images';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
    <footer className="flex justify-center items-center bg-[#315851] w-full py-8">
        <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center w-full max-w-6xl px-4 gap-8 md:gap-16 lg:gap-40">
            <div className='flex flex-col'>
                <p className='text-white'><span className='text-gray-300'>Telephone Number:</span> +31 6 8198 3487</p>
                <p className='text-white'><span className='text-gray-300'>Email:</span> yourhealthyourpath@gmail.com</p>
                <p className='text-white'><span className='text-gray-300'>KvK:</span> 91214173</p>
            </div>
            
            {/* Logo and Company Name */}
            <div className="flex flex-col items-center lg:items-center w-auto">
                <div className="w-40 h-min border-transparent mb-2">
                    <img 
                        src={images.yhypLogoOutline} 
                        alt="Your Health Your Path Logo"
                        className="w-full h-min object-contain"
                    />
                </div>
                <div className="text-gold-custom text-center w-full m-0 p-0 hidden md:block lg:block">
                    <p>Your Health Your Path ©</p>
                </div>
            </div>                
            
            {/* Navigation and Socials Container */}
            <div className="flex flex-row items-start justify-center w-auto gap-16 md:gap-32">
                {/* Navigation Links */}
                <div className="text-center lg:text-left">
                    <h2 className="text-gold-custom font-bold text-xl mb-4">Navigation</h2>
                    <div className="flex flex-col gap-2">
                        <Link to='/en/' className="text-white hover:text-gray-200 cursor-pointer">Home</Link>
                        <Link to='/en/about-Jacklyn' className="text-white hover:text-gray-200 cursor-pointer">About Jacklyn</Link>
                        <Link to='/en/ayurveda' className="text-white hover:text-gray-200 cursor-pointer">Ayurveda</Link>
                        <Link to='/en/services' className="text-white hover:text-gray-200 cursor-pointer">Services</Link>
                        <Link to='/en/contact' className="text-white hover:text-gray-200 cursor-pointer">Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
}

export default Footer;

