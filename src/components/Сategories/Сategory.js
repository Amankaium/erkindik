import React from "react";
import './Category.css';
import LinkA from "../../components/Link/Link";
import { Link } from "react-router-dom";

export default function Category () {
    return (
        <div className="category">
        <div className="homepage-category">
            <div  className="homepage-a"><Link to="/">Арт-Студия</Link></div>
            <div  className="homepage-a"><Link to="/">Музей</Link></div>
            <div  className="homepage-a"><Link to="/">Минимализм</Link></div>
            <div  className="homepage-a"><Link to="/">Иллюстрация</Link></div>
            <div  className="homepage-a"><Link to="/">Фотография</Link></div>
            <div  className="homepage-a"><Link to="/">Дизайн</Link></div>
            <div  className="homepage-a"><Link to="/">Трендовые</Link></div>
        </div>
        <div className="homepage-category">
            <div  className="homepage-a"><Link to="/">Художественный</Link></div>
            <div  className="homepage-a "><Link to="/">Места</Link></div>
            <div  className="homepage-a category-two"><Link to="/">Работа на бумаге</Link></div>
            <div  className="homepage-a"><Link to="/">Дизайн</Link></div>
            <div  className="homepage-a"><Link to="/">Коллажи</Link></div>
            <div  className="homepage-a category-two"><Link to="/">Текстуры и узоры</Link></div>
            <div  className="homepage-a"><Link to="/">Архитектура</Link></div>  
        </div>
        <div className="homepage-category">
            <div  className="homepage-all-category"><Link className="all-category" to="/">Все категории</Link></div>  
        </div>
    </div>
    )
}