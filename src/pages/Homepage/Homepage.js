import React from "react";
import { Link } from "react-router-dom";
import './Homepage.css';
import LinkA from "../../components/Link/Link";
import Category from "../../components/Сategories/Сategory";
import ImgCard from "../../components/MainImgCard/ImgCard";
// import SearchIcon from "../assets/search.png"


function Homepage(props) {

    return (
        <div>
            <div  className="homepage1">
                    <div className="img-txt">
                        <h1 className="img-h1">ERKINDIK</h1>
                        <p className="mini-txt">Прямо сейчас присоединяйся к нашему сообществу и находи </p>
                        <p className="mini-txt"> нужные искусства из любой точки мира</p>
                        <br/>
                    </div>
                    <div className='img-form'>
                        {/* <button><span><img src=""/></span></button> */}
                        <input placeholder="Поиск бесплатных фотографий с высоким разрешением"/>
                    </div>
            </div>

        <div className="homepage2">
            <Category/>
            <div className="list-card">
                <h1 className="gc-h1">Графический дизайн</h1>
                <div className="list">
                        <ImgCard artistName="artistName" artName="artName"/>
                        <ImgCard artistName="artistName" artName="artName"/>
                        <ImgCard artistName="artistName" artName="artName"/>
                </div>

                <div className="list">
                        <ImgCard artistName="artistName" artName="artName"/>
                        <ImgCard artistName="artistName" artName="artName"/>               
                </div>
                <hr className="hr"/>
            </div>


            <div className="list-card">
                <h1 className="gc-h1">Иллюстрация</h1>
                <div className="list">
                        <ImgCard artistName="artistName" artName="artName"/>
                        <ImgCard artistName="artistName" artName="artName"/>
                </div>
                <div className="list">
                        <ImgCard artistName="artistName" artName="artName"/>
                        <ImgCard artistName="artistName" artName="artName"/>
                        <ImgCard artistName="artistName" artName="artName"/>
                </div>
                <hr className="hr"/>
            </div>
            
            <div className="list-card">
                <h1 className="gc-h1">Минимализм</h1>
                <div className="list">
                    <ImgCard artistName="artistName" artName="artName"/>
                    <ImgCard artistName="artistName" artName="artName"/>
                    <ImgCard artistName="artistName" artName="artName"/>
                    <ImgCard artistName="artistName" artName="artName"/> 
                </div>
                <hr className="hr"/> 
            </div>

            <div className="list-card">
                <h1 className="gc-h1">Трендовые</h1>
                <div className="list">
                    <ImgCard artistName="artistName" artName="artName"/>
                    <ImgCard artistName="artistName" artName="artName"/>
                    <ImgCard artistName="artistName" artName="artName"/>
                    <ImgCard artistName="artistName" artName="artName"/> 
                </div>
                <hr className="hr"/> 
            </div>

            <div className="list-card">
                <h1 className="gc-h1">Фотография</h1>
                <div className="list">
                    <ImgCard artistName="artistName" artName="artName"/>
                    <ImgCard artistName="artistName" artName="artName"/> 
                </div>
                <hr className="hr"/> 
            </div>

            <div className="list-card">
                <h1 className="gc-h1">Музей</h1>
                <div className="list">
                    <ImgCard artistName="artistName" artName="artName"/>
                    <ImgCard artistName="artistName" artName="artName"/>
                    <ImgCard artistName="artistName" artName="artName"/> 
                </div>
                <hr className="hr"/> 
            </div>

            <Link  to="/" className="submit-conteiner">
                <div className="sc-txt">
                    <h2>Отправить в Erkindik</h2><br/>
                    <p className="sc-desc">Вы художник, дизайнер или галерея, которая хочет продать свое искусство?</p>
                </div>
                <div>
                    <div className="sc-img"></div>
                </div>
            </Link>
        </div>
    </div>
    )
}

export default Homepage;
