import images from "../content/images";

const ConsultCards = () => {
    return(
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto py-10">
        <div className="flex flex-col w-full max-w-[20vw] max-h-[700px] mx-auto bg-white">
          {/* Image container - set to 30% of parent height */}
          <div className="w-full h-[30%] overflow-hidden mb-4 relative">
            <img 
              src={images.forest}
              className="w-full h-full object-cover object-center"
            />
          </div>
          {/* Content box - set to take remaining height */}
          <div className="h-[70%] text-sm">
            <div className="p-4">
                <h1 className="font-heading text-light-teal-custom text-lg">
                        Foundational
                </h1>
                <br/>
                <h2 className="text-md font-heading  text-dark-coral-custom">
                    This plan lays the foundation for your understanding of Ayurveda.
                </h2>
                <br/><br/>
                <p>
                    Included:
                </p>
                <ul className="list-disc pl-5">
                    <li>1st & 2nd appointment</li>
                    <li>Ayurvedic advice to reach your goals</li>
                    <li>Information about your Ayurvedic type and a step-by-step plan to help you stay/get back into balance</li>
                    <li><b>4 weeks</b> of email support</li>
                    <li>1x30min. telephone conversation at the end of the plan to discuss your process and best course of action moving forward.</li>
                </ul>
                <br/>
                <div className="flex justify-center items-center gap-5">
                    <p className="font-bold text-xl">5 weeks</p>
                    <p className="font-bold text-xl">Investment: €170</p>
                </div>
                <br/>
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
        <div className="flex flex-col w-full max-w-[20vw] max-h-[700px] mx-auto bg-white">
          {/* Image placeholder since we can't use external images */}
          <div className="w-full h-[30%] overflow-hidden mb-4 relative">
            <img 
              src={images.pinkFlowers}
              className="w-full h-full object-cover object-center"
            />
          </div>
          {/* Content box */}
          <div className="h-[70%] text-sm">
            <div className="p-4">
              <h1 className="font-heading text-light-teal-custom text-lg">
                Blooming
              </h1>
              <br/>
              <h2 className="text-md font-heading text-dark-coral-custom">
                This plan helps you build new
                habits. You are supported as you begin to
                better understand your body’s feedback and
                navigate your path.
              </h2>
              <br/>
              <p>
                Included:
              </p>
              <ul className="list-disc pl-5">
                    <li>1st & 2nd appointment</li>
                    <li>Ayurvedic advice to reach your goals</li>
                    <li>Information about your Ayurvedic type and a step-by-step plan to help you stay/get back into balance</li>
                    <li><b>3 monthly follow-up appointments</b></li>
                    <li><b>3 months</b> of email support</li>
                    <li><b>30% off 1 massage</b></li>
                </ul>
                <br/><br/>
                <div className="flex justify-center items-center gap-5">
                    <p className="font-bold text-xl">3 months</p>
                    <p className="font-bold text-xl">Investment: €415</p>
                </div>
                <br/>
                <button className="inline-flex items-center text-gray-700 
                hover:text-green-custom text-sm group-hover:translate-x-1 transition-transform ">
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
        <div className="flex flex-col w-full max-w-[20vw] max-h-[700px] mx-auto bg-white">
          {/* Image placeholder since we can't use external images */}
          <div className="w-full h-[30%] overflow-hidden mb-4 relative">
            <img 
              src={images.treeRooted}
              className="w-full h-full object-cover object-center"
            />
          </div>
          {/* Content box */}
          <div className="h-[70%] text-sm">
            <div className="p-4">
              <h1 className="font-heading text-light-teal-custom text-lg">
                Rooted
              </h1>
              <br/>
              <h2 className="text-md font-heading  text-dark-coral-custom">
                This plan travels with you and helps you
                deepen your roots with Ayurveda. You are
                supported as the seasons change.    
              </h2>
              <br/>
              <p>
                Included:
              </p>
              <ul className="list-disc pl-5">
                    <li>1st & 2nd appointment</li>
                    <li>Ayurvedic advice to reach your goals</li>
                    <li>Information about your Ayurvedic type and a step-by-step plan to help you stay/get back into balance</li>
                    <li><b>6 monthly follow-up appointments</b></li>
                    <li><b>6 months</b></li>
                    <li><b>30% off 2 massages</b></li>
                </ul>
                <br/><br/>
                <div className="flex justify-center items-center gap-5">
                    <p className="font-bold text-xl">6 months</p>
                    <p className="font-bold text-xl">Investment: €640</p>
                </div>
                <br/>
                <div className="flex items-end">
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
}

export default ConsultCards;