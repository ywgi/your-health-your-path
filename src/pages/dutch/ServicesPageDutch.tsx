import { Link } from "react-router-dom";
import images from "../../content/images";
import HeaderDutch from "../../components/HeaderDutch";
import FooterDutch from "../../components/FooterDutch";
import ConsultCardsDutch from "../../components/ConsultCardsDutch";
import MassageCardsDutch from "../../components/MassageCardsDutch";



const ServicesPageDutch = () => {
    return (
        <>
            <HeaderDutch />
            <div>
                <div className="flex px-4 pt-4 pb-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <div className="relative w-full">
                            <div className="aspect-[4/3] md:aspect-[3/4] w-full overflow-hidden max-w-xs mx-auto">
                                <img 
                                    className="w-full h-full object-cover"
                                    src={images.womanOnLaptop}
                                    alt="Consult"
                                />
                                <a href="#consult" 
                                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                    e.preventDefault();
                                    const element = document.getElementById('consult');
                                    if (element) {
                                        element.scrollIntoView({
                                            behavior: 'smooth',
                                            block: 'start'
                                        });
                                    }
                                }}>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-light-pink-custom px-8 py-2 min-w-[200px] text-center rounded-2xl">
                                            <h3 className="text-lg tracking-widest uppercase text-gray-800">Consult</h3>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="relative w-full">
                            <div className="aspect-[4/3] md:aspect-[3/4] w-full overflow-hidden max-w-xs mx-auto">
                                <img 
                                    className="w-full h-full object-cover"
                                    src={images.massage}
                                    alt="Massage"
                                />
                                <a href="#massage"                             
                                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                    e.preventDefault();
                                    const element = document.getElementById('massage');
                                    if (element) {
                                        element.scrollIntoView({
                                            behavior: 'smooth',
                                            block: 'start'
                                        });
                                    }
                                }}>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-light-pink-custom px-8 py-2 min-w-[200px] text-center rounded-2xl">
                                            <h3 className="text-lg tracking-widest uppercase text-gray-800">Massage</h3>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="relative w-full">
                            <div className="aspect-[4/3] md:aspect-[3/4] w-full overflow-hidden max-w-xs mx-auto">
                                <img 
                                    className="w-full h-full object-cover"
                                    src={images.noteTaking}
                                    alt="Contact Me"
                                />
                                <Link to="/contact">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-light-pink-custom px-8 py-2 min-w-[200px] text-center rounded-2xl">
                                        <h3 className="text-lg tracking-widest uppercase text-gray-800">Contact Me</h3>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Desktop and Mobile Responsive Layout For White background section*/}
                <div className="w-full bg-white h-auto md:h-[50vh]">
                    {/* For larger screens - horizontal layout with full height image */}

                    <div className="hidden md:flex items-center justify-center w-full h-full overflow-hidden">
                        <div className="flex flex-col px-4 md:px-6 lg:px-8 flex-grow max-w-[70%] lg:max-w-[65%] xl:max-w-[40%] space-y-2 md:space-y-3">
                            <h1 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-light-teal-custom leading-tight">Bloei op een natuurlijke manier, leef voluit</h1>
                            <p className="text-base md:text-lg lg:text-xl">Met behulp van de wijsheid van Ayurveda is het mijn doel om jou te zien als de unieke persoon die je bent, en tegelijkertijd de feedbackpatronen van je lichaam te herkennen.</p>
                            <p className="text-base md:text-lg lg:text-xl">
                                <b>Wie heeft baat bij Ayurveda?</b> Het korte antwoord: iedereen kan baat hebben bij een betere verbinding met zijn of haar lichaam en inzicht krijgen in hoe het te ondersteunen.
                            </p>
                            <p className="text-base md:text-lg lg:text-xl">Cliënten die het beste passen bij <span className="font-handwriting font-bold text-green-custom">Your Health, Your Path</span> zijn klaar om een ​​stap voorwaarts te 
                                zetten; of ze nu eindelijk besluiten om te ontspannen met een warme oliemassage of klaar zijn om grotere stappen te zetten voor hun algehele gezondheid en welzijn.
                            </p>
                            <p className="text-base md:text-lg lg:text-xl">
                                Ik help je graag op je pad; het is een genot om alle vooruitgang te vieren terwijl je verdergaat.
                            </p>
                        </div>
                        <div className="flex-shrink-1 h-full ml-2 md:ml-4">
                            <img src={images.pathway} className="h-full w-auto max-h-full object-contain" alt="Ayurveda pathway" />
                        </div>
                    </div>

                    {/* For mobile screens - vertical layout */}
                    <div className="md:hidden flex flex-col items-center pt-8 space-y-4">
                        <h1 className="text-2xl justify-start font-heading font-bold text-light-teal-custom px-4">Bloei op een natuurlijke manier, leef voluit</h1>
                        <p className="text-xl px-4">Met behulp van de wijsheid van Ayurveda is het mijn doel om jou te zien als de unieke persoon die je bent, en tegelijkertijd de feedbackpatronen van je lichaam te herkennen..</p>
                        <p className="text-xl px-4">
                            <b>Wie heeft baat bij Ayurveda?</b> Het korte antwoord: iedereen kan baat hebben bij een betere verbinding met zijn of haar lichaam en inzicht krijgen in hoe het te ondersteunen.
                        </p>
                        <p className="text-xl px-4">Cliënten die het beste passen bij <span className="font-handwriting font-bold text-green-custom">Your Health, Your Path </span> zijn klaar om een ​​stap voorwaarts te 
                            zetten; of ze nu eindelijk besluiten om te ontspannen met een warme oliemassage of klaar zijn om grotere stappen te zetten voor hun algehele gezondheid en welzijn.
                        </p>
                        <p className="text-xl px-4">
                            Ik help je graag op je pad; het is een genot om alle vooruitgang te vieren terwijl je verdergaat.
                        </p>
                        <img src={images.pathway} className="w-full" alt="Ayurveda pathway" />
                    </div>
                </div>
                <div className="flex items-center justify-center w-full h-auto min-h-[15vh] md:h-[20vh] py-4 bg-green-custom">
                {/* Desktop layout - horizontal with all elements */}
                    <div className="hidden md:flex items-center justify-center gap-8">
                        <img src={images.yhypWhiteNoBackground} className="max-h-[10vh]" alt="Logo" />
                        <div className="h-[1px] bg-white w-[30vw]"></div>
                        <p className="text-white font-handwriting text-center text-4xl lg:text-6xl">Mijn diensten</p>
                        <div className="h-[1px] bg-white w-[30vw]"></div>
                        <img src={images.yhypWhiteNoBackground} className="max-h-[10vh]" alt="Logo" />
                    </div>
                    
                    {/* Mobile layout - simplified version */}
                    <div className="flex md:hidden flex-col items-center justify-center gap-4 py-2">
                        <img src={images.yhypWhiteNoBackground} className="max-h-[8vh]" alt="Logo" />
                        <div className="flex items-center justify-center w-full gap-3">
                            <div className="h-[1px] bg-white w-16"></div>
                            <p className="text-white font-handwriting text-center text-3xl px-2">Mijn diensten</p>
                            <div className="h-[1px] bg-white w-16"></div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center w-full py-8" id="consult">
                    <div className="w-full md:max-w-[70vw] mx-auto">
                        <h1 className="font-heading pl-4 font-bold text-3xl md:text-4xl text-light-teal-custom pb-4 lg:pb-8">Mijn Proces:</h1>
                        <div className="space-y-6 px-4 md:ml-16">
                            <div>
                                <p className="text-xl md:text-2xl font-heading uppercase text-dark-coral-custom font-semibold mb-2">Stap 1:</p>
                                <p className="text-base md:text-xl ml-8">
                                    Begin met het plannen van een gratis telefonisch consult van 20 minuten om te zien of werken met Jouw Gezondheid, Jouw Pad iets voor jou is. Dit is volledig vrijblijvend en 
                                    verplicht tot niets. Dit is een gesprek over je (gezondheids)doelen en een kans om duidelijkheid te krijgen over de mogelijkheden van Jouw Gezondheid, Jouw Pad.
                                </p>
                            </div>
                            <div>
                                <p className="text-xl md:text-2xl font-heading uppercase text-dark-coral-custom font-semibold mb-2">Stap 2:</p>
                                <div className="ml-8">
                                    <p className="mb-2 text-base md:text-xl">Je wilt vooruit. Geweldig, nu gaan we beginnen!</p>
                                    <p className="text-base md:text-xl">
                                        We plannen je eerste afspraak. Je ontvangt een uitgebreide vragenlijst die je minimaal 72 uur
                                        voor de eerste afspraak moet invullen en inleveren.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p className="text-xl md:text-2xl font-heading uppercase text-dark-coral-custom font-semibold mb-2">Stap 3:</p>
                                <div className="ml-8">
                                    <p className="text-base md:text-xl font-semibold mb-1">Eerste afspraak (90 minuten)</p>
                                    <p className="text-base md:text-xl mb-2">Inbegrepen tijdens deze afspraak:</p>
                                    <ul className="list-disc pl-5 text-base md:text-xl space-y-1">
                                        <li>Diepe duik in je huidige gezondheid en medische geschiedenis.</li>
                                        <li>Polsdiagnose (alleen in persoon)</li>
                                        <li>Tongdiagnose</li>
                                        <li>We bespreken Ayurveda gaandeweg, zodat je je begrip ervan verdiept en hoe het je kan helpen op je pad.</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <p className="text-xl md:text-2xl font-heading uppercase text-dark-coral-custom font-semibold mb-2">Stap 4:</p>
                                <div className="ml-8">
                                    <p className="text-base md:text-xl font-semibold mb-1">2e Afspraak (60 minuten)</p>
                                    <p className="text-base md:text-xl">
                                        Tijdens deze afspraak leert u meer over uw Ayurveda-type en op welke gebieden u momenteel uit balans bent, indien van toepassing.
                                    </p>
                                    <p className="text-base md:text-xl mt-2">
                                        U ontvangt een plan met advies voor uw specifieke situatie. Dit plan omvat advies over voeding, leefstijl en eventueel kruidensupplementen. Afhankelijk van uw 
                                        behoeften kunnen er kooktips en aanbevelingen voor (zelf)massage, yogahoudingen en ademhalingstechnieken worden gegeven.
                                    </p>
                                    <p className="text-base md:text-xl mt-2">
                                        Het advies is afgestemd op u en uw levensstijl. Het wordt ook opgesteld op basis van de door u gekozen duur van het plan (1 maand, 3 maanden of 6 maanden). Zowel 
                                        het 3- als het 6- maandenplan wordt tijdens uw reis gemonitord en aangepast.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p className="text-xl md:text-2xl font-heading uppercase text-dark-coral-custom font-semibold mb-2">Stap 5:</p>
                                <div className="ml-8">
                                    <p className="text-base md:text-xl">
                                        U begint uw pad met Ayurveda te bewandelen. De resterende stappen zijn afhankelijk van wat het beste bij uw behoeften past en welk pakket u heeft gekozen.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:max-w-[70vw] max-w-full mx-auto px-4 md:px-0">
                    <h1 className="font-heading font-bold text-3xl md:text-4xl text-light-teal-custom">Consult Packages:</h1>
                </div>
                <div className="flex flex-col justify-center items-center px-4 py-4 md:px-6">
                    <ConsultCardsDutch />
                    <div className="w-full max-w-4xl mx-auto text-base md:text-lg lg:text-xl space-y-6 mt-2">
                        <p className="text-center text-sm md:text-base italic">
                            *Als er supplementen worden geadviseerd, wordt er begeleiding gegeven voor betrouwbare bronnen. Your Health, Your Path verkoopt geen supplementen, dus de kosten voor supplementen zijn extra.
                        </p>
                        
                        <p className="text-center">
                            Gezondheid is belangrijk voor iedereen. Als je met mij wilt werken, maar je budget is beperkt, neem dan contact met me op zodat we betalingsopties kunnen bespreken.
                            <span className="">
                                Idealiter kunnen we een optie vinden die past bij jouw behoeften en die je helpt je gezondheidsdoelen te bereiken.
                            </span>
                        </p>
                    </div>
                </div>
                <div className="w-full md:max-w-[70vw] max-w-full mx-auto px-4 py-4 md:px-0">
                    <h1 className="font-heading font-bold pb-8 text-3xl md:text-4xl text-light-teal-custom">Massages:</h1>
                </div>
                <div className="flex flex-col justify-center items-center pb-12">
                    <MassageCardsDutch />
                </div>
            </div>
            <FooterDutch />
        </>
    );
}

export default ServicesPageDutch;