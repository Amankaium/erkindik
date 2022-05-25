import React from "react"
import './About'
import './Artists'
import './Info.css'

const Info = () => {
  const data = [
    {
      title: "Who I Am And What I Do",
      desc1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde possimus quaerat quam dolorum ipsa laboriosam, repudia illum amet inventore facilis, eius libero.",
      desc2: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      desc3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      cover: "https://www.liveabout.com/thmb/Z0v5wfzDA-fOTkaL_ksqKkWHt5Y=/1500x1000/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-667156305-59befb3daf5d3a00102437f8.jpg",
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
                    <h3>About Me</h3>
                    <h1>{value.title}</h1>
                  </div>

                  <p>{value.desc1}</p>
                  <p>{value.desc2}</p>
                  <p>{value.desc3}</p>
                  <button className='primary-btn'>See my other works</button>
                </div>
                <div className='right'>
                  <div className='img'>
                    <img src={value.cover} alt='' />
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