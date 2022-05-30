import React, { useEffect } from "react";
import './ArtInfo.css';
import { Link } from 'react-router-dom';
import img1 from './boat_sc.jpeg';
import axios from 'axios';

export default function ArtInfo() {
    const [state, setState] = React.useState({
        Artist: "",
        Genre: "",
        Year: "",
        Material: "",
        Status: "",
        Dimension: "",
        Price: "",
    })
    function getInfo() {
        axios.get("http://kaiaman.pythonanywhere.com/api/erkindik/arts/7"
        ).then(function (response) {
            console.log(response)
        }).then((response) =>
            setState({
                Artist: response.data.Artist,
                Genre: response.data.Genre,
                Year: response.data.Year,
                Material: response.data.Material,
                Status: response.data.Status,
                Dimension: response.data.Dimension,
                Price: response.data.Price,
            }).catch((err) => console.log(err))
        )
    }
    useEffect(getInfo, [state])

    return (
        <div className="page">
            <div className="author-header">
                <div className="user-box">
                    <div className="user-name">Автор</div>
                    <div className="artist-name">{state.Artist}</div>
                </div>
            </div>
            <div className="content">
                <div className="picture-cont">
                    <div className="picture">
                        <img height="350px" width="450px" src={img1} alt="sarychelek" />
                    </div>
                </div>
                <div className="info-cont">
                    <h1 className="paint-name">{state.Genre}</h1>
                    <h3 className="author-name">{state.Artist}</h3>
                    <hr className="info-hr"></hr>
                    <div className="info-list">
                        <div className="year">Год: {state.Year}</div>
                        <div className="material">Материал: {state.Material}</div>
                        <div className="status">Статус: {state.Status}</div>
                        <div className="dimension">Разм {state.Dimension}</div>
                    </div>
                    <hr className="info-hr"></hr>
                    <div className="price">Цена: {state.Price
                    }</div>
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
                    <div className="grid-box">
                        <img height="200px" width="250px" src={img1} alt="sarychelek" />
                    </div>
                    <div className="grid-box">
                        <img height="200px" width="250px" src={img1} alt="sarychelek" />
                    </div>
                    <div className="grid-box">
                        <img height="200px" width="250px" src={img1} alt="sarychelek" />
                    </div>
                </div>
            </div>
        </div>
    )
}

