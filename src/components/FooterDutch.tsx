import './Footer.css';
import images from '../content/images';
import { Link } from 'react-router-dom';

const FooterDutch = () => {
    return (
        <footer className="flex justify-center items-center bg-[#315851] w-full py-8">
            <div className="flex flex-col md:flex-row items-center w-full max-w-6xl px-4 gap-8 md:gap-0">
                {/* Contact Info - Left Section */}
                <div className='flex flex-col md:w-1/3 text-center md:text-left'>
                    <p className='text-white'><span className='text-gray-300'>Telefoonnummer:</span> +31 6 8198 3487</p>
                    <p className='text-white'><span className='text-gray-300'>Email:</span> yourhealthyourpath@gmail.com</p>
                    <p className='text-white'><span className='text-gray-300'>KvK:</span> 91214173</p>
                </div>
                
                {/* Logo and Company Name - Center Section */}
                <div className="flex flex-col items-center md:w-1/3">
                    <div className="w-40 h-min border-transparent mb-2">
                        <img 
                            src={images.yhypLogoOutline} 
                            alt="Your Health Your Path Logo"
                            className="w-full h-min object-contain"
                        />
                    </div>
                    <div className="text-gold-custom text-center w-full m-0 p-0 hidden md:block">
                        <p>Your Health Your Path ©</p>
                    </div>
                </div> 
                
                {/* Navigation Links - Right Section */}
                <div className="flex flex-col md:w-1/3 text-center md:text-right">
                    <h2 className="text-gold-custom font-bold text-xl mb-4">Navigation</h2>
                    <div className="flex flex-col gap-2">
                        <Link to='/' className="text-white hover:text-gray-200 cursor-pointer">Home</Link>
                        <Link to='/over-Jacklyn' className="text-white hover:text-gray-200 cursor-pointer">Over Jacklyn</Link>
                        <Link to='/ayurveda' className="text-white hover:text-gray-200 cursor-pointer">Ayurveda</Link>
                        <Link to='/diensten' className="text-white hover:text-gray-200 cursor-pointer">Diensten</Link>
                        <Link to='/faq' className="text-white hover:text-gray-200 cursor-pointer">FAQ</Link>
                        <Link to='/contact' className="text-white hover:text-gray-200 cursor-pointer">Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterDutch;