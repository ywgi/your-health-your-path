import Footer from "../components/Footer";
import Header from "../components/Header";
import images from "../content/images";

const AboutAyurvedaPage = () => {
        return (
          <>
            <Header/>
            <div className="flex flex-col items-center w-full">
              {/*First section*/}
              <div className="w-full">
                <div 
                  className="hidden md:block w-full relative h-[45vh] bg-fixed bg-center bg-cover bg-no-repeat"
                  style={{
                    backgroundImage: `url(${images.mountainLake})`
                  }}
                />
                <div className="max-w-[80%] mx-auto h-auto bg-gradient-to-b from-white from-50% via-white via-65% to-light-pink-custom -mt-[22.5vh] relative z-10 pb-12">
                  <div className="px-8 py-8">
                    <h1 className="text-5xl font-heading font-bold text-light-teal-custom leading-snug">What is Ayurveda?</h1>
                    <p className="text-xl">Ayur...what? Are you like the many I've met (and myself included in the very beginning!) that has little to no background with this ancient healing tradition?</p>
                  </div>
                  <div className="max-w-6xl mx-auto space-y-2">
                    <div className="space-y-2">
                      <p className="text-3xl font-heading tracking-wide uppercase text-dark-coral-custom font-bold">Ayurveda, a quick summary:</p>
                      <p className="text-gray-600 italic">The word ayurveda translated from Sanskrit means: the knowledge or science of life. (ayur-life; veda-knowledge/science)</p>
                    </div>
                    <div>
                      <ul className="space-y-1 list-none pl-8 text-xl">
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
                </div>
              </div>
              {/*market spices with intro paragraph*/}
              <div className="flex flex-col md:flex-row gap-8 items-center max-w-6xl mx-auto p-4 lg:pb-12">
                <div className="relative w-full lg:w-auto self-center order-last lg:order-first">
                    {/* Main image container */}
                    <div className="w-full md:w-auto lg:w-auto relative mt-4 ml-4 lg:mt-8 lg:ml-8">
                        {/* Background decorative block */}
                        <div className="absolute -top-4 -left-4 lg:-top-8 lg:-left-8 w-full h-full bg-teal-custom -z-10 md:block" />
                        
                        <img 
                            className="w-full lg:w-auto lg:max-h-[800px] object-cover shadow-lg animate-[fade-in_1s_ease-out] opacity-0 [animation-fill-mode:forwards] relative"
                            src={images.marketSpices}
                            alt="Ayurvedic spices in a market" 
                        />
                    </div>
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <h1 className="text-4xl font-heading font-bold text-light-teal-custom">
                    Standing the test of 5000 years
                  </h1>
                  <div className="text-xl">
                    <p>
                      Ayurveda has stood up to the test of time. While growing up in the U.S. in the 90s, 
                      the Adkins diet became popular, in NL the Soja Bakker diet was popular, these trend 
                      diets with their strict rules and one-size-fits-all approach waned in popularity after 
                      just a few years.
                    </p>
                    <br/>
                    <h1 className="text-3xl font-heading font-bold tracking-wide text-dark-coral-custom">
                      AN APPROACH TO <span className="font-handwriting font-bold text-green-custom">Life</span>
                    </h1>
                    <br/>
                    <p>
                      While Ayurveda offers specific diet advice, <b>it isn't a diet</b>.<b> It's an approach to life</b>. 
                      The advice changes with you as you travel through life's different phases. 
                      Allowing your body to find its natural balance and healthy weight. 
                      You work with your body's wisdom instead of trying to force it into unnatural states to achieve a desired appearance or number on a scale.
                    </p>
                  </div>
                </div>
              </div>
              {/*Quote divider*/}
              <div className="flex flex-col items-center justify-center w-full h-[20vh] text-4xl bg-green-custom">
                  <p className="font-quote text-white text-center">“Health is not just the absence of disease; it is the presence of vitality.”</p>
                  <br/>
                  <p className="font-quote text-white text-center">- Charaka Samhita</p>
              </div>
              {/*Section 2 Dosha Intro*/}
              <div className="flex items-center justify-center bg-white w-full">
                <div className="max-w-xl px-8 text-2xl">
                  <p>
                    Ayurveda is a traditional form of practicing health. It is a <b>holistic system of medicine</b>
                    meaning the entire individual is seen - their mind, body, and emotions are equally considered when considring the course of action.
                  </p>
                  <p>
                    Ayurveda <b>recognizes that every individual is unqiuely themselves</b>. 
                    There are body and mind characteristics or the ayurvedic types (doshas).
                  </p>
                </div>
                <img src={images.asana} className="max-h-[500px]"/>
              </div>
              {/*Section 3 Doshas */}
              <div className="flex flex-col items-center">
                <div className="flex flex-col py-8 max-w-[75vw]">
                  <h1 className="text-4xl font-heading text-light-teal-custom font-bold">About the Doshas (Ayurvedic types):</h1>
                  <br/>
                  <p className="text-2xl font-heading text-dark-coral-custom tracking-wide uppercase">
                    What dosha type am I? Let's talk about the body types.
                  </p>
                  <br/>
                  <p className="text-2xl">
                    First and foremost - <b>Everyone is comprised of ALL 3 doshas</b>. Ayurveda observes that most people have a dominance of one or two dosha qualities.
                  </p>
                </div>
                {/* 3 dosha cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto pb-12">
                  <div className="flex flex-col w-full max-w-[20vw] max-h-[700px] mx-auto bg-white">
                    {/* Image container - set to 30% of parent height */}
                    <div className="w-full h-[30%] overflow-hidden mb-4 relative">
                      <img 
                        src={images.air}
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-light-pink-custom text-black p-4 rounded">
                          <p className="text-l font-bold tracking-wide">V A T A</p>
                        </div>
                      </div>
                    </div>
                    {/* Content box - set to take remaining height */}
                    <div className="h-[70%] text-sm">
                      <div className="p-4">
                        <p>
                          <strong>Vata</strong> is related to <strong>all of the movement that happens within the body</strong>.
                        </p>
                        <br/>
                        <p>
                          For Example:
                        </p>
                        <ul className="list-disc pl-6">
                          <li>air and blood flow</li>
                          <li>signals sent via the nervous system</li>
                          <li>the endocrine system's flow of hormones</li>
                          <li>waste removal from body</li>
                          <li>the stream of thought that is almost always on the move</li>
                        </ul>
                        <br/>
                        <p>
                          All that space makes movement easier, and often fast. There is a lightness to the Vata dosha. 
                          People with a high Vata dosha tend to be light and often experience dryness - for example dry 
                          skin or constipation.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full max-w-[20vw] max-h-[700px] mx-auto bg-white">
                    {/* Image placeholder since we can't use external images */}
                    <div className="w-full h-[30%] overflow-hidden mb-4 relative">
                      <img 
                        src={images.fire}
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-light-pink-custom text-black p-3 rounded">
                          <p className="text-xl font-bold tracking-wide">P I T T A</p>
                        </div>
                      </div>
                    </div>
                    {/* Content box */}
                    <div className="h-[70%] text-sm">
                      <div className="p-4">
                        <p>
                          <b>Pitta</b> is related <b>to the transformation within the body</b>.
                        </p>
                        <br/>
                        <p>
                          For Example:
                        </p>
                        <ul className="list-disc pl-6">
                          <li>digestion of food</li>
                          <li>"digestion" of emotions</li>
                          <li>processing images and thoughts</li>
                          <li>hormonal reactions</li>
                        </ul>
                        <br/>
                        <p>
                          Being the element of fire - pitta is connected to warmth. From science class we know that a by-product from chemical reactions is warmth.
                          It is of no surprise that people with a high pitta dosha tend to have extra warmth in their body.
                        </p>
                        <br/>
                        <p>
                          (For clarity: the movement of hormones from place to place is Vata, but the actual hormal reaction is related to Pitta)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full max-w-[20vw] max-h-[700px] mx-auto bg-white">
                    {/* Image placeholder since we can't use external images */}
                    <div className="w-full h-[30%] overflow-hidden mb-4 relative">
                      <img 
                        src={images.earth}
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-light-pink-custom text-black p-3 rounded">
                          <p className="text-xl font-bold tracking-wide">K A P H A</p>
                        </div>
                      </div>
                    </div>
                    {/* Content box */}
                    <div className="h-[70%] text-sm">
                      <div className="p-4">
                        <p>
                          <b>Kapha</b> provides the protective structures and fluids.
                        </p>
                        <br/>
                        <p>
                          For example:
                        </p>
                        <ul className="list-disc pl-6">
                          <li>Main body mass</li>
                          <li>Shape to cells and organs</li>
                          <li>Lymph and blood plasma</li>
                          <li>Myelin sheath around nerve cells</li>
                          <li>Synovial fluid in joints</li>
                          <li>Gastric mucosal barrier to protect stomach lining</li>
                        </ul>
                        <br/>
                        <p>
                          Kapha's earth and water elements are heavier and more stable in nature. People described as having thick skin tend to have more Kapha.
                          These people are more grounded, don't let things bother them quickly and they're less reactive
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Grandmas section*/}
              <div className="flex items-center justify-center w-full h-[20vh] text-6xl bg-teal-custom">
                  <p className=" text-white font-handwriting text-center">The Types in Practice</p>
              </div>
              <div className="flex flex-col items-center px-2 p-y">
                <div className="flex h-[15vh] items-center">
                  <p className="text-2xl text-center">
                    Since day one, ayurveda has offered me clarity and a way to understand the differences I'd observed in
                    those around me. <br/>  A wonderful example is with two of my all-time favorite people, my grandmas.
                  </p>
                </div>
                <div className="flex md:gap-20 items-center">
                  <div className="max-w-[15%] flex items-center justify-center">
                    <p className="text-7xl font-handwriting transform -rotate-90 origin-center whitespace-nowrap">
                      Work with nature.
                    </p>
                  </div>
                  <div className="flex flex-col items-center pb-8">
                    <h1 className="font-heading font-bold text-4xl text-dark-coral-custom">Grandma D</h1>
                    <div className="lg:h-[450px] lg:w-[330px] p-4 border-2 border-black">
                      <img
                        src={images.gmaD}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="flex flex-col min-h-[375px] max-w-[400px] text-sm bg-white p-8 mt-4">
                      <p>
                        Grandma D. She was always on the go and was very creative. When I was seven, I awoke from a nap to discover, in that short amount of time
                        she managed to make a new outfit for my doll.
                      </p>
                      <br/>
                      <p>
                        Not only her hands, but also her mind was quick and tucked in between all her thoughts was often worry.
                      </p>
                      <br/>
                      <p>
                        She was easy with change, furniture was replaced and items from the past were let go.
                      </p>
                      <br/>
                      <p>
                        Although she ate sweets and carbs and everything else in-between, gaining weight was never a concern for her.
                        Actually, keeping weight on, especially in her later years, was more of a challenge.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center pb-8">
                    <h1 className="font-heading font-bold text-4xl text-dark-coral-custom">Grandma M</h1>
                    <div className="lg:h-[450px] lg:w-[330px] p-4 border-2 overflow-hidden border-black ">
                        <img
                          src={images.gmaM}
                          className="w-full h-full object-cover object-top"
                        />
                    </div>
                    <div className="flex flex-col min-h-[375px] max-w-[400px] text-sm bg-white p-8 mt-4">
                      <p>
                        Grandma M was, in some aspects, almost the complete opposite to Grandma D
                      </p>
                      <br/>
                      <p>
                        She was steady, not especially active and wasn't one to worry very easily. Going to her house, was a predictable treat.
                        I could always find whatever I was looking for because she wasn't one for change.
                      </p>
                      <br/>
                      <p>
                        After struggling with her weight for years, Grandma M watched what she ate, and could complain that
                        <i> just looking at sweets </i>
                        would bring weight gain.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center max-w-[15%]">
                    <img src={images.yhypGreenNoBackground}
                          className="max-h-[200px]"/>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center pb-10">
                  <p className="max-w-[60vw] text-xl">
                    Grandma M wouldn't even consider eating the things that Grandma D ate, but if they did eat the same diet, their bodies would react very differently.
                    My observations weren't limited to family. As a teacher, I served servaral sets of brothers and/or sisters over the years and despite having the same 
                    parents, living in the same house, eating the same diet - they were very different.
                  </p>
                </div>
              </div>
              <div className="w-full bg-white flex items-center justify-center h-[40vh]">
                <img src={images.meditate}  className="max-h-full"/>
                  <div className="flex flex-col px-8">
                    <p className="text-2xl font-heading font-bold text-light-teal-custom max-w-[30vw]">Taking these differences into account, that's what ayurveda does.</p>
                    <br/>
                    <p className="text-2xl max-w-[30vw]">
                      Ayurveda doesn't give a one-size-fits-all approach. Instead, it looks at who <strong>you are </strong>
                      and <strong>where you're at</strong> and helps you <strong>navigate your way from right there.</strong>
                    </p>
                  </div>
              </div>
            </div>
            <Footer />
          </>
        );
}

export default AboutAyurvedaPage;


