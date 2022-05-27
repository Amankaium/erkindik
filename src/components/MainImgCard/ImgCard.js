import React from "react";
import './ImgCard.css';
import { Link } from "react-router-dom";

export default function ImgCard (props) {
    const author = {
        avatarUrl: "https://ik.imagekit.io/theartling/prod/dynamic_images/Image/1425988347b04641948d29f495532ee3.png?tr=,w-440,h-440",
        height: "440px",
    }

    return (
    <Link to="/">
        {/* <img scr={props.author.avatarUr}/> */}
        <img src="https://ik.imagekit.io/theartling/prod/dynamic_images/Image/1425988347b04641948d29f495532ee3.png?tr=,w-440,h-440"/>
        <p className="list-txt">
            <p className="artistName">{props.artistName}</p>
            <p className="artName">{props.artName}</p>
            <img className="fav-icon" src="https://cdn.icon-icons.com/icons2/38/PNG/128/like_favorite_heart_5759.png"/>
            <img className="fav-icon" src="https://cdn.icon-icons.com/icons2/1659/PNG/128/3844442-dot-menu-more-vertical_110310.png"/>
        </p>
    </Link>
    )
}