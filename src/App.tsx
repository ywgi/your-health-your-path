import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutAyurvedaPage from './pages/AboutAyurvedaPage';
import AboutJackyPage from './pages/AboutJackyPage';
import ServicesPage from './pages/ServicesPage';

function App() {
    return (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-Jacky" element={<AboutJackyPage />} />
          <Route path="/about-Ayurveda" element={<AboutAyurvedaPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
    );
}

export default App
