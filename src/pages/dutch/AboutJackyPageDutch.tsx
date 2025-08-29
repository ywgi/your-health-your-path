import FooterDutch from "../../components/FooterDutch";
import HeaderDutch from "../../components/HeaderDutch";
import images from '../../content/images'

const AboutJackyPageDutch = () => {
    return (
        <>
            <HeaderDutch />
            <div className="flex flex-col items-center w-full">
                {/*first section*/}
                <div className="block md:hidden">
                    <div className="relative h-full flex items-center justify-center p-4">
                            <div className="md:p-8 w-full max-w-5xl">
                                <h1 className="text-2xl md:text-4xl font-bold text-center mb-4">Mijn kwalificaties:</h1>
                                <p className="mb-4 text-xl md:text-base">Als Ayurvedisch Practitioner heb ik:</p>
                                <ul className="list-disc pl-6 md:pl-8 space-y-2 text-xl md:text-base">
                                    <li>Een vierjarige bacheloropleiding tot Ayurvedic Practitioner van EISRA (Nederlands: HBO niveau)</li>
                                    <li><strong>Twee Ayurvedische stages</strong> in India afgerond</li>
                                    <li>Medische Basis Kennis-MBK afgerond.</li>
                                    <li>Daarnaast ben ik leerkracht geweest in het basisonderwijs(PABO).</li>
                                </ul>
                            </div>
                        </div>
                    <img src={images.purpleFlowers}/>
                </div>
                <div className="hidden md:block w-full relative min-h-[40px] bg-fixed bg-center bg-cover bg-no-repeat"
                    style={{
                        backgroundImage: `url(${images.purpleFlowers})`
                    }}>
                    <div className="relative w-full py-16 flex items-center justify-center px-4">
                        <div className="bg-white/70 backdrop-blur-md p-4 md:p-8 shadow-lg w-full max-w-3xl rounded-lg">
                            <h1 className="text-4xl text-center font-bold font-heading tracking-wide text-light-teal-custom">
                                Mijn kwalificaties:
                            </h1>
                            <br/>
                            <p className="mb-4 text-sm md:text-base">
                                Als Ayurvedisch Practitioner heb ik:
                            </p>
                            <ul className="list-disc pl-6 md:pl-8 space-y-1 text-sm md:text-base">
                                <li>Een vierjarige bacheloropleiding tot Ayurvedic Practitioner van EISRA (Nederlands: HBO niveau)</li>
                                <li><strong>Twee Ayurvedische stages</strong> in India afgerond</li>
                                <li>Medische Basis Kennis-MBK afgerond.</li>
                                <li>Daarnaast ben ik leerkracht geweest in het basisonderwijs(PABO).</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bg-white w-full py-5">
                    <p className="mt-4 text-center font-handwriting font-bold text-3xl lg:text-5xl">
                        Maar wat nog belangrijker is - ik heb met Ayurveda mijn <b className="font-handwriting lg:text-5xl text-green-custom">eigen gezondheidspas bewandeld.</b>. 
                        Ervaren wat het kan doen op een <i>heel</i> <span className="font-handwriting lg:text-5xl text-green-custom">persoonlijke</span> manier.
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row w-full items-center lg:items-center justify-center lg:px-12 pt-6 lg:pt-12 pb-4 gap-6 lg:gap-12">
                    <div className="flex w-full lg:max-w-2xl justify-center flex-col text-left px-4 lg:px-0 space-y-3 text-xl ">
                        <h1 className="text-4xl font-bold font-heading tracking-wide text-light-teal-custom">2015</h1>
                        <p>
                            Mijn liefde voor Ayurveda, zoals zoveel andere liefdes in mijn leven (inclusief het ontmoeten van mijn man!) begon toen ik mijn nieuwsgierigheid durfde te volgen <b><i className="font-handwriting text-4xl md:text-5xl">waarom ook niet?</i></b>
                        </p>
                        <p>
                            In Mei 2015, ontevreden en zelfs geschokt door het advies van de dokter - pakte ik mijn eerste boek over Ayurveda. Het boek was een tip die ik kreeg van een vrouw naast wie ik in het vliegtuig zat. Ik wou dat ik haar kon bedanken! 
                            Ik verslond de informatie en <b>mijn levenspad en algehele benadering van gezondheid</b>
                        </p>
                        <p>Het gevoel van <span className="font-handwriting font-bold">YESSSS! </span> vervulde me. Ayurveda was logisch. Het verklaarde mijn ervaringen.</p>
                        <p>
                            Onmiddellijk begon ik mijn dieet aan te passen en maakte ik een afspraak met een Ayurvedische arts. Mijn kwaal - een kale plek op mijn achterhoofd ter grootte van een halve dollar die zich in een paar weken had ontwikkeld - 
                            werd behandeld met de zachte en natuurlijke benadering van Ayurveda in plaats van de sterke hormonale crèmes die waren aanbevolen met de uitleg: als je ze vroeg gebruikt, werken ze misschien wel.
                        </p>
                        <p>
                            En dit bleek nog
                            <span className="font-handwriting hidden md:inline text-4xl font-bold"> maar het begin te zijn...</span>
                            <span className="font-handwriting md:hidden text-4xl font-bold"><br/> maar het begin te zijn...</span>
                        </p>
                    </div>
                    <div className="relative w-full lg:w-auto self-center">
                        {/* Background decorative block */}
                        <div className="absolute top-0 right-0 w-full h-full bg-teal-custom -z-10 md:block origin-top-right scale-90" />
                        
                        {/* Main image container */}
                        <div className="w-full md:w-auto lg:w-auto relative md:mt-4 md:mr-4 lg:mt-8 lg:mr-8">
                            <img 
                                className="w-full lg:w-auto lg:max-h-[40rem] object-cover shadow-lg animate-[fade-in_1s_ease-out] opacity-0 [animation-fill-mode:forwards]"
                                src={images.AboutJacky1}
                                alt="Ayurvedic practitioner Jacklyn sitting cross-legged in a chair in her office" 
                            />
                        </div>
                    </div>
                </div>
                {/*second section*/}
                <div className="flex flex-col lg:flex-row w-full items-center lg:items-center justify-center lg:px-12 pt-6 lg:pt-12 lg:pb-24 gap-6 lg:gap-12">
                    <div className="relative w-full lg:w-auto self-center order-last lg:order-first">
                        {/* Background decorative block - positioned bottom left */}
                        <div className="absolute bottom-0 left-0 w-full h-full bg-teal-custom -z-10 md:block origin-bottom-left scale-90" />
                        
                        {/* Main image container */}
                        <div className="w-full md:max-w-[800px] lg:w-auto relative md:mb-4 md:ml-4 lg:mb-8 lg:ml-8">
                            <img 
                                className="w-full lg:w-auto lg:max-h-[800px] object-cover shadow-lg animate-[fade-in_1s_ease-out] opacity-0 [animation-fill-mode:forwards]"
                                src={images.jackyNielsBeach}
                                alt="Jacklyn and husband walking on beach after wedding in tenerife" 
                            />
                        </div>
                    </div>
                    <div className="order-first lg:order-last flex w-full lg:max-w-2xl justify-center flex-col text-left px-4 lg:px-0 text-xl">
                        <h1 className="text-3xl font-bold font-heading tracking-wide text-light-teal-custom">Het verhaal van Niels in een notendop:</h1>
                        <br/>
                        <h2 className="text-2xl font-heading uppercase tracking-wide text-dark-coral-custom">10 jaar lijden naar verlichting in <i>maanden</i>!</h2>
                        <br/>
                        <p>
                            Bij die allereerste afspraak met een Ayurvedische arts keek ik mijn man Niels aan en zei: “Misschien is dit iets wat jou kan helpen?”
                        </p>
                        <p>
                            Al meer dan 10 jaar kampte hij met darmklachten. <b>Hij ging naar artsen en specialisten, maar zijn klachten hielden aan.</b>
                        </p>
                        <p>
                            Naast een constant gevoel van beperkte energie, had hij last van:                        
                        </p>
                        <ul className="pl-4 lg:pl-8 lg:text-xl">
                            <li className="flex items-start gap-2 lg:gap-3">
                                <span className="text-green-custom">•</span>
                                <span className="leading-snug">fluctuerende hoeveelheden gas</span>
                            </li>
                            <li className="flex items-start gap-2 lg:gap-3">
                                <span className="text-green-custom">•</span>
                                <span className="leading-snug">opgeblazen gevoel</span>
                            </li>
                            <li className="flex items-start gap-2 lg:gap-3">
                                <span className="text-green-custom">•</span>
                                <span className="leading-snug">buikkrampen</span>
                            </li>
                            <li className="flex items-start gap-2 lg:gap-3">
                                <span className="text-green-custom">•</span>
                                <span className="leading-snug">schommelingen tussen losse darmen en lichte constipatie</span>
                            </li>
                        </ul>
                        <p>
                            Ook Niels probeerde Ayurveda. Na die eerste afspraak begon hij met het innemen van kruidensupplementen geadviseerd door de Ayurvedische arts en paste hij zijn dieet aan. 
                            Binnen een paar maanden was hij <strong>verlost van alle darmklachten, en ze zijn niet meer teruggekomen</strong>!
                        </p>
                        <p>
                            Deze dramatische transformatie trok mijn aandacht - Ayurveda hielp ons echt.
                        </p>
                        <br/>
                        <p className="font-handwriting font-bold text-4xl md:text-5xl pb-2">
                            Dus we gingen allebei door...
                        </p>
                    </div>
                </div>
                {/*green divider with text */}
                <div className="relative w-full min-h-[10rem] lg:min-h-[12rem] bg-green-custom  py-8 lg:py-12">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-4xl">
                        <span className="block text-center px-4 lg:px-10 leading-relaxed font-quote text-xl lg:whitespace-nowrap sm:text-2xl lg:text-4xl text-white">
                            Het is moeilijk om energie te hebben als je lichaam niet goed verteert.
                        </span>
                    </div>
                </div>
                {/* Third Section */}
                <div className="flex flex-col w-full items-center justify-center bg-center bg-cover bg-no-repeat"                    
                    style={{
                        backgroundImage: `url(${images.mountainColorful})`
                    }}>
                    <div className="w-[90vw] md:w-[70vw] flex flex-col items-center h-full bg-light-pink-custom px-8 py-8">
                        {/* Text content div */}
                        <div className="w-full max-w-3xl mb-2">                    
                            <h1 className="text-3xl font-bold font-heading tracking-wide text-light-teal-custom">Snel door naar 2019-2020:</h1>
                            <br/>
                            <h2 className="text-2xl font-heading uppercase tracking-wide text-dark-coral-custom">Mijn verhaal gaat verder...</h2>
                            <br/>
                            <p className="mb-2 text-xl">
                            Niels en ik waren doorgegaan met het volgen van Ayurvedische dieetadviezen in ons dagelijks leven, maar mijn <b>stressniveaus waren gestegen</b>, en dit - gevoegd bij mijn voorraad<b>oude, naar de kant geschoven emoties</b> - was een overbelasting voor mijn systeem.
                            </p>
                            <p className="mb-2 text-xl">
                                <b>Hoe ik me van binnen voelde, begon zich aan de buitenkant te manifesteren.</b>.
                            </p>
                            <p className="mb-2 text-xl">
                                Ik kreeg een ernstig geval van acne bij volwassenen. Mijn gevoel van eigenwaarde kelderde en ik wilde alleen maar mijn gezicht verbergen - wat mijn toch al overspannen systeem niet hielp!
                            </p>
                            <p className="mb-2 text-xl">
                                Opnieuw wendde ik me tot Ayurveda. Deze keer werkte ik op diepere niveaus. En weer hielp het me...
                            </p>
                            <p className="mb-2 text-xl">
                                Ik begon mezelf te genezen van binnenuit.
                            </p>
                        </div>
                        
                        {/* Images div */}
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full max-w-4xl mb-4">
                            <div className="flex flex-col items-center">
                                <h3 className="text-xl font-bold mb-2">2020</h3>
                                <img 
                                    src={images.jackyAcne} 
                                    alt="Jacklyn before committing to Ayurveda"
                                    className="w-80 h-80 object-cover border-8 border-white"
                                />
                            </div>
                            <div className="flex flex-col items-center">
                                <h3 className="text-xl font-bold mb-2">2021</h3>
                                <img 
                                    src={images.jackyAcneHealed} 
                                    alt="Jacklyn after Ayurveda"
                                    className="w-80 h-80 object-cover border-8 border-white"
                                />
                            </div>
                        </div>

                        {/* Results section */}
                        <div className="w-full max-w-3xl">
                            <h1 className="text-xl lg:text-2xl mb-2"><b>Het resultaat:</b> een heldere huid, maar echt...Zo. Veel. Meer.</h1>
                            <p className="mb-2 text-xl">
                                Ik ben rustiger en zelfbewuster.
                            </p>
                            <p className="mb-2 text-xl">
                            Opgroeien en functioneren in de wereld met een notoir actief brein - ik heb nu een <b>mentale rust waarvan ik niet wist dat het mogelijk was.</b>.
                            </p>
                            <p className="font-bold mb-2 text-xl">Andere nuttige verbeteringen:</p>
                            <ul className="pl-4 lg:pl-8 text-xl">
                                <li className="flex items-start gap-2 lg:gap-3">
                                    <span className="text-green-custom lg:mt-0.5">•</span>
                                    <span className="leading-tight">Beter slapen</span>
                                </li>
                                <li className="flex items-start gap-2 lg:gap-3">
                                    <span className="text-green-custom lg:mt-0.5">•</span>
                                    <span className="leading-tight">Warme handen en voeten - in plaats van de ijskoude voeten die ik de hele winter had</span>
                                </li>
                                <li className="flex items-start gap-2 lg:gap-3">
                                    <span className="text-green-custom lg:mt-0.5">•</span>
                                    <span className="leading-tight">Verbeterde spijsvertering</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-green-custom h-[150px] flex items-center justify-center">
                    <h1 className="text-5xl text-white font-quote">Just For Fun...</h1>
                </div>
                <div className="flex flex-col pb-8 px-2">
                    {/* Section 1 */}
                    <div className="w-full md:w-[50vw] mx-auto mt-4">
                        {/* Centered on mobile, aligned to left on desktop */}
                        <div className="p-4 md:p-10 flex flex-col items-center md:items-start">
                            <h1 className="text-center md:text-left text-3xl md:text-5xl text-light-teal-custom font-handwriting font-bold">
                                Beste zomerbaan ooit...
                            </h1>
                        </div>
                        <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md relative overflow-hidden my-4">
                            <div className="flex flex-col md:flex-row">
                                <div className="w-full md:w-96 flex-shrink-0">
                                    <img
                                        src={images.jackyParkRanger}
                                        alt="Abhyanga massage therapy"
                                        className="w-full h-64 md:h-full object-cover"
                                    />
                                </div>
                                {/* Centered on mobile, aligned to left on desktop */}
                                <div className="p-6 md:p-8 flex-grow flex items-center text-center md:text-left">
                                    <p className="text-gray-600 mb-4 leading-relaxed text-md md:text-2xl">
                                        Werken als boswachter in Congaree National Park als onderdeel van een programma voor leraren.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className="w-full md:w-[50vw] mx-auto md:self-end">
                        {/* Centered on mobile, aligned to right on desktop */}
                        <div className="p-4 md:p-10 flex flex-col items-center md:items-end">
                            <h1 className="text-center md:text-right text-3xl md:text-5xl text-light-teal-custom font-handwriting font-bold">
                                Een geweldig cadeau voor mijn toekomstige zelf...
                            </h1>
                        </div>
                        <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md relative overflow-hidden my-4">
                            <div className="flex flex-col md:flex-row-reverse">
                                <div className="w-full md:w-96 flex-shrink-0">
                                    <img
                                        src={images.pool}
                                        alt="Abhyanga massage therapy"
                                        className="w-full h-64 md:h-full object-cover"
                                    />
                                </div>
                                {/* Centered on mobile, aligned to left on desktop */}
                                <div className="p-6 md:p-8 flex-grow flex flex-col items-center justify-center md:items-start text-center md:text-left">
                                    <p className="text-gray-600 mb-4 leading-relaxed text-md md:text-2xl">
                                        Leren zwemmen in mijn twintiger jaren - toen ik onder water kon zonder mijn neus dicht te houden en langere afstanden kon zwemmen, was een geweldig cadeau.
                                    </p>
                                    <p className="text-gray-600 mb-4 leading-relaxed text-md md:text-2xl">
                                        Onlangs ben ik lid geworden van een Nederlandse zwemclub en ben ik aan de schoolslag gaan werken - een citaat van de trainer:
                                    </p>
                                    <p className="text-gray-600 mb-4 leading-relaxed text-md md:text-2xl">
                                        "Nu kun je doen wat vierjarigen hier doen!"
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 3 */}
                    <div className="w-full md:w-[50vw] mx-auto">
                        {/* Centered on mobile, aligned to left on desktop */}
                        <div className="p-4 md:p-10 flex flex-col items-center md:items-start">
                            <h1 className="text-center md:text-left text-3xl md:text-5xl text-light-teal-custom font-handwriting font-bold">
                                De slechtste dansers, maar de beste lachers...
                            </h1>
                        </div>
                        <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md relative overflow-hidden my-4">
                            <div className="flex flex-col md:flex-row">
                                <div className="w-full md:w-96 flex-shrink-0">
                                    <img
                                        src={images.dancing}
                                        alt="A"
                                        className="w-full h-64 md:h-full object-cover"
                                    />
                                </div>
                                {/* Centered on mobile, aligned to left on desktop */}
                                <div className="p-6 md:p-8 flex-grow flex items-center text-center md:text-left">
                                    <p className="text-gray-600 mb-4 leading-relaxed text-md md:text-2xl">
                                        Een paar jaar geleden namen mijn man Niels en ik salsales. We waren verreweg de <strong>slechtste van de klas</strong>, maar we waren ook <strong>degenen die het meest lachten!</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterDutch/>
        </>
    );
}

export default AboutJackyPageDutch;



