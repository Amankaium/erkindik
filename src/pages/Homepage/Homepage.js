import React from "react";
import { Link } from "react-router-dom";
import './Homepage.css';
import LinkA from "../../components/Link/Link";

function Homepage() {

    return (
        <div>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <div className="homepage">
                <h1>Категории</h1>
                <br/><br/>
                <div className="homepage-category">
                    <LinkA className="homepage-a" href="/">Арт-Студия</LinkA>
                    <LinkA className="homepage-a" href="/">Музей</LinkA>
                    <LinkA className="homepage-a" href="/">Покраска</LinkA>
                    <LinkA className="homepage-a" href="/">Иллюстрация</LinkA>
                    <LinkA className="homepage-a" href="/">Фотография</LinkA>
                    <LinkA className="homepage-a" href="/">Дизайн</LinkA>
                    <LinkA className="homepage-a" href="/">Новые медиа</LinkA>
                    <LinkA className="homepage-a" href="/">Работа на бумаге</LinkA>
                    <LinkA className="homepage-a" href="/">Графический дизайн</LinkA>
                    <LinkA className="homepage-a" href="/">Человек</LinkA>
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
