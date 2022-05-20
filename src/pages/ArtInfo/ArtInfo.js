import React from "react";
import './ArtInfo.css';
import {Link} from 'react-router-dom';
import img1 from './boat_sc.jpeg'; 

export default function ArtInfo () {
    return(
        <div className="page">
            <div className="author-header">
                <div className="user-box">
                    <div className="user-name">Artist</div>
                    <div className="artist-name">Bibinur Nurgazieva</div>
                </div>
            </div>
            <div className="content">
                <div className="picture-cont">
                    <div className="picture">
                        <img height="350px" width="450px" src={img1} />
                    </div>
                </div>
                <div className="info-cont">
                    <h1 className="paint-name">Naturmort</h1>
                    <h3 className="author-name">Bibinur</h3>
                <hr className="info-hr"></hr>
                    <div className="info-list">
                        <div className="year">Year: 2022</div> 
                        <div className="material">Material: Paper, print</div>
                        <div className="status">Status: For sale</div>
                        <div className="dimension">Dimensions: 350x450 px</div>
                    </div>
                <hr className="info-hr"></hr>
                    <div className="price">Price: 3200</div>
                <hr className="info-hr"></hr>
                    <button className="buy-now">Buy Now</button>
                    <div className="instruct-text">
                        <p>Нажимая на кнопку Купить, вы переходите на профиль пользователя, вы можете связаться с ним в наиболее удобной форме</p>
                    </div>
                </div>
               
            </div>
            <div className="otherworks">
                    <div className="other-work-text">Other works of the author</div>
                    <div className="works-box">
                        <div className="grid-box">
                        <img height="200px" width="250px" src={img1} /> 
                        </div>
                        <div className="grid-box">
                        <img height="200px" width="250px" src={img1} />
                        </div>
                        <div className="grid-box">
                        <img height="200px" width="250px" src={img1} />
                        </div>
                    </div>
                </div>
        </div>
    )
}

