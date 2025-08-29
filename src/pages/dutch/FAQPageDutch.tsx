import { Link } from "react-router-dom";
import FAQDutch from "../../components/FAQDutch";
import FooterDutch from "../../components/FooterDutch";
import HeaderDutch from "../../components/HeaderDutch";
import images from "../../content/images";

const FAQPageDutch = () => {
    return(
        <>
            <HeaderDutch />
            <div className="flex flex-col items-center justify-center md:px-8 lg:px-16 md:pb-8">
                {/* Main FAQ title section */}
                <div className="flex w-full h-[10vh] sm:h-[15vh] items-center justify-center text-center px-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-light-teal-custom">
                        FAQ: Frequently Asked Questions
                    </h1>
                </div>
                
                {/* FAQ component */}
                <FAQDutch />
                
                {/* Contact Us section with the correct order on all screen sizes */}
                <div className="flex flex-col lg:flex-row py-8 gap-8 lg:gap-20 w-full max-w-7xl">
                    {/* Image section: Always the first item */}
                    <div className="relative w-full lg:w-1/2 self-center">
                        <div className="absolute bottom-0 left-0 w-full h-full bg-teal-custom -z-10 hidden md:block origin-bottom-left scale-90" />
                        <div className="w-full relative md:mb-4 md:ml-4 lg:mb-8 lg:ml-8">
                            <img 
                                className="w-full h-auto object-cover shadow-lg animate-[fade-in_1s_ease-out] opacity-0 [animation-fill-mode:forwards]"
                                src={images.pinkFlowers}
                                alt="Jacklyn and husband walking on beach after wedding in tenerife" 
                            />
                        </div>
                    </div>

                    {/* Text and button section: Always the second item */}
                    <div className="flex w-full lg:w-1/2 justify-center flex-col text-left px-4 lg:px-0 text-lg sm:text-xl animate-[fade-in_1s_ease-out] [animation-fill-mode:forwards]">
                        <h1 className="text-3xl sm:text-4xl font-bold font-heading tracking-wide text-light-teal-custom">Nog vragen?</h1>
                        <br/>
                        <h2 className="text-2xl sm:text-3xl font-heading uppercase tracking-wide text-dark-coral-custom">Neem contact op.</h2>
                        <br/>
                        <p className="text-lg sm:text-xl">
                            Ik help je graag. Je kunt me bellen, WhatsAppen of mailen en ik beantwoord graag je vragen terwijl je je (gezondheids) doelen nastreeft.
                        </p>
                        <div className="flex items-center justify-center pt-8">
                            <Link to="/contact">
                                <button className="px-8 py-3 text-lg sm:text-xl font-helvetica rounded-full text-white bg-green-custom hover:bg-teal-custom hover:text-white transition-colors">
                                    Contact
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <FooterDutch />
        </>
    );
};

export default FAQPageDutch;