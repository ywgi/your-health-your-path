import { Link } from "react-router-dom";
import { useInView } from "../hooks/useInView";
import images from "../content/images";

const WalkYourPath = () => { 
    const { ref, inView } = useInView<HTMLDivElement>();


    return (
        <div ref={ref} className="w-full relative md:h-[60vh] h-[50vh]">
        {inView && (
            <div
            className="absolute inset-0 bg-fixed bg-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url(${images.walkYourPath})`,
            }}
            >
            <div className="h-full flex items-center justify-center">
                <div className="flex flex-col items-center bg-white/70 backdrop-blur-sm p-8 rounded-lg shadow-lg mx-4 w-full md:w-3/4 lg:w-2/3 xl:max-w-4xl">
                <p className="text-center text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6">
                    Ready to see what ayurveda can do for you?
                </p>
                <Link to="/en/contact">
                    <button className="px-3 py-2 md:px-4 md:py-4 bg-green-custom text-white text-lg md:text-xl hover:bg-teal-custom transition-colors duration-200 rounded-lg">
                    Schedule a free 20-minute consult
                    </button>
                </Link>
                </div>
            </div>
            </div>
        )}
        </div>
    );
}

export default WalkYourPath;