import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import DetailMovie from './components/DetailMovie'; // នាំចូលទំព័រលម្អិត
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import MoviePage from './pages/MoviePage';
import TvShow from './pages/TvShow';
import PopularPage from './pages/PopularPage';
import ProfilePage from './pages/ProfilePage';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-gray-950 min-h-screen">
        <Navbar />
        
        <Routes>
          {/* ទំព័រដើម (Home Page) */}
          <Route path="/" element={<HomePage/> } />

          {/* ទំព័រលម្អិត (Detail Page) */}
          <Route path="/movie/:id" element={<DetailMovie />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/tvshows" element={<TvShow />} />
           <Route path="/popular" element={<PopularPage />} />
           <Route path="/profile" element={<ProfilePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;