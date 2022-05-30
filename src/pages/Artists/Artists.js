// import React from "react";
// import "./Artists.css"



// function Artists() {
//     return (
//         // <div>
//         //     Here is Artists!
//         // </div>

//         <section>
//             <ul>
//                 <li class="list active" data-filter="Search for artists starting with" href="/">Search for artists starting with</li>
                // <li class="list" data-filter="a">A</li>
                // <li class="list" data-filter="b">B</li>
                // <li class="list" data-filter="c">C</li>
                // <li class="list" data-filter="d">D</li>
                // <li class="list" data-filter="e">E</li>
                // <li class="list" data-filter="f">F</li>
                // <li class="list" data-filter="g">G</li>
                // <li class="list" data-filter="h">H</li>
                // <li class="list" data-filter="i">I</li>
                // <li class="list" data-filter="g">G</li>
                // <li class="list" data-filter="k">K</li>
                // <li class="list" data-filter="l">L</li>
                // <li class="list" data-filter="m">M</li>
//             </ul>
//             <div class="product">
//                 <div class="itemBox" data-item="a"><img src="https://news.artnet.com/app/news-upload/2019/09/GettyImages-1157348492-1024x683.jpg"></img> </div>
//                 {/* <div> Annejole Jacobs-de Jongh (Jole)</div>
//                 <span>Rotterdam, The Netherlands</span> */}
//                 <br></br>
//                 {/* <span>27 Artworks</span> */}
//                 <div class="itemBox" data-item="b"><img src="https://middle-east-online.com/sites/default/files/styles/home_special_coverage_1920xauto/public/2019-12/eritart.jpg?itok=bp6HBHx2"></img> </div>
//                 {/* <div> Annejole Jacobs-de Jongh (Jole)</div>
//                 <span>Rotterdam, The Netherlands</span> */}
//                 <br></br>
//                 {/* <span>27 Artworks</span> */}
//                 <div class="itemBox" data-item="c"><img src="https://www.agora-gallery.com/advice/wp-content/uploads/Artist-in-quarantine.jpg"></img> </div>
//                 {/* <div> Annejole Jacobs-de Jongh (Jole)</div>
//                 <span>Rotterdam, The Netherlands</span> */}
//                 <br></br>
//                 {/* <span>27 Artworks</span> */}
//                 <div class="itemBox" data-item="d"><img src="https://api.time.com/wp-content/uploads/2021/09/nft-art-teens-1.jpg?quality=85&w=2400"></img> </div>
//                 {/* <div> Annejole Jacobs-de Jongh (Jole)</div>
//                 <span>Rotterdam, The Netherlands</span> */}
//                 <br></br>
//                 {/* <span>27 Artworks</span> */}
//                 <div class="itemBox" data-item="a"><img src="https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=650%2Cmetadata=none%2Conerror=redirect%2Cq=85%2Cwidth=968/wp-content/uploads/international-artists-day1-e1571734375351.jpg"></img> </div>
//                 {/* <div> Annejole Jacobs-de Jongh (Jole)</div>
//                 <span>Rotterdam, The Netherlands</span> */}
//                 <br></br>
//                 <div class="itemBox" data-item="a"><img src="https://artgalleryofmississauga.com/wp-content/uploads/2021/07/annie-spratt-ejoT2wOeHDY-unsplash.jpg"></img> </div>
//                 {/* <div> Annejole Jacobs-de Jongh (Jole)</div>
//                 <span>Rotterdam, The Netherlands</span> */}
//                 <br></br>
//                 <div class="itemBox" data-item="a"><img src="https://bluethumb.com.au/blog/wp-content/uploads/2020/01/Ben-Tankard-scaled.jpg"></img> </div>
//                 {/* <div> Annejole Jacobs-de Jongh (Jole)</div>
//                 <span>Rotterdam, The Netherlands</span> */}
//                 <br></br>
//             </div>
//         </section>

//     )
// }

// export default Artists;



