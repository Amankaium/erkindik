
import React from 'react';
import './Artists.css';
import './About.css';
import './Info';




const About = () => {
  return (
    <>
    <section className='aboutartist'>
        <div className='container flex'>
          <div className='left '>
            <div className='img'>
              <img src='https://www.liveabout.com/thmb/Z0v5wfzDA-fOTkaL_ksqKkWHt5Y=/1500x1000/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-667156305-59befb3daf5d3a00102437f8.jpg' alt='' />
            </div>
          </div>
          <div className='right topMarign'>
            <h1>
              I AM AN <br />
              ARTIST
            </h1>
            <div className='SocailIcon'>
              <i className='fab fa-facebook-f facebook'></i>
              <i className='fab fa-instagram instagram'></i>
              <i className='fab fa-twitter twitter'></i>
              <i className='fab fa-youtube youtube'></i>
              <i className='fab fa-pinterest pinterest'></i>
              <i className='fab fa-dribbble dribbble'></i>
            </div>
            <p>Lorem ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className='primary-btn'>Contact Us</button>
          </div>
        </div>
        


      </section>
    </>

    
  )
}
 



export default About


