import React from "react";
import { Link } from "react-router-dom";
import './Homepage.css';
import LinkA from "../../components/Link/Link";

function Homepage() {

    return (
        <div>
        <br/><br/>
            <div  className="homepage1">
                <div className="img">
                    <div className="img-txt">
                        <h1 className="img-h1">ERKINDIK</h1>
                        <br/><br/>
                        <p className="mini-txt">Прямо сейчас присоединяйся к нашему сообществу и находи </p>
                        <p className="mini-txt"> нужные искусства из любой точки мира</p>
                        <br/>
                        <div className='img-form'>
                            <input placeholder="Поиск бесплатных фотографий с высоким разрешением"/>
                        </div>
                    </div>
                </div>
            </div>
        <br/><br/><br/><br/>

        <div className="homepage2">
            <h1 className="category-h1">Просмотр категорий</h1>
            <br/><br/>
            <div className="homepage-category">
                <div  className="homepage-a"><LinkA href="/">Арт-Студия</LinkA></div>
                <div  className="homepage-a"><LinkA href="/">Музей</LinkA></div>
                <div  className="homepage-a"><LinkA href="/">Покраска</LinkA></div>
                <div  className="homepage-a"><LinkA href="/">Иллюстрация</LinkA></div>
                <div  className="homepage-a"><LinkA href="/">Фотография</LinkA></div>
                <div  className="homepage-a"><LinkA href="/">Дизайн</LinkA></div>
                <div  className="homepage-a"><LinkA href="/">Новые медиа</LinkA></div>
                <div  className="homepage-a"><LinkA href="/">Работа на бумаге</LinkA></div>
                <div  className="homepage-a"><LinkA href="/">Графический дизайн</LinkA></div>
                <div  className="homepage-a"><LinkA href="/">Человек</LinkA></div>  
            </div>
            <div className="grid-container">
                <div className="photo-1 list">
                    <h1>Here is photo</h1>
                </div>
                <div className="photo-2 list">
                    <h1>Here is photo</h1>
                </div>
                <div className="photo-3 list">
                    <h1>Here is photo</h1>
                </div>
                <div className="photo-4 list">
                    <h1>Here is photo</h1>
                </div>
                <div className="photo-5 list">
                    <h1>Here is photo</h1>
                </div>
                <div className="photo-6 list">
                    <h1>Here is photo</h1>
                </div>
                <div className="photo-7 list">
                    <h1>Here is photo</h1>
                </div>
                <div className="photo-8 list">
                    <h1>Here is photo</h1>
                </div>
                <div className="photo-9 list">
                    <h1>Here is photo</h1>
                </div>
                <div className="photo-10 list">
                    <h1>Here is photo</h1>
                </div>
                <div className="photo-11 list">
                    <h1>Here is photo</h1>
                </div>
                <div className="photo-12 list">
                    <h1>Here is photo</h1>
                </div>
                <div className="photo-13 list">
                    <h1>Here is photo</h1>
                </div>
            </div>

        </div>
    </div>
    )
}

export default Homepage;
