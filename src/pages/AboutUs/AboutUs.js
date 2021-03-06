import React, { useEffect } from "react";
import "./AboutUs.css";
import img1 from "./img-gallery.jfif";

export default function AboutUs() {
  return (
    <div className="App">
      <div className="about-us-photo">
        <div className="img-txt">
          <h1 className="img-h1-center">Онлайн галерея Erkindik</h1>
          <p className="mini-txt-center">
            Наша команда стремится к лучшему, чтобы вы были счастливы каждый
            день!
          </p>
          <br />
        </div>
      </div>
      <div className="content">
        <div className="picture-cont-about">
          <div className="picture">
            <img height="500px" width="490px" src={img1} alt="sarychelek" />
          </div>
        </div>
        <div className="info-cont-about">
          <h1 className="h1-center">О нашей компании</h1>
          <p className="instruct-text">
            Онлайн галерея современного и классического искусства Erkindik
            основана в 2022 году. Галерея представляет работы не только
            известных современных художников, но и молодых перспективных
            авторов, работающих как в области актуального искусства, так и в
            классической манере. В сотрудничестве с известными кураторами и
            профессиональными искусствоведами мы отбираем художников, чьи работы
            обладают безусловной художественной ценностью, что гарантирует
            высокий статус вашей будущей коллекции. У нас вы можете не только
            купить произведения искусства онлайн, но из заказать услугу подбора
            картин для вашего интерьера, для вашей коллекции или в подарок — мы
            доставим их вам домой, чтобы вы могли выбрать понравившиеся вам
            работы и сразу увидеть, как они будут выглядеть в интерьере вашего
            дома. Кроме того, вы можете отобрать и купить понравившиеся работы
            непосредственно в нашей галерее. Мы рады видеть вас в нашей галерее
            в любое удобное для вас время. Узнайте больше о наших услугах.
          </p>
        </div>
      </div>
      <div className="info-cont-about2">
      <h1 className="h1-center">Реквизиты ООО «ЭРКИНДИК»</h1>
        <p className="instruct-text">
           Полное наименование: Общество с
          ограниченной ответственностью «ЭРКИНДИК» <br/>
          Генеральный директор: Маковеев А.Г. <br/>
          Наименование банка: ОАО «Кыргызкоммерцбанк» <br/> 
          БИК: 105001 <br/>
          Расчетный счет: 1051010264900003 <br/>
          ИНН: 02104201710038 <br/>
          Юридический адреc: Кыргызская Республика, г.Бишкек, ул. Табышалиева, 57<br/>
        </p>
      </div>
    </div>
  );
}
