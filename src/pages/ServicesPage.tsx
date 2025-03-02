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
                                <a href="#consult">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-light-pink-custom px-8 py-2 min-w-[200px] text-center">
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
                                <a href="#massage">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-light-pink-custom px-8 py-2 min-w-[200px] text-center">
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
                                    <div className="bg-light-pink-custom px-8 py-2 min-w-[200px] text-center">
                                        <h3 className="text-lg tracking-widest uppercase text-gray-800">Contact Me</h3>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-white flex items-center justify-center h-[40vh]">
                    <div className="flex flex-col px-8">
                        <p className="text-2xl font-heading font-bold text-light-teal-custom max-w-[30vw]">Taking these differences into account, that's what ayurveda does.</p>
                        <br/>
                        <p className="text-2xl max-w-[30vw]">
                        Ayurveda doesn't give a one-size-fits-all approach. Instead, it looks at who <strong>you are </strong>
                        and <strong>where you're at</strong> and helps you <strong>navigate your way from right there.</strong>
                        </p>
                    </div>
                    <img src={images.pathway}  className="max-h-full"/>
                </div>
                <div className="flex items-center justify-center w-full h-[20vh] text-6xl bg-green-custom">
                    <div className="flex items-center justify-center gap-8">
                        <img src={images.yhypWhiteNoBackground} className="max-h-[10vh]" />
                        <div className="h-[1px] bg-white w-[30vw]"></div>
                        <p className="text-white font-handwriting text-center">My Services</p>
                        <div className="h-[1px] bg-white w-[30vw]"></div>
                        <img src={images.yhypWhiteNoBackground} className="max-h-[10vh]"/>
                    </div>
                </div>
                <div className="flex justify-center items-center w-full py-10 text-xl">
                    <div className="max-w-[60vw] mx-auto">
                        <h1 className="font-heading font-bold text-4xl text-light-teal-custom">My Process:</h1>
                        <br/>
                        <p>
                            <span className="text-2xl font-heading uppercase text-dark-coral-custom">Step 1:</span> Start by Scheduling a Free 20 min. phone consult to see if working with Your
                            Health, Your Path is right for you. This is completely open-ended, there is no obligation.
                            This is a chat about your (health) goals, and an opportunity to gain clarity
                            about the offerings of Your Health, Your Path.  
                        </p>
                        <br/>
                        <p>
                            You want to move forward. Great, now we get started!
                            <br/>
                            <span className="text-2xl font-heading uppercase text-dark-coral-custom">Step 2:</span> We schedule your first appointment.
                            You will receive an in-depth questionnaire to complete and submit at least 72hrs
                            before the first appointment.
                        </p>
                        <br/>
                        <p>
                            <span className="text-2xl font-heading uppercase text-dark-coral-custom">Step 3:</span> 1 st appointment (90 minutes)
                            Included during this appointment:

                            Deep dive into current health and health history.
                            Pulse diagnosis (in person only)
                            Tongue diagnosis
                            We discuss Ayurveda along the way, so you begin to deepen your
                            understanding of what it is and how it can help you along your path.
                        </p>
                        <br/>
                        <p>
                            <span className="text-2xl font-heading uppercase text-dark-coral-custom">Step 4:</span> 2nd Appointment (60 minutes)
                            During this appointment, your will learn about your Ayurvedic type, and what areas, if any, you
                            are currently out of balance.
                            You will receive a laid out plan with advice for your specific situation. It will include diet,
                            lifestyle- and if appropriate herbal supplement- advice. Depending on your needs there can be
                            cooking tips, and recommendations for (self) massage , yoga asanas, and breathing techniques.
                            The advice is tailored for you and your lifestyle. It will also be laid out according to the length
                            of plan you have selected (1 month, 3 months or 6 months) Both the 3 and 6 month plans will
                            be monitored and adjusted along your journey.
                        </p>
                        <br/>
                        <p>
                            <span className="text-2xl font-heading uppercase text-dark-coral-custom">Step 5:</span> You begin walking your path with Ayurveda. The remaining steps depend upon what
                            best fits your needs, and what package you selected.
                        </p>
                    </div>
                </div>
                <div className="max-w-[60vw] mx-auto">
                    <h1 className="font-heading font-bold text-4xl text-light-teal-custom">Consult Packages:</h1>
                </div>
                <div className="flex flex-col justify-center items-center text-xl">
                    <ConsultCards />
                    <p>*If supplements are advised, guidance is given for trusted sources. Your Health, Your Path does not sell supplements, thus the cost for supplements is additional.</p>
                    <br/>
                    <p>Health is important for Everyone. If you want to work with me, but your budget is constricted, please
                        reach out so we can discuss payment options. <br/> Ideally we can find an options that fits your needs and
                        helps you reach your health goals.
                    </p>
                    <br/>
                </div>
                <div className="max-w-[60vw] mx-auto">
                    <h1 className="font-heading font-bold text-4xl text-light-teal-custom">Massage Packages:</h1>
                    <br/>
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