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
      name: "Painting1",
      img_url:
        "https://ik.imagekit.io/theartling/prod/dynamic_images/Image/1425988347b04641948d29f495532ee3.png?tr=,w-704,h-704",
      author: {
        name: "",
        avatar: "",
      },
    },
    {
      id: "0",
      name: "",
      img_url:
        "https://ik.imagekit.io/theartling/prod/dynamic_images/Image/1425988347b04641948d29f495532ee3.png?tr=,w-704,h-704",
      author: {
        name: "",
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
          <h1>Графический дизайн</h1>
          <div className="list">
            <ImgCard className="ima" image={images[0]} />
            <ImgCard image={images[0]} />
          </div>
          <div className="list">
            <ImgCard image={images[0]} />
            <ImgCard image={images[0]} />
          </div>
        </div>
        <hr className="hr" />

        <div className="list-card">
          <h1>Иллюстрация</h1>
          <div className="list">
            <ImgCard image={images[0]} />
            <ImgCard image={images[0]} />
          </div>
          <div className="list">
            <ImgCard image={images[0]} />
            <ImgCard image={images[0]} />
          </div>
        </div>
        <hr className="hr" />

        <div className="list-card">
          <h1>Минимализм</h1>
          <div className="list">
            <ImgCard image={images[0]} />
            <ImgCard image={images[0]} />
          </div>
          <div className="list">
            <ImgCard image={images[0]} />
            <ImgCard image={images[0]} />
          </div>
        </div>
        <hr className="hr" />

        <div className="list-card">
          <h1>Трендовые</h1>
          <div className="list">
            <ImgCard image={images[0]} />
            <ImgCard image={images[0]} />
          </div>
        </div>
        <hr className="hr" />

        <div className="list-card">
          <h1>Фотография</h1>
          <div className="list">
            <ImgCard image={images[0]} />
            <ImgCard image={images[0]} />
            <ImgCard image={images[0]} />
            <ImgCard image={images[0]} />
          </div>
        </div>
        <hr className="hr" />

        <div className="list-card">
          <h1>Музей</h1>
          <div className="list">
            <ImgCard image={images[0]} />
            <ImgCard image={images[0]} />
          </div>
          <div className="list">
            <ImgCard image={images[0]} />
            <ImgCard image={images[0]} />
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
