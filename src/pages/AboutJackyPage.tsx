import Footer from "../components/Footer";
import Header from "../components/Header";
import images from '../content/images'

const AboutJackyPage = () => {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center w-full">
                {/*first section*/}
                <div className="block md:hidden">
                    <div className="relative h-full flex items-center justify-center p-4">
                            <div className="md:p-8 w-full max-w-5xl">
                                <h1 className="text-2xl md:text-4xl font-bold text-center mb-4">My Qualifications at a glance:</h1>
                                <p className="mb-4 text-xl md:text-base">As an Ayurvedic Practitioner I have:</p>
                                <ul className="list-disc pl-6 md:pl-8 space-y-2 text-xl md:text-base">
                                    <li>A four-year bachelor's degree as Ayurvedic Practitioner from EISRA: European Institute of Scientific Research on Ayurveda (Dutch: HBO Level)</li>
                                    <li>Completed <b>two ayurvedic interships</b> in India</li>
                                    <li>Completed the <b>Medical foundations</b> (Dutch: Medische Basis Kennis-MBK)</li>
                                    <li>Plus, I have a bachelor's degree in Education (Dutch: PABO)</li>
                                </ul>
                                <p className="mt-4 text-xl md:text-base">
                                    But more importantly - I've walked with ayurveda along my <b>own health path</b>. Experiencing what it can do in a <i>very</i> personal way.
                                </p>
                            </div>
                        </div>
                    <img src={images.purpleFlowers}/>
                </div>
                <div className="hidden md:block w-full relative h-[40vh] bg-fixed bg-center bg-cover bg-no-repeat"
                    style={{
                        backgroundImage: `url(${images.purpleFlowers})`
                    }}>
                    <div className="relative h-full flex items-center justify-center p-4">
                        <div className="bg-white/70 backdrop-blur-md p-4 md:p-8 shadow-lg w-full max-w-5xl">
                            <h1 className="text-2xl md:text-4xl font-bold text-center mb-4">My Qualifications at a glance:</h1>
                            <p className="mb-4 text-sm md:text-base">As an Ayurvedic Practitioner I have:</p>
                            <ul className="list-disc pl-6 md:pl-8 space-y-2 text-sm md:text-base">
                                <li>A four-year bachelor's degree as Ayurvedic Practitioner from EISRA: European Institute of Scientific Research on Ayurveda (Dutch: HBO Level)</li>
                                <li>Completed <b>two ayurvedic interships</b> in India</li>
                                <li>Completed the <b>Medical foundations</b> (Dutch: Medische Basis Kennis-MBK)</li>
                                <li>Plus, I have a bachelor's degree in Education (Dutch: PABO)</li>
                            </ul>
                            <p className="mt-4 text-sm md:text-base">
                                But more importantly - I've walked with ayurveda along my <b>own health path</b>. Experiencing what it can do in a <i>very</i> personal way.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row w-full items-center lg:items-start justify-center lg:px-12 pt-6 lg:pt-12 pb-4 gap-6 lg:gap-12">
                    <div className="flex w-full lg:max-w-3xl justify-center flex-col text-left px-4 lg:px-0 space-y-2 text-xl ">
                        <h1 className="text-2xl font-bold">2015</h1>
                        <p>
                            My love for Ayurveda, like so many of the other loves in my life (including meeting my husband!) started when I dared to follow my curiosity - after all, <b><i className="font-handwriting text-2xl">why not?</i></b>
                        </p>
                        <p>
                            In May of 2015, unsatisfied and even shocked by the doctor's advice - I picked up my first book about Ayurveda. The book had been given by a
                            woman I had the pleasure of sitting next to on a plane. Oh, how I wish I could thank her! I devoured the information and <b>my life's path and overall approach to health, were forever changed.</b>
                        </p>
                        <p>The feeling of <span className="font-handwriting font-bold">YESSSS! </span> filled me. Ayurveda made sense. It explained my experiences.</p>
                        <p>Immediately, I began making adjustments to my diet and scheduled an appointment with an ayurvedic doctor. My ailment - a half-dollar sized bald spot on the back of my head that had
                             developed over a matter of weeks, was taken care of with the soft and natural approach of ayurveda instead of the strong hormonal creams that had been recommended with the explanation: if used sooner than later they <i>just might work</i>.
                        </p>
                        <p>
                            And, as it turns out, this was <span className="font-handwriting font-bold text-2xl">just the beginning...</span>
                        </p>
                    </div>
                    <div>
                        <img 
                            className="w-full lg:w-auto lg:max-h-[50rem] object-cover shadow-lg"
                            src={images.AboutJacky1}
                            alt="Jacky sitting cross-legged in a chair in her office" 
                        />
                    </div>
                </div>
                {/*second section*/}
                <div className="flex flex-col lg:flex-row w-full items-center lg:items-start justify-center lg:px-12 pt-6 lg:pt-12 lg:pb-24 gap-6 lg:gap-12">
                    <div className="order-last lg:order-first">
                        <img 
                            className="w-full lg:w-auto lg:max-h-[50rem] object-cover shadow-lg"
                            src={images.jackyWithDog}
                            alt="Jacky sitting cross-legged in a chair in her office" 
                        />
                    </div>
                    <div className="order-first lg:order-last flex w-full lg:max-w-3xl justify-center flex-col text-left px-4 lg:px-0 space-y-2 text-xl ">
                        <h1 className="text-2xl font-bold">Niel's story in a nutshell:</h1>
                        <h2 className="text-2nxl">More than 10 years of suffering to relief in <i>months</i>!</h2>
                        <p>
                           At that very first Ayurvedic Doctor's appointment, I looked at my <span className="text-red-700">future/now</span> husband, Niels and said, "Maybe this is something that would help you?"
                        </p>
                        <p>
                            For more than 10 years, he'd struggled with intestinal complaints. <b>He went to doctors and specialists, but his symptoms persisted.</b>
                        </p>
                        <p>
                            Accompanying a constant feeling of limited energy, he suffered from:
                        </p>
                        <ul className="pl-4 lg:pl-8 lg:text-xl">
                            <li className="flex items-start gap-2 lg:gap-3">
                                <span className="text-green-custom lg:mt-1">•</span>
                                <span className="leading-relaxed">fluctuating amounts of gas</span>
                            </li>
                            <li className="flex items-start gap-2 lg:gap-3">
                                <span className="text-green-custom lg:mt-1">•</span>
                                <span className="leading-relaxed">bloating</span>
                            </li>
                            <li className="flex items-start gap-2 lg:gap-3">
                                <span className="text-green-custom lg:mt-1">•</span>
                                <span className="leading-relaxed">abdominal cramps</span>
                            </li>
                            <li className="flex items-start gap-2 lg:gap-3">
                                <span className="text-green-custom lg:mt-1">•</span>
                                <span className="leading-relaxed">fluctuations between loose bowels and mild constipation</span>
                            </li>
                        </ul>
                        <p>
                            Niels too gave ayurveda a try. After that first appointment, he began taking herbal supplements perscribed by the ayurvedic doctor and made alterations to his diet. Within a couple of months, he was free of all intestinal complaints, and they haven't returned!
                        </p>
                        <p>
                            This dramatic transformation got my attention - Ayurveda was really helping us. 
                        </p>
                        <p className="font-handwriting font-bold text-4xl pb-2">
                            So, we both kept going...
                        </p>
                    </div>
                </div>
                {/*green divider with text */}
                <div className="relative w-full min-h-[10rem] lg:min-h-[12rem] bg-green-custom  py-8 lg:py-12">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-4xl">
                        <span className="block text-center px-4 lg:px-10 leading-relaxed font-lexend text-lg lg:whitespace-nowrap sm:text-2xl lg:text-4xl xl:text-[2.5rem] text-white">
                            It's hard to have energy if your body isn't digesting properly.
                        </span>
                    </div>
                </div>
                {/* Third Section */}
                <div className="flex flex-col w-full items-center justify-center px-4 pb-8 lg:px-12 pt-6 lg:pt-12 lg:pb-24">
                    {/* Text content div */}
                    <div className="w-full max-w-3xl mb-2">                    
                        <h1 className="text-2xl lg:text-3xl font-bold">Fast Forward to 2019-2020:</h1>
                        <br/>
                        <h2 className="mb-2 text-xl">My story continued...</h2>
                        <p className="mb-2 text-xl">
                            Niels and I had continued to follow basic ayurvedic diet advice in our daily lives, but <b>my stress levels had risen</b>, this - added to <b>my stockpile of old shoved-to-the-side emotions</b> - was an overload for my system.
                        </p>
                        <p className="mb-2 text-xl">
                            <b>How i was feeling on the inside started to manifest on the outside</b>.
                        </p>
                        <p className="mb-2 text-xl">
                            I developed a severe case of adult acne. My self-esteem plummeted, and I just wanted to hide my face - which didn't help my already stressed system!
                        </p>
                        <p className="mb-2 text-xl">
                            Again, I turned to ayurveda. This time, working on deeper levels. And again it helped me...
                        </p>
                    </div>
                    
                    {/* Images div */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full max-w-4xl mb-4">
                        <div className="flex flex-col items-center">
                            <h3 className="text-xl font-bold mb-2">2020</h3>
                            <img 
                                src={images.jackyAcne} 
                                alt="Before"
                                className="w-80 h-80 object-cover border-8 border-coral-custom"
                            />
                        </div>
                        <div className="flex flex-col items-center">
                            <h3 className="text-xl font-bold mb-2">2021</h3>
                            <img 
                                src={images.jackyAcneHealed} 
                                alt="After"
                                className="w-80 h-80 object-cover border-8 border-coral-custom"
                            />
                        </div>
                    </div>

                    {/* Results section */}
                    <div className="w-full max-w-3xl">
                        <h1 className="text-2xl mb-2"><b>The results:</b> clearer skin, but really... So. Much. More.</h1>
                        <p className="mb-2 text-xl">
                            I'm calmer and more self-aware.
                        </p>
                        <p className="mb-2 text-xl">
                            Growing up and functioning in the world with a notoriously active brain - I now have <b>a mental calm that i didn't know was possible</b>.
                        </p>
                        <p className="font-bold mb-2 text-xl">Other helpful improvements:</p>
                        <ul className="pl-4 lg:pl-8 text-xl">
                            <li className="flex items-start gap-2 lg:gap-3">
                                <span className="text-green-custom lg:mt-0.5">•</span>
                                <span className="leading-relaxed">Better sleep</span>
                            </li>
                            <li className="flex items-start gap-2 lg:gap-3">
                                <span className="text-green-custom lg:mt-0.5">•</span>
                                <span className="leading-relaxed">Warm hands and feet - instead of the ice cold feet that I used to have all winter long</span>
                            </li>
                            <li className="flex items-start gap-2 lg:gap-3">
                                <span className="text-green-custom lg:mt-0.5">•</span>
                                <span className="leading-relaxed">Improved digestion</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="relative w-full min-h-[10rem] lg:min-h-[12rem] bg-teal-custom py-8 lg:py-12">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-4xl">
                        <span className="block text-center px-4 lg:px-10 leading-relaxed font-lexend text-lg lg:whitespace-nowrap sm:text-2xl lg:text-4xl xl:text-[2.5rem] text-white">
                            I began to heal myself from the <i>inside</i> out.
                        </span>
                    </div>
                </div>
                {/* <div>
                    <p>Just for fun...</p>
                    <div>
                        <div>
                            <h1>Best Summer Job Ever...</h1>
                            <p>I worked as a Park Ranger at Congaree National Park as part of a program for teachers!</p>
                        </div>
                        <div>
                            <img src={images.jackyParkRanger}/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1>Great gift to my future self...</h1>
                            <p>Learning to swim in my 20's - where I could go under water without plugging my nose :) and swim longer distances - was a great gift. </p>
                            <p>Just recently I joined a Dutch swim club and have been working on the breastroke!</p>
                            <p>A great quote from the trainer... "Now you can do what four-year-olds here do!"</p>
                        </div>
                        <div>
                            <img src={images.pool} />
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1>The Worst dancers, but the Best laughers!</h1>
                            <p>A couple of years ago, my husband Niels and I took salsa lessons. We were by far the <b>Worst in the class</b>, but we also were the ones who <b>laughed the most</b>!</p>
                        </div>
                        <div>
                            <img src={images.dancing}/>
                        </div>
                    </div>
                </div> */}
                <div className="max-w-4xl mx-auto p-8">
                    <h1 className="text-6xl font-handwriting font-bold text-center mb-12 text-coral-custom">
                    Just for fun...
                    </h1>

                    {/* Park Ranger Experience */}
                    <div className="mb-16 bg-green-50 rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="md:w-1/2 space-y-4">
                            <h2 className="text-3xl font-bold text-green-700 mb-4">
                                Best Summer Job Ever... 🌲
                            </h2>
                            <p className="text-lg text-green-600">
                                I worked as a Park Ranger at Congaree National Park as part of a program for teachers!
                            </p>
                            </div>
                            <div className="md:w-1/2">
                            <img 
                                src={images.jackyParkRanger} 
                                alt="Park Ranger Experience"
                                className="rounded-xl shadow-md w-full h-64 object-cover"
                            />
                            </div>
                        </div>
                    </div>

                    {/* Swimming Experience */}
                    <div className="mb-16 bg-blue-50 rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                            <div className="md:w-1/2 space-y-4">
                            <h2 className="text-3xl font-bold text-blue-700 mb-4">
                                Great gift to my future self... 🏊‍♀️
                            </h2>
                            <p className="text-lg text-blue-600">
                                Learning to swim in my 20's - where I could go under water without plugging my nose :) and swim longer distances - was a great gift.
                            </p>
                            <p className="text-lg text-blue-600">
                                Just recently I joined a Dutch swim club and have been working on the breastroke!
                            </p>
                            <p className="text-lg italic text-blue-500">
                                "Now you can do what four-year-olds here do!" - The Trainer
                            </p>
                            </div>
                            <div className="md:w-1/2">
                            <img 
                                src={images.pool} 
                                alt="Swimming Experience"
                                className="rounded-xl shadow-md w-full h-64 object-cover"
                            />
                            </div>
                        </div>
                    </div>

                    {/* Dancing Experience */}
                    <div className="bg-pink-50 rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="md:w-1/2 space-y-4">
                            <h2 className="text-3xl font-bold text-pink-700 mb-4">
                                The Worst dancers, but the Best laughers! 💃🕺
                            </h2>
                            <p className="text-lg text-pink-600">
                                A couple of years ago, my husband Niels and I took salsa lessons. We were by far the <span className="font-bold">Worst in the class</span>, but we also were the ones who <span className="font-bold">laughed the most</span>!
                            </p>
                            </div>
                            <div className="md:w-1/2">
                            <img 
                                src={images.dancing} 
                                alt="Dancing Experience"
                                className="rounded-xl shadow-md w-full h-64 object-cover"
                            />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default AboutJackyPage;

