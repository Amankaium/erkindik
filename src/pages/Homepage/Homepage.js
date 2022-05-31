import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import Category from "../../components/Сategories/Сategory";
import ImgCard from "../../components/MainImgCard/ImgCard";
// import SearchIcon from "../assets/search.png"

function Homepage(props) {
  const images = [
    {
      id: "0",
      name: "Painting0",
      img_url:
        "https://ik.imagekit.io/theartling/prod/dynamic_images/Image/1425988347b04641948d29f495532ee3.png?tr=,w-704,h-704",
      author: {
        name: "author0",
        avatar: "",
      },
    },
    {
      id: "1",
      name: "Painting1",
      img_url:"https://ik.imagekit.io/theartling/prod/dynamic_images/Image/ab9c98e838cf4aae9ec30bbe629a1826.jpg?tr=,w-704,h-704",
      author: {
          name: "author1",
          avatar: "",
        },
    },
    {
        id: "2",
        name: "Painting2",
        img_url:"https://ik.imagekit.io/theartling/prod/dynamic_images/Image/0d8705e14bb64956977a8d5e36167146.jpg?tr=,w-704,h-704",
        author: {
          name: "author2",
          avatar: "",
        },
      },
      {
        id: "3",
        name: "Painting3",
        img_url:"https://ik.imagekit.io/theartling/prod/dynamic_images/Image/7b3d99682fa34aa2aad7c0bb76f181e7.jpg?tr=w-733,h-357",
        author: {
          name: "author3",
          avatar: "",
        },
      },    {
        id: "4",
        name: "Painting1",
        img_url:"https://ik.imagekit.io/theartling/prod/dynamic_images/Image/94838a3043a544a6a1b114a9d712bbb5.jpg?tr=,w-704,h-704",
        author: {
          name: "author2",
          avatar: "",
        },
      },    {
        id: "5",
        name: "Painting1",
        img_url:"https://ik.imagekit.io/theartling/prod/dynamic_images/Image/00db3d801eb941eda0784802b623d980.jpg?tr=,w-506,h-506",
        author: {
          name: "author2",
          avatar: "",
        },
      },  {
        id: "6",
        name: "Painting1",
        img_url:"https://ik.imagekit.io/theartling/prod/products/Product/c8a330924aa84ca29b367d3c4ac9f7b9.jpg?tr=,w-396,h-396",
        author: {
          name: "author2",
          avatar: "",
        },
      }, {
        id: "7",
        name: "Painting1",
        img_url:"https://ik.imagekit.io/theartling/prod/original_images/Screenshot_2022-05-23_at_10.16.40_AM.png?tr=,w-1010,h-540",
        author: {
          name: "author2",
          avatar: "",
        },
      },  {
        id: "8",
        name: "Painting1",
        img_url:"https://ik.imagekit.io/theartling/prod/original_images/Anna_Louise_Richardson__Abdul-Rahman_Abdullah_Watching_studio_view_2022.jpg?tr=,w-610,h-326",
        author: {
          name: "author2",
          avatar: "",
        },
      },
  ];

  return (
    <div>
      <div className="homepage1">
        <div className="img-txt">
          <h1 className="img-h1">ERKINDIK</h1>
          <p className="mini-txt">
            Прямо сейчас присоединяйся к нашему сообществу и находи{" "}
          </p>
          <p className="mini-txt"> нужные искусства из любой точки мира</p>
          <br />
        </div>
        <div className="img-form">
          <button className="button">
            <img
              className="svg"
              src="https://cdn.icon-icons.com/icons2/1744/PNG/128/3643762-find-glass-magnifying-search-zoom_113420.png"
            />
          </button>
          <input
            className="input"
            placeholder="Поиск бесплатных фотографий с высоким разрешением"
          />
        </div>
      </div>

      <div className="homepage2">
        <Category />
        
        <div className="list-card">
          <h1 className="list-h1">Графический дизайн</h1>
          <div className="list">
            <ImgCard className="img-0" image={images[0]} />
            <ImgCard className="img-0" image={images[1]} />
            <ImgCard className="img-0" image={images[2]} />
          </div>
          <div className="list">
            <ImgCard className="img-1" image={images[3]} />
            <ImgCard className="img-0" image={images[4]} />
          </div>
        </div>
        <hr className="hr" />

        <div className="list-card">
          <h1 className="list-h1">Иллюстрации</h1>
          <div className="list">
            <ImgCard className="img-1" image={images[3]} />
            <ImgCard className="img-0" image={images[4]} />
          </div>
          <div className="list">
            <ImgCard className="img-0" image={images[0]} />
            <ImgCard className="img-0" image={images[1]} />
            <ImgCard className="img-0" image={images[2]} />
          </div>
        </div>
        <hr className="hr" />

        <div className="list-card">
          <h1 className="list-h1">Минимализм</h1>
          <div className="list">
            <ImgCard className="img-2" image={images[5]} />
            <ImgCard className="img-2" image={images[5]} />
            <ImgCard className="img-2" image={images[5]} />
            <ImgCard className="img-2" image={images[5]} />
          </div>
        </div>
        <hr className="hr" />

        <div className="list-card">
          <h1 className="list-h1">Трендовые</h1>
          <div className="list">
            <ImgCard className="img-3" image={images[6]} />
            <ImgCard className="img-3" image={images[6]} />
            <ImgCard className="img-3" image={images[6]} />
            <ImgCard className="img-3" image={images[6]} />
            <ImgCard className="img-3" image={images[6]} />
          </div>
        </div>
        <hr className="hr" />

        <div className="list-card">
          <h1 className="list-h1">Архитектура</h1>
          <div className="list">
            <ImgCard className="img-4" image={images[7]} />
            <ImgCard className="img-4" image={images[7]} />
          </div>
          <div className="list">
            <ImgCard className="img-5" image={images[8]} />
            <ImgCard className="img-5" image={images[8]} />
            <ImgCard className="img-5" image={images[8]} />
          </div>
        </div>
        <hr className="hr" />

        <Link to="/" className="submit-conteiner">
          <div className="sc-txt">
            <h2>Отправить в Erkindik</h2>
            <br />
            <p className="sc-desc">
              Вы художник, дизайнер или галерея, которая хочет продать свое
              искусство?
            </p>
          </div>
          <div>
            <div className="sc-img"></div>
          </div>
        </Link>
      </div>    
    </div>
  );
}

export default Homepage;
