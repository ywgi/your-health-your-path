import images from "../content/images";

const ConsultCards = () => {
    return(
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 max-w-7xl mx-auto py-10 px-4">
          {/* Foundational Card */}
          <div className="flex flex-col w-full bg-white shadow-md rounded-lg overflow-hidden">
            {/* Image container - responsive height */}
            <div className="w-full h-48 md:h-52 overflow-hidden relative">
              <img 
                src={images.forest}
                className="w-full h-full object-cover object-center"
                alt="Foundational Plan"
              />
            </div>
            {/* Content box */}
            <div className="flex flex-col flex-grow p-5">
              <h1 className="font-heading font-bold text-light-teal-custom text-xl md:text-lg">
                    Foundational
              </h1>
              <h2 className="text-md font-bold font-heading text-dark-coral-custom mt-2 mb-4">
                This plan lays the foundation for your understanding of Ayurveda.
              </h2>
              <p className="font-medium">
                Included:
              </p>
              <ul className="list-disc pl-5 mt-2 mb-4 text-sm md:text-base">
                <li>1st & 2nd appointment</li>
                <li>Ayurvedic advice to reach your goals</li>
                <li>Information about your Ayurvedic type and a step-by-step plan to help you stay/get back into balance</li>
                <li><b>4 weeks</b> of email support</li>
                <li>1x30min. telephone conversation at the end of the plan to discuss your process and best course of action moving forward.</li>
              </ul>
              <div className="mt-auto">
                <div className="flex sm:flex-row justify-between items-center gap-2 mb-4">
                  <p className="font-bold text-lg">5 weeks</p>
                  <p className="font-bold text-lg">Investment: €170</p>
                </div>
                <a href="/contact" className="inline-flex items-center text-gray-700 
                hover:text-green-custom text-sm transition-transform w-full justify-center sm:justify-start">
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
                </a>
              </div>
            </div>
          </div>

          {/* Blooming Card */}
          <div className="flex flex-col w-full bg-white shadow-md rounded-lg overflow-hidden">
            <div className="w-full h-48 md:h-52 overflow-hidden relative">
              <img 
                src={images.pinkFlowers}
                className="w-full h-full object-cover object-center"
                alt="Blooming Plan"
              />
            </div>
            <div className="flex flex-col flex-grow p-5">
              <h1 className="font-heading font-bold text-light-teal-custom text-xl md:text-lg">
                Blooming
              </h1>
              <h2 className="text-md font-heading font-bold text-dark-coral-custom mt-2 mb-4">
                This plan helps you build new
                habits. You are supported as you begin to
                better understand your body's feedback and
                navigate your path.
              </h2>
              <p className="font-medium">
                Included:
              </p>
              <ul className="list-disc pl-5 mt-2 mb-4 text-sm md:text-base">
                <li>1st & 2nd appointment</li>
                <li>Ayurvedic advice to reach your goals</li>
                <li>Information about your Ayurvedic type and a step-by-step plan to help you stay/get back into balance</li>
                <li><b>3 monthly follow-up appointments</b></li>
                <li><b>3 months</b> of email support</li>
                <li><b>30% off 1 massage</b></li>
              </ul>
              <div className="mt-auto">
                <div className="flex sm:flex-row justify-between items-center gap-2 mb-4">
                  <p className="font-bold text-lg">3 months</p>
                  <p className="font-bold text-lg">Investment: €415</p>
                </div>
                <a href="/contact" className="inline-flex items-center text-gray-700 
                hover:text-green-custom text-sm transition-transform w-full justify-center sm:justify-start">
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
                </a>
              </div>
            </div>
          </div>

          {/* Rooted Card */}
          <div className="flex flex-col w-full bg-white shadow-md rounded-lg overflow-hidden">
            <div className="w-full h-48 md:h-52 overflow-hidden relative">
              <img 
                src={images.treeRooted}
                className="w-full h-full object-cover object-center"
                alt="Rooted Plan"
              />
            </div>
            <div className="flex flex-col flex-grow p-5">
              <h1 className="font-heading font-bold text-light-teal-custom text-xl md:text-lg">
                Rooted
              </h1>
              <h2 className="text-md font-bold font-heading text-dark-coral-custom mt-2 mb-4">
                This plan travels with you and helps you
                deepen your roots with Ayurveda. You are
                supported as the seasons change.    
              </h2>
              <p className="font-medium">
                Included:
              </p>
              <ul className="list-disc pl-5 mt-2 mb-4 text-sm md:text-base">
                <li>1st & 2nd appointment</li>
                <li>Ayurvedic advice to reach your goals</li>
                <li>Information about your Ayurvedic type and a step-by-step plan to help you stay/get back into balance</li>
                <li><b>6 monthly follow-up appointments</b></li>
                <li><b>6 months</b> of email support</li>
                <li><b>30% off 2 massages</b></li>
              </ul>
              <div className="mt-auto">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-2 mb-4">
                  <p className="font-bold text-lg">6 months</p>
                  <p className="font-bold text-lg">Investment: €640</p>
                </div>
                <a href="/contact" className="inline-flex items-center text-gray-700 
                hover:text-green-custom text-sm transition-transform w-full justify-center sm:justify-start">
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
                </a>
              </div>
            </div>
          </div>
        </div>
    );
}

export default ConsultCards;