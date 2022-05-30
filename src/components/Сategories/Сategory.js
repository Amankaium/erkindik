import React from "react";
import './Category.css';
import LinkA from "../../components/Link/Link";
import { Link } from "react-router-dom";

export default function Category () {
    return (
        <div className="category">
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
            <div  className="homepage-all-category"><Link className="all-category" to="/">Все категории</Link></div>  
        </div>
    </div>
    )
}