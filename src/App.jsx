import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AdBanner from './components/AdBanner';
import Calculator from './components/Calculator';
import SeoContent from './components/SeoContent';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import './index.css';

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 w-full">
        <div className="max-w-4xl mx-auto px-4">
          <AdBanner label="Advertisement Space — 728×90 Leaderboard" />
        </div>
        <Calculator />
        <div className="max-w-4xl mx-auto px-4">
          <AdBanner label="Advertisement Space — 728×90 Leaderboard" />
        </div>
        <SeoContent />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}
