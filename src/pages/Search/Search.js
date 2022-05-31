import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './Search.css';

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
      name: "Aisuluu",
      img_url:"https://ik.imagekit.io/theartling/prod/dynamic_images/Image/94838a3043a544a6a1b114a9d712bbb5.jpg?tr=,w-704,h-704",
      author: {
        name: "Aisuluu",
        avatar: "",
      },
    },    {
      id: "5",
      name: "Painting3",
      img_url:"https://ik.imagekit.io/theartling/prod/dynamic_images/Image/00db3d801eb941eda0784802b623d980.jpg?tr=,w-506,h-506",
      author: {
        name: "author3",
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

function Search() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const results = !searchTerm
    ? images
    : images.filter(art =>
        art.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || 
        art.author.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) 
      );

  return (
    <div className="App">
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
            type="text"
            className="input"
            placeholder="Поиск бесплатных фотографий с высоким разрешением"     
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
        </div>
      <div>
      </div>
      {results.map((item, id) => (
      <Link to="/artInfo" key={id} className="list">
        <img src={item.img_url} className="search-img"/>
        <p className="list-txt">
            <div>
                <p  align="left" className="artistName">{item.author.name}</p>
                <p align="left" className="artName">{item.name}</p>
            </div>
            <div>
                <img className="fav-icon" src="https://cdn.icon-icons.com/icons2/38/PNG/128/like_favorite_heart_5759.png"/>
                <img className="fav-icon" src="https://cdn.icon-icons.com/icons2/1659/PNG/128/3844442-dot-menu-more-vertical_110310.png"/>
            </div>
        </p>
    </Link>
     ))}
    </div>
  );
}
export default Search;