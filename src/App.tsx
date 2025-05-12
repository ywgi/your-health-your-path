import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutAyurvedaPage from './pages/AboutAyurvedaPage';
import AboutJackyPage from './pages/AboutJackyPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';
import HomePageDutch from './pages/dutch/HomePageDutch';
import AboutAyurvedaPageDutch from './pages/dutch/AboutAyurvedaPageDutch';
import AboutJackyPageDutch from './pages/dutch/AboutJackyPageDutch';
import ServicesPageDutch from './pages/dutch/ServicesPageDutch';
import ContactPageDutch from './pages/dutch/ContactPageDutch';

function App() {
    return (
      <ScrollToTop>
        <Routes>
          <Route path="/en/" element={<HomePage />} />
          <Route path="/en/about-Jacklyn" element={<AboutJackyPage />} />
          <Route path="/en/ayurveda" element={<AboutAyurvedaPage />} />
          <Route path="/en/services" element={<ServicesPage />} />
          <Route path="/en/contact" element={<ContactPage/>} />
          <Route path="/" element={<HomePageDutch/>} />
          <Route path="over-Jacklyn" element={<AboutJackyPageDutch/>} />
          <Route path="/ayurveda" element={<AboutAyurvedaPageDutch />} />
          <Route path="/diensten" element={<ServicesPageDutch />} />
          <Route path="/contact" element={<ContactPageDutch />} />
        </Routes>
      </ScrollToTop>
    );
}

export default App
