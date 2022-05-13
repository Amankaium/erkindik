import React from 'react';
import './index.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Homepage, Artists, Artworks, SignIn, Pricing, SignUp, SearchPage, SellArt, ForgotPassword} from './pages';
import Header from './components/Header/Header';
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
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/sell-art" element={<SellArt />} />
        <Route exact path="/search" element={<SearchPage />} />
        <Route exact path="/artInfo" element={<ArtInfo />} />
        <Route exact path="/login" element={<SignIn />} />
        <Route exact path="/register" element={<SignUp />} />
        <Route exact path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
