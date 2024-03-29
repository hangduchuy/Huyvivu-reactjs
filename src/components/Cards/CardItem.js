import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        {props && props.sale && <span className="cards_sale">{props.sale}</span>}
        <Link className='cards__item__link' to={props.path}>

          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            <p>City Tours, Urban</p>
            <div className='star'>
              <div className='left'>
                <i className="fas fa-star fa-xs"></i>
                <i className="fas fa-star fa-xs"></i>
                <i className="fas fa-star fa-xs"></i>
                <i className="fas fa-star fa-xs"></i>
                <i className="far fa-star fa-xs"></i>
                <span >4 reviews</span>
              </div>
              <div className='right'>
                <i className="far fa-clock fa-xs"></i>
                <span >5 days</span>
              </div>
            </div>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
