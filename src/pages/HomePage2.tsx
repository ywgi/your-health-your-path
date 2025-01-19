import { Link } from "react-router-dom";
import './HomePage.css'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";
import images from '../content/images'


const homePage = () => {
    return (
        <>
            <Header/>
            <div className="home-container">
                <div className="first-section">
                    <div className='text-with-button'>
                        <h1>
                            You <span className="handwriting">want to</span> prioritize your health and are looking for help along your way.
                        </h1>
                        <p>
                            <span className="jacky-handwriting">Hi I'm Jacklyn</span>,<br/>
                            an Ayurvedic Practitioner, who is here to help you thrive and live fully, <span className="color-handwriting"> naturally.</span> I look at your <b>individual needs</b> and <b>goals </b>
                            and <b>create a personalized plan</b> to help you along your unique path.
                        </p>
                        <a href="#feel-better">
                            Learn more
                        </a>
                    </div>
                    <img className="jacky" 
                        src={images.jackySection1}/>
                </div>
                <div className="quote-divider">
                    <span className="quote">
                        "The natural force within each of us is the greatest healer of all."
                        <br/>
                        -Hippocrates
                    </span>
                </div>
                <div className="second-section" id="feel-better">
                    <img className="cwb" src={images.coffeeWithBook} />
                    <div className="text-with-button">
                        <h1>Are you ready to feel better?</h1>
                        <h2>It's time to be empowered with your health.</h2>
                        <p>
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
                        <Link to="/" className="link-button">
                            Take the first steps
                        </Link>
                    </div>
                </div>
                <div className="third-section">
                    <div className="text-with-button">
                        <h1 className="jacky-handwriting-2">Hi, I’m Jacky!</h1>
                        <p>
                            The American born, Netherlands living, former teacher who made the switch to ayurveda because feeling good makes enjoying life so much easier!
                            <br/><br/>  
                            The short version: Ayurveda helped me on my health journey feel better than I even knew was possible. Calmer in my mind, and more connected to my body.
                            <br/><br/>
                            Enthusiasm and curiosity fueled me: <i>How did this work?</i>
                            <br/><br/>
                            Before I knew it, I was back in school. Studying ayurveda for 4 years only increased my passion. Now, I get to enthusiastically share it with others as they travel their path... 
                        </p>
                        <Link to="/" className="link-button">
                            Meet Jacky
                        </Link>
                    </div>
                    <img className='jacky2' src={images.JackySection3} />
                </div>
                <div className="review-section">
                    <Reviews />
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default homePage;