import { Link } from "react-router-dom";
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
                <div className="flex flex-col w-full justify-center items-center md:flex-row md:items-center md:px-8 md:pb-12 lg:flex-row lg:items-center lg:px-12 pt-6 lg:pt-12 lg:pb-24 gap-6 lg:gap-12">
                    {/* Text container */}
                    <div className="flex w-full lg:max-w-xl justify-center flex-col text-left px-4 lg:px-0">
                        <h1 className="text-2xl lg:text-4xl tracking-wide mb-4">
                            Maybe You... 
                        </h1>
                        <ul className="pl-4 lg:pl-16 lg:text-xl">
                            <li className="flex items-start gap-3">
                                {/* <span className="text-green-custom gap-3">•</span> */}
                                <span className="leading-snug">(are ready to) prioritize your health...</span>
                            </li>
                            <li className="flex items-start gap-3">
                                {/* <span className="text-green-custom">•</span> */}
                                <span className="leading-snug">recognize that you could feel better...</span>
                            </li>
                            <li className="flex items-start gap-3">
                                {/* <span className="text-green-custom">•</span> */}
                                <span className="leading-snug">are curious how ayurveda could enrich your life…</span>
                            </li>
                            <li className="flex items-start gap-3">
                                {/* <span className="text-green-custom">•</span> */}
                                <span className="leading-snug">want to be in touch with your body's natural rhythms…</span>
                            </li>
                        </ul>
                        <br />
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl space-y-4 leading-snug pt-4">
                            <span className="font-handwriting2 font-black text-3xl md:text-4xl lg:text-5xl block mb-4">
                                Hi there, I'm Jacklyn.
                            </span>
                            <span className="block md:text-xl lg:text-xl">
                                An Ayurvedic Practitioner, who is here to help you thrive and live fully, 
                                <span className="font-handwriting font-black text-green-custom lg:text-4xl"> naturally.</span>
                            </span>
                            <span className="block md:text-xl lg:text-xl">
                                I look at your <b>individual needs</b> and <b>goals</b> and <b>create a personalized plan</b> to help you along your unique path.
                            </span>
                        </p>
                        <a 
                            href="#feel-better" 
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                e.preventDefault();
                                const element = document.getElementById('feel-better');
                                if (element) {
                                element.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                });
                                }
                            }}
                            className="self-center mt-10 px-3 py-3 lg:px-4 lg:py-2 text-xl lg:text-2xl font-helvetica rounded-3xl text-white bg-green-custom hover:bg-teal-custom hover:text-white hover:border-transparent transition-colors duration-500"
                            >
                            Learn more
                        </a>
                    </div>
                    {/* Image container for mobile full-width */}
                    <div className="relative w-full lg:w-auto self-center">
                        {/* Background decorative block */}
                        <div className="absolute top-0 right-0 w-full h-full bg-teal-custom -z-10 md:block origin-top-right scale-90" />

                        {/* Main image container */}
                        <div className="w-full md:w-auto lg:w-auto relative md:mt-4 md:mr-4 lg:mt-8 lg:mr-8">
                            <img 
                                className="w-full lg:w-auto lg:max-h-[40rem] object-cover shadow-lg animate-[fade-in_1s_ease-out] opacity-0 [animation-fill-mode:forwards]"
                                src={images.jackySection1}
                                alt="Jacklyn Bestenbreur, Ayurvedic practitioner"
                            />
                        </div>
                    </div>
                </div>

                <div className="relative w-full min-h-[12rem] lg:min-h-[20rem] bg-teal-custom  py-8 lg:py-8">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%]">
                        <span className="block text-center px-4 lg:px-10 leading-relaxed font-quote text-lg sm:text-2xl lg:text-4xl xl:text-[2.5rem] text-white">
                            "The natural force within each of us is the greatest healer of all."
                            <span className="block mt-4 lg:mt-8 text-base sm:text-xl lg:text-2xl xl:text-3xl">-Hippocrates</span>
                        </span>
                    </div>
                </div>

                {/* Second Section */}
                <div id="feel-better" className="flex flex-col md:flex-row lg:flex-row items-center justify-center w-full lg:gap-20 pt-10 md:pt-0 lg:pt-0 pb-6 lg:pb-20">
                    <div className="w-full max-w-2xl mx-auto md:mx-0 px-4 mb-8 md:mb-16 lg:mb-0">
                        <div className="relative aspect-[4/3] w-full">
                            {/* Main image */}
                            <div className="relative w-4/5 sm:w-3/4 z-10">
                            <img 
                                className="w-full border-8 md:border-4 lg:border-8 border-coral-custom object-cover" 
                                src={images.massageTools} 
                                alt="Ayurvedic Massage Tools" 
                            />
                            </div>
                            
                            {/* Overlapping image */}
                            <div className="absolute bottom-0 right-0 w-2/3 sm:w-3/5 transform translate-y-1/4 z-20">
                            <img
                                className="w-full border-8 md:border-4 lg:border-8 border-coral-custom object-cover"  
                                src={images.holistic}
                                alt="Holistic tiles"
                            />
                            </div>
                            
                            {/* Logo */}
                            <div className="absolute top-0 right-0 w-1/5 z-30">
                                <img
                                    className="w-full object-contain"
                                    src={images.yhypLogoNoBackground}
                                    alt="Your Health Your Path Logo, Ayurvedic practice"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full lg:max-w-[40vw] flex-col mt-16 md:mt-4 lg:mt-4 text-left px-4 lg:px-0">
                            <h1 className="text-3xl font-bold font-heading tracking-wide text-light-teal-custom">Are you ready to feel better?</h1>
                            <br/>
                            <h2 className="text-2xl font-heading uppercase tracking-wide text-dark-coral-custom">It's time to be empowered with your health.</h2>
                            <br/>
                            <p className="text-lg lg:text-xl leading-tight max-w-[800px]">
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
                            <Link to="/services" 
                                    className="self-center mt-5 px-3 py-3 lg:px-8 lg:py-2 text-xl lg:text-2xl font-helvetica rounded-3xl text-white bg-green-custom hover:bg-teal-custom hover:text-white hover:border-transparent transition-colors">
                                Take the first steps
                            </Link>
                    </div>
                </div>

                {/* Third Section */}
                <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center w-full gap-6 lg:gap-8 bg-white">
                {/* Text container - add order-2 for mobile */}
                <div className="flex w-full lg:max-w-[40vw] justify-center flex-col text-left px-4 lg:p-4 order-2 md:order-1 lg:order-1">
                    <h1 className="font-handwriting2 font-black text-3xl md:text-4xl lg:text-5xl pl-0 lg:pl-4">Hi, I'm Jacklyn!</h1>
                    <p className="pl-0 lg:pl-4 text-lg lg:text-xl leading-tight mt-4">
                        Born in the States, living in the Netherlands, a former teacher who made the switch to Ayurveda because feeling good makes enjoying life so much easier!
                    </p>
                    <p className="pl-0 lg:pl-4 text-lg md:xl lg:text-xl leading-tight mt-4">
                        <b>My story, the short version</b>: Ayurveda helped me on my health journey feel better than I even knew was possible. Calmer in my mind, and more connected to my body.
                    </p>
                    <p className="pl-0 lg:pl-4 text-lg lg:text-xl leading-tight mt-4">
                        Enthusiasm and curiosity fueled me:
                    </p>
                    <p className="font-handwriting text-3xl lg:text-5xl font-bold text-center mt-4">
                        <i>How did this work?</i>
                    </p>
                    <p className="pl-0 lg:pl-4 text-lg lg:text-xl leading-tight mt-4 mb-8">
                        Before I knew it, I was back in school. Studying Ayurveda for 4 years only increased my passion. Now, I get to enthusiastically share it with others as they travel their path... 
                    </p>
                    <div className="flex justify-center items-center w-full mb-4">
                        <Link to="/about-jacklyn">
                            <button className="px-3 py-3 text-xl lg:text-2xl font-helvetica rounded-full text-white bg-green-custom hover:bg-teal-custom hover:text-white transition-colors">
                                Read more of my story...
                            </button>
                        </Link>
                    </div>
                </div>
                {/* Image container - add order-1 for mobile */}
                <div className="w-full lg:w-auto order-1 lg:order-2">
                    <img className="w-full lg:w-auto lg:max-h-[40rem] object-cover" 
                        src={images.JackySection3} 
                        alt="Jacklyn Bestenbreur, Ayurvedic Practitioner" />
                </div>
            </div>
                <div className="flex justify-center w-full">
                    <TestimonialsSlider />
                </div>
                {/* Section with fixed background */}
                <div className="w-full relative md:h-[60vh] h-[50vh] bg-fixed bg-center bg-cover bg-no-repeat"
                    style={{
                        backgroundImage: `url(${images.walkYourPath})`
                    }}>
                    <div className="relative h-full flex items-center justify-center">
                        <div className="flex flex-col items-center bg-white/70 backdrop-blur-sm p-8 rounded-lg shadow-lg mx-4 w-full md:w-3/4 lg:w-2/3 xl:max-w-4xl">
                            <p className="text-center text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6">
                                Ready to see what ayurveda can do for you?
                            </p>
                            <Link to='/contact'>
                                <button className="px-3 py-2 md:px-4 md:py-4 bg-green-custom text-white text-lg md:text-xl hover:bg-teal-custom transition-colors duration-200 rounded-lg">
                                    Schedule a free 20-minute consult
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default HomePage;

