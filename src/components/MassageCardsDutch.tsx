import images from "../content/images";
import { useInView } from "react-intersection-observer";

const MassageCardsDutch: React.FC = () => {
    // Setup refs for each of the two cards
    const [abhyangaRef, abhyangaInView] = useInView({
        triggerOnce: true, // Animation will only happen once
        threshold: 0.1,    // Trigger when 10% of the card is visible
    });

    const [marmaRef, marmaInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div className="flex flex-col space-y-12">
            {/* Abhyanga Card */}
            <div 
                ref={abhyangaRef} // Attach the ref here
                id="massage" 
                className={`bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md relative overflow-hidden group w-[85vw] lg:w-[80vw] lg:max-w-[1200px] mx-auto transition-opacity duration-1000 ease-in-out ${
                    abhyangaInView ? 'opacity-100' : 'opacity-0'
                }`} // Add conditional classes
            >
                {/* Responsive flex container with more specific breakpoints */}
                <div className="flex flex-col md:flex-row">
                    {/* Fixed-size image container */}
                    <div className="w-full md:w-96 flex-shrink-0">
                        <img 
                            src={images.massageWoman} 
                            alt="Een jonge vrouw ligt op een massagetafel en haar rug wordt gemasseerd." 
                            className="w-full h-64 md:h-full object-cover"
                        />
                    </div>
                    {/* Content section with proper padding */}
                    <div className="p-6 md:p-8 flex-grow">
                        <h3 className="text-xl md:text-2xl font-semibold font-heading text-light-teal-custom mb-3">
                            Ontspanningsmassage (Abhyanga)
                        </h3>
                        <p className="text-gray-600 font-bold text-lg mb-2">Duur: ca. 60 minuten</p>
                        <p className="text-coral-custom font-bold text-lg md:text-md mb-4">€77</p>
                        <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">
                            Abhyanga is een therapeutische, volledige lichaamsmassage met warme kruidenolie die is afgestemd op de persoon en zijn of haar huidige gezondheid. Met behulp van traditionele technieken brengt deze zachte 
                            massage rust in je zenuwstelsel en een diepe ontspanning voor je hele wezen. Abhyanga bevordert de bloedsomloop en activeert het lymfestelsel. Het helpt bij slaapstoornissen en spijsverteringsproblemen. Het wordt 
                            aanbevolen bij verschillende aandoeningen zoals: burn-out, huidaandoeningen, rug/nek/spierpijn en angst. Deze massage is goed voor iedereen die meer rust en kalmte in zijn/haar leven wil.
                        </p>
                        <a href="/contact" className="inline-flex items-center text-gray-700
                            hover:text-green-custom text-sm group-hover:translate-x-1 transition-transform">
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
            
            {/* Marma Card */}
            <div 
                ref={marmaRef} // Attach the ref here
                className={`bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md relative overflow-hidden group w-[85vw] lg:w-[80vw] lg:max-w-[1200px] mx-auto transition-opacity duration-1000 ease-in-out ${
                    marmaInView ? 'opacity-100' : 'opacity-0'
                }`} // Add conditional classes
            >
                {/* Responsive flex container - column on mobile, row on larger screens */}
                <div className="flex flex-col md:flex-row">
                    {/* Image container with responsive sizing */}
                    <div className="w-full md:w-96 flex-shrink-0">
                        <img 
                            src={images.massageFoot} 
                            alt="Een masseuse die een punt in het midden van een voet masseert van de persoon die ze masseert." 
                            className="w-full h-64 md:h-[389px] object-cover"
                        />
                    </div>
                    {/* Content section - using flex and flex-col to position content */}
                    <div className="p-6 flex flex-col h-full">
                        {/* Content area that will grow/shrink as needed */}
                        <div className="flex-grow">
                            <h3 className="text-xl md:text-2xl font-bold font-heading text-light-teal-custom mb-3">
                                Energieverrijkende massage (Marma)
                            </h3>
                            <p className="text-gray-600 font-bold text-lg mb-2">Duur: ca. 90 minuten</p>
                            <p className="text-coral-custom font-bold text-lg mb-4">€95</p>
                            <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">
                                Hierbij wordt gebruik gemaakt van de onderlinge verbondenheid van onze systemen. Marma punten worden vaak vergeleken met acupunctuur/acupressuur punten. De 107 
                                punten liggen verspreid over alle delen van het lichaam in gebieden waar spanning zich vaak ophoopt. Zachte druk in combinatie met de warme kruidenolie die wordt geselecteerd op 
                                basis van de specifieke behoeften van de persoon, stimuleert het loslaten van spanning en gifstoffen. Deze massage van het hele lichaam helpt om lichaam en geest in balans te houden.
                            </p>
                        </div>
                        {/* Button positioned at the bottom */}
                        <div className="mt-auto pt-2">
                            <a href="/contact" className="inline-flex items-center text-gray-700 
                                hover:text-green-custom text-sm group-hover:translate-x-1 transition-transform">
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
        </div>
    );
};

export default MassageCardsDutch;