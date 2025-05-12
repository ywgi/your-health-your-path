import { useState } from 'react';

const TestimonialsSliderDutch = () => {
  const testimonials = [
    {
      text: "Your health, Your path, Geeft mij een bijzonder persoonlijke en liefdevolle ondersteuning bij het beter leren kennen van mijn lichaam en mijn ayurvedische type om te mogen groeien op mijn levensweg. De uitgebreide Ayurvedische kennis stelt Jacky in staat om doelgericht die weg in te slaan. Het is verbluffend hoe ik door deze kennis mijn lichaam de mogelijkheden mag bieden om beter in balans te komen en op te schonen (zoals het bedoeld is). Dat heb ik mogen ontdekken met behulp van de fijne consulten en heerlijke marmamassages van Jacky. In een woord fantastisch",
      clientName: "Lucienne Klein"
    },
    {
      text: "Intensief ontspannen - zo voelde het voor mij. De liefdevolle en sterke handen van Jacklyn met de warme olie in een heerlijk aangename ruimte, zorgden voor een gevoel van veilige omhulling. Jacklyn is een geboren talent in afstemmen. Voor de sessie was er alle tijd voor vragen en verdieping. Dat betekende voor mij dat ik me helemaal kon overgeven aan wat er was. En dat geeft zo’n waardevol gevoel. De dagen daarna was het nog helder voelbaar en ik wist en weet dat het zijn werk doet, bewust of onbewust. Precies dat wat nodig is. Wat ik ook heel prettig vond is dat er na de sessie stilte mocht zijn. Ik ging met die mooie omhulling naar huis en er waren geen woorden nodig, geen verhaal. Een groot dank je wel voor deze wijze vrouw.",
      clientName: "Beatrijs"
    },
    {
      text: "Enige weken geleden las ik in het buurtkrantje van Lievingerveld over de praktijk van Jacklyn Bestenbreur. Een praktijk gericht op voeding en  voedingsadviezen. Ook werd een warme oliemassage genoemd als fijne optie. In eerste instantie heb ik gekozen voor de warme oliemassage om mogelijk later ook verder te gaan met de adviezen rond voeding.  Ik kende de praktijk van Jacklyn niet maar mocht  direct ervaren dat Jacklyn een zeer uitnodigende vrouw is die ook alle tijd nam  om te informeren over haar praktijk en op dat moment de massage die ik zou krijgen. Na gedegen informatie kreeg ik de gevraagde warme oliemassage. Ik heb het ervaren als een sereen moment van rust en warmte. Ik genoot van de warme rust die het geheel uitstraalde waardoor een totaal gevoel van ontspanning overbleef tot uren na de massage. Een dergelijke massage geeft een rustgevoel wat velen van ons zijn kwijtgeraakt in ons drukke bestaan. Goed zijn voor het lichaam is automatisch ook goed voor de geest en daardoor ook een aanrader van formaat. Ik zal dankbaar gebruik blijven maken van het aanbod van Jacklyn Bestenbreur.",
      clientName: "Johan"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full bg-green-custom py-16">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-8">
        <h2 className="text-3xl lg:text-4xl font-semibold text-white text-center mb-12">
          Kind words from clients
        </h2>
        <div className="flex items-center justify-between">
          <button 
            onClick={handlePrevious}
            className="text-gold-custom hover:text-gray-200 transition-colors text-4xl sm:text-5xl font-light p-2"
            aria-label="Previous testimonial"
          >
            ‹
          </button>
          
          {/* Fixed height container with overflow handling */}
          <div className="flex-1 text-center px-4">
            <div className="relative md:h-72 lg:h-80 mb-8 flex items-center justify-center">
              <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg">
                "{testimonials[currentIndex].text}"
              </p>
            </div>
            <p className="text-white uppercase tracking-wider">
              - {testimonials[currentIndex].clientName}
            </p>
          </div>
          
          <button 
            onClick={handleNext}
            className="text-gold-custom hover:text-gray-200 transition-colors text-4xl sm:text-5xl font-light p-2"
            aria-label="Next testimonial"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSliderDutch;



