import React from "react";
import "./TermsCon.css";
import {Link} from "react-router-dom";
import TermsCondition from "../../components/TermsCondition/TermsCon";

function TermsCon() {
    return (
        <div className="terms-con-main">
            <div className="flex-box-terms">
                <div className="terms-con-h1">Условия использования</div>
                <TermsCondition className="terns-con-component"/>
                <TermsCondition className="terns-con-component"/>
                <TermsCondition className="terns-con-component"/>
            </div>
            <div className="flex-box-sell-art">
                <h4 className="flex-box-h4">
                    Продай свою работу онлайн!
                </h4>
                <p className="flex-box-p">
                - Дешевле, быстрее и лучше собственного сайта!
                </p>
                <p className="flex-box-p">
                - Создайте свою страницу исполнителя
                </p>
                <p className="flex-box-p">
                - Прямой контакт с покупателями
                </p>
                <p className="flex-box-p">
                - Без комиссии за проданные работы!
                </p>
                <button className="flex-box-btn"><Link to="/register" className="sell-art-btn">Зарегистрироваться</Link></button>
            </div>
        </div>
    )
}

export default TermsCon;
