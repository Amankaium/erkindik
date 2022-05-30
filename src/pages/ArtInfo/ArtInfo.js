import React, { useEffect } from "react";
import './ArtInfo.css';
import { Link } from 'react-router-dom';
import img1 from './boat_sc.jpeg';
import axios from 'axios';

export default function ArtInfo() {
    const [state, setState] = React.useState({
        artist: { user: { username: "" } },
        genre: "",
        year: "",
        material: "",
        status: "",
        dimension: "",
        price: "",
        name: "",
        description: "",
    })
    const [arts, setArts] = React.useState([])
    function getInfo() {
        axios.get("http://kaiaman.pythonanywhere.com/api/erkindik/arts/1"
        ).then(response => {
            console.log(response.data)
            setState(response.data)
        }
        )
            .catch((err) => console.log(err))

    }

    function getArts () {
        axios.get("http://kaiaman.pythonanywhere.com/api/erkindik/arts/"
        ).then(response => {
            setArts(response.data.slice(0, 3))
        } 
        )
        .catch ((err) => console.log(err))
    }

    useEffect(getInfo, [])
    useEffect(getArts, [])
    return (
        <div className="page">
            <div className="author-header">
                <div className="user-box">
                    <div className="user-name">Автор</div>
                    <div className="artist-name">{state.artist.user.username}</div>
                </div>
            </div>
            <div className="content">
                <div className="picture-cont">
                    <div className="picture">
                        <img height="350px" width="450px" src={img1} alt="sarychelek" />
                    </div>
                </div>
                <div className="info-cont">
                    <h1 className="paint-name">{state.name}</h1>
                    <h3 className="author-name">{state.artist.user.username}</h3>
                    <hr className="info-hr"></hr>
                    <div className="info-list">
                        <div className="genre">Жанр: {state.genre}</div>
                        <div className="year">Год: {state.year}</div>
                        <div className="material">Материал: {state.material}</div>
                        <div className="status">Статус: {state.status}</div>
                        <div className="dimension">Размеры: {state.dimension}</div>
                    </div>
                    <hr className="info-hr"></hr>
                    <div className="price">Цена: {state.price}</div>
                    <hr className="info-hr"></hr>
                    <button className="buy-now">Купить</button>
                    <div className="instruct-text">
                        <p>Нажимая на кнопку Купить, вы переходите на профиль пользователя, где можете связаться с ним в наиболее удобной форме</p>
                    </div>
                </div>

            </div>
            <div className="otherworks">
                <div className="other-work-text">Остальные работы автора</div>
                <div className="works-box">
                    {arts.map((art, id) => <div key={id} className="grid-box">
                        <img height="200px" width="250px" src={img1} alt="sarychelek" />
                    </div>)}
                </div>
            </div>
        </div>
    )
}

