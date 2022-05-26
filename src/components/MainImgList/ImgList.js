import React from "react";
import './ImgList.css';
import { Link } from "react-router-dom";
import ImgCard from "../MainImgCard/ImgCard";

function ImgList ({props}) {
    return (
        <div>
            <div className="list-card">
                {/* <h1>{props.titleList}</h1> */}
                <h1>titleList</h1>
                <div className="list">
                    <ImgCard artistName="artistName" artName="artName"/>
                    <ImgCard artistName="artistName" artName="artName"/>
                    <ImgCard artistName="artistName" artName="artName"/>
                     {/* {props.map((imgCard, index) => <ImgCard setImgCard={imgCard} key={index} id={index}/>)} */}
                </div>
                {/* <div className="list">
                        <ImgCard artistName="artistName" artName="artName"/>
                        <ImgCard artistName="artistName" artName="artName"/>               
                </div> */}
            </div>
            <hr className="hr"/>
        </div>
    )
}

export default ImgList