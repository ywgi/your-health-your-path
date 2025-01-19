import images from "../content/images";

const AboutAyurvedaPage = () => {
        return (
          <div className="w-full">
            {/* Section with fixed background */}
            <div className="relative h-[80vh] bg-fixed bg-center bg-cover bg-no-repeat"
                 style={{
                   backgroundImage: `url(${images.walkYourPath})`
                 }}>
              <div className="absolute inset-0 bg-black/30" /> {/* Optional overlay */}
              <div className="relative z-10 h-full flex items-center justify-center">
                <h2 className="text-4xl text-white font-bold">Welcome</h2>
              </div>
            </div>
      
            {/* Content that scrolls over the background */}
            <div className="bg-white">
              <div className="max-w-4xl mx-auto px-6 py-20">
                <h3 className="text-2xl font-bold mb-4">Content Section</h3>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="mb-4">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                  in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                {/* Add more paragraphs to enable scrolling */}
                <p className="mb-4">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                  veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <p className="mb-4">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                  sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>
                <p className="mb-4">
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
                  adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et 
                  dolore magnam aliquam quaerat voluptatem.
                </p>
              </div>
            </div>
          </div>
        );
}

export default AboutAyurvedaPage;