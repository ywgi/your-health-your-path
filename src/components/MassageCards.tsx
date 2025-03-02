const MassageCards: React.FC = () => {
    return (
        <div className="flex flex-col space-y-12">
            <div id="massage" className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-md 
                border border-gray-100 hover:shadow-lg transition-all duration-300 
                relative overflow-hidden group max-w-[50vw]">
                {/* Subtle decorative elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-full 
                    -translate-x-8 -translate-y-8 opacity-20"></div>
                
                <div className="relative">
                    <h3 className="text-2xl font-semibold font-heading text-light-teal-custom mb-3">Massage (Abhyanga)</h3>
                    <p className="text-gray-600 text-md mb-2">Duration: 60 minutes</p>
                    <p className="text-coral-custom text-md mb-4">€77</p>
                    <p className="text-gray-600 mb-4 leading-relaxed">
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
            <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-md 
                border border-gray-100 hover:shadow-lg transition-all duration-300 
                relative overflow-hidden group max-w-[50vw]">
                {/* Subtle decorative elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-full 
                    -translate-x-8 -translate-y-8 opacity-20"></div>
                
                <div className="relative">
                    <h3 className="text-2xl font-semibold font-heading text-light-teal-custom mb-3">Massage (Marma)</h3>
                    <p className="text-gray-600 text-md mb-2">Duration: 90 minutes</p>
                    <p className="text-coral-custom text-md mb-4">€95</p>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        This makes use of the interconnectedness of our systems. Marma points are often compared to acupuncture/ acupressure points. 
                        The 107 points are spread in all the regions of the body in areas where tension often accumulates. 
                        Gentle pressure in combination with the warm herbal oil that is selected according to the person’s specific needs, stimulates the release of tension and toxins. 
                        This full body massage is helpful in keeping the mind and body in balance. 
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

    );
};

export default MassageCards;