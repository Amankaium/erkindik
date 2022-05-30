import React from "react"
import './About'
import './Artists'
import './Info.css'
import img from '../../assets/artist2.jpg'

const Info = () => {
  const data = [
    {
      title: "Кто Я и Чем Я Занимаюсь",
      desc1: "Привет! Меня зовут Альфи:) Все к чему прикасаюсь можно с интересом и долго рассматривать))) это моя стихия, взять впечатление, поймать эмоцию и пропустив через себя выплеснуть красками и линиями на ткань, холст, бумагу или другую жертву моего творческого зуда)",
      desc2: "Люблю рисовать пастелью, которая совсем недавно меня взяла в плен….",
      desc3: "Еще, я пишу картины на ткани. Профессионально занимаюсь батиком уже довольно долгое время.",
      cover: "../../assets/artist2.jpg",
    },
  ]
  return (
    <>
      <section className='about topMarign'>
        <div className='container flex'>
          {data.map((value) => {
            return (
              <>
                <div className='left mtop'>
                  <div className='heading'>
                    {/* <h3>About Me</h3> */}
                    <h1>{value.title}</h1>
                  </div>

                  <p>{value.desc1}</p>
                  <p>{value.desc2}</p>
                  <p>{value.desc3}</p>
            <button className='primary-btn'>Скачать CV</button>
      
                </div>
                <div className='right'>
                  <div className='img'>
                    <img height="500px" width="500px" src={img} alt='' />
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Info