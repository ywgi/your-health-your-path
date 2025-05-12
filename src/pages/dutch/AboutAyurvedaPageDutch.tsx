import DoshaCardsDutch from "../../components/DoshaCardsDutch";
import FooterDutch from "../../components/FooterDutch";
import HeaderDutch from "../../components/HeaderDutch";
import images from "../../content/images";

const AboutAyurvedaPageDutch = () => {
        return (
          <>
            <HeaderDutch/>
            <div className="flex flex-col items-center w-full">
              {/*First section*/}
              <div className="w-full">
                {/* Background image - visible on desktop, hidden on mobile */}
                <div 
                  className="hidden md:block w-full relative h-[45vh] bg-fixed bg-center bg-cover bg-no-repeat"
                  style={{
                    backgroundImage: `url(${images.mountainLake})`
                  }}
                />
                
                {/* Mobile background image alternative */}
                <div 
                  className="md:hidden w-full relative h-[30vh] bg-center bg-cover bg-no-repeat"
                  style={{
                    backgroundImage: `url(${images.mountainLake})`
                  }}
                />
                
                {/* Content container - adjusted for better mobile display */}
                <div className="w-full md:max-w-[80%] mx-auto bg-gradient-to-b from-white from-50% via-white via-65% to-light-pink-custom md:-mt-[22.5vh] relative z-10 pb-6 md:pb-12">
                  <div className="px-4 md:px-8 py-6 md:py-8 flex flex-col items-center">
                    <h1 className="text-3xl md:text-5xl font-heading font-bold text-light-teal-custom leading-snug">Wat is Ayurveda?</h1>
                    <p className="text-lg text-center md:text-xl mt-2">Ayur...wat? Ben jij net als de velen die ik heb ontmoet (en ikzelf ook vanaf het begin!) die weinig tot geen achtergrond hebben in deze eeuwenoude geneeswijze?</p>
                  </div>
                  
                  <div className="px-4 md:px-0 md:max-w-6xl mx-auto space-y-2">
                    <div className="space-y-2">
                      <p className="text-2xl md:text-3xl font-heading tracking-wide uppercase text-dark-coral-custom font-bold">Ayurveda, een korte samenvatting:</p>
                      <p className="text-gray-600 italic text-base md:text-lg">Het woord Ayurveda vertaald uit het Sanskriet betekent: de kennis of wetenschap van het leven. (ayur-leven; veda-kennis/wetenschap)</p>
                    </div>
                    
                    <div>
                      <ul className="space-y-2 md:space-y-1 list-none pl-2 md:pl-8 text-base md:text-xl">
                        <li className="flex items-start">
                          <span className="mr-2 text-green-custom flex-shrink-0 md:mt-1">•</span>
                          <span>Een <b>traditionele en natuurlijke vorm van geneeskunde, erkend door de Wereldgezondheidsorganisatie.</b> (5000+ jaar oud, afkomstig uit India)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-green-custom flex-shrink-0 md:mt-1">•</span>
                          <span><b>Holistisch</b> - het behandelt een persoon en erkent dat alle systemen, geest, lichaam en emotie met elkaar verbonden zijn.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-green-custom flex-shrink-0 md:mt-1">•</span>
                          <span>Ziet individuen op hun <b>unieke Ayurvedische type</b>, en waar <b>ze zich op dit moment in het leven bevinden</b>.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-green-custom flex-shrink-0 md:mt-1">•</span>
                          <span>Richt zich op <b>preventie</b> en helpt bij <b>genezing</b>.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-green-custom flex-shrink-0 md:mt-1">•</span>
                          <span>Heeft een <b>veelzijdige aanpak</b>: dieet, levensstijl, kruidensupplementen, ademwerk en behandelingen zoals massages met warme olie.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-green-custom flex-shrink-0 md:mt-1">•</span>
                          <span>Is the <b>"zusje" van yoga</b>, komt voort uit dezelfde kennisbron en overlapt daarom sommige technieken zoals ademhalingsoefeningen en asana houdingen.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/*market spices with intro paragraph*/}
              <div className="flex flex-col md:flex-row gap-0 md:gap-8 lg:gap-20 items-center max-w-6xl mx-auto lg:pb-12">
                {/* Image section - full width on mobile with no margins or background, reordered to appear first on mobile */}
                <div className="relative w-full md:w-1/2 self-center order-1 md:order-first mb-6 md:mb-0">
                  {/* Main image container - limited height on mobile, normal styling on desktop */}
                  <div className="w-full relative md:mt-6 md:ml-6 lg:mt-8 lg:ml-8">
                    {/* Background decorative block - hidden on mobile */}
                    <div className="hidden md:block absolute md:-top-6 md:-left-6 lg:-top-8 lg:-left-8 w-full h-full bg-teal-custom -z-10" />
                    
                    {/* Mobile-specific wrapper with fixed height */}
                    <div className="h-[250px] md:h-auto overflow-hidden">
                      <img 
                        className="w-full h-full object-cover object-[center_25%] md:object-center shadow-lg animate-[fade-in_1s_ease-out] opacity-0 [animation-fill-mode:forwards] relative"
                        src={images.marketSpices}
                        alt="Ayurvedic spices in a market" 
                      />
                    </div>
                  </div>
                </div>

                {/* Text section - full width on mobile */}
                <div className="w-full md:w-3/4 space-y-2 order-2 md:order-last p-4">
                  <h1 className="text-3xl md:text-4xl font-heading font-bold text-light-teal-custom">
                    De test van 5000 jaar heeft Ayurveda doorstaan.
                  </h1>
                  <div className="text-lg md:text-xl">
                    <p>
                        Toen ik in de jaren 90 opgroeide in de VS werd het Adkins-dieet populair, in NL was het Sonja Bakker-dieet populair, maar deze trenddiëten 
                        met hun strenge regels en one-size-fits-all aanpak namen al na een paar jaar in populariteit af.
                    </p>
                    <h2 className="text-2xl md:text-3xl font-heading font-bold tracking-wide text-dark-coral-custom mt-6 mb-4">
                        EEN AANPAK VAN HET <span className="font-handwriting font-bold text-green-custom">Leven</span>
                    </h2>
                    <p>
                        Hoewel Ayurveda specifieke dieetadviezen geeft, is het geen dieet..<b> Het is een benadering van het leven</b>. 
                        Het advies verandert met je mee terwijl je door de verschillende levensfasen reist. Zo kan je lichaam zijn natuurlijke balans 
                        en gezonde gewicht vinden. Je werkt met de wijsheid van je lichaam in plaats van te proberen het in onnatuurlijke toestanden te 
                        dwingen om een gewenst uiterlijk of getal op een weegschaal te bereiken.
                    </p>
                  </div>
                </div>
              </div>
              {/*Quote divider*/}
              <div className="flex flex-col items-center justify-center w-full py-8 md:h-[20vh] bg-green-custom px-4 md:px-8">
                <p className="font-quote text-white text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                    "Gezondheid is niet alleen de afwezigheid van ziekte; het is de aanwezigheid van vitaliteit."</p>
                <p className="font-quote text-white text-center text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4">- Charaka Samhita</p>
              </div>
              {/*Section 2 Dosha Intro*/}
              <div className="flex flex-col md:flex-row items-center bg-white w-full pt-4 md:py-0">
                {/* Text section - properly sized */}
                <div className="w-full md:w-[40vw] px-4 md:px-12 lg:px-16 mb-6 md:mb-0">
                  <p className="text-lg md:text-xl lg:text-2xl mb-4">
                    Ayurveda is een traditionele vorm van gezondheidszorg. Het is een<b>holistisch systeem van geneeskunde</b>, wat 
                    betekent dat het hele individu wordt bekeken - de geest, het lichaam en de emoties worden in gelijke mate in 
                    aanmerking genomen bij het overwegen van de te nemen maatregelen.
                  </p>
                  <p className="text-lg md:text-xl lg:text-2xl">
                    Ayurveda <b>erkent dat elk individu uniek is.</b>. 
                    Er zijn lichaams - en geestkenmerken of de ayurvedische types (dosha’s).
                  </p>
                </div>
                
                {/* Image - full height on desktop, properly sized on mobile */}
                <div className="w-full md:w-1/2 h-full">
                  <img 
                    src={images.asana} 
                    className="w-full h-auto md:h-full object-cover" 
                    alt="Ayurvedic yoga pose"
                  />
                </div>
              </div>
              {/*Doshas section*/}
              <DoshaCardsDutch />
              {/*Grandmas section*/}
              <div className="flex flex-col items-center px-2 py-4 md:px-2 md:p-y">
                {/* Header section */}
                <div className="flex h-auto md:h-[15vh] items-center mb-6 md:mb-0">
                  <p className="text-lg sm:text-xl md:text-2xl text-center">
                    Vanaf de eerste dag heeft ayurveda me duidelijkheid gegeven en een manier om de verschillen te begrijpen die ik zag in de mensen om me heen.
                    <br className="hidden md:block"/> Een prachtig voorbeeld hiervan zijn mijn oma's, twee van mijn favoriete mensen aller tijden.
                  </p>
                </div>
                
                {/* Main content section - stack on mobile, side by side on desktop */}
                <div className="flex flex-col md:flex-row md:gap-8 lg:gap-20 justify-center items-center">
                  {/* "Work with nature" text - standard text on mobile, rotated on desktop */}
                  <div className="w-full md:max-w-[15%] flex items-center justify-center my-6 md:my-0">
                    <p className="text-5xl text-green-custom md:text-5xl lg:text-7xl md:text-black font-handwriting md:transform md:-rotate-90 md:origin-center md:whitespace-nowrap">
                      Work with nature.
                    </p>
                  </div>
                  {/* Center content - stack Grandma D and M on mobile, side by side on desktop */}
                  <div className="flex flex-col md:flex-row md:gap-6 lg:gap-10 w-full md:w-auto">
                    {/* Grandma D section */}
                    <div className="flex flex-col items-center pb-8 w-full md:w-auto">
                      <h1 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-dark-coral-custom mb-4">Oma D</h1>
                      <div className="w-full max-w-[280px] sm:max-w-[300px] md:w-auto lg:h-[450px] lg:w-[330px] p-2 md:p-4 border-2 border-black">
                        <img
                          src={images.gmaD}
                          className="w-full h-full object-cover object-top"
                          alt="Jacklyn's Grandma D"
                        />
                      </div>
                      <div className="flex flex-col w-full max-w-[320px] sm:max-w-[400px] min-h-[320px] md:min-h-[375px] bg-white p-4 md:p-8 mt-4">
                        <p className="text-md">
                          Oma D. Ze was altijd in de weer en erg creatief. Toen ik zeven was, werd ik wakker uit een dutje en ontdekte ik dat ze in die korte tijd een nieuwe outfit voor mijn pop had gemaakt.
                        </p>
                        <br/>
                        <p className="text-md">
                            Niet alleen haar handen, maar ook haar geest was snel en tussen al haar gedachten door maakte ze zich vaak zorgen.
                        </p>
                        <br/>
                        <p className="text-md">
                            Ze was makkelijk met veranderingen, meubels werden vervangen en spullen uit het verleden werden losgelaten.
                        </p>
                        <br/>
                        <p className="text-md">
                            Hoewel ze snoep at en koolhydraten en alles daartussenin, was aankomen nooit een zorg voor haar. Eigenlijk was het meer een uitdaging om op gewicht te blijven, vooral in haar latere jaren.
                        </p>
                      </div>
                    </div>
                    {/* Grandma M section */}
                    <div className="flex flex-col items-center pb-8 w-full md:w-auto">
                      <h1 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-dark-coral-custom mb-4">Oma M</h1>
                      <div className="w-full max-w-[280px] sm:max-w-[300px] md:w-auto lg:h-[450px] lg:w-[330px] p-2 md:p-4 border-2 overflow-hidden border-black">
                        <img
                          src={images.gmaM}
                          className="w-full h-full object-cover object-top"
                          alt="Jacklyn's Grandma M"
                        />
                      </div>
                      <div className="flex flex-col w-full max-w-[320px] sm:max-w-[400px] min-h-[320px] md:min-h-[375px] bg-white p-4 md:p-8 mt-4">
                        <p className="text-md">
                            Oma M was in sommige opzichten bijna het tegenovergestelde van oma D.
                        </p>
                        <br/>
                        <p className="text-md">
                            Ze was stabiel, niet bijzonder actief en maakte zich niet snel zorgen. Naar haar huis gaan was een voorspelbare traktatie. Ik kon altijd vinden wat ik zocht omdat ze niet van verandering hield.
                        </p>
                        <br/>
                        <p className="text-md">
                            Nadat ze jarenlang met haar gewicht had geworsteld, lette oma M op wat ze at en ze kon klagen dat alleen al
                          <i> het kijken naar snoep voor </i>
                          gewichtstoename zorgde.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Logo - hidden on mobile, shown on desktop */}
                  <div className="hidden md:flex items-center md:max-w-[15%]">
                    <img 
                      src={images.yhypGreenNoBackground}
                      className="max-h-[120px] lg:max-h-[200px]"
                      alt="Your Health Your Path Logo"
                    />
                  </div>
                </div>
                
                {/* Footer section */}
                <div className="flex flex-col items-center justify-center pb-6 md:pb-10 mt-4 md:mt-8">
                  <p className="w-full md:max-w-[80vw] lg:max-w-[60vw] text-base sm:text-lg md:text-xl">
                    Oma M zou niet eens overwegen om de dingen te eten die oma D at, maar als ze hetzelfde dieet zouden eten, zou hun lichaam heel anders reageren. 
                    Mijn observaties waren niet beperkt tot familie. Als leerkracht heb ik in de loop der jaren verschillende reeksen broers en/of zussen 
                    gediend en ondanks het feit dat ze dezelfde ouders hadden, in hetzelfde huis woonden en hetzelfde dieet aten - waren ze heel verschillend.
                  </p>
                </div>
              </div>
              <div className="w-full bg-white flex flex-col md:flex-row items-center justify-center md:h-[40vh]">
                <div className="w-full md:w-auto flex justify-center md:h-full">
                  <img src={images.meditate} className="h-auto md:h-full object-contain" alt="Ayurvedic Woman Meditating on the beach"/>
                </div>
                <div className="flex flex-col px-4 md:px-8 py-4 md:py-0">
                  <p className="text-xl md:text-2xl font-heading font-bold text-light-teal-custom max-w-full md:max-w-[30vw]">
                    Rekening houden met deze verschillen, dat is wat ayurveda doet.
                  </p>
                  <br/>
                  <p className="text-lg md:text-2xl max-w-full md:max-w-[30vw]">
                   Ayurveda geeft geen standaardaanpak. In plaats daarvan kijkt Ayurveda naar <strong>wie je bent </strong>
                   en <strong>waar je staat</strong> en helpt je van <strong>daaruit je weg te vinden.</strong>
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-center py-8 lg:py-12 gap-8 lg:gap-12 md:px-6 lg:px-0">
                <div className="flex flex-col w-full lg:max-w-[800px] lg:w-[80vw] px-4 lg:py-6 text-base md:text-lg lg:text-xl">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading text-light-teal-custom">“Het is zo logisch!”</h1>
                  <br/>
                  <p>Verschillende klanten hebben deze zin, die ik tijdens mijn Ayurvedische studie ontelbare keren heb herhaald, herhaald.</p>
                  <br/>
                  <p>
                    Ayurveda werkt met de natuurlijke reacties van je lichaam. In veel opzichten doen veel mensen dit al, bijvoorbeeld als je verbrandt, is het 
                    algemeen bekend om uit de zon te gaan en een verkoelend middel, zoals aloë vera gel, aan te bieden om de rode huid te kalmeren. Hoewel 
                    veel van onze gezondheidsklachten ingewikkelder kunnen zijn dan een zonnebrand, is dit de redenering die Ayurveda volgt. Neem 
                    de oorzaak weg en help het lichaam bij het genezingsproces.
                  </p>
                  <br/>
                  <p>
                    Als je lichaam tekenen geeft van licht en droog zijn (Vata-klachten) dan is het belangrijk om voedingsmiddelen te consumeren die een 
                    aardend effect hebben en vocht bevatten - of je lichaam helpen vocht vast te houden. Het is de kunst om de signalen van het lichaam te 
                    begrijpen en te weten hoe je het beste verder kunt gaan. Hier is het werken met een professional enorm nuttig.
                  </p>
                </div>
                <div className="relative w-full md:w-4/5 lg:w-auto self-center mt-6 lg:mt-0">
                  {/* Background decorative block */}
                  <div className="absolute top-0 right-0 w-full h-full bg-teal-custom -z-10 md:block origin-top-right scale-90" />

                  {/* Main image container */}
                  <div className="w-full md:w-auto lg:w-auto relative md:mt-4 md:mr-4 lg:mt-8 lg:mr-8">
                    <img 
                      className="w-full md:max-w-full lg:w-auto lg:max-h-[40rem] object-cover shadow-lg animate-[fade-in_1s_ease-out] opacity-0 [animation-fill-mode:forwards]"
                      src={images.manStretching}
                      alt="Ayurvedic Man practicing stretching exercise"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-center  lg:py-12 gap-8 lg:gap-12  md:px-6 lg:px-0">
                <div className="relative w-full md:w-4/5 lg:w-auto self-center order-last lg:order-first mt-6 lg:mt-0">
                  {/* Background decorative block - positioned bottom left */}
                  <div className="absolute bottom-0 left-0 w-full h-full bg-teal-custom -z-10 md:block origin-bottom-left scale-90" />
                  
                  {/* Main image container */}
                  <div className="w-full md:w-auto lg:w-auto relative md:mb-4 md:ml-4 lg:mb-8 lg:ml-8">
                      <img 
                          className="w-full md:max-w-full lg:w-auto lg:max-h-[800px] object-cover shadow-lg animate-[fade-in_1s_ease-out] opacity-0 [animation-fill-mode:forwards]"
                          src={images.soupWithSpices}
                          alt="Bowl of soup with assorted Ayurvedic spices" 
                      />
                  </div>
                </div>
                <div className="flex flex-col w-full lg:max-w-[800px] lg:w-[80vw] px-4  lg:py-6 text-base md:text-lg lg:text-xl">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading text-light-teal-custom">De gereedschappen van Ayurveda</h1>
                  <br/>
                  <p>
                    <b>Ayurveda gebruikt voedsel als medicijn.</b>. Dit houdt in dat je voedsel eet dat je helpt in je huidige situatie, rekening houdend met het klimaat en de huidige seizoenen.
                  </p>
                  <br/>
                  <p>
                    Diverse <b>warme oliebehandelingen en massages</b>. Het type olie met kruiden is specifiek afgestemd op je dosha-type en huidige (gezondheids)doelen.
                  </p>
                  <br/>
                  <p>
                    <b>Kruidensupplementen</b>. Supplementen kunnen helpen bij een grote verscheidenheid aan aandoeningen. Het doel is om je lichaam een duwtje in de goede richting te geven. 
                    Supplementen zijn bedoeld als tijdelijke hulp, niet als oplossing voor de lange termijn.
                  </p>
                  <br/>
                  <p>
                    <b>Ademwerk en Yoga Asana's</b>. Bewust werken met adem en lichaamsbewegingen. Er zijn technieken om je te helpen kalmte op te bouwen en er zijn technieken om je te helpen 
                    warmte op te bouwen of beweging te inspireren. Wat je doet, hangt af van de volgende juiste stap voor jou op je pad.
                  </p>
                </div>
              </div>
            </div>
            <FooterDutch />
          </>
        );
}

export default AboutAyurvedaPageDutch;


