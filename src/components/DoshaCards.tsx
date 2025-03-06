import images from "../content/images";

const DoshaCards = () => {
    return(
                     
        <div className="flex flex-col items-center">
            <div className="flex flex-col pt-4 md:py-8 max-w-[90vw] lg:max-w-[75vw]">
                <h1 className="text-3xl md:text-4xl font-heading text-light-teal-custom font-bold">About the Doshas (Ayurvedic types):</h1>
                <br/>
                <p className="text-2xl font-heading text-dark-coral-custom tracking-wide uppercase">
                    What dosha type am I? Let's talk about the body types.
                </p>
                <br/>
                <p className="text-xl">
                    First and foremost - <b>Everyone is comprised of ALL 3 doshas</b>. Ayurveda observes that most people have a dominance of one or two dosha qualities.
                </p>
            </div>
            {/* 3 dosha cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 max-w-7xl mx-auto py-10 px-4">
                <div className="flex flex-col w-full bg-white shadow-md rounded-lg overflow-hidden">
                    {/* Image container - set to 30% of parent height */}
                    <div className="flex w-full h-48 md:h-52 overflow-hidden relative">
                        <div className="w-1/2">
                            <img 
                                src={images.air}
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <div className="w-1/2">
                            <img 
                                src={images.space}
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-light-pink-custom text-black p-4 rounded">
                            <p className="text-l font-bold tracking-wide">V A T A</p>
                            </div>
                        </div>
                    </div>
                    {/* Content box - set to take remaining height */}
                    <div className="h-[70%] text-sm">
                        <div className="p-4">
                            <p>Elements: air and space</p>
                            <br/>
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
                <div className="flex flex-col w-full bg-white shadow-md rounded-lg overflow-hidden">
                    {/* Image placeholder since we can't use external images */}
                    <div className="flex w-full h-48 md:h-52 overflow-hidden relative">
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
                            <p>Elements: fire and a little water</p>
                            <br/>
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
                <div className="flex flex-col w-full bg-white shadow-md rounded-lg overflow-hidden">
                    {/* Image placeholder since we can't use external images */}
                    <div className="flex w-full h-48 md:h-52 overflow-hidden relative">
                        {/* First image - 50% width */}
                        <div className="w-1/2">
                            <img 
                            src={images.earth}
                            className="w-full h-full object-cover object-center"
                            />
                        </div>
                        
                        {/* Second image - 50% width */}
                        <div className="w-1/2">
                            <img 
                            src={images.water}
                            className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-light-pink-custom text-black p-3 rounded">
                            <p className="text-xl font-bold tracking-wide">K A P H A</p>
                            </div>
                        </div>
                    </div>
                    {/* Content box */}
                    <div className="h-[70%] text-sm">
                        <div className="p-4">
                            <p>Elements: earth and water</p>
                            <br/>
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
                            These people are more grounded, don't let things bother them quickly and they're less reactive.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DoshaCards;