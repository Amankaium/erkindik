
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './Artists.css';
import ArtistItem from './ArtistItem';
import About from './About'
import LinkA from "../../components/Link/Link";
import { ThemeContext } from '@emotion/react';
import axios from 'axios';



function Artists() {
  const [users, setUsers] = React.useState({
    user: {username: ""},
    description: "",
    name:{name: ""},
    genre: "",
  })
  function getArtist () {
    axios.get ("https://kaiaman.pythonanywhere.com/api/erkindik/artists/1"

    ).then(response => {
      console.log(response.data)
      setUsers(response.data)
    }
    )
    .catch((err) => console.log(err))
  }

  useEffect(getArtist, [])




  return (
  

    <div className='artists'>
      <h1>Начните искать художников с</h1>
      <div className="artist-links">
                <div  className="artist-a"><LinkA href="/artists/about">А</LinkA></div>
                <div  className="artist-a"><LinkA href="/">Б</LinkA></div>
                <div  className="artist-a"><LinkA href="/">В</LinkA></div>
                <div  className="artist-a"><LinkA href="/">Г</LinkA></div>
                <div  className="artist-a"><LinkA href="/">Д</LinkA></div>
                <div  className="artist-a"><LinkA href="/">Е</LinkA></div>
                <div  className="artist-a"><LinkA href="/">Ж</LinkA></div>
                <div  className="artist-a"><LinkA href="/">З</LinkA></div>
                <div  className="artist-a"><LinkA href="/">И</LinkA></div>
                <div  className="artist-a"><LinkA href="/">К</LinkA></div>  
                <div  className="artist-a"><LinkA href="/">Л</LinkA></div>
                <div  className="artist-a"><LinkA href="/">М</LinkA></div>
                <div  className="artist-a"><LinkA href="/">Н</LinkA></div>
                <div  className="artist-a"><LinkA href="/">О</LinkA></div>
                <div  className="artist-a"><LinkA href="/">П</LinkA></div>
                <div  className="artist-a"><LinkA href="/">Р</LinkA></div>
                <div  className="artist-a"><LinkA href="/">С</LinkA></div>
                <div  className="artist-a"><LinkA href="/">Т</LinkA></div>
                <div  className="artist-a"><LinkA href="/">У</LinkA></div>
                <div  className="artist-a"><LinkA href="/">Ц</LinkA></div>  
                <div  className="artist-a"><LinkA href="/">Щ</LinkA></div>
                <div  className="artist-a"><LinkA href="/">Ю</LinkA></div>
                <div  className="artist-a"><LinkA href="/">Я</LinkA></div> 
            </div>
      <div className='artists__container'>
        <div className='artists__wrapper'>
          <ul className='artists__items'>
            <ArtistItem
              src='https://thenational-the-national-prod.cdn.arcpublishing.com/resizer/JUusA7kPyqi6Dl43q98sYpvL6x4=/400x225/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/thenational/W26WJFOMAY423OCZWULIRBXKWQ.jpg'
              text= {users.user.username}
              name={users.name}
              description= {users.description}
              genre={users.genre}
              label='Портрет'
              path='/artists/about'
            />
            
            <ArtistItem
              src='https://goodbye-office.com/wp-content/uploads/2019/08/Snimok_ekrana_2019-07-31_v_12_54_22.png'
              text='Владимир Владимирович - 23 картин'
              // description="10 картин"
              genre="Кыргызстан, Ош"
              label='Мифологический'
              path='/artists/about'
            />
             <ArtistItem
              src='https://www.arts.ac.uk/__data/assets/image/0024/105297/DSC_7556.jpg'
              text='Айдана Айдинова - 23 картин'
              label='Бытовой'
              path='/artists/about'
            />
          </ul>
          <ul className='artists__items'>
            <ArtistItem
              src='https://jazzconnective.eu/media/cache/f3/90/f3906cd8ead96bbc04714ee3df40a2de.jpg'
              text='Асель Асылбек - 25 картин'
              label='Исторический'
              path='/artists/about'
            />
            <ArtistItem
              src='https://api.time.com/wp-content/uploads/2021/09/nft-art-teens-1.jpg?quality=85&w=2400'
              text='Ким Ли - 22 картин'
              label='Пейзаж'
              path='/artists/about'
            />
            <ArtistItem
              src='https://news.artnet.com/app/news-upload/2018/11/IMG_3498-e1543854475168.jpg'
              text='Руслан Азизов - 26 картин'
              label='Натьюрморт'
              path='/artists/about'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Artists;




