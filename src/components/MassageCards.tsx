import images from "../content/images";

const MassageCards: React.FC = () => {
    return (
        <div className="flex flex-col space-y-12">
            <div id="massage" className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md 
                    relative overflow-hidden group w-[85vw] lg:w-[80vw] lg:max-w-[1200px] mx-auto">
                {/* Responsive flex container with more specific breakpoints */}
                <div className="flex flex-col md:flex-row">
                    {/* Fixed-size image container */}
                    <div className="w-full md:w-96 flex-shrink-0">
                        <img 
                            src={images.massageWoman} 
                            alt="Abhyanga massage therapy" 
                            className="w-full h-64 md:h-full object-cover"
                        />
                    </div>
                    {/* Content section with proper padding */}
                    <div className="p-6 md:p-8 flex-grow">
                        <h3 className="text-xl md:text-2xl font-semibold font-heading text-light-teal-custom mb-3">
                            Massage (Abhyanga)
                        </h3>
                        <p className="text-gray-600 text-lg mb-2">Duration: 60 minutes</p>
                        <p className="text-coral-custom text-lg md:text-md mb-4">€77</p>
                        <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">
                            Abhyanga is a therapeutic, full body massage with warm herbal oil that is tailored to the person and their current health. Using traditional techniques this gentle massage brings calmness to your nervous system and a deep relaxation for your entire being.
                            Abhyanga promotes blood circulation and activates the lymphatic system. It helps with sleep disorders, and digestive problems. It is recommended in various conditions such as: burnout, skin conditions, back/neck/muscle pain, and anxiety. This massage is good for anyone who wants more rest and calmness in his/her life.
                        </p>
                        <button className="inline-flex items-center text-gray-700
                            hover:text-green-custom text-sm group-hover:translate-x-1 transition-transform">
                            SCHEDULE
                            <svg
                                className="w-4 h-4 ml-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md 
                relative overflow-hidden group w-[85vw] lg:w-[80vw] lg:max-w-[1200px] mx-auto">
                {/* Responsive flex container - column on mobile, row on larger screens */}
                <div className="flex flex-col md:flex-row">
                    {/* Image container with responsive sizing */}
                    <div className="w-full md:w-96 flex-shrink-0">
                        <img 
                            src={images.massageFoot} 
                            alt="Marma massage therapy" 
                            className="w-full h-64 md:h-[389px] object-cover"
                        />
                    </div>
                    {/* Content section - using flex and flex-col to position content */}
                    <div className="p-6 flex flex-col h-full">
                        {/* Content area that will grow/shrink as needed */}
                        <div className="flex-grow">
                            <h3 className="text-xl md:text-2xl font-semibold font-heading text-light-teal-custom mb-3">
                                Massage (Marma)
                            </h3>
                            <p className="text-gray-600 text-lg mb-2">Duration: 90 minutes</p>
                            <p className="text-coral-custom text-lg mb-4">€95</p>
                            <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">
                                This makes use of the interconnectedness of our systems. Marma points are often compared to acupuncture/ acupressure points. 
                                The 107 points are spread in all the regions of the body in areas where tension often accumulates. 
                                Gentle pressure in combination with the warm herbal oil that is selected according to the person's specific needs, stimulates the release of tension and toxins. 
                                This full body massage is helpful in keeping the mind and body in balance.
                            </p>
                        </div>
                        {/* Button positioned at the bottom */}
                        <div className="mt-auto pt-2">
                            <button className="inline-flex items-center text-gray-700 
                                hover:text-green-custom text-sm group-hover:translate-x-1 transition-transform">
                                SCHEDULE
                                <svg
                                    className="w-4 h-4 ml-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MassageCards;