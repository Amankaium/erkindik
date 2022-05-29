
import React, { useState } from 'react';
import './Artists.css';
import './About.css';
import './Info';
import './Work';
import LinkA from "../../components/Link/Link";
import Work from './Work'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDribbble, faFacebook, faInstagram, faTelegram, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons"
import img from '../../assets/artist2.jpg'



const About = () => {
  // const[artist, setArtist] = useState({
  //   about: "",
  // })

  // function getAbout() {
  //   axios("")
  //   .then(response=> response.data) 
  //   setArtist({
  //     about: data.about
  //   })
  // }
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
                <div  className="artist-a"><LinkA href="/">Избранные</LinkA></div>
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
              <FontAwesomeIcon icon={faYoutube} ></FontAwesomeIcon>
              <FontAwesomeIcon icon={faDribbble}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faTelegram}></FontAwesomeIcon>
          
            </div>
            <p>Добро пожаловать в мою страницу! Я Альфи и я ХУДОЖНИК... Тут я публикую свои работы и пишу картины на заказ, потому буду рада сотрудничеству. Присоединяйтесь, будет интересно!</p>
            <button className='primary-btn'>Связаться со мной</button>
          </div>
        </div>

        
  


      </section>
      <Work />
      
      <button className='last-btn'>Загрузить картину</button>
    </>
    

    
  )

  
}
 



export default About


