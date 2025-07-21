import { useState } from 'react';

const TestimonialsSlider = () => {
  const testimonials = [
    {
      text: "Your health, Your path, gives me a very personal and loving support in getting to know my body better and my ayurvedic type  so I can grow as I travel my life's path. With extensive Ayurvedic knowledge Jacky is enabled to guide the way purposefully. It is amazing how this knowledge allows me to offer my body the possibilities to become better balanced and clean up (as it is naturally meant to be). I was able to discover this with the help of the fine consultations and wonderful marma massages of Jacky. In one word fantastic. Thank you Jacky.",
      clientName: "Lucienne Klein"
    },
    {
      text: "Intensely relaxing - that's how it felt to me. Jacklyn's loving and strong hands with the warm oil in a wonderfully pleasant room, provided a feeling of being wrapped in safety. Jacklyn is a born talent in meeting a person where they are. Before the session there was plenty of time for questions and gaining a deeper understanding. For me that meant that I could surrender completely to what was there. And that gives such a precious feeling. The days afterwards it was still clearly felt and I knew and know that it does its work, consciously or unconsciously. Exactly that which is needed. What I also really liked is that after the session there was allowed to be silence. I went home with that beautiful package of peace and no words were needed, no story. A big thank you for this wise woman.",
      clientName: "Beatrice"
    },
    {
      text: "Several weeks ago, I read in the Lievingerveld neighborhood newspaper about Jacklyn Bestenbreur's practice. A practice focused on nutrition and nutritional counseling. A warm oil massage was also mentioned as a fine option. Initially, I opted for the warm oil massage to possibly continue later with the advice around nutrition.  I did not know Jacklyn's practice but immediately experienced that Jacklyn is a very inviting woman who also took all the time to inform me about her practice and at that moment the massage I would get. After thorough information I received the requested warm oil massage. I experienced it as a serene moment of peace and warmth. I enjoyed the warm tranquility the whole thing exuded which left a total feeling of relaxation for hours after the massage. Such a massage gives a sense of tranquility that many of us have lost in our busy existence. Being good for the body is automatically also good for the mind and therefore highly recommended.I will gratefully continue to make use of the offer of Jacklyn Bestenbreur",
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
    <div className="w-full bg-green-custom py-16 animate-[fade-in_1s_ease-out]">
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

export default TestimonialsSlider;



