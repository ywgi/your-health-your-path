import Footer from "../components/Footer";
import Header from "../components/Header";
import images from "../content/images";

const AboutAyurvedaPage = () => {
        return (
          <>
            <Header/>
            <div className="flex flex-col items-center w-full p-8">
              <div className="pb-4">
                <h1 className="text-3xl font-bold text-teal-custom leading-snug">What is Ayurveda?</h1>
                <p>Ayur...what? Are you like the many I've met (and myself included in the very beginning!) that has little to no background with this ancient healing tradition?</p>
              </div>
              <div className="max-w-6xl mx-auto space-y-2">
                <div className="space-y-2">
                  <p className="text-xl font-semibold">Ayurveda, a quick summary:</p>
                  <p className="text-gray-600 italic">The word ayurveda translated from Sanskrit means: the knowledge or science of life. (ayur-life; veda-knowledge/science)</p>
                </div>
                <div>
                  <ul className="space-y-4 list-none pl-8 text-xl">
                    <li className="flex items-start">
                      <span className="mr-2 text-green-custom">•</span>
                      <span>A <b>traditional and natural form of medicine recognized by the World Health Organization.</b> (5000+ years old, originating in India)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-custom">•</span>
                      <span><b>Holistic</b> - it treats a person, recognizing all systems, mind, body and emotion are connected.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-custom">•</span>
                      <span>Sees individuals for their <b>unique ayurvedic type</b>, and where <b>they are in life <u>right now</u></b>.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-custom">•</span>
                      <span>Focuses on <b>prevention</b> and assists with <b>healing</b></span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-custom">•</span>
                      <span>Has <b>multifaceted approach</b>: diet, lifestyle, herbal supplements, breath work, and treatments such as warm oil massages.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-custom">•</span>
                      <span>Is the <b>"sister" of yoga</b>, originating from the same source of knowledge, thus it overlaps with some techniques such as breathing practices and asana poses.</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-8 items-center max-w-6xl mx-auto p-4">
                <div className="w-full md:w-1/2">
                  <img 
                    src={images.marketSpices}
                    alt="Market spices"
                    className="max-h"
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <h1 className="text-3xl font-bold">
                    Standing the test of 5000 years
                  </h1>
                  <p>
                    Ayurveda has stood up to the test of time. While growing up in the U.S. in the 90s, 
                    the Adkins diet became popular, in NL the Soja Bakker diet was popular, these trend 
                    diets with their strict rules and one-size-fits-all approach waned in popularity after 
                    just a few years.
                  </p>
                  <p>
                    While Ayurveda offers specific diet advice, <b>it isn't a diet</b>.<b> It's an approach to life</b>. 
                    The advice changes with you as you travel through life's different phases. 
                    Allowing your body to find its natural balance and healthy weight. 
                    You work with your body's wisdom instead of trying to force it into unnatural states to achieve a desired appearance or number on a scale.
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <p>
                    Ayurveda is a traditional form of practicing health. It is a <b>holistic system of medicine</b>
                    meaning the entire individual is seen - their mind, body, and emotions are equally considered when considring the course of action.
                  </p>
                  <p>
                    Ayurveda <b>recognizes that every individual is unqiuely themselves</b>. 
                    There are body and mind characteristics or the ayurvedic types (doshas).
                  </p>
                </div>
                <img src={images.asana}/>
              </div>
              <div>
                <div>
                  <h1>About the Doshas (Ayurvdic types):</h1>
                  <p>
                    What dosha type am I? Let's talk about the body types.
                  </p>
                  <p>
                    First and foremost - <b>Everyone is comprised of ALL 3 doshas</b>. Ayurveda observes that most people have a dominance of one or two dosha qualities.
                  </p>
                </div>
                {/* holder */}
                <div className="flex flex-col w-full max-w-2xl mx-auto">
                  {/* Image placeholder since we can't use external images */}
                  <div className="w-full h-48 bg-blue-100 flex items-center justify-center mb-4">
                    <img 
                      src={images.air}
                    />
                  </div>

                  {/* Content box */}
                  <div className="border rounded-lg p-6 bg-white shadow-md min-h-[400px]">
                    <div className="space-y-4">
                      <p className="text-lg">
                        <strong>Vata</strong> is related to <strong>all of the movement that happens within the body</strong>.
                        <br />
                        For example:
                      </p>
                      
                      <ul className="list-disc pl-6 space-y-2">
                        <li>air and blood flow</li>
                        <li>signals sent via the nervous system</li>
                        <li>the endocrine system's flow of hormones</li>
                        <li>waste removal from body</li>
                        <li>the stream of thought that is almost always on the move</li>
                      </ul>
                      
                      <p className="text-lg">
                        All that space makes movement easier, and often fast. There is a lightness to the Vata dosha. 
                        People with a high Vata dosha tend to be light and often experience dryness - for example dry 
                        skin or constipation.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <img 
                    src={images.fire}
                  />
                  <div>
                    <p>
                      <b>Pitta</b> is related <b>to the transformation within the body</b>.
                      <br/>
                      For example:
                    </p>
                    <ul>
                      <li>digestion of food</li>
                      <li>"digestion" of emotions</li>
                      <li>processing images and thoughts</li>
                      <li>hormonal reactions</li>
                    </ul>
                    <p>
                      Being the element of fire - pitta is connected to warmth. From science class we know that a by-product from chemical reactions is warmth.
                      It is of no surprise that people with a high pitta dosha tend to have extra warmth in their body.
                    </p>
                    <p>
                      (For clarity: the movement of hormones from place to place is Vata, but the actual hormal reaction is related to Pitta)
                    </p>
                  </div>
                </div>
                <div>
                  <img
                    src={images.earth}
                  />
                  <p>
                    <b>Kapha</b> provides the protective structures and fluids.
                    <br />
                    For example:
                  </p>
                  <ul>
                    <li>Main body mass</li>
                    <li>Shape to cells and organs</li>
                    <li>Lymph and blood plasma</li>
                    <li>Myelin sheath around nerve cells</li>
                    <li>Synovial fluid in joints</li>
                    <li>Gastric mucosal barrier to protect stomach lining</li>
                  </ul>
                  <p>
                    Kapha's earth and water elements are heavier and more stable in nature. People described as having thick skin tend to have more Kapha.
                    These people are more grounded, don't let things bother them quickly and they're less reactive
                  </p>
                </div>
              </div>
              <div>
                <h1>The types in Practice</h1>
                <p>
                  Since day one, ayurveda has offered me clarity and a way to understand the differences I'd observed in
                  those around me. A wonderful example is with two of my all-time favorite, my grandmas.
                </p>
                <div>
                  <h1>Grandma D</h1>
                  <img
                    src={images.gmaD}
                  />
                  <p>
                    Grandma D. She was always on the go and was very creative. When i was seven, I awoke from a nap to discover, in that short amount of time
                    she managed to make a new outfit for my doll.
                  </p>
                  <p>
                    Not only her hands, but also her mind was quick and tucked in between all her thoughts was often worry.
                  </p>
                  <p>
                    She was easy with change, furniture was replaced and items from the past were let go.
                  </p>
                  <p>
                    Although she ate sweets and carbs and everything else in-between, gaining weight was never a concern for her.
                    Actually, keeping weight on, especially in her later years, was more of a challenge.
                  </p>
                </div>
                <div>
                  <h1>Grandma M</h1>
                  <img
                    src={images.gmaM}
                  />
                  <p>
                    Grandma M was, in some aspects, almost the complete opposite to Grandma D
                  </p>
                  <p>
                    She was steady, not especially active and wasn't one to worry very easily. Going to her house, was a predictable treat.
                    I could always find whatever I was looking for because she wasn't one for change.
                  </p>
                  <p>
                    After struggling with her weight for years, Grandma M watched what she ate, and could complain that 
                    <i>just looking at sweets </i>
                    would bring weight gain.
                  </p>
                </div>
                <p>
                  Grandma M wouldn't even consider eating the things that Grandma D ate, but if they did eat the same diet, their bodies would react very differently.
                  My observations weren't limited to family. As a teacher, I served servaral sets of brothers and/or sisters over the years and despite having the same 
                  parents, living in the same house, eating the same diet - they were very different.
                </p>
              </div>
            </div>
            <Footer />
          </>
        );
}

export default AboutAyurvedaPage;


<div>
  
</div>