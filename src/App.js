import React, { useState } from 'react';
import './index.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Homepage, Artists, SignIn, SignUp, Search, TermsCon} from './pages';
import Header from './components/Header/Header';
import About from './pages/Artists/About';
import Info from './pages/Artists/Info';
import Work from './pages/Artists/Work';
import ArtInfo from './pages/ArtInfo/ArtInfo';
import Footer from './components/Footer/Footer';



 export const LoginContext = React.createContext(false)

function App() {
  const [loginState, setLoginState] = useState(false)
  const [token, setToken] = useState("")

  return (
    <LoginContext.Provider value={loginState}>
    <Router>
      <Header setLoginState={setLoginState} setToken={setToken}/>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/artists" element={<Artists />} />
        <Route exact path="/artists/about" element={<About />} />
        <Route exact path="/artists/about/info" element={<Info />} />
        <Route exact path="/artists/about/work" element={<Work />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/artInfo" element={<ArtInfo />} />
        <Route exact path="/login" element={<SignIn setLoginState={setLoginState} setToken={setToken}/>} />
        <Route exact path="/register" element={<SignUp />} />
        <Route exact path="/terms-and-condition" element={<TermsCon/>} />
      </Routes>
      <Footer />
    </Router>
    </LoginContext.Provider>
  );
}

export default App;
