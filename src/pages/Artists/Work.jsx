import React from "react"
import Data from "./Data"
import './Work.css';

const Work = () => {
    return (
      <>
        <section className='Work topMarign'>
          <div className='container'>
            <div className='heading'>
              <h3>MY Works</h3>
            </div>
            <div className='contain grid topMarign'>
              {Data.map((val) => {
                return (
                  <div className='box'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </>
    )
  }
  
  export default Work