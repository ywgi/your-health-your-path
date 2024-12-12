import { Link } from "react-router-dom";
import './HomePage.css'
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import { newsletterParagraph, therapyParagraph, meditationParagraph } from "../content/services";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";


const homePage = () => {
    return (
        <>
            <Header/>
            <div className="home-container">
                <div className="first-section">
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
                    <img className="jacky" 
                        src="src\images\jacky\Jacklyn10b.jpg"/>
                </div>
                <div className="quote-divider">
                    <span className="quote">
                        "The natural force within each of us is that greatest healer of all."
                        <br/>
                        -Hippocrates
                    </span>
                </div>
                <div className="second-section">
                    <img className="jacky2" src="src\images\jacky\Jacklyn9.jpg" />
                    <div className="text-with-button">
                        <h1>I'll be your guide!</h1>
                        <p>
                            Life's challenges know no bounds, which is why we offer a safe and nurturing space for exploration, understanding, and healing, both in-person and online. 
                            Our range of therapeutic services, including individual counseling, couples therapy, and mindfulness coaching, are tailored to meet your unique needs. 
                        </p>
                        <Link to="/" className="link-button">
                            Meet Jacky
                        </Link>
                    </div>
                </div>
                <div className="services-section">
                    <h1>Services</h1>
                    <div className="service-cards">
                        <ServiceCard 
                            title="Newsletter" 
                            img="src\images\coffee-with-book.jpg"
                            paragraph={newsletterParagraph}
                            text="Sign up!"/>
                        <ServiceCard
                            title="In-House Therapy" 
                            img="src\images\jacky\Jacklyn7.jpg"
                            paragraph={therapyParagraph}
                            text="Request a consultation"/>
                        <ServiceCard 
                            title="Guided Meditation" 
                            img="src\images\meditate.jpg"
                            paragraph={meditationParagraph}
                            text="Meditate"/>
                    </div>
                </div>
                <Reviews />
            </div>
            <Footer/>
        </>
    );
}

export default homePage;