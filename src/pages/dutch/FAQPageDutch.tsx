import { Link } from "react-router-dom";
import FAQDutch from "../../components/FAQDutch";
import FooterDutch from "../../components/FooterDutch";
import HeaderDutch from "../../components/HeaderDutch";
import images from "../../content/images";

// New component for the FAQ accordion with animations
const FAQPageDutch = () => {
    return(
        <>
            <HeaderDutch />
            <div className="flex flex-col items-center justify-center">
                <div className="flex w-full h-[15vh]  items-center justify-center">
                    <h1 className="text-6xl font-heading font-semibold">
                        FAQ: Frequently Asked Questions
                    </h1>
                </div>
                <FAQDutch />
                <div className="flex py-8 gap-10">
                    <div className="relative w-full lg:w-auto self-center order-last lg:order-first">
                        {/* Background decorative block - positioned bottom left */}
                        <div className="absolute bottom-0 left-0 w-full h-full bg-teal-custom -z-10 md:block origin-bottom-left scale-90" />
                        
                        {/* Main image container */}
                        <div className="w-full md:max-w-[800px] lg:w-auto relative md:mb-4 md:ml-4 lg:mb-8 lg:ml-8">
                            <img 
                                className="w-full lg:w-auto lg:max-h-[800px] object-cover shadow-lg animate-[fade-in_1s_ease-out] opacity-0 [animation-fill-mode:forwards]"
                                src={images.pinkFlowers}
                                alt="Jacklyn and husband walking on beach after wedding in tenerife" 
                            />
                        </div>
                    </div>
                    <div className="order-first lg:order-last flex w-full lg:max-w-2xl justify-center flex-col text-left px-4 lg:px-0 text-xl">
                        <h1 className="text-4xl font-bold font-heading tracking-wide text-light-teal-custom">Nog vragen?</h1>
                        <br/>
                        <h2 className="text-3xl font-heading uppercase tracking-wide text-dark-coral-custom">Neem contact op.</h2>
                        <br/>
                        <p className="text-2xl">
                            Ik help je graag. Je kunt me bellen, WhatsAppen of mailen en ik beantwoord graag je vragen terwijl je je (gezondheids) doelen nastreeft.
                        </p>
                        <div className="flex items-center justify-center pt-10">
                            <Link to="/contact">
                                <button className="px-10 py-3 text-xl lg:text-2xl font-helvetica rounded-full text-white bg-green-custom hover:bg-teal-custom hover:text-white transition-colors">
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