import { Link } from "react-router-dom";
import './HomePage.css'
import Header from "../components/Header";
import Footer from "../components/Footer";
import images from '../content/images'
import TestimonialsSlider from "../components/Testimonials";

const HomePage = () => {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center w-full">
                {/* First Section */}
                <div className="flex flex-col lg:flex-row w-full items-center lg:items-start justify-center lg:px-12 pt-6 lg:pt-12 lg:pb-24 gap-6 lg:gap-12">
                    {/* Text container */}
                    <div className="flex w-full lg:max-w-3xl justify-center flex-col text-left px-4 lg:px-0">
                        <h1 className="text-2xl lg:text-5xl tracking-wide mb-4">
                            Maybe You... 
                        </h1>
                        <ul className="pl-4 lg:pl-16 lg:text-2xl">
                            <li className="flex items-start gap-3">
                                <span className="text-green-custom mt-1 gap-3 lg:">•</span>
                                <span className="leading-relaxed">(are ready to) prioritize your health...</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-custom mt-1">•</span>
                                <span className="leading-relaxed">recognize that you could feel better...</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-custom mt-1">•</span>
                                <span className="leading-relaxed">are curious how ayurveda could enrich your life…</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-custom mt-1">•</span>
                                <span className="leading-relaxed">want to be in touch with your body's natural rhythms…</span>
                            </li>
                        </ul>
                        <p className="text-lg sm:text-xl lg:text-3xl space-y-4 leading-snug">
                            <br/>
                            <span className="font-handwriting2 font-black text-3xl lg:text-6xl block mb-4">
                                Hi there, I'm Jacklyn.
                            </span>
                            <span className="block">
                                An Ayurvedic Practitioner, who is here to help you thrive and live fully, 
                                <span className="font-handwriting font-black text-green-custom lg:text-4xl"> naturally.</span>
                            </span>
                            <span className="block">
                                I look at your <b>individual needs</b> and <b>goals</b> and <b>create a personalized plan</b> to help you along your unique path.
                            </span>
                        </p>
                        <a href="#feel-better" 
                            className="self-center mt-10 px-3 py-1 lg:px-4 lg:py-2 text-xl lg:text-2xl font-helvetica rounded-3xl text-white bg-green-custom hover:bg-teal-custom hover:text-white hover:border-transparent transition-colors">
                            Learn more
                        </a>
                    </div>
                    {/* Image container for mobile full-width */}
                    <div className="relative w-full lg:w-auto">
                        {/* Background decorative block */}
                        <div className="absolute top-0 right-0 w-full h-full bg-teal-custom -z-10 hidden lg:block origin-top-right scale-90" />

                        {/* Main image container */}
                        <div className="w-full lg:w-auto relative lg:mt-8 lg:mr-8">
                            <img 
                                className="w-full lg:w-auto lg:max-h-[50rem] object-cover shadow-lg animate-[fade-in_1s_ease-out] opacity-0 [animation-fill-mode:forwards]"
                                src={images.jackySection1}
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                <div className="relative w-full min-h-[12rem] lg:min-h-[20rem] bg-teal-custom  py-8 lg:py-12">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%]">
                        <span className="block text-center px-4 lg:px-10 leading-relaxed font-lexend text-lg sm:text-2xl lg:text-4xl xl:text-[2.5rem] text-white">
                            "The natural force within each of us is the greatest healer of all."
                            <span className="block mt-4 lg:mt-8 text-base sm:text-xl lg:text-2xl xl:text-3xl">-Hippocrates</span>
                        </span>
                    </div>
                </div>

                {/* Second Section */}
                <div id="feel-better" className="flex flex-col lg:flex-row justify-center w-full gap-6 lg:gap-20 pt-10 pb-12 lg:pb-20">
                    <div className="relative w-[90%] lg:w-[40%] mx-auto lg:mx-0 lg:mb-32">
                        <div className="aspect-[4/3]">
                            <img 
                                className="w-[75%] border-8 border-coral-custom" 
                                src={images.massageTools} 
                                alt="Massage Tools" 
                            />
                            <img
                                className="absolute w-[60%] bottom-[-15%] right-[5%] border-8 border-coral-custom"  
                                src={images.holistic}
                                alt="Holistic"
                            />
                            <img
                                className="absolute w-[20%] top-[10%] right-0"
                                src={images.yhypLogoNoBackground}
                                alt="Logo"
                            />
                        </div>
                    </div>
                    <div className="flex w-full lg:max-w-[40vw] flex-col mt-16 lg:mt-16 text-left px-4 lg:px-0">
                            <h1 className="text-3xl text-purple-custom lg:text-5xl justify-center mb-4 pb-2">Are you ready to feel better?</h1>
                            <h2 className="text-2xl lg:text-4xl justify-center mb-4 pb-2">It's time to be empowered with your health.</h2>
                            <p className="text-lg lg:text-[1.5rem] leading-tight max-w-[800px]">
                                Clients who come to me know that they have a powerful ability to positively influence how they feel.
                                For them - just getting by isn't enough; they want to be full of energy and vibrant. 
                                <b> Health is holistic </b> - the body's systems are interconnected and just like a spider's web,
                                when you pull on one thread, everything is affected. Better sleep, less stress, good digestion,
                                and a tailored diet are some of the ways I can help you strengthen your interconnected health.<br/><br/>
                                Clients want to stop playing a symptom chasing Whac-A-Mole and instead get to the root of the problem.
                                Using the scientific wisdom of <b>Ayurveda</b> - a system of medicine <b>recognized by the World Health Organization</b> -
                                I help cut through all the conflicting health noise and by following your unique history, a plan is created specifically
                                tailored for you and your needs - all in a realistic, do-able way. Because life is busy enough, let's make being healthy 
                                a whole lot easier.
                            </p>
                            <Link to="/" 
                                    className="self-center mt-10 px-6 py-4 lg:px-8 lg:py-2 text-xl lg:text-2xl font-helvetica rounded-3xl text-white bg-green-custom hover:bg-teal-custom hover:text-white hover:border-transparent transition-colors">
                                Take the first steps
                            </Link>
                    </div>
                </div>

                {/* Third Section */}
                <div className="flex flex-col lg:flex-row justify-center w-full gap-6 lg:gap-8 pb-12">
                    {/* Text container - add order-2 for mobile */}
                    <div className="flex w-full lg:max-w-[40vw] justify-center flex-col text-left px-4 lg:px-0 order-2 lg:order-1">
                        <h1 className="font-handwriting2 font-black text-3xl lg:text-[4rem] pl-0 lg:pl-4">Hi, I'm Jacklyn!</h1>
                        <p className="pl-0 lg:pl-4 text-lg lg:text-[1.5rem] leading-tight mt-4">
                            The American born, Netherlands living, former teacher who made the switch to ayurveda because feeling good makes enjoying life so much easier! 
                        </p>
                        <p className="pl-0 lg:pl-4 text-lg lg:text-[1.5rem] leading-tight mt-4">
                            The short version: Ayurveda helped me on my health journey feel better than I even knew was possible. Calmer in my mind, and more connected to my body.
                        </p>
                        <p className="pl-0 lg:pl-4 text-lg lg:text-[1.5rem] leading-tight mt-4">
                            Enthusiasm and curiosity fueled me:
                        </p>
                        <p className="font-handwriting text-3xl lg:text-5xl font-bold text-center mt-4">
                            <i>How did this work?</i>
                        </p>
                        <p className="pl-0 lg:pl-4 text-lg lg:text-[1.5rem] leading-tight mt-4">
                            Before I knew it, I was back in school. Studying ayurveda for 4 years only increased my passion. Now, I get to enthusiastically share it with others as they travel their path... 
                        </p>
                        <Link to="/" 
                            className="self-center mt-10 px-6 py-4 lg:px-8 lg:py-2 text-xl lg:text-2xl font-helvetica rounded-3xl text-white bg-green-custom hover:bg-teal-custom hover:text-white hover:border-transparent transition-colors">
                            A little about me...
                        </Link>
                    </div>
                    {/* Image container - add order-1 for mobile */}
                    <div className="w-full lg:w-auto order-1 lg:order-2">
                        <img className="w-full lg:w-auto lg:max-h-[40rem] object-cover" 
                            src={images.JackySection3} 
                            alt="Jacky" />
                    </div>
                </div>
                <div className="flex justify-center w-full">
                    <TestimonialsSlider />
                </div>
                {/* Section with fixed background */}
                <div className="w-full relative h-[50vh] bg-fixed bg-center bg-cover bg-no-repeat"
                    style={{
                        backgroundImage: `url(${images.walkYourPath})`
                    }}>
                    <div className="relative h-full flex items-center justify-center">
                        <div className="bg-white/70 backdrop-blur-sm p-8 rounded-lg shadow-lg max-w-2xl mx-4">
                            <p className="text-center text-xl mb-6">
                                Ready to start your journey towards better health?
                            </p>
                            <button className="px-10 py-4 bg-green-custom text-white text-xl hover:bg-teal-custom transition-colors duration-200 rounded-lg w-full">
                                Schedule a Consult
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default HomePage;

