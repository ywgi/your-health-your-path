import { Link } from "react-router-dom";
import './HomePage.css'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";
import images from '../content/images'

const HomePage2 = () => {
    return (
        <>
            <Header/>
            <div className="flex flex-col items-center w-screen lg:w-screen">
                <div className="flex w-full items-start justify-center px-12 pt-12 pb-25 gap-12">
                    <div className="flex max-w-[40vw] justify-center flex-col text-left">
                        <h1 className="text-4xl justify-center">
                            You <span className="font-handwriting">want to</span> prioritize your health and are looking for help along your way.
                        </h1>
                        <p className="text-[1.75rem] font-barlow">
                            <span className="font-handwriting font-black text-2xl">Hi I'm Jacklyn</span>,<br/>
                            an Ayurvedic Practitioner, who is here to help you thrive and live fully, 
                            <span className="font-handwriting font-black text-green-custom"> naturally.</span> I look at your <b>individual needs</b> and <b>goals </b>
                            and <b>create a personalized plan</b> to help you along your unique path.
                        </p>
                        <a href="#feel-better" 
                           className="self-center mt-5 px-5 py-5 text-4xl font-helvetica text-coral-custom border-2 border-black rounded hover:bg-green-custom hover:text-white hover:border-transparent transition-colors">
                            Learn more
                        </a>
                    </div>
                    <img className="max-h-[45rem] jacky" 
                        src={images.jackySection1}
                        alt="Jacky"/>
                </div>

                <div className="relative w-full h-60 bg-teal-custom border-b-2 border-black">
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center rounded px-10 py-10 leading-loose font-lexend text-[2.5rem] text-white whitespace-nowrap">
                        "The natural force within each of us is the greatest healer of all."
                        <br/>
                        -Hippocrates
                    </span>
                </div>

                <div id="feel-better" className="flex justify-center w-screen gap-8 pb-25">
                    <img className="max-h-[55rem] cwb" src={images.coffeeWithBook} alt="Coffee with book" />
                    <div className="flex max-w-[40vw] justify-center flex-col text-left">
                        <h1 className="text-4xl justify-center">Are you ready to feel better?</h1>
                        <h2 className="text-3xl justify-center">It's time to be empowered with your health.</h2>
                        <p className="text-[1.5rem] font-niramit leading-loose max-w-[800px]">
                            Clients who come to me know that they have a powerful ability to positively influence how they feel.
                            For them - just getting by isn't enough; they want to be full of energy and vibrant. 
                            <b> Health is holistic </b> - the body's systems are interconnected and just like a spider's web,
                            when you pull on one thread, everything is affected. Better sleep, less stress, good digestion,
                            and a tailored diet are some of the ways I can help you strengthen your interconnected health.
                            <br/>
                        </p>
                        <p>
                            Clients want to stop playing a symptom chasing Whac-A-Mole and instead get to the root of the problem.
                            Using the scientific wisdom of <b>Ayurveda</b> - a system of medicine <b>recognized by the World Health Organization</b> -
                            I help cut through all the conflicting health noise and by following your unique history, a plan is created specifically
                            tailored for you and your needs - all in a realistic, do-able way. Because life is busy enough, let's make being healthy 
                            a whole lot easier.
                        </p>
                        <Link to="/" 
                              className="self-center mt-5 px-5 py-5 text-4xl font-helvetica text-coral-custom border-2 border-black rounded hover:bg-green-custom hover:text-white hover:border-transparent transition-colors">
                            Take the first steps
                        </Link>
                    </div>
                </div>

                <div className="flex justify-center w-full gap-8 p-8">
                    <div className="flex max-w-[40vw] justify-center flex-col text-left">
                        <h1 className="font-handwriting font-black text-[4rem] pl-4">Hi, I'm Jacky!</h1>
                        <p className="pl-4 text-[1.5rem] font-['Noto_sans'] leading-loose">

                            The American born, Netherlands living, former teacher who made the switch to ayurveda because feeling good makes enjoying life so much easier!
                            <br/><br/>  
                            The short version: Ayurveda helped me on my health journey feel better than I even knew was possible. Calmer in my mind, and more connected to my body.
                            <br/><br/>
                            Enthusiasm and curiosity fueled me: <i>How did this work?</i>
                            <br/><br/>
                            Before I knew it, I was back in school. Studying ayurveda for 4 years only increased my passion. Now, I get to enthusiastically share it with others as they travel their path... 
                        </p>
                        <Link to="/" 
                              className="self-center mt-5 px-5 py-5 text-4xl font-helvetica text-coral-custom border-2 border-black rounded hover:bg-green-custom hover:text-white hover:border-transparent transition-colors">
                            Meet Jacky
                        </Link>
                    </div>
                    <img className="max-h-[50rem] jacky2" src={images.JackySection3} alt="Jacky" />
                </div>

                <div className="flex justify-center w-screen m-0 p-0">
                    <Reviews />
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default HomePage2;