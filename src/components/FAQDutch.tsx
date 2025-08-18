import { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: 'Betekent het volgen van een Ayurvedisch dieet dat ik vegetariër of veganist moet worden (of Paleo of Keto of een van de andere diëten waar ik over heb gehoord)?',
    answer: 'Nee, dat is niet nodig.\n\nAyurveda werkt met je lichaamssysteem. Eet op basis van hoe je je voelt, het seizoen en je dosha (ayurvedisch type). Aanpassingen worden vaak geadviseerd op basis van wat je eet of het tijdstip van de dag. Tevreden zijn met wat je eet, hoort bij een gezond Ayurvedisch dieet. Vaak zijn er voedingsmiddelen die beter bijdragen aan je huidige gezondheidsdoelen en daarom meer aan te raden zijn dan voedingsmiddelen die minder ondersteunend zijn.'
  },
  {
    id: 2,
    question: 'Moet ik mijn dieet aanpassen? Kan ik niet gewoon de supplementen nemen?',
    answer: 'Als je huidige eetpatroon niet in lijn is met wat je lichaam nodig heeft, dan is een verandering inderdaad nodig om blijvende resultaten te behalen.\n\nDe kruidensupplementen in Ayurveda worden gebruikt als hulpmiddel, maar dat is voor de korte termijn. In Ayurveda is voedsel medicijn.'
  },
  {
    id: 3,
    question: 'Ik heb een dosha-quiz gedaan en ik (denk) dat ik weet welke dosha ik ben. Moet ik gewoon de lijst met aanbevolen voedingsmiddelen en leefstijlaanpassingen volgen?',
    answer: '**Wees alsjeblieft voorzichtig**! Deze vraag is de reden dat ik geen quiz of eenvoudige checklist voor jouw dosha-type op mijn website aanbied.\n\nWe hebben allemaal alle drie de dosha\'s in ons, en belangrijker nog: je kunt geboren worden met een dominante dosha (Vata/Pitta/Kapha) en vervolgens tijdens je leven uit balans raken in een van de andere dosha\'s. Keuzes die Vata en Kapha beïnvloeden, zijn meestal tegengesteld aan elkaar; (Vata heeft bijvoorbeeld meer rust en structuur nodig, en Kapha heeft vaak baat bij meer beweging en variatie). Als je geboren bent met een Vata-dominante, maar momenteel een overmaat aan Kapha hebt, zou een dieet gebaseerd op het verlagen van Vata je doelen alleen maar tegenwerken en je symptomen kunnen verergeren! **Ayurveda werkt** altijd met **je huidige staat** (vikriti). Hoewel je aangeboren constitutie (prakriti) ook belangrijk is, ligt de **focus altijd op waar je nu bent**.'
  },
  {
    id: 4,
    question: 'Betekent Ayurvedisch eten dat ik (alleen) Indiaas moet eten?',
    answer: 'Een simpel antwoord: nee. Al het voedsel, van over de hele wereld, kan Ayurvedisch worden bereid en gegeten, omdat **je bij Ayurvedisch eten let op hoe het eten je doet voelen. Je eet met de intentie om je lichaam te ondersteunen bij het herstellen/behouden van balans**.\n\nAls je spijsverteringskracht (agni) bijvoorbeeld zwak is, eet je Ayurvedisch door te kiezen voor gemakkelijk verteerbaar voedsel en tegelijkertijd voedsel te eten dat je spijsvertering versterkt. Veel Indiaas eten is Ayurvedisch gemakkelijk te eten, dus het is mooi meegenomen als je van die keuken houdt, maar zeker geen vereiste.'
  },
  {
    id: 5,
    question: 'Ik heb een lichamelijke klacht zoals brandend maagzuur, eczeem of prikkelbaredarmsyndroom, enz. Wat moet ik eten?',
    answer: 'Goede vraag! Ayurveda behandelt de hele mens, in plaats van zich te richten op de klacht.\n\nHoewel er richtlijnen kunnen zijn voor specifieke klachten, is het innameproces, met zijn uitgebreide inzicht in de feedback die je lichaam geeft, noodzakelijk om een goed beeld te krijgen van waar je lichaam zich bevindt.'
  },
  {
    id: 6,
    question: 'In mijn familie zijn er mensen met verschillende dominante dosha\'s. Hoe moet ik voor iedereen koken zonder aparte maaltijden te hoeven maken?',
    answer: 'Dit is een veel gestelde vraag en het antwoord hoeft niet zo moeilijk te zijn als je denkt. Er zijn manieren om maaltijden aan te passen, bijvoorbeeld door kruiden op individuele porties te doen of door te roteren wat je kookt, zodat aan ieders behoeften wordt voldaan zonder voor iedereen andere gerechten te bereiden! (Wie zou daar tijd voor hebben? En al die extra stress is het tegenovergestelde van ayurvedisch eten!)'
  },
];

const FAQDutch = () => {
      const [openItemId, setOpenItemId] = useState<number | null>(null);

  // Function to toggle the open state of an FAQ item
  const handleItemClick = (id: number) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <section className='flex flex-col items-center justify-center'>
        <div className="border-t border-gray-300 max-w-[1000px]">
            {faqs.map(faq => (
                <div key={faq.id} className="border-b border-gray-300 py-6">
                <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => handleItemClick(faq.id)}
                >
                    <h3 className="text-lg font-semibold uppercase tracking-wide">
                    {faq.question}
                    </h3>
                    <span className="text-2xl text-gray-500 transition-transform duration-300">
                    {openItemId === faq.id ? '-' : '+'}
                    </span>
                </div>
                
                {/* Animated content wrapper using max-height */}
                <div 
                    className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${openItemId === faq.id ? 'max-h-[1000px]' : 'max-h-0'}`}
                >
                    <div 
                    className="mt-4 text-gray-600 leading-relaxed whitespace-pre-wrap"
                    dangerouslySetInnerHTML={{ __html: faq.answer.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
                    />
                </div>
                </div>
            ))}
        </div>
    </section>
  );
}


export default FAQDutch;