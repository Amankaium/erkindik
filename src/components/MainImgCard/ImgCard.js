import React from "react";
import './ImgCard.css';
import { Link } from "react-router-dom";

export default function ImgCard (props) {
    const {image, className} = props
    return (
    <Link to="/artInfo" className={className}>
        <img src={image.img_url}/>
        <p className="list-txt">
            <div>
                <p  align="left" className="artistName">{image.author.name}</p>
                <p align="left" className="artName">{image.name}</p>
            </div>
            <div>
                <img className="fav-icon" src="https://cdn.icon-icons.com/icons2/38/PNG/128/like_favorite_heart_5759.png"/>
                <img className="fav-icon" src="https://cdn.icon-icons.com/icons2/1659/PNG/128/3844442-dot-menu-more-vertical_110310.png"/>
            </div>
        </p>
    </Link>
    )
}