
import React, { useState } from 'react';
import './Artists.css';
import './About.css';
import './Info';
import './Work';
import LinkA from "../../components/Link/Link";
import Work from './Work'
import Upload from '../Upload/Upload'
import {Link} from 'react-router-dom'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDribbble, faFacebook, faInstagram, faTelegram, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons"
import img from '../../assets/artist2.jpg'



const About = () => {
  // const[artist, setArtist] = useState({
  //   about: "",
  // })

  // function getAbout() {
  //   axios("http://kaiaman.pythonanywhere.comhttp://kaiaman.pythonanywhere.com//api/erkindik/artists/")
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
            <a href="https://wa.me/996556552020">
            <button className='primary-btn'>Связаться со мной</button>
        </a>
          </div>
        </div>

        
  


      </section>
      <Work />
      
      <Link className='last-btn'to="/artists/about/upload">Загрузить картину</Link>
    </>
    

    
  )

  
}
 



export default About


