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
                <div className="max-w-full md:max-w-[80%] mx-auto h-auto bg-gradient-to-b from-white from-25% to-light-pink-custom md:-mt-[22.5vh] relative z-10 pb-12">
                    <div className="flex flex-col">
                        <div className="flex flex-col lg:flex-row p-4 md:p-8 items-center">
                            {/* Headings section - full width on mobile, right side on desktop */}
                            <div className="flex flex-col w-full lg:w-1/2 mb-8 lg:mb-0">
                                <div className="px-4 md:px-8">
                                    <h1 className="font-heading font-bold text-2xl md:text-3xl text-light-teal-custom">
                                        I can't wait to connect with you!
                                    </h1>
                                    <br/>
                                    <h2 className="font-heading tracking-wide uppercase font-bold text-xl md:text-2xl text-dark-coral-custom">
                                        Let's find your path!
                                    </h2>
                                    <br/>
                                    <p className="text-sm md:text-base">Please fill in the contact form with your questions or interests. 
                                        If there is a best day or time to reach you please let me know. I will get back to you within 3 business days. 
                                        Depending on your question(s) we can discuss further options such as planning a free 20 min. consult or scheduling a massage.</p>
                                </div>
                            </div>
                            
                            {/* Image section - full width on mobile, left side on desktop */}
                            <div className="relative w-full lg:w-1/2 self-center">
                                {/* Background decorative block */}
                                <div className="absolute bottom-0 left-0 w-[90%] h-full bg-teal-custom -z-10 md:block origin-bottom-left scale-90" />
                                {/* Main image container */}
                                <div className="relative md:mb-4 md:ml-4 lg:mb-8 lg:ml-8">
                                    <img 
                                        className="w-full lg:max-h-[800px] object-cover shadow-lg animate-[fade-in_1s_ease-out] opacity-0 [animation-fill-mode:forwards]"
                                        src={images.jackyWithNotepad}
                                        alt="Jacklyn Bestenbreur Ayurvedic practioner with notepad" 
                                    />
                                </div>
                            </div>
                        </div>
                        
                        <ContactForm />
                        
                        <div className="px-4 md:px-8 flex gap-2 mt-6">
                            <a href="https://wa.me/31681983487" className="inline-block">
                                <img 
                                    src={images.whatsApp} 
                                    className="max-h-[40px] md:max-h-[50px]"
                                    alt="WhatsApp Link to contact Jacklyn BestenBreur"
                                />
                            </a>
                            <a href="signal://+1234567890" className="inline-block">
                                <img
                                    src={images.signalLogo}
                                    className="max-h-[40px] md:max-h-[50px]"
                                    alt="Signal Link to contact Jacklyn Bestenbreur"
                                />
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