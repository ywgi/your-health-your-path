import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MassageCards from "../components/MassageCards";
import images from "../content/images";
import ConsultCards from "../components/ConsultCards";



const ServicesPage = () => {
    return (
        <>
            <Header />
            <div>
                <div className="flex px-4 pt-4 pb-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <div className="relative w-full">
                            <div className="aspect-[4/3] md:aspect-[3/4] w-full overflow-hidden max-w-xs mx-auto">
                                <img 
                                    className="w-full h-full object-cover"
                                    src={images.womanOnLaptop}
                                    alt="Consult"
                                />
                                <a href="#consult" 
                                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                    e.preventDefault();
                                    const element = document.getElementById('consult');
                                    if (element) {
                                        element.scrollIntoView({
                                            behavior: 'smooth',
                                            block: 'start'
                                        });
                                    }
                                }}>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-light-pink-custom px-8 py-2 min-w-[200px] text-center rounded-2xl">
                                            <h3 className="text-lg tracking-widest uppercase text-gray-800">Consult</h3>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="relative w-full">
                            <div className="aspect-[4/3] md:aspect-[3/4] w-full overflow-hidden max-w-xs mx-auto">
                                <img 
                                    className="w-full h-full object-cover"
                                    src={images.massage}
                                    alt="Massage"
                                />
                                <a href="#massage"                             
                                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                    e.preventDefault();
                                    const element = document.getElementById('massage');
                                    if (element) {
                                        element.scrollIntoView({
                                            behavior: 'smooth',
                                            block: 'start'
                                        });
                                    }
                                }}>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-light-pink-custom px-8 py-2 min-w-[200px] text-center rounded-2xl">
                                            <h3 className="text-lg tracking-widest uppercase text-gray-800">Massage</h3>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="relative w-full">
                            <div className="aspect-[4/3] md:aspect-[3/4] w-full overflow-hidden max-w-xs mx-auto">
                                <img 
                                    className="w-full h-full object-cover"
                                    src={images.noteTaking}
                                    alt="Contact Me"
                                />
                                <Link to="/contact">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-light-pink-custom px-8 py-2 min-w-[200px] text-center rounded-2xl">
                                        <h3 className="text-lg tracking-widest uppercase text-gray-800">Contact Me</h3>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Desktop and Mobile Responsive Layout For White background section*/}
                <div className="w-full bg-white h-auto md:h-[40vh]">
                    {/* For larger screens - horizontal layout with full height image */}
                    <div className="hidden md:flex items-center justify-center w-full h-full">
                        <div className="flex flex-col px-8 max-w-[30vw] space-y-3">
                            <h1 className="text-3xl font-heading font-bold text-light-teal-custom">Thrive Naturally, Live Fully</h1>
                            <p className="text-xl">Using the wisdom of Ayurveda, my goal is to see you for the unique person you are while recognizing the patterns of feedback the body provides.</p>
                            <p className="text-xl max-w-[30vw]">
                                <b>Who benefits from Ayurveda?</b> The short answer - everyone can benefit from
                                becoming more connected to their body and gaining understanding on how to
                                support it.
                            </p>
                            <p className="text-xl">Clients who best match with <span className="font-handwriting font-bold text-green-custom">Your Health, Your Path </span> are
                                ready to take a step forward; whether it be that they finally decide to relax with a warm oil massage or are ready to take larger steps for their overall health 
                                and well-being.
                            </p>
                            <p className="text-xl">
                                I gladly Serve to assist you along your way; it is a delight to celebrate all of the progress as you travel forward.
                            </p>
                        </div>
                        <img src={images.pathway} className="h-full" alt="Ayurveda pathway" />
                    </div>

                    {/* For mobile screens - vertical layout */}
                    <div className="md:hidden flex flex-col items-center pt-8 space-y-4">
                        <h1 className="text-2xl justify-start font-heading font-bold text-light-teal-custom px-4">Thrive Naturally, Live Fully</h1>
                        <p className="text-xl px-4">Using the wisdom of Ayurveda, my goal is to see you for the unique person you are while recognizing the patterns of feedback the body provides.</p>
                        <p className="text-xl px-4">
                            <b>Who benefits from Ayurveda?</b> The short answer - everyone can benefit from
                            becoming more connected to their body and gaining understanding on how to
                            support it.
                        </p>
                        <p className="text-xl px-4">Clients who best match with <span className="font-handwriting font-bold text-green-custom">Your Health, Your Path </span> are
                            ready to take a step forward; whether it be that they finally decide to relax with a warm oil massage or are ready to take larger steps for their overall health 
                            and well-being.
                        </p>
                        <p className="text-xl px-4">
                            I gladly Serve to assist you along your way; it is a delight to celebrate all of the progress as you travel forward.
                        </p>
                        <img src={images.pathway} className="w-full" alt="Ayurveda pathway" />
                    </div>
                </div>
                <div className="flex items-center justify-center w-full h-auto min-h-[15vh] md:h-[20vh] py-4 bg-green-custom">
                {/* Desktop layout - horizontal with all elements */}
                    <div className="hidden md:flex items-center justify-center gap-8">
                        <img src={images.yhypWhiteNoBackground} className="max-h-[10vh]" alt="Logo" />
                        <div className="h-[1px] bg-white w-[30vw]"></div>
                        <p className="text-white font-handwriting text-center text-4xl lg:text-6xl">My Services</p>
                        <div className="h-[1px] bg-white w-[30vw]"></div>
                        <img src={images.yhypWhiteNoBackground} className="max-h-[10vh]" alt="Logo" />
                    </div>
                    
                    {/* Mobile layout - simplified version */}
                    <div className="flex md:hidden flex-col items-center justify-center gap-4 py-2">
                        <img src={images.yhypWhiteNoBackground} className="max-h-[8vh]" alt="Logo" />
                        <div className="flex items-center justify-center w-full gap-3">
                            <div className="h-[1px] bg-white w-16"></div>
                            <p className="text-white font-handwriting text-center text-3xl px-2">My Services</p>
                            <div className="h-[1px] bg-white w-16"></div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center w-full py-8" id="consult">
                    <div className="w-full md:max-w-[70vw] mx-auto">
                        <h1 className="font-heading pl-4 font-bold text-3xl md:text-4xl text-light-teal-custom pb-4 lg:pb-8">My Process:</h1>
                        <div className="space-y-6 px-4 md:ml-16">
                            <div>
                                <p className="text-xl md:text-2xl font-heading uppercase text-dark-coral-custom font-semibold mb-2">Step 1:</p>
                                <p className="text-base md:text-xl ml-8">
                                    Start by Scheduling a Free 20 min. phone consult to see if working with Your
                                    Health, Your Path is right for you. This is completely open-ended, there is no obligation.
                                    This is a chat about your (health) goals, and an opportunity to gain clarity
                                    about the offerings of Your Health, Your Path.  
                                </p>
                            </div>
                            <div>
                                <p className="text-xl md:text-2xl font-heading uppercase text-dark-coral-custom font-semibold mb-2">Step 2:</p>
                                <div className="ml-8">
                                    <p className="mb-2">You want to move forward. Great, now we get started!</p>
                                    <p className="text-base md:text-xl">
                                        We schedule your first appointment.
                                        You will receive an in-depth questionnaire to complete and submit at least 72hrs
                                        before the first appointment.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p className="text-xl md:text-2xl font-heading uppercase text-dark-coral-custom font-semibold mb-2">Step 3:</p>
                                <div className="ml-8">
                                    <p className="text-base md:text-xl font-semibold mb-1">1st appointment (90 minutes)</p>
                                    <p className="text-base md:text-xl mb-2">Included during this appointment:</p>
                                    <ul className="list-disc pl-5 text-base md:text-xl space-y-1">
                                        <li>Deep dive into current health and health history.</li>
                                        <li>Pulse diagnosis (in person only)</li>
                                        <li>Tongue diagnosis</li>
                                        <li>We discuss Ayurveda along the way, so you begin to deepen your
                                        understanding of what it is and how it can help you along your path.</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <p className="text-xl md:text-2xl font-heading uppercase text-dark-coral-custom font-semibold mb-2">Step 4:</p>
                                <div className="ml-8">
                                    <p className="text-base md:text-xl font-semibold mb-1">2nd Appointment (60 minutes)</p>
                                    <p className="text-base md:text-xl">
                                        During this appointment, your will learn about your Ayurvedic type, and what areas, if any, you
                                        are currently out of balance.
                                    </p>
                                    <p className="text-base md:text-xl mt-2">
                                        You will receive a laid out plan with advice for your specific situation. It will include diet,
                                        lifestyle- and if appropriate herbal supplement- advice. Depending on your needs there can be
                                        cooking tips, and recommendations for (self) massage, yoga asanas, and breathing techniques.
                                    </p>
                                    <p className="text-base md:text-xl mt-2">
                                        The advice is tailored for you and your lifestyle. It will also be laid out according to the length
                                        of plan you have selected (1 month, 3 months or 6 months) Both the 3 and 6 month plans will
                                        be monitored and adjusted along your journey.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p className="text-xl md:text-2xl font-heading uppercase text-dark-coral-custom font-semibold mb-2">Step 5:</p>
                                <div className="ml-8">
                                    <p className="text-base md:text-xl">
                                        You begin walking your path with Ayurveda. The remaining steps depend upon what
                                        best fits your needs, and what package you selected.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:max-w-[70vw] max-w-full mx-auto px-4 md:px-0">
                    <h1 className="font-heading font-bold text-3xl md:text-4xl text-light-teal-custom">Consult Packages:</h1>
                </div>
                <div className="flex flex-col justify-center items-center px-4 py-4 md:px-6">
                    <ConsultCards />
                    <div className="w-full max-w-4xl mx-auto text-base md:text-lg lg:text-xl space-y-6 mt-2">
                        <p className="text-center text-sm md:text-base italic">
                            *If supplements are advised, guidance is given for trusted sources. Your Health, Your Path does not sell supplements, thus the cost for supplements is additional.
                        </p>
                        
                        <p className="text-center">
                            Health is important for Everyone. If you want to work with me, but your budget is constricted, please
                            reach out so we can discuss payment options. 
                            <span className="">
                                Ideally we can find an option that fits your needs and
                                helps you reach your health goals.
                            </span>
                        </p>
                    </div>
                </div>
                <div className="w-full md:max-w-[70vw] max-w-full mx-auto px-4 py-4 md:px-0">
                    <h1 className="font-heading font-bold pb-8 text-3xl md:text-4xl text-light-teal-custom">Massages:</h1>
                </div>
                <div className="flex flex-col justify-center items-center pb-12">
                    <MassageCards />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ServicesPage;