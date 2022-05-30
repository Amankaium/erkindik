
import React from 'react';
import './Artists.css';
import './About.css';
import './Info';
import './Work';
import LinkA from "../../components/Link/Link";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDribbble, faFacebook, faInstagram, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons"
import img from '../../assets/artist2.jpg'



const About = () => {
  return (
    <>
    <section className='aboutartist'>
        <div className='container flex'>
          <div className='left '>
            <div className='img'>
                <img height="600px" width="200px" src={img} />
            </div>
          </div>
          <div className='right topMarign'>
          <div className="artist-links">
                <div  className="artist-a"><LinkA href="info">Обо мне</LinkA></div>
                <div  className="artist-a"><LinkA href="work">Мои работы</LinkA></div>
                <div  className="artist-a"><LinkA href="/">Избранные</LinkA></div>
                <div  className="artist-a"><LinkA href="/">Загрузить картину</LinkA></div>
                <div  className="artist-a"><LinkA href="/">Редактировать профиль</LinkA></div>
            </div><br></br>
            <h1>
              Я <br /> <br></br><br></br>
              ХУДОЖНИК
            </h1>
            <div className='SocailIcon'>
              <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faYoutube} >
              </FontAwesomeIcon>
              <FontAwesomeIcon icon={faDribbble}></FontAwesomeIcon>
            </div>
            <p>Lorem ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className='primary-btn'>Связаться со мной</button>
          </div>
        </div>
  


      </section>
    </>

    
  )
}
 



export default About


