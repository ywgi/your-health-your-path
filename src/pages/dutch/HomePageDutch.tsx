import { Link } from "react-router-dom";
import images from '../../content/images'
import HeaderDutch from "../../components/HeaderDutch";
import TestimonialsSliderDutch from "../../components/TestimonialsDutch";
import FooterDutch from "../../components/FooterDutch";
import openHousePDF from '../../assets/Open house.pdf';
import { useInView } from "react-intersection-observer"; // New: Import useInView hook


const HomePageDutch = () => {

    // Setup hooks for each image
    const [jackySection1Ref, jackySection1InView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    
    const [massageToolsRef, massageToolsInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    
    const [holisticRef, holisticInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    
    const [yhypLogoRef, yhypLogoInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    
    const [jackySection3Ref, jackySection3InView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    
    return (
        <>
           <a 
                href={openHousePDF} 
                download 
                className="hidden md:block bg-green-custom text-white text-center py-2 px-4 w-full text-lg font-semibold hover:bg-[#c17557] transition-colors duration-300 mb-8"
                aria-label="Download information about the open house on September 17, 2025"
            >
                Kom naar mijn Open Huis op 13 september 2025!            
            </a>
            <HeaderDutch />
            <div className="flex flex-col items-center w-full">
                {/* First Section */}
                <div className="flex flex-col w-full justify-center items-center md:flex-row md:items-center md:px-8 md:pb-12 lg:flex-row lg:items-center lg:px-12 pt-6 lg:pt-12 lg:pb-24 gap-6 lg:gap-12">
                    {/* Text container */}
                    <div className="flex w-full lg:max-w-3xl justify-center flex-col text-left px-4 lg:px-0">
                        <h1 className="text-2xl lg:text-4xl tracking-wide mb-4">
                            Misschien bent u...
                        </h1>
                        <ul className="pl-4 lg:pl-16 lg:text-xl">
                            <li className="flex items-start gap-3">
                                {/* <span className="text-green-custom gap-3">•</span> */}
                                <span className="leading-snug">(bent u klaar om) prioriteit te geven aan uw gezondheid...</span>
                            </li>
                            <li className="flex items-start gap-3">
                                {/* <span className="text-green-custom">•</span> */}
                                <span className="leading-snug">erkent dat je je beter zou kunnen voelen...</span>
                            </li>
                            <li className="flex items-start gap-3">
                                {/* <span className="text-green-custom">•</span> */}
                                <span className="leading-snug">nieuwsgierig bent hoe Ayurveda je leven zou kunnen verrijken...</span>
                            </li>
                            <li className="flex items-start gap-3">
                                {/* <span className="text-green-custom">•</span> */}
                                <span className="leading-snug">in contact wilt komen met de natuurlijke ritmes van je lichaam...</span>
                            </li>
                        </ul>
                        <br />
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl space-y-4 leading-snug pt-4">
                            <span className="font-handwriting2 font-black text-3xl md:text-4xl lg:text-5xl block mb-4">
                                Hoi, ik ben Jacklyn.
                            </span>
                            <span className="block md:text-xl lg:text-xl">
                                Een Ayurvedisch Practitioner, die er is om u te helpen bloeien en volledig te leven, op
                                <span className="font-handwriting font-black text-green-custom lg:text-4xl"> natuurlijk wijze.</span>
                            </span>
                            <span className="block md:text-xl lg:text-xl">
                                Ik kijk naar je <b>individuele behoeften</b> en <b>doelen</b> en maak een <b>persoonlijk plan</b> om je te helpen op jouw unieke pad.
                            </span>
                        </p>
                        <a 
                            href="#feel-better" 
                            onClick={(e) => {
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
                            Meer Leren
                        </a>
                    </div>
                    {/* Image container for mobile full-width */}
                    <div className="relative w-full lg:w-auto self-center">
                        {/* Background decorative block */}
                        <div className="absolute top-0 right-0 w-full h-full bg-teal-custom -z-10 md:block origin-top-right scale-90" />

                        {/* Main image container */}
                        <div className="w-full md:w-auto lg:w-auto relative md:mt-4 md:mr-4 lg:mt-8 lg:mr-8">
                            <img 
                                ref={jackySection1Ref}
                                className={`w-full lg:w-auto lg:max-h-[40rem] object-cover shadow-lg transition-opacity duration-1000 ease-out ${
                                    jackySection1InView ? 'opacity-100' : 'opacity-0'
                                }`}
                                src={images.jackySection1}
                                alt="Ayurvedisch Practitioner Buiten leunend op houten muur."
                            />
                        </div>
                    </div>
                </div>

                <div className="relative w-full min-h-[12rem] lg:min-h-[20rem] bg-teal-custom  py-8 lg:py-8">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%]">
                        <span className="block text-center px-4 lg:px-10 leading-relaxed font-quote text-lg sm:text-2xl lg:text-4xl xl:text-[2.5rem] text-white">
                            “De natuurlijke kracht in ieder van ons is de grootste genezer van allemaal.”
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
                                ref={massageToolsRef}
                                loading="lazy"
                                className={`w-full border-8 md:border-4 lg:border-8 border-coral-custom object-cover transition-opacity duration-1000 ease-out ${
                                    massageToolsInView ? 'opacity-100' : 'opacity-0'
                                }`}
                                src={images.massageTools} 
                                alt="spamaterialen zoals handdoek, kaarsen, olie en op een tafel leggen" 
                            />
                            </div>
                            
                            {/* Overlapping image */}
                            <div className="absolute bottom-0 right-0 w-2/3 sm:w-3/5 transform translate-y-1/4 z-20">
                            <img
                                ref={holisticRef}
                                loading="lazy"
                                className={`w-full border-8 md:border-4 lg:border-8 border-coral-custom object-cover transition-opacity duration-1000 ease-out ${
                                    holisticInView ? 'opacity-100' : 'opacity-0'
                                }`}
                                src={images.holistic}
                                alt="het woord Holistic gespeld met scrabble tegels en drie kleine bloemen liggen op een witte marmeren tafel."
                            />
                            </div>
                            
                            {/* Logo */}
                            <div className="absolute top-0 right-0 w-1/5 z-30">
                                <img
                                    ref={yhypLogoRef}
                                    loading="lazy"
                                    className={`w-full object-contain transition-opacity duration-1000 ease-out ${
                                        yhypLogoInView ? 'opacity-100' : 'opacity-0'
                                    }`}
                                    src={images.yhypLogoNoBackground}
                                    alt="logo van Your Health Your Path"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full lg:max-w-[800px] flex-col mt-16 md:mt-4 lg:mt-4 text-left px-4 lg:px-0">
                        <h1 className="text-3xl font-bold font-heading tracking-wide text-light-teal-custom">Ben je klaar om je beter te voelen?</h1>
                        <br/>
                        <h2 className="text-2xl font-heading uppercase tracking-wide text-dark-coral-custom">Het is tijd om je gezondheid in eigen handen te nemen.</h2>
                        <br/>
                        <p className="text-lg lg:text-xl leading-tight max-w-[800px]">
                            Cliënten die bij mij komen, weten dat ze een krachtig vermogen hebben om hoe ze zich voelen positief te
                            beïnvloeden. Voor hen is gewoon niet ziek zijn niet genoeg; ze willen vol energie en vitaal zijn.
                            <b> Gezondheid is holistisch </b> de systemen van het lichaam zijn met elkaar verbonden en net als bij een spinnenweb wordt alles beïnvloed als je aan één draad trekt. 
                            <b>Beter slapen, minder stress, een goede spijsvertering</b> en een <b>aangepast dieet</b> zijn enkele 
                            van de manieren waarop ik je kan helpen om<br/><br/>
                            Cliënten willen geen symptoomveroorzakende Whac-A-Mole meer spelen, maar in plaats daarvan het probleem bij de wortel aanpakken.
                            Met behulp van de wetenschappelijke wijsheid van <b>Ayurveda</b> - een <b>geneeskundig systeem dat erkend is door de Wereldgezondheidsorganisatie</b> - 
                            help ik door alle tegenstrijdige gezondheidsruis heen en door jouw unieke geschiedenis te volgen, wordt er een plan gemaakt dat speciaal op jou en je behoeften is 
                            afgestemd - en dat alles op een realistische, behapbare manier. Omdat het leven al druk genoeg is, maken we gezond zijn een stuk gemakkelijker.
                        </p>
                        <Link to="/diensten" 
                                className="self-center mt-5 px-3 py-3 lg:px-8 lg:py-2 text-xl lg:text-2xl font-helvetica rounded-3xl text-white bg-green-custom hover:bg-teal-custom hover:text-white hover:border-transparent transition-colors">
                            Neem de eerste stappen
                        </Link>
                    </div>
                </div>

                {/* Third Section */}
                <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center w-full gap-6 lg:gap-8 bg-white">
                {/* Text container - add order-2 for mobile */}
                <div className="flex w-full lg:max-w-[40vw] justify-center flex-col text-left px-4 lg:p-4 order-2 md:order-1 lg:order-1">
                    <h1 className="font-handwriting2 font-black text-3xl md:text-4xl lg:text-5xl pl-0 lg:pl-4">Hoi! Ik ben Jacklyn!</h1>
                    <p className="pl-0 lg:pl-4 text-lg lg:text-xl leading-tight mt-4">
                        Geboren in de V.S., woonachtig in Nederland, een voormalig lerares die de overstap naar Ayurveda heeft
                        gemaakt omdat je goed voelen het genieten van het leven zoveel makkelijker maakt!                </p>
                    <p className="pl-0 lg:pl-4 text-lg md:xl lg:text-xl leading-tight mt-4">
                        <b>Mijn verhaal, de korte versie</b>: Ayurveda heeft me op mijn gezondheidsreis geholpen me beter te voelen dan ik zelfs wist dat mogelijk was. 
                        Rustiger in mijn hoofd en meer verbonden met mijn lichaam.
                    </p>
                    <p className="pl-0 lg:pl-4 text-lg lg:text-xl leading-tight mt-4">
                        Ik was vol van enthousiasme en nieuwsgierigheid:
                    </p>
                    <p className="font-handwriting text-3xl lg:text-5xl font-bold text-center mt-4">
                        <i>Hoe werkte dit ?</i>
                    </p>
                    <p className="pl-0 lg:pl-4 text-lg lg:text-xl leading-tight mt-4 mb-8">
                        Voor ik het wist, zat ik weer op school. Vier jaar lang Ayurveda studeren heeft mijn passie alleen maar
                        vergroot. Nu kan ik het enthousiast met anderen delen als zij hun pad afleggen...                 
                    </p>
                    <div className="flex justify-center items-center w-full mb-4">
                        <Link to="/over-jacklyn">
                            <button className="px-3 py-3 text-xl lg:text-2xl font-helvetica rounded-full text-white bg-green-custom hover:bg-teal-custom hover:text-white transition-colors">
                                Lees meer over mijn verhaal…
                            </button>
                        </Link>
                    </div>
                </div>
                {/* Image container - add order-1 for mobile */}
                <div className="w-full lg:w-auto order-1 lg:order-2">
                    <img 
                        ref={jackySection3Ref}
                        loading="lazy"
                        className={`w-full lg:w-auto lg:max-h-[40rem] object-cover transition-opacity duration-1000 ease-out ${
                            jackySection3InView ? 'opacity-100' : 'opacity-0'
                        }`}
                        src={images.JackySection3} 
                        alt="Ayurvedisch Practitioner zittend en lachend naar de camera" 
                    />
                </div>
            </div>
                <div className="flex justify-center w-full">
                    <TestimonialsSliderDutch />
                </div>
                {/* Section with fixed background */}
                <div 
                    className="w-full relative md:h-[60vh] h-[50vh] bg-fixed bg-center bg-cover bg-no-repeat"
                    style={{
                        backgroundImage: `url(${images.walkYourPath})`
                    }}>
                    <div className="relative h-full flex items-center justify-center">
                        <div className="flex flex-col items-center bg-white/70 backdrop-blur-sm p-8 rounded-lg shadow-lg mx-4 w-full md:w-3/4 lg:w-2/3 xl:max-w-4xl">
                            <p className="text-center text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6">
                                Klaar om te zien wat Ayurveda voor jou kan doen?
                            </p>
                            <Link to='/contact'>
                                <button className="px-3 py-2 md:px-4 md:py-4 bg-green-custom text-white text-lg md:text-xl hover:bg-teal-custom transition-colors duration-200 rounded-lg">
                                    Plan een gratis consult van 20 minuten
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <FooterDutch/>
        </>
    );
}

export default HomePageDutch;