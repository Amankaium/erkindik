import React from "react";
import { Link } from "react-router-dom";
import './Homepage.css';
import LinkA from "../../components/Link/Link";
// import SearchIcon from "../assets/search.png"


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
                            {/* <button><span><img src=""/></span></button> */}
                            <input placeholder="Поиск бесплатных фотографий с высоким разрешением"/>
                        </div>
                    </div>
                </div>
            </div>
        <br/><br/><br/><br/>

        <div className="homepage2">
            {/* <h1 className="category-h1">Просмотр категорий</h1> */}
            <br/><br/>
            <div className="homepage-category">
                <div  className="homepage-a"><LinkA href="/">Арт-Студия</LinkA></div>
                <div  className="homepage-a"><LinkA href="/">Музей</LinkA></div>
                <div  className="homepage-a"><LinkA href="/">Минимализм</LinkA></div>
                <div  className="homepage-a"><LinkA href="/">Иллюстрация</LinkA></div>
                <div  className="homepage-a"><LinkA href="/">Фотография</LinkA></div>
                <div  className="homepage-a"><LinkA href="/">Дизайн</LinkA></div>
                <div  className="homepage-a"><LinkA href="/">Трендовые</LinkA></div>
            </div>
            <div className="homepage-category">
                <div  className="homepage-a"><LinkA href="/">Художественный</LinkA></div>
                <div  className="homepage-a "><LinkA href="/">Места</LinkA></div>
                <div  className="homepage-a category-two"><LinkA href="/">Работа на бумаге</LinkA></div>
                <div  className="homepage-a"><LinkA href="/">Дизайн</LinkA></div>
                <div  className="homepage-a"><LinkA href="/">Коллажи</LinkA></div>
                <div  className="homepage-a category-two"><LinkA href="/">Текстуры и узоры</LinkA></div>
                <div  className="homepage-a"><LinkA href="/">Архитектура</LinkA></div>  
            </div>
            <div className="homepage-category">
                <div  className="homepage-all"><Link className="all-category" to="/">Все категории</Link></div>  
            </div>
            <br/><br/><br/>
            <div className="grid-container">
                <h1 className="gc-h1">Графический дизайн</h1>
                <br/><br/>
                <div className="list">
                    <div>
                    <Link to="/"><img src="https://ik.imagekit.io/theartling/prod/dynamic_images/Image/1425988347b04641948d29f495532ee3.png?tr=,w-440,h-440" /></Link>
                        <p className="list-txt">
                            <Link to="/" className="artistName">Имя автора</Link>
                            <br/>
                            <Link to="/" className="artName">Название картины</Link>
                            <LinkA href="/"><img className="fav-icon" src="https://cdn.icon-icons.com/icons2/38/PNG/128/like_favorite_heart_5759.png"/></LinkA>
                            <LinkA href="/"><img className="fav-icon" src="https://cdn.icon-icons.com/icons2/1659/PNG/128/3844442-dot-menu-more-vertical_110310.png"/></LinkA>
                        </p>
                    </div>
                    <div>
                    <Link to="/"><img src="https://ik.imagekit.io/theartling/prod/dynamic_images/Image/ab9c98e838cf4aae9ec30bbe629a1826.jpg?tr=,w-440,h-440" /></Link>
                        <p className="list-txt">some description</p>
                    </div>              
                    <div>
                    <Link to="/"><img src="https://ik.imagekit.io/theartling/prod/dynamic_images/Image/0d8705e14bb64956977a8d5e36167146.jpg?tr=,w-440,h-440" /></Link>
                        <p className="list-txt">some description</p>
                    </div>
                </div>
                <div className="list">
                    <div>
                    <Link to="/"><img className="img-1" src="https://ik.imagekit.io/theartling/prod/dynamic_images/Image/7b3d99682fa34aa2aad7c0bb76f181e7.jpg?tr=w-733,h-357" /></Link>
                        <p className="list-txt">some description</p>
                    </div>
                    <div>
                        <Link to="/"><img  src="https://ik.imagekit.io/theartling/prod/dynamic_images/Image/94838a3043a544a6a1b114a9d712bbb5.jpg?tr=,w-440,h-440" /></Link>
                        <p className="list-txt">some description</p>                    </div>                  
                </div>

                <br/><br/><hr className="hr"/><br/><br/>
                <h1 className="gc-h1">Иллюстрация</h1>
                <br/><br/>
                <div className="list">
                    <div>
                        <Link to="/"><img className="img-1" src="https://ik.imagekit.io/theartling/prod/dynamic_images/Image/480bfd2debb4462fbc23f1a04a2fefc9.jpg?tr=w-733,h-357" /></Link>
                        <p className="list-txt">some description</p>                    </div>
                    <div>
                        <Link to="/"><img src="https://ik.imagekit.io/theartling/prod/dynamic_images/Image/b6c7068dcca045d69ca80a908dffc5e3.jpg?tr=,w-440,h-440" /></Link>
                        <p className="list-txt">some description</p>                    </div>                 
                </div>
                <div className="list">
                    <div>
                        <Link to="/"><img src="https://ik.imagekit.io/theartling/prod/dynamic_images/Image/641968a6e3cb444b95ba82db585370bb.jpg?tr=,w-440,h-440" /></Link>
                        <p className="list-txt">some description</p>                    </div>
                    <div>
                        <Link to="/"><img src="https://ik.imagekit.io/theartling/prod/dynamic_images/Image/8a506a1153e345cc89c9160cb423c12d.jpg?tr=,w-440,h-440" /></Link>
                        <p className="list-txt">some description</p>                    </div>                    <div>
                        <Link to="/"><img src="https://ik.imagekit.io/theartling/prod/dynamic_images/Image/8b571cff49a445389fb62d3c746bfde7.jpg?tr=,w-440,h-440" /></Link>
                        <p className="list-txt">some description</p>                    </div>
                </div>
                
                <br/><br/><hr className="hr"/><br/><br/>
                <h1 className="gc-h1">Минимализм</h1>
                <br/><br/>
                <div className="list">
                    <div>
                        <Link to="/"><img className="img-2" src="https://ik.imagekit.io/theartling/prod/dynamic_images/Image/563b67b239254475a310882d971558b5.jpg?tr=,w-422,h-422" /></Link>
                        <p className="list-txt">some description</p>                    </div>
                    <div>
                        <Link to="/"><img className="img-2" src="https://ik.imagekit.io/theartling/prod/dynamic_images/Image/00db3d801eb941eda0784802b623d980.jpg?tr=,w-422,h-422" /></Link>
                        <p className="list-txt">some description</p>                    </div>
                    <div>
                        <Link to="/"><img className="img-2" src="https://ik.imagekit.io/theartling/prod/dynamic_images/Image/b27b454384b644e7a08fe1f4f7e80a3d.jpg?tr=,w-422,h-422" /></Link>
                        <p className="list-txt">some description</p>                    </div>                      <div>
                        <Link to="/"><img className="img-2" src="https://ik.imagekit.io/theartling/prod/dynamic_images/Image/99458edfe5f54d58b46789c8f7b2bce1.jpg?tr=,w-422,h-422" /></Link>
                        <p className="list-txt">some description</p>                    </div>                   
                </div>

                <br/><br/><hr className="hr"/><br/><br/>
                <h1 className="gc-h1">Трендовые</h1>
                <br/><br/>
                    <div className="list trend-list">
                    <div>
                        <Link to="/"><img className="img-5" src="https://ik.imagekit.io/theartling/prod/products/Product/81b883f361334b569137508f3bd4a21e.gif?tr=,w-396,h-396" /></Link>
                        <p className="list-txt">some description</p>                    </div>
                    <div>
                        <Link to="/"><img className="img-5" src="https://ik.imagekit.io/theartling/prod/products/Product/3c80e3e761c543b7a18a867c3535a746.png?tr=,w-396,h-396" /></Link>
                        <p className="list-txt">some description</p>                    </div>
                    <div>
                        <Link to="/"><img className="img-5" src="https://ik.imagekit.io/theartling/prod/products/Product/b9e733a1ce4c4411881186333e4b93ba.jpg?tr=,w-396,h-396" /></Link>
                        <p className="list-txt">some description</p>                    </div>
                    <div>
                        <Link to="/"><img className="img-5" src="https://ik.imagekit.io/theartling/prod/products/Product/da7c651ead194fb5b01087c3923943f8.JPG?tr=,w-396,h-396" /></Link>
                        <p className="list-txt">some description</p>                    </div>                      <div>
                        <Link to="/"><img className="img-5" src="https://ik.imagekit.io/theartling/prod/products/Product/4f5697c86f7642548f26542f8bdd94de.jpg?tr=,w-396,h-396" /></Link>
                        <p className="list-txt">some description</p>                    </div>                   
                </div>

                <br/><br/><hr className="hr"/><br/><br/>
                <h1 className="gc-h1">Фотография</h1>
                <br/><br/>
                <div className="list">
                    <div>
                        <Link to="/"><img className="img-3" src="https://ik.imagekit.io/theartling/prod/original_images/WEARECONTENTS_BOB-DYLAN_RAIL-CAR-04615.jpg?tr=,w-936,h-500" /></Link>
                        <p className="list-txt">some description</p>                    </div>
                    <div>
                        <Link to="/"><img className="img-3" src="https://ik.imagekit.io/theartling/prod/original_images/Anna_Louise_Richardson__Abdul-Rahman_Abdullah_Watching_studio_view_2022.jpg?tr=,w-936,h-500" /></Link>
                        <p className="list-txt">some description</p>                    </div>                  
                </div>

                <br/><br/><hr className="hr"/><br/><br/>
                <h1 className="gc-h1">Музей</h1>
                <br/><br/>
                <div className="list">
                    <div>
                        <Link to="/"><img className="img-4" src="https://ik.imagekit.io/theartling/prod/original_images/Nathan-Beard_Low-Yield-Fruit_220325_-2U4A0372.jpg?tr=,w-494,h-264" /></Link>
                        <p className="list-txt">some description</p>                    </div>
                    <div>
                        <Link to="/"><img className="img-4" src="https://ik.imagekit.io/theartling/prod/original_images/ezgif-3-cca126f2f4.jpeg?tr=,w-494,h-264" /></Link>
                        <p className="list-txt">some description</p>                    </div>    
                    <div>
                        <Link to="/"><img className="img-4" src="https://ik.imagekit.io/theartling/prod/original_images/Nathan-Beard_Low-Yield-Fruit_220325_-2U4A0372.jpg?tr=,w-494,h-264" /></Link>
                        <p className="list-txt">some description</p>                    </div>                 
                </div>

                <br/><br/><hr className="hr"/><br/><br/>
                <Link  to="/" className="submit-conteiner">
                    <div className="sc-txt">
                        <h2>Отправить в Erkindik</h2>
                        <br/>
                        <p className="sc-desc">Вы художник, дизайнер или галерея, которая хочет продать свое искусство?</p>
                    </div>
                    <div>
                        <div className="sc-img"></div>
                        {/* <img className="sc-img" src="https://ik.imagekit.io/theartling/prod/dynamic_images/Image/17d6461ec2604ec4bb9f871964e54643.jpeg?tr=,w-920"/> */}
                    </div>
                </Link>
                <br/><br/><br/>
            </div>
        </div>
    </div>
    )
}

export default Homepage;
