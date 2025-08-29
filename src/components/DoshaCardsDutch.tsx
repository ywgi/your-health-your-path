import images from "../content/images";
import { useInView } from "react-intersection-observer"; // Import useInView hook

const DoshaCardsDutch = () => {
    // Setup refs for each of the three cards
    const [vataRef, vataInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [pittaRef, pittaInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [kaphaRef, kaphaInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return(
        <div className="flex flex-col items-center">
            <div className="flex flex-col pt-4 md:py-8 max-w-[90vw] lg:max-w-[75vw]">
                <h1 className="text-3xl md:text-4xl font-heading text-light-teal-custom font-bold">Over de dosha's (Ayurvedische types):</h1>
                <br/>
                <p className="text-2xl font-heading text-dark-coral-custom tracking-wide uppercase">
                    Welk dosha-type ben ik? Laten we het eens hebben over de lichaamstypes.
                </p>
                <br/>
                <p className="text-xl">
                    Eerst en vooral - <b>Iedereen bestaat uit ALLE 3 dosha's.</b>. Ayurveda merkt op dat de meeste mensen een dominantie van één of tweedosha's hebben.
                </p>
            </div>
            {/* 3 dosha cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 max-w-7xl mx-auto py-10 px-4">
                {/* Vata Card */}
                <div 
                    ref={vataRef} // Attach the ref here
                    className={`flex flex-col w-full bg-white shadow-md rounded-lg overflow-hidden transition-opacity duration-1000 ease-in-out ${
                        vataInView ? 'opacity-100' : 'opacity-0'
                    }`} // Add conditional classes
                >
                    {/* Image container - set to 30% of parent height */}
                    <div className="flex w-full h-48 md:h-52 overflow-hidden relative">
                        <div className="w-1/2">
                            <img 
                                loading="lazy"
                                src={images.air}
                                className="w-full h-full object-cover object-center"
                                alt="Grote witte wolken in een helderblauwe lucht."
                            />
                        </div>
                        <div className="w-1/2">
                            <img 
                                loading="lazy"
                                src={images.space}
                                className="w-full h-full object-cover object-center"
                                alt="Een vallende ster boven een bergketen, bewegend door een paarse sterrenhemel."
                            />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-light-pink-custom text-black p-4 rounded">
                                <p className="text-l font-bold tracking-wide">V A T A</p>
                            </div>
                        </div>
                    </div>
                    {/* Content box - set to take remaining height */}
                    <div className="h-[70%] text-md">
                        <div className="p-4">
                            <p>Elementen: lucht en ruimte</p>
                            <br/>
                            <p>
                            <strong>Vata</strong> heeft te maken met <strong>alle beweging in het lichaam.</strong>.
                            </p>
                            <br/>
                            <p>
                                Bijvoorbeeld:
                            </p>
                            <ul className="list-disc pl-6">
                                <li>lucht en bloedstroom</li>
                                <li>signalen via het zenuwstelsel</li>
                                <li>de hormonenstroom van het endocriene systeem</li>
                                <li>afvalverwijdering uit het lichaam</li>
                                <li>de gedachtestroom die bijna altijd in beweging is</li>
                            </ul>
                            <br/>
                            <p>
                                Al die ruimte maakt beweging gemakkelijker, en vaak snel. Er zit een lichtheid in de Vata dosha. Mensen met een hoge Vata dosha 
                                hebben de neiging om licht te zijn en ervaren vaak droogheid - bijvoorbeeld een droge huid of obstipatie.
                            </p>
                        </div>
                    </div>
                </div>
                
                {/* Pitta Card */}
                <div 
                    ref={pittaRef} // Attach the ref here
                    className={`flex flex-col w-full bg-white shadow-md rounded-lg overflow-hidden transition-opacity duration-1000 ease-in-out ${
                        pittaInView ? 'opacity-100' : 'opacity-0'
                    }`} // Add conditional classes
                >
                    {/* Image placeholder since we can't use external images */}
                    <div className="flex w-full h-48 md:h-52 overflow-hidden relative">
                        <img 
                            loading="lazy"
                            src={images.fire}
                            className="w-full h-full object-cover object-center"
                            alt="Een close-up van de vlammen van een roodgloeiend vuur met een zwarte achtergrond."
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-light-pink-custom text-black p-3 rounded">
                                <p className="text-xl font-bold tracking-wide">P I T T A</p>
                            </div>
                        </div>
                    </div>
                    {/* Content box */}
                    <div className="h-[70%] text-md">
                        <div className="p-4">
                            <p>Elementen: vuur en een beetje water</p>
                            <br/>
                            <p>
                            <b>Pitta</b> heeft te maken met <b>de transformatie in het lichaam.</b>.
                            </p>
                            <br/>
                            <p>
                                Bijvoorbeeld:
                            </p>
                            <ul className="list-disc pl-6">
                                <li>vertering van voedsel</li>
                                <li>"vertering" van emoties</li>
                                <li>verwerking van beelden en gedachten</li>
                                <li>hormonale reacties</li>
                            </ul>
                            <br/>
                            <p>
                                Omdat pitta het element vuur is, is het verbonden met warmte. Door school weten we dat warmte een bijproduct is van chemische 
                                reacties. Het is geen verrassing dat mensen met een hoge pitta dosha de neiging hebben om extra warmte in hun lichaam te hebben.
                            </p>
                            <br/>
                            <p>
                                (Voor de duidelijkheid: de beweging van hormonen van plaats naar plaats is Vata, maar 
                                de eigenlijke hormonale reactie is gerelateerd aan Pitta)
                            </p>
                        </div>
                    </div>
                </div>
                
                {/* Kapha Card */}
                <div 
                    ref={kaphaRef} // Attach the ref here
                    className={`flex flex-col w-full bg-white shadow-md rounded-lg overflow-hidden transition-opacity duration-1000 ease-in-out ${
                        kaphaInView ? 'opacity-100' : 'opacity-0'
                    }`} // Add conditional classes
                >
                    {/* Image placeholder since we can't use external images */}
                    <div className="flex w-full h-48 md:h-52 overflow-hidden relative">
                        {/* First image - 50% width */}
                        <div className="w-1/2">
                            <img 
                            loading="lazy"
                            src={images.earth}
                            className="w-full h-full object-cover object-center"
                            alt="Kleine planten die uit een losse grond komen."
                            />
                        </div>
                        
                        {/* Second image - 50% width */}
                        <div className="w-1/2">
                            <img 
                            loading="lazy"
                            src={images.water}
                            className="w-full h-full object-cover object-center"
                            alt="Licht dat door water schijnt."
                            />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-light-pink-custom text-black p-3 rounded">
                                <p className="text-xl font-bold tracking-wide">K A P H A</p>
                            </div>
                        </div>
                    </div>
                    {/* Content box */}
                    <div className="h-[70%] text-md">
                        <div className="p-4">
                            <p>Elementen: aarde en water</p>
                            <br/>
                            <p>
                                <b>Kapha</b> zorgt voor de beschermende structurenen vloeistoffen.
                            </p>
                            <br/>
                            <p>
                                Bijvoorbeeld:
                            </p>
                            <ul className="list-disc pl-6">
                                <li>Hoofdmassa van het lichaam</li>
                                <li>Vorm aan cellen en organen</li>
                                <li>Lymfe en bloedplasma</li>
                                <li>Myelineschede rond zenuwcellen</li>
                                <li>Synoviale vloeistof in gewrichten</li>
                                <li>Maagslijmvliesbarrière ter bescherming van het maagslijmvlies</li>
                            </ul>
                            <br/>
                            <p>
                                De aarde - en waterelementen van Kapha zijn zwaarder en stabieler van aard. Mensen met een dikke huid hebben vaak meer Kapha. Deze 
                                mensen zijn meer geaard en zijn minder reactief.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DoshaCardsDutch;