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
        <header className="flex flex-col md:flex-row lg:flex-row items-center w-full p-2 md:p-4 lg:p-5 md:pb-8 lg:pb-12 relative text-center min-w-full md:min-w-[768px] md:h-[140px] lg:min-w-[1024px] lg:h-[150px] whitespace-normal md:whitespace-nowrap lg:whitespace-nowrap gap-4 before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-full before:h-[0.2rem] before:bg-gradient-to-r before:from-transparent before:via-[#c17557] before:to-transparent">
            <div className="flex flex-row w-full md:w-[40vw] lg:w-[40vw] items-center justify-center gap-2 lg:gap-0">
                <Link to='/en/' aria-label='Go to homepage'>
                    <div className="flex flex-row w-auto">
                            <img 
                                className="h-24 md:h-24 lg:h-36 object-contain"
                                src={images.yhypLogo}
                                alt='The company logo for Your Health Your Path'
                            />
                        <img 
                            className="h-20 md:h-32 lg:h-36 object-contain w-3/4"
                            src={images.yhypTextLogo}
                            alt="Your Health Your Path text logo"
                        />
                    </div>
                </Link>
            </div>
            <div className="flex justify-center overflow-hidden md:w-[60vw]">
                <nav role="navigation" aria-label="Main Navigation" className="flex w-full justify-center bg-transparent">
                    <div className="w-full flex justify-center">
                        <div className="flex items-center h-16">
                            {/* Desktop menu */}
                            <div className="hidden md:flex items-center space-x-2">
                                <a href="/en/about-Jacklyn" className="font-bold md:text-lg lg:text-2xl px-2 pt-2 pb-2 rounded-3xl text-teal-custom hover:text-white hover:bg-green-custom">
                                About Jacklyn
                                </a>
                                <a href="/en/ayurveda" className="font-bold md:text-lg lg:text-2xl px-2 pt-2 pb-2 rounded-3xl text-teal-custom hover:text-white hover:bg-green-custom">
                                Ayurveda
                                </a>
                                <a href="/en/services" className="font-bold md:text-lg lg:text-2xl px-2 pt-2 pb-2 rounded-3xl text-teal-custom hover:text-white hover:bg-green-custom">
                                Services
                                </a>
                                <a href="/en/contact" className="font-bold md:text-lg lg:text-2xl px-2 pt-2 pb-2 rounded-3xl text-teal-custom hover:text-white hover:bg-green-custom">
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
                </nav>
            </div>
            {/* Mobile menu */}
            <div
                className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
                id="mobile-menu"
            >
                <div className="w-screen px-2 pt-2 pb-3 space-y-1 bg-teal-custom">
                    <a
                        href="/en/about-Jacklyn"
                        className="block px-3 py-2 rounded-md text-white hover:text-gray-900 hover:bg-gray-100"
                    >
                        About Jacklyn
                    </a>
                    <a
                        href="/en/ayurveda"
                        className="block px-3 py-2 rounded-md text-white hover:text-gray-900 hover:bg-gray-100"
                    >
                        Ayurveda
                    </a>
                    <a
                        href="/en/services"
                        className="block px-3 py-2 rounded-md text-white hover:text-gray-900 hover:bg-gray-100"
                    >
                        Services
                    </a>
                    <a
                        href="/en/contact"
                        className="block px-3 py-2 rounded-md text-white hover:text-gray-900 hover:bg-gray-100"
                    >
                        Contact
                    </a>
                    <a href="/" className="block px-3 py-2 rounded-md text-white hover:text-gray-900 hover:bg-gray-100">
                        Dutch
                    </a>
                </div>
            </div>
            <div className="hidden md:block">
                <a href="/">
                    <img src={images.netherlandsFlag} className="max-h-10" alt="Netherlands Flag" />
                </a>
            </div>
        </header>
    );
}

export default Header;




