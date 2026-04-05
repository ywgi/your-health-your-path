import { useState } from 'react';

// The FAQ data remains unchanged
interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: 'Does eating an Ayurvedically mean that I have to become vegetarian or vegan (or Paleo or Keto or any of the other diets I’ve heard about)?',
    answer: 'No that isn’t necessary.\n\nAyurveda works with your body system. Eating for how you feel, the season, and your dosha (ayurvedic type) . Adjustments are often advised on what you eat together or the time of day that you eat. Feeling content with what you eat is part of a healthy Ayurvedic diet. Often there are foods that are more helpful for your current health goals and thus they would be more recommended then foods that are less supportive.'
  },
  {
    id: 2,
    question: 'Do I need to make adjustments to my diet? Can’t I just take the supplements?',
    answer: 'If how you are currently eating is out of alignment with what your body needs, then yes, a change is needed to have long lasting sustained results. The herbal supplements in Ayurveda are used as a tool, but the that is for the short term. In Ayurveda food is medicine.'
  },
  {
    id: 3,
    question: 'I took a Dosha quiz and I (believe) I know what dosha I am. Should I just follow the list of recommended foods and lifestyle adjustments?',
    answer: '**Please be careful**! The question is the reason that I don’t offer a quiz or simple checklist for your dosha type on my website.\n\nWe all have all 3 doshas in us, and most importantly you can be born with a dominate dosha (Vata/Pitta/Kapha) and then as you travel through life go out of balance in one of the other doshas. Choices that affect Vata and Kapha are most often opposite to one another; (For example Vata needs more stillness and structure, and Kapha often benefits from more movement and variety). If you were born Vata dominate, but are currently have excess Kapha, eating a diet based upon lowering Vata would only work against your goals and could make your symptoms worse! **Ayurveda always works** with your **current state** (vikriti). While your born constitution (prakriti) is also important, the **focus always goes to where you are now**.'
  },
  {
    id: 4,
    question: 'To eat Ayurvedically, does that mean I have to eat (only) Indian food?',
    answer: 'Simple answer, No. \n\n All food, from all over the world can be prepared and eaten Ayurvedically because **when you eat Ayurvedically you are paying attention to how the food makes you feel. You\'re eating with the intention of supporting your body to regain/remain in balance.**\n\n For example, if your digestion strength (agni) is weak, you eat Ayurvedically by choosing easily digestable foods while also eating foods that support your digestion getting stronger.\n\n Many Indian foods are easily eaten Ayurvedically, so it is a bonus if you enjoy that cuisine but certainly not a requirement.'
  },
  {
    id: 5,
    question: 'I have a physical ailment such as: heart burn, or eczema, or IBS, etc. what should I eat?',
    answer: 'Great question! Ayurveda treats the entire person, instead of focusing on the ailment. While there can be guidelines for specific ailments, in order to have an accurate understanding of where your body is, the intake process, with its extensive view into the feedback your body is providing, would be necessary.'
  },
  {
    id: 6,
    question: 'In my family there are people with different dominate doshas, how am I supposed to cook for everyone without having to make separate meals?',
    answer: 'This is a very common question and the answer doesn’t have to be as difficult as you imagine.\n\n There are ways to adjust meals, for example by placing some seasonings on individual portions or ways to rotate what you cook so that everyone’s needs are met without preparing different foods for everyone! (Who would have the time? And all the extra stress would be the opposite of eating ayurvedically!)'
  },
  {
    id: 7,
    question: 'What if I can\'t make my appointment?',
    answer: 'Bummer the schedule appointment no longer works.\n\nAppointments can be rescheduled or canceled free of charge up to 24 hours in advance. Cancellations **within 24 hours** of the appointment or in case of a no-show will incur a **€30 fee**.\nThis fee covers massages and consultations (part of a package as well as separately scheduled).\n\nIf you would like to cancel or reschedule your appointment, please send a message via email or WhatsApp.\nEmail: yourhealthyourpath@gmail.com\nPhone: 06 8198 3487'
  },
];

const FAQDutch = () => {
    const [openItemId, setOpenItemId] = useState<number | null>(null);

    const handleItemClick = (id: number) => {
        setOpenItemId(openItemId === id ? null : id);
    };

    return (
        <section className='flex flex-col items-center justify-center w-full px-6 md:px-8'>
            <div className="border-t border-gray-300 w-full max-w-5xl">
                {faqs.map(faq => (
                    <div key={faq.id} className="border-b border-gray-300 py-6">
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => handleItemClick(faq.id)}
                        >
                            <h3 className="text-lg sm:text-xl font-semibold tracking-wider">
                                {faq.question}
                            </h3>
                            <span className="text-2xl text-gray-500 transition-transform duration-300 transform"
                                style={{
                                    transform: openItemId === faq.id ? 'rotate(45deg)' : 'rotate(0deg)'
                                }}
                            >
                                +
                            </span>
                        </div>
                        
                        <div 
                            className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${openItemId === faq.id ? 'max-h-[1000px]' : 'max-h-0'}`}
                        >
                            <div 
                                className="mt-4 text-gray-600 leading-relaxed text-sm sm:text-base whitespace-pre-wrap"
                                dangerouslySetInnerHTML={{ __html: faq.answer.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQDutch;