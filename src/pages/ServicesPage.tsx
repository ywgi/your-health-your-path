import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ServiceCards from "../components/ServiceCards";
import images from "../content/images";



const ServicesPage = () => {
    return (
        <>
            <Header />
            <div>
                <div className="flex px-4 pt-4 pb-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <div className="relative w-full">
                            <div className="aspect-[4/3] md:aspect-[3/4] w-full overflow-hidden max-w-xs mx-auto">
                                <img 
                                    className="w-full h-full object-cover"
                                    src={images.womanOnLaptop}
                                    alt="Consult"
                                />
                                <a href="#consult">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-light-pink-custom px-8 py-2 min-w-[200px] text-center">
                                            <h3 className="text-lg tracking-widest uppercase text-gray-800">Consult</h3>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="relative w-full">
                            <div className="aspect-[4/3] md:aspect-[3/4] w-full overflow-hidden max-w-xs mx-auto">
                                <img 
                                    className="w-full h-full object-cover"
                                    src={images.massage}
                                    alt="Massage"
                                />
                                <a href="#massage">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-light-pink-custom px-8 py-2 min-w-[200px] text-center">
                                            <h3 className="text-lg tracking-widest uppercase text-gray-800">Massage</h3>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="relative w-full">
                            <div className="aspect-[4/3] md:aspect-[3/4] w-full overflow-hidden max-w-xs mx-auto">
                                <img 
                                    className="w-full h-full object-cover"
                                    src={images.noteTaking}
                                    alt="Contact Me"
                                />
                                <Link to="/contact">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-light-pink-custom px-8 py-2 min-w-[200px] text-center">
                                        <h3 className="text-lg tracking-widest uppercase text-gray-800">Contact Me</h3>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-white flex items-center justify-center h-[40vh]">
                    <div className="flex flex-col px-8">
                        <p className="text-2xl font-heading font-bold text-light-teal-custom max-w-[30vw]">Taking these differences into account, that's what ayurveda does.</p>
                        <br/>
                        <p className="text-2xl max-w-[30vw]">
                        Ayurveda doesn't give a one-size-fits-all approach. Instead, it looks at who <strong>you are </strong>
                        and <strong>where you're at</strong> and helps you <strong>navigate your way from right there.</strong>
                        </p>
                    </div>
                    <img src={images.pathway}  className="max-h-full"/>
                </div>
                <div className="flex items-center justify-center w-full h-[20vh] text-6xl bg-green-custom">
                    <div className="flex items-center justify-center gap-8">
                        <img src={images.yhypWhiteNoBackground} className="max-h-[10vh]" />
                        <div className="h-[1px] bg-white w-[30vw]"></div>
                        <p className="text-white font-handwriting text-center">My Services</p>
                        <div className="h-[1px] bg-white w-[30vw]"></div>
                        <img src={images.yhypWhiteNoBackground} className="max-h-[10vh]"/>
                    </div>
                </div>
                <div className="flex justify-center items-center py-12">
                    <ServiceCards />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ServicesPage;