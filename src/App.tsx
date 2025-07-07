import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import LawDetail from './pages/LawDetail';
import FAQ from './pages/FAQ';
import Calendar from './pages/Calendar';
import Resources from './pages/Resources';
import NotFound from './pages/NotFound';
import { RecaptchaProvider } from './components/RecaptchaProvider';

function App() {
  return (
    <RecaptchaProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Header />
          <main className="flex-1 pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ley/:lawId" element={<LawDetail />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendario" element={<Calendar />} />
              <Route path="/recursos" element={<Resources />} />
              {/* Catch all other routes */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </RecaptchaProvider>
  );
}

export default App;