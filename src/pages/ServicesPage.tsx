import Header from "../components/Header";
import images from "../content/images";



const ServicesPage = () => {
    return (
        <>
            <Header />
            <div className="container mx-auto px-4  py-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <div className="relative w-full">
                        <div className="aspect-[4/3] md:aspect-[3/4] w-full overflow-hidden max-w-xs mx-auto">
                            <img 
                                className="w-full h-full object-cover"
                                src={images.womanOnLaptop}
                                alt="Consult"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-light-pink-custom px-8 py-2 min-w-[200px] text-center">
                                    <h3 className="text-lg tracking-widest uppercase text-gray-800">Consult</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative w-full">
                        <div className="aspect-[4/3] md:aspect-[3/4] w-full overflow-hidden max-w-xs mx-auto">
                            <img 
                                className="w-full h-full object-cover"
                                src={images.massage}
                                alt="Massage"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-light-pink-custom px-8 py-2 min-w-[200px] text-center">
                                    <h3 className="text-lg tracking-widest uppercase text-gray-800">Massage</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative w-full">
                        <div className="aspect-[4/3] md:aspect-[3/4] w-full overflow-hidden max-w-xs mx-auto">
                            <img 
                                className="w-full h-full object-cover"
                                src={images.noteTaking}
                                alt="Contact Me"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-light-pink-custom px-8 py-2 min-w-[200px] text-center">
                                    <h3 className="text-lg tracking-widest uppercase text-gray-800">Contact Me</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ServicesPage;