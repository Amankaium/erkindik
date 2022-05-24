import React from 'react';
import { Link } from 'react-router-dom';

function ArtistItem(props) {
  return (
    <>
      <li className='artists__item'>
        <Link className='artists__item__link' to={props.path}>
          <figure className='artists__item__pic-wrap' data-category={props.label}>
            <img
              className='artists__item__img'
              alt='Artist Image'
              src={props.src}
            />
          </figure>
          <div className='artists__item__info'>
            <h5 className='artists__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default ArtistItem;