import DoshaCards from "../components/DoshaCards";
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
                    <h1 className="text-3xl md:text-5xl font-heading font-bold text-light-teal-custom leading-snug">What is Ayurveda?</h1>
                    <p className="text-lg text-center md:text-xl mt-2">Ayur...what? Are you like the many I've met (and myself included in the very beginning!) that has little to no background with this ancient healing tradition?</p>
                  </div>
                  
                  <div className="px-4 md:px-0 md:max-w-6xl mx-auto space-y-2">
                    <div className="space-y-2">
                      <p className="text-2xl md:text-3xl font-heading tracking-wide uppercase text-dark-coral-custom font-bold">Ayurveda, a quick summary:</p>
                      <p className="text-gray-600 italic text-base md:text-lg">The word Ayurveda translated from Sanskrit means: the knowledge or science of life. (ayur-life; veda-knowledge/science)</p>
                    </div>
                    
                    <div>
                      <ul className="space-y-2 md:space-y-1 list-none pl-2 md:pl-8 text-base md:text-xl">
                        <li className="flex items-start">
                          <span className="mr-2 text-green-custom flex-shrink-0 md:mt-1">•</span>
                          <span>A <b>traditional and natural form of medicine recognized by the World Health Organization.</b> (5000+ years old, originating in India)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-green-custom flex-shrink-0 md:mt-1">•</span>
                          <span><b>Holistic</b> - it treats a person, recognizing all systems, mind, body and emotion are connected.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-green-custom flex-shrink-0 md:mt-1">•</span>
                          <span>Sees individuals for their <b>unique Ayurvedic type</b>, and where <b>they are in life <u>right now</u></b>.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-green-custom flex-shrink-0 md:mt-1">•</span>
                          <span>Focuses on <b>prevention</b> and assists with <b>healing</b></span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-green-custom flex-shrink-0 md:mt-1">•</span>
                          <span>Has <b>multifaceted approach</b>: diet, lifestyle, herbal supplements, breath work, and treatments such as warm oil massages.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-green-custom flex-shrink-0 md:mt-1">•</span>
                          <span>Is the <b>"sister" of yoga</b>, originating from the same source of knowledge, thus it overlaps with some techniques such as breathing practices and asana poses.</span>
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
                    Standing the test of 5000 years
                  </h1>
                  <div className="text-lg md:text-xl">
                    <p>
                      Ayurveda has stood up to the test of time. While growing up in the U.S. in the 90s, 
                      the Adkins diet became popular, in NL the Sonja Bakker diet was popular, these trend 
                      diets with their strict rules and one-size-fits-all approach waned in popularity after 
                      just a few years.
                    </p>
                    
                    <h2 className="text-2xl md:text-3xl font-heading font-bold tracking-wide text-dark-coral-custom mt-6 mb-4">
                      AN APPROACH TO <span className="font-handwriting font-bold text-green-custom">Life</span>
                    </h2>
                    
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
              <div className="flex flex-col items-center justify-center w-full py-8 md:h-[20vh] bg-green-custom px-4 md:px-8">
                <p className="font-quote text-white text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl">"Health is not just the absence of disease; it is the presence of vitality."</p>
                <p className="font-quote text-white text-center text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4">- Charaka Samhita</p>
              </div>
              {/*Section 2 Dosha Intro*/}
              <div className="flex flex-col md:flex-row items-center bg-white w-full pt-4 md:py-0">
                {/* Text section - properly sized */}
                <div className="w-full md:w-[40vw] px-4 md:px-12 lg:px-16 mb-6 md:mb-0">
                  <p className="text-lg md:text-xl lg:text-2xl mb-4">
                    Ayurveda is a traditional form of practicing health. It is a <b>holistic system of medicine</b> meaning
                    the entire individual is seen - their mind, body, and emotions are equally considered when considering the course of action.
                  </p>
                  <p className="text-lg md:text-xl lg:text-2xl">
                    Ayurveda <b>recognizes that every individual is unqiuely themselves</b>. 
                    There are body and mind characteristics or the ayurvedic types (doshas).
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
              <DoshaCards />
              {/*Grandmas section*/}
              <div className="flex flex-col items-center px-2 py-4 md:px-2 md:p-y">
                {/* Header section */}
                <div className="flex h-auto md:h-[15vh] items-center mb-6 md:mb-0">
                  <p className="text-lg sm:text-xl md:text-2xl text-center">
                    Since day one, ayurveda has offered me clarity and a way to understand the differences I'd observed in
                    those around me. <br className="hidden md:block"/> A wonderful example is with two of my all-time favorite people, my grandmas.
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
                      <h1 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-dark-coral-custom mb-4">Grandma D</h1>
                      <div className="w-full max-w-[280px] sm:max-w-[300px] md:w-auto lg:h-[450px] lg:w-[330px] p-2 md:p-4 border-2 border-black">
                        <img
                          src={images.gmaD}
                          className="w-full h-full object-cover object-top"
                          alt="Jacklyn's Grandma D"
                        />
                      </div>
                      <div className="flex flex-col w-full max-w-[320px] sm:max-w-[400px] min-h-[320px] md:min-h-[375px] bg-white p-4 md:p-8 mt-4">
                        <p className="text-md">
                          Grandma D. She was always on the go and was very creative. When I was seven, I awoke from a nap to discover, in that short amount of time
                          she managed to make a new outfit for my doll.
                        </p>
                        <br/>
                        <p className="text-md">
                          Not only her hands, but also her mind was quick and tucked in between all her thoughts was often worry.
                        </p>
                        <br/>
                        <p className="text-md">
                          She was easy with change, furniture was replaced and items from the past were let go.
                        </p>
                        <br/>
                        <p className="text-md">
                          Although she ate sweets and carbs and everything else in-between, gaining weight was never a concern for her.
                          Actually, keeping weight on, especially in her later years, was more of a challenge.
                        </p>
                      </div>
                    </div>
                    
                    {/* Grandma M section */}
                    <div className="flex flex-col items-center pb-8 w-full md:w-auto">
                      <h1 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-dark-coral-custom mb-4">Grandma M</h1>
                      <div className="w-full max-w-[280px] sm:max-w-[300px] md:w-auto lg:h-[450px] lg:w-[330px] p-2 md:p-4 border-2 overflow-hidden border-black">
                        <img
                          src={images.gmaM}
                          className="w-full h-full object-cover object-top"
                          alt="Jacklyn's Grandma M"
                        />
                      </div>
                      <div className="flex flex-col w-full max-w-[320px] sm:max-w-[400px] min-h-[320px] md:min-h-[375px] bg-white p-4 md:p-8 mt-4">
                        <p className="text-md">
                          Grandma M was, in some aspects, almost the complete opposite to Grandma D
                        </p>
                        <br/>
                        <p className="text-md">
                          She was steady, not especially active and wasn't one to worry very easily. Going to her house, was a predictable treat.
                          I could always find whatever I was looking for because she wasn't one for change.
                        </p>
                        <br/>
                        <p className="text-md">
                          After struggling with her weight for years, Grandma M watched what she ate, and could complain that
                          <i> just looking at sweets </i>
                          would bring weight gain.
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
                    Grandma M wouldn't even consider eating the things that Grandma D ate, but if they did eat the same diet, their bodies would react very differently.
                    My observations weren't limited to family. As a teacher, I served several sets of brothers and/or sisters over the years and despite having the same 
                    parents, living in the same house, eating the same diet - they were very different.
                  </p>
                </div>
              </div>
              <div className="w-full bg-white flex flex-col md:flex-row items-center justify-center md:h-[40vh]">
                <div className="w-full md:w-auto flex justify-center md:h-full">
                  <img src={images.meditate} className="h-auto md:h-full object-contain" alt="Ayurvedic Woman Meditating on the beach"/>
                </div>
                <div className="flex flex-col px-4 md:px-8 py-4 md:py-0">
                  <p className="text-xl md:text-2xl font-heading font-bold text-light-teal-custom max-w-full md:max-w-[30vw]">
                    Taking these differences into account, that's what ayurveda does.
                  </p>
                  <br/>
                  <p className="text-lg md:text-2xl max-w-full md:max-w-[30vw]">
                    Ayurveda doesn't give a one-size-fits-all approach. Instead, it looks at who <strong>you are </strong>
                    and <strong>where you're at</strong> and helps you <strong>navigate your way from right there.</strong>
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-center py-8 lg:py-12 gap-8 lg:gap-12 md:px-6 lg:px-0">
                <div className="flex flex-col w-full lg:max-w-[800px] lg:w-[80vw] px-4 lg:py-6 text-base md:text-lg lg:text-xl">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading text-light-teal-custom">"It's So Logical!"</h1>
                  <br/>
                  <p>Several clients have echoed this phrase that I repeated countless time during my Ayurvedic studies.</p>
                  <br/>
                  <p>Ayurveda works with the natural reactions of your body. In many ways many people already do this, for instance if
                      you get a sunburn, it is common knowledge to get out of the sun and offer a cooling agent, like aloe vera gel, to
                      sooth the red skin. Although a lot of our health complaints can be more complicated than a sunburn, this is the line
                      of reasoning that Ayurveda follows. Remove the cause and help the body in the healing process.
                  </p>
                  <br/>
                  <p>
                    If your body is providing signs of being light and dry (Vata complaints) then it is important to consume foods that
                    offer a grounding effect and that contain moisture- or help your body retain moisture. The art is in understanding
                    the body's signals and knowing what ways you can best move forward. Here is where working with a professional is
                    immensely helpful.
                  </p>
                </div>
                <div className="relative w-full md:w-4/5 lg:w-auto self-center mt-6 lg:mt-0">
                  {/* Background decorative block */}
                  <div className="absolute top-0 right-0 w-full h-full bg-teal-custom -z-10 md:block origin-top-right scale-90" />

                  {/* Main image container */}
                  <div className="w-full md:w-auto lg:w-auto relative md:mt-4 md:mr-4 lg:mt-8 lg:mr-8">
                    <img 
                      className="w-full md:max-w-full lg:w-auto lg:max-h-[40rem] object-cover shadow-lg animate-[fade-in_1s_ease-out] opacity-0 [animation-fill-mode:forwards]"
                      src={images.womanStretching}
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
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading text-light-teal-custom">The tools of Ayurveda</h1>
                  <br/>
                  <p>
                    <b>Ayurveda uses food as Medicine</b>. This involves eating foods that help your current situation, while taking into account the climate and current seasons
                  </p>
                  <br/>
                  <p>
                    Various <b>warm oil treatments and massages</b>. The type of herb infused oil that is selected is specific to your dosha type and current (health) goals.
                  </p>
                  <br/>
                  <p>
                    <b>Herbal Supplements</b>. Supplements can help with a wide variety of conditions. The goal is to help your body
                      get a boost of help in the direction you'd like it to go. Supplements are intended to be a temporary help, not a long-term solution.
                  </p>
                  <br/>
                  <p>
                    <b>Breath work and Yoga Asanas</b>. Working consciously with breath and body movements. There are techiniques to help you build in calmness, and there are techniques to help you build heat, or inspire movement.
                    What you do, depends on the next right step for you along your path.
                  </p>
                </div>
              </div>
            </div>
            <Footer />
          </>
        );
}

export default AboutAyurvedaPage;


