import './Footer.css';
import images from '../content/images';

const Footer = () => {
    return (
        <footer className="flex justify-center items-center bg-[#315851] w-full min-h-[20rem] py-8">
            <div className="flex flex-col items-center w-full max-w-6xl px-4 gap-8">
                {/* Navigation and Socials Container */}
                <div className="flex flex-row justify-center w-full gap-16 md:gap-32">
                    {/* Navigation Links */}
                    <div className="text-center md:text-left">
                        <h2 className="text-gold-custom font-bold text-xl mb-4">Navigation</h2>
                        <div className="flex flex-col gap-2">
                            <p className="text-white hover:text-gray-200 cursor-pointer">About Jacky</p>
                            <p className="text-white hover:text-gray-200 cursor-pointer">About Ayurveda</p>
                            <p className="text-white hover:text-gray-200 cursor-pointer">Services</p>
                            <p className="text-white hover:text-gray-200 cursor-pointer">Contact</p>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="text-center md:text-left">
                        <h2 className="text-gold-custom font-bold text-xl mb-4">Socials</h2>
                        <div className="flex flex-col gap-2">
                            <p className="text-white hover:text-gray-200 cursor-pointer">Blog</p>
                            <p className="text-white hover:text-gray-200 cursor-pointer">Instagram</p>
                            <p className="text-white hover:text-gray-200 cursor-pointer">FAQ</p>
                        </div>
                    </div>
                </div>

                {/* Logo and Company Name */}
                <div className="flex flex-col items-center w-full md:w-auto mt-4">
                    <div className="w-40 h-min border-transparent mb-2">
                        <img 
                            src={images.yhypLogoOutline} 
                            alt="Your Health Your Path Logo"
                            className="w-full h-min object-contain"
                        />
                    </div>
                    <div className="text-gold-custom text-center w-full m-0 p-0">
                        <p>Your Health Your Path ©</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;