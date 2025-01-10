import { Link } from "react-router-dom";
import './HomePage.css'
import Header1 from "../components/Header";
import Footer from "../components/Footer";
import images from '../content/images'
import TestimonialsSlider from "../components/Testimonials";

const HomePage3 = () => {
    return (
        <>
            <Header1 />
            <div className="flex flex-col items-center w-full">
                {/* First Section */}
                <div className="flex flex-col lg:flex-row w-full items-center lg:items-start justify-center lg:px-12 pt-6 lg:pt-12 lg:pb-24 gap-6 lg:gap-12">
                    {/* Text container */}
                    <div className="flex w-full lg:max-w-2xl justify-center flex-col text-left px-4 lg:px-0">
                        <h1 className="text-3xl lg:text-4xl leading-tight tracking-wide">
                            You <span className="font-handwriting text-4xl lg:text-6xl text-green-custom">want to</span> prioritize your health and are looking for help along your way.
                        </h1>
                        <p className="text-lg sm:text-xl lg:text-3xl font-barlow mt-8 space-y-4 leading-relaxed">
                            <span className="font-handwriting font-black text-2xl lg:text-5xl block mb-4">
                                Hi, I'm Jacklyn
                            </span>
                            <span className="block">
                                an Ayurvedic Practitioner, who is here to help you thrive and live fully, 
                                <span className="font-handwriting font-black text-green-custom lg:text-4xl"> naturally.</span>
                            </span>
                            <span className="block">
                                I look at your <b>individual needs</b> and <b>goals</b> and <b>create a personalized plan</b> to help you along your unique path.
                            </span>
                        </p>
                        <a href="#feel-better" 
                            className="self-center mt-10 px-6 py-4 lg:px-8 lg:py-5 text-2xl lg:text-4xl font-helvetica text-coral-custom border-2 border-black rounded-lg hover:bg-green-custom hover:text-white hover:border-transparent transition-colors shadow-md hover:shadow-lg">
                            Learn more
                        </a>
                    </div>
                    {/* Image container for mobile full-width */}
                    <div className="w-full lg:w-auto">
                        <img className="w-full lg:w-auto lg:max-h-[45rem] object-cover shadow-lg" 
                            src={images.jackySection1}
                            alt="Jacky"/>
                    </div>
                </div>

                <div className="relative w-full min-h-[12rem] lg:min-h-[20rem] bg-teal-custom  py-8 lg:py-12">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-4xl">
                        <span className="block text-center px-4 lg:px-10 leading-relaxed font-lexend text-lg sm:text-2xl lg:text-4xl xl:text-[2.5rem] text-white">
                            "The natural force within each of us is the greatest healer of all."
                            <span className="block mt-4 lg:mt-8 text-base sm:text-xl lg:text-2xl xl:text-3xl">-Hippocrates</span>
                        </span>
                    </div>
                </div>

                {/* Second Section */}
                <div id="feel-better" className="flex flex-col lg:flex-row justify-center w-full gap-6 lg:gap-20 pb-12 lg:pb-25">
                    <div className="w-full lg:w-auto">
                        <img className="w-full lg:w-auto lg:max-h-[55rem] object-cover" 
                             src={images.coffeeWithBook} 
                             alt="Coffee with book" />
                    </div>
                    <div className="flex w-full lg:max-w-[40vw] justify-center flex-col text-left px-4 pt-10 lg:px-0">
                        <h1 className="text-3xl lg:text-5xl justify-center pb-2">Are you ready to feel better?</h1>
                        <h2 className="text-2xl lg:text-4xl justify-center mt-4 pb-2">It's time to be empowered with your health.</h2>
                        <p className="text-lg lg:text-[1.5rem] font-niramit leading-loose max-w-[800px] mt-4">
                            Clients who come to me know that they have a powerful ability to positively influence how they feel.
                            For them - just getting by isn't enough; they want to be full of energy and vibrant. 
                            <b> Health is holistic </b> - the body's systems are interconnected and just like a spider's web,
                            when you pull on one thread, everything is affected. Better sleep, less stress, good digestion,
                            and a tailored diet are some of the ways I can help you strengthen your interconnected health.<br/>
                            Clients want to stop playing a symptom chasing Whac-A-Mole and instead get to the root of the problem.
                            Using the scientific wisdom of <b>Ayurveda</b> - a system of medicine <b>recognized by the World Health Organization</b> -
                            I help cut through all the conflicting health noise and by following your unique history, a plan is created specifically
                            tailored for you and your needs - all in a realistic, do-able way. Because life is busy enough, let's make being healthy 
                            a whole lot easier.
                        </p>
                        <Link to="/" 
                              className="self-center mt-5 px-4 py-3 lg:px-5 lg:py-5 text-2xl lg:text-4xl font-helvetica text-coral-custom border-2 border-black rounded hover:bg-green-custom hover:text-white hover:border-transparent transition-colors">
                            Take the first steps
                        </Link>
                    </div>
                </div>

                {/* Third Section */}
                <div className="flex flex-col lg:flex-row justify-center w-full gap-6 lg:gap-8 pb-12">
                    {/* Text container - add order-2 for mobile */}
                    <div className="flex w-full lg:max-w-[40vw] justify-center flex-col text-left px-4 lg:px-0 order-2 lg:order-1">
                        <h1 className="font-handwriting font-black text-3xl lg:text-[4rem] pl-0 lg:pl-4">Hi, I'm Jacky!</h1>
                        <p className="pl-0 lg:pl-4 text-lg lg:text-[1.5rem] font-['Noto_sans'] leading-loose mt-4">
                            The American born, Netherlands living, former teacher who made the switch to ayurveda because feeling good makes enjoying life so much easier!
                            <br/>
                            The short version: Ayurveda helped me on my health journey feel better than I even knew was possible. Calmer in my mind, and more connected to my body.
                            <br/>
                            Enthusiasm and curiosity fueled me: <i>How did this work?</i>
                            <br/>
                            Before I knew it, I was back in school. Studying ayurveda for 4 years only increased my passion. Now, I get to enthusiastically share it with others as they travel their path... 
                        </p>
                        <Link to="/" 
                            className="self-center mt-5 px-4 py-3 lg:px-5 lg:py-5 text-2xl lg:text-4xl font-helvetica text-coral-custom border-2 border-black rounded hover:bg-green-custom hover:text-white hover:border-transparent transition-colors">
                            Meet Jacky
                        </Link>
                    </div>
                    {/* Image container - add order-1 for mobile */}
                    <div className="w-full lg:w-auto order-1 lg:order-2">
                        <img className="w-full lg:w-auto lg:max-h-[50rem] object-cover" 
                            src={images.JackySection3} 
                            alt="Jacky" />
                    </div>
                </div>

                <div className="flex justify-center w-full">
                    <TestimonialsSlider />
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default HomePage3;


