import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutAyurvedaPage from './pages/AboutAyurvedaPage';
import AboutJackyPage from './pages/AboutJackyPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-Jacklyn" element={<AboutJackyPage />} />
          <Route path="/ayurveda" element={<AboutAyurvedaPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage/>} />
        </Routes>
      </ScrollToTop>
    );
}

export default App
