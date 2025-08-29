import images from "../content/images";
import { useInView } from "react-intersection-observer";

const ConsultCardsDutch = () => {
    // Setup refs for each of the three cards
    const [foundationalRef, foundationalInView] = useInView({
        triggerOnce: true, // Animation will only happen once
        threshold: 0.1,    // Trigger when 10% of the card is visible
    });

    const [bloomingRef, bloomingInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [rootedRef, rootedInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return(
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 max-w-7xl mx-auto py-10 px-4">
            {/* Foundational Card */}
            <div 
                ref={foundationalRef} // Attach the ref here
                className={`flex flex-col w-full bg-white shadow-md rounded-lg overflow-hidden transition-opacity duration-1000 ease-in-out ${
                    foundationalInView ? 'opacity-100' : 'opacity-0'
                }`} // Add conditional classes
            >
                {/* Image container - responsive height */}
                <div className="w-full h-48 md:h-52 overflow-hidden relative">
                    <img 
                      loading="lazy"
                      src={images.forest}
                      className="w-full h-full object-cover object-center"
                      alt="Een pad door het bos met boomtakken als treden."
                    />
                </div>
                {/* Content box */}
                <div className="flex flex-col flex-grow p-5">
                    <h1 className="font-heading font-bold text-light-teal-custom text-xl md:text-lg">
                        De Fundatie
                    </h1>
                    <h2 className="text-md font-bold font-heading text-dark-coral-custom mt-2 mb-4">
                        Dit plan legt de fundatie voor je begrip van Ayurveda.
                    </h2>
                    <p className="font-medium">
                        Inbegrepen:
                    </p>
                    <ul className="list-disc pl-5 mt-2 mb-4 text-sm md:text-base">
                        <li>1e & 2e afspraak</li>
                        <li>Ayurvedisch advies om uw doelen te bereiken</li>
                        <li>Informatie over uw Ayurvedische type en een stappenplan om u te helpen weer in balans te komen</li>
                        <li><b>4 weken</b> ondersteuning per e-mail</li>
                        <li>1x30min. telefonisch gesprek aan het einde van het plan om uw proces en de beste koers voor de toekomst te bespreken.</li>
                    </ul>
                    <div className="mt-auto">
                        <div className="flex sm:flex-row justify-between items-center gap-2 mb-4">
                            <p className="font-bold text-lg">5 weken</p>
                            <p className="font-bold text-lg">Investering: €170</p>
                        </div>
                        <a href="/contact" className="inline-flex items-center text-gray-700 
                        hover:text-green-custom text-sm transition-transform w-full justify-center sm:justify-start">
                            MAAK EEN AFSPRAAK
                            <svg
                                className="w-4 h-4 ml-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Blooming Card */}
            <div 
                ref={bloomingRef} // Attach the ref here
                className={`flex flex-col w-full bg-white shadow-md rounded-lg overflow-hidden transition-opacity duration-1000 ease-in-out ${
                    bloomingInView ? 'opacity-100' : 'opacity-0'
                }`} // Add conditional classes
            >
                <div className="w-full h-48 md:h-52 overflow-hidden relative">
                    <img 
                      loading="lazy"
                      src={images.purpleFlowers2}
                      className="w-full h-full object-cover object-center"
                      alt="Een veld vol paarse bloemen in de zon."
                    />
                </div>
                <div className="flex flex-col flex-grow p-5">
                    <h1 className="font-heading font-bold text-light-teal-custom text-xl md:text-lg">
                        Bloeien
                    </h1>
                    <h2 className="text-md font-heading font-bold text-dark-coral-custom mt-2 mb-4">
                        Dit plan helpt je nieuwe gewoonten op te bouwen. Je wordt ondersteund terwijl je de feedback van je lichaam beter begint te begrijpen en je pad bepaalt.
                    </h2>
                    <p className="font-medium">
                        Inbegrepen:
                    </p>
                    <ul className="list-disc pl-5 mt-2 mb-4 text-sm md:text-base">
                        <li>1e & 2e afspraak</li>
                        <li>Ayurvedisch advies om je doelen te bereiken</li>
                        <li>Informatie over je Ayurvedische type en een stappenplan om je te helpen weer in balans te komen</li>
                        <li><b>3 maandelijkse vervolgafspraken</b></li>
                        <li><b>3 maanden</b> ondersteuning per e-mail</li>
                        <li><b>30% korting op 1 massage</b></li>
                    </ul>
                    <div className="mt-auto">
                        <div className="flex sm:flex-row justify-between items-center gap-2 mb-4">
                            <p className="font-bold text-lg">3 maanden</p>
                            <p className="font-bold text-lg">Investering: €415</p>
                        </div>
                        <a href="/contact" className="inline-flex items-center text-gray-700 
                        hover:text-green-custom text-sm transition-transform w-full justify-center sm:justify-start">
                            MAAK EEN AFSPRAAK
                            <svg
                                className="w-4 h-4 ml-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Rooted Card */}
            <div 
                ref={rootedRef} // Attach the ref here
                className={`flex flex-col w-full bg-white shadow-md rounded-lg overflow-hidden transition-opacity duration-1000 ease-in-out ${
                    rootedInView ? 'opacity-100' : 'opacity-0'
                }`} // Add conditional classes
            >
                <div className="w-full h-48 md:h-52 overflow-hidden relative">
                    <img 
                      loading="lazy"
                      src={images.treeRooted}
                      className="w-full h-full object-cover object-center"
                      alt="Een boom die in een veld groeit."
                    />
                </div>
                <div className="flex flex-col flex-grow p-5">
                    <h1 className="font-heading font-bold text-light-teal-custom text-xl md:text-lg">
                        Geworteld
                    </h1>
                    <h2 className="text-md font-bold font-heading text-dark-coral-custom mt-2 mb-4">
                        Dit plan reist met je mee en helpt je je wortels met Ayurveda te verdiepen. Je wordt ondersteund terwijl de seizoenen veranderen.
                    </h2>
                    <p className="font-medium">
                        Inbegrepen:
                    </p>
                    <ul className="list-disc pl-5 mt-2 mb-4 text-sm md:text-base">
                        <li>1e & 2e afspraak</li>
                        <li>Ayurvedisch advies om je doelen te bereiken</li>
                        <li>Informatie over je Ayurvedische type en een stappenplan om je te helpen weer in balans te komen/blijven</li>
                        <li><b>6 maandelijkse vervolgafspraken</b></li>
                        <li><b>6 maanden</b> ondersteuning per e-mail</li>
                        <li><b>30% korting op 2 massages</b></li>
                    </ul>
                    <div className="mt-auto">
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 mb-4">
                            <p className="font-bold text-lg">6 maanden</p>
                            <p className="font-bold text-lg">Investering: €640</p>
                        </div>
                        <a href="/contact" className="inline-flex items-center text-gray-700 
                        hover:text-green-custom text-sm transition-transform w-full justify-center sm:justify-start">
                            MAAK EEN AFSPRAAK
                            <svg
                                className="w-4 h-4 ml-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConsultCardsDutch;