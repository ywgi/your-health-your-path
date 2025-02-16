import BusinessMap from "../components/BusinessMap";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import images from "../content/images";

const ContactPage = () => {
    return(
        <>
            <Header />
            <div className="w-full">
                <div 
                    className="hidden md:block w-full relative h-[45vh] bg-fixed bg-center bg-cover bg-no-repeat"
                    style={{
                        backgroundImage: `url(${images.plants})`
                    }}
                />
                <div className="max-w-[80%] mx-auto h-auto bg-gradient-to-b from-white from-25% to-light-pink-custom -mt-[22.5vh] relative z-10 pb-12">
                    <div className="flex flex-col">
                        <div className="flex p-8 items-center">
                            {/* Image section - left side */}
                            <div className="relative w-1/2 self-center order-last lg:order-first">
                                {/* Background decorative block */}
                                <div className="absolute bottom-0 left-0 w-[90%] h-full bg-teal-custom -z-10 md:block origin-bottom-left scale-90" />
                                {/* Main image container */}
                                <div className="relative md:mb-4 md:ml-4 lg:mb-8 lg:ml-8">
                                    <img 
                                        className="w-full lg:max-h-[800px] object-cover shadow-lg animate-[fade-in_1s_ease-out] opacity-0 [animation-fill-mode:forwards]"
                                        src={images.jackyWithNotepad}
                                        alt="Jacklyn and husband walking on beach after wedding tenerife" 
                                    />
                                </div>
                            </div>
                            {/* Headings section - right side */}
                            <div className="flex flex-col w-1/2">
                                <div className="px-8">
                                    <h1 className="font-heading font-bold text-3xl text-light-teal-custom">
                                        I can't wait to connect with you!
                                    </h1>
                                    <br/>
                                    <h2 className="font-heading tracking-wide uppercase font-bold text-2xl text-dark-coral-custom">
                                        Let's find your path!
                                    </h2>
                                    <br/>
                                    <p>Let people know what they can expect after they contact you here. What should they do next, fill out a form or schedule a call? What happens once they take the next step, when will they hear from you next?</p>
                                </div>
                            </div>
                        </div>
                        <ContactForm />
                        <div className="px-8 flex gap-2">
                            <a href="https://wa.me/31681983487">
                                <img 
                                    src={images.whatsApp} 
                                    className="max-h-[50px]"    
                                />
                            </a>
                            <a href="signal://+1234567890">
                                <img
                                    src={images.signalLogo}
                                    className="max-h-[50px]" />
                            </a>
                        </div>
                    </div>
                </div>
                <BusinessMap/>
            </div>
            <Footer/>
        </>
    );
}

export default ContactPage;