import { Link } from "react-router-dom";
import './Header.css'
import images from "../content/images";
import { useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
        <header className="flex flex-col lg:flex-row items-center w-full p-4 lg:p-5 lg:pb-12 relative text-center min-w-full lg:min-w-[60rem] lg:h-[185px] whitespace-normal lg:whitespace-nowrap gap-4 before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-full before:h-[0.2rem] before:bg-gradient-to-r before:from-transparent before:via-[#c17557] before:to-transparent">
            <div className="flex flex-row w-full lg:w-[40vw] min-w-0 lg:min-w-[35rem] items-center justify-center gap-2 lg:gap-0">
                <Link to='/' aria-label='Go to homepage'>
                    <img 
                        className="h-24 lg:h-40 object-contain"
                        src={images.yhypLogo}
                        alt='The company logo for Your Health Your Path'
                    />
                </Link>
                <img 
                    className="h-20 lg:h-40 object-contain"
                    src={images.yhypTextLogo}
                    alt="Your Health Your Path text logo"
                />
            </div>
            <nav role="navigation" aria-label="Main Navigation" className="relative bg-transparent">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        {/* Desktop menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="/about-jacky" className="font-bold text-3xl px-2 pt-2 pb-2 rounded-lg text-teal-custom hover:text-white hover:bg-green-custom ">
                            About Jacky
                            </a>
                            <a href="/about-ayurveda" className="font-bold text-3xl px-2 pt-2 pb-2 rounded-lg text-teal-custom hover:text-white hover:bg-green-custom">
                            Ayurveda
                            </a>
                            <a href="/services" className="font-bold text-3xl px-2 pt-2 pb-2 rounded-lg text-teal-custom  hover:text-white hover:bg-green-custom">
                            Services
                            </a>
                            <a href="/contact" className=" font-bold text-3xl px-2 pt-2 pb-2 rounded-lg text-teal-custom  hover:text-white hover:bg-green-custom">
                            Contact
                            </a>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button
                            onClick={toggleMenu}
                            className="inline-flex flex-col justify-center items-center w-10 h-10 space-y-1.5 p-2 rounded-md text-green-custom hover:text-green-custom hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-custom"
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
                            >
                            <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
                            <span 
                                className={`block h-0.5 w-6 bg-current transform transition duration-200 ease-in-out ${
                                isOpen ? 'rotate-45 translate-y-2' : ''
                                }`}
                            />
                            <span 
                                className={`block h-0.5 w-6 bg-current transition duration-200 ease-in-out ${
                                isOpen ? 'opacity-0' : ''
                                }`}
                            />
                            <span 
                                className={`block h-0.5 w-6 bg-current transform transition duration-200 ease-in-out ${
                                isOpen ? '-rotate-45 -translate-y-2' : ''
                                }`}
                            />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <div
                    className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
                    id="mobile-menu"
                >
                    <div className="w-screen px-2 pt-2 pb-3 space-y-1 bg-teal-custom">
                    <a
                        href="/about-jacky"
                        className="block px-3 py-2 rounded-md text-white hover:text-gray-900 hover:bg-gray-100"
                    >
                        About Jacky
                    </a>
                    <a
                        href="/about-ayurveda"
                        className="block px-3 py-2 rounded-md text-white hover:text-gray-900 hover:bg-gray-100"
                    >
                        Ayurveda
                    </a>
                    <a
                        href="/services"
                        className="block px-3 py-2 rounded-md text-white hover:text-gray-900 hover:bg-gray-100"
                    >
                        Services
                    </a>
                    <a
                        href="/contact"
                        className="block px-3 py-2 rounded-md text-white hover:text-gray-900 hover:bg-gray-100"
                    >
                        Contact
                    </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;