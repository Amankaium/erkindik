import React from "react";
import './ArtInfo.css';
import {Link} from 'react-router-dom';
import img1 from './boat_sc.jpeg'; 

export default function ArtInfo () {
    return(
        <div className="page">
            <div className="author-header">
                <div className="user-box">
                    <div className="user-name">Автор</div>
                    <div className="artist-name">Гапар Айтиев</div>
                </div>
            </div>
            <div className="content">
                <div className="picture-cont">
                    <div className="picture">
                        <img height="350px" width="450px" src={img1} alt="sarychelek" />
                    </div>
                </div>
                <div className="info-cont">
                    <h1 className="paint-name">Сары-Челек</h1>
                    <h3 className="author-name">Гапар Айтиев</h3>
                <hr className="info-hr"></hr>
                    <div className="info-list">
                        <div className="year">Год: 2022</div> 
                        <div className="material">Материал: Бумага, принт</div>
                        <div className="status">Статус: На продажу</div>
                        <div className="dimension">Размеры: 350x450 px</div>
                    </div>
                <hr className="info-hr"></hr>
                    <div className="price">Цена: 3200</div>
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
                        <img height="200px" width="250px" src={img1} alt="sarychelek"/> 
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

