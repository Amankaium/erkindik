import React, {useContext} from 'react';
import './index.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Homepage, Artists, Artworks, SignIn, Pricing, SignUp, SearchPage, SellArt, ForgotPassword, EditProfile} from './pages';
import Header from './components/Header/Header';
import About from './pages/Artists/About';
import Info from './pages/Artists/Info';
import ArtInfo from './pages/ArtInfo/ArtInfo';
import Footer from './components/Footer/Footer';
 

const login = {
  login: false
}

export const LoginContext = React.createContext(login.login)


function App() {

  return (
    <LoginContext.Provider value={login.login}>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/artworks" element={<Artworks />} />
        <Route exact path="/artists" element={<Artists />} />
        <Route exact path="/artists/about" element={<About />} />
        <Route exact path="/artists/info" element={<Info />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/sell-art" element={<SellArt />} />
        <Route exact path="/search" element={<SearchPage />} />
        <Route exact path="/artInfo" element={<ArtInfo />} />
        <Route exact path="/login" element={<SignIn />} />
        <Route exact path="/register" element={<SignUp />} />
        <Route exact path="/forgot-password" element={<ForgotPassword />} />
        <Route exact path="/edit-profile" element={<EditProfile />}/>
      </Routes>
      <Footer />
    </Router>
    </LoginContext.Provider>
  );
}


export default App;
