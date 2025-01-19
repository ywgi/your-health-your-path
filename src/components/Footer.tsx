import './Footer.css';
import images from '../content/images';

const Footer = () => {
    return (
        <footer className="flex justify-center items-center bg-[#315851] w-full py-8">
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between w-full max-w-6xl px-4 gap-8">
                {/* Logo and Company Name */}
                <div className="flex flex-col items-center lg:items-end w-full lg:w-auto mt-4 lg:mt-0">
                    <div className="w-40 h-min border-transparent mb-2">
                        <img 
                            src={images.yhypLogoOutline} 
                            alt="Your Health Your Path Logo"
                            className="w-full h-min object-contain"
                        />
                    </div>
                    <div className="text-gold-custom text-center w-full m-0 p-0 hidden lg:block">
                        <p>Your Health Your Path ©</p>
                    </div>
                </div>                
                
                {/* Navigation and Socials Container */}
                <div className="flex flex-row justify-center w-full lg:w-auto gap-16 md:gap-32">
                    {/* Navigation Links */}
                    <div className="text-center lg:text-left">
                        <h2 className="text-gold-custom font-bold text-xl mb-4">Navigation</h2>
                        <div className="flex flex-col gap-2">
                            <p className="text-white hover:text-gray-200 cursor-pointer">About Jacky</p>
                            <p className="text-white hover:text-gray-200 cursor-pointer">About Ayurveda</p>
                            <p className="text-white hover:text-gray-200 cursor-pointer">Services</p>
                            <p className="text-white hover:text-gray-200 cursor-pointer">Contact</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

