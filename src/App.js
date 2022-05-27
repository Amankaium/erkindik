import React from 'react';
import './index.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Homepage, Artists, Artworks, SignIn, Pricing, SignUp, SearchPage, SellArt, ForgotPassword, TermsCon, Profile} from './pages';
import Header from './components/Header/Header';
import About from './pages/Artists/About';
import Info from './pages/Artists/Info';
import Work from './pages/Artists/Work';
import ArtInfo from './pages/ArtInfo/ArtInfo';
import Footer from './components/Footer/Footer';




function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/artworks" element={<Artworks />} />
        <Route exact path="/artists" element={<Artists />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/artists/about" element={<About />} />
        <Route exact path="/artists/about/info" element={<Info />} />
        <Route exact path="/artists/about/work" element={<Work />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/sell-art" element={<SellArt />} />
        <Route exact path="/search" element={<SearchPage />} />
        <Route exact path="/artInfo" element={<ArtInfo />} />
        <Route exact path="/login" element={<SignIn />} />
        <Route exact path="/register" element={<SignUp />} />
        <Route exact path="/forgot-password" element={<ForgotPassword />} />
        <Route exact path="/terms-and-condition" element={<TermsCon />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