import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './Artists.css';
import ArtistItem from './ArtistItem';
import About from './About'
import LinkA from "../../components/Link/Link";



function Artists() {
  return (
  

    <div className='artists'>
      <h1>Начните искать художников с</h1>
      <div className="artist-links">
                <div  className="artist-a"><LinkA href="/">А</LinkA></div>
                <div  className="artist-a"><LinkA href="/">Б</LinkA></div>
                <div  className="artist-a"><LinkA href="/">В</LinkA></div>
                <div  className="artist-a"><LinkA href="/">Г</LinkA></div>
                <div  className="artist-a"><LinkA href="/">Д</LinkA></div>
                <div  className="artist-a"><LinkA href="/">Е</LinkA></div>
                <div  className="artist-a"><LinkA href="/">Ж</LinkA></div>
                <div  className="artist-a"><LinkA href="/">З</LinkA></div>
                <div  className="artist-a"><LinkA href="/">И</LinkA></div>
                <div  className="artist-a"><LinkA href="/">К</LinkA></div>  
                <div  className="artist-a"><LinkA href="/">Л</LinkA></div>
                <div  className="artist-a"><LinkA href="/">М</LinkA></div>
                <div  className="artist-a"><LinkA href="/">Н</LinkA></div>
                <div  className="artist-a"><LinkA href="/">О</LinkA></div>
                <div  className="artist-a"><LinkA href="/">П</LinkA></div>
                <div  className="artist-a"><LinkA href="/">Р</LinkA></div>
                <div  className="artist-a"><LinkA href="/">С</LinkA></div>
                <div  className="artist-a"><LinkA href="/">Т</LinkA></div>
                <div  className="artist-a"><LinkA href="/">У</LinkA></div>
                <div  className="artist-a"><LinkA href="/">Ц</LinkA></div>  
                <div  className="artist-a"><LinkA href="/">Щ</LinkA></div>
                <div  className="artist-a"><LinkA href="/">Ю</LinkA></div>
                <div  className="artist-a"><LinkA href="/">Я</LinkA></div> 
            </div>
      <div className='artists__container'>
        <div className='artists__wrapper'>
          <ul className='artists__items'>
            <ArtistItem
              src='https://bluethumb.com.au/blog/wp-content/uploads/2020/01/Ben-Tankard-scaled.jpg'
              text='John Snow - 26 works'
              label='Adventure'
              path='/artists/about'
            />
            <ArtistItem
              src='https://bluethumb.com.au/blog/wp-content/uploads/2020/01/Ben-Tankard-scaled.jpg'
              text='John Snow - 26 works'
              label='Luxury'
              path='/artists/about'
            />
             <ArtistItem
              src='https://bluethumb.com.au/blog/wp-content/uploads/2020/01/Ben-Tankard-scaled.jpg'
              text='John Snow - 26 works'
              label='Luxury'
              path='/artists/about'
            />
          </ul>
          <ul className='artists__items'>
            <ArtistItem
              src='https://i0.wp.com/artplugged.co.uk/wp-content/uploads/2019/10/Wushuang-Tong-Studio-Shot-1-scaled.jpg?fit=2560%2C1707&ssl=1'
              text='John Snow - 26 works'
              label='Mystery'
              path='/artists/about'
            />
            <ArtistItem
              src='https://i0.wp.com/artplugged.co.uk/wp-content/uploads/2019/10/Wushuang-Tong-Studio-Shot-1-scaled.jpg?fit=2560%2C1707&ssl=1'
              text='John Snow - 26 works'
              label='Adventure'
              path='/artists/about'
            />
            <ArtistItem
              src='https://i0.wp.com/artplugged.co.uk/wp-content/uploads/2019/10/Wushuang-Tong-Studio-Shot-1-scaled.jpg?fit=2560%2C1707&ssl=1'
              text='John Snow - 26 works'
              label='Adrenaline'
              path='/artists/about'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Artists;




