import React from 'react';
import './CardDes.scss';
import CardDesItem from './CardDesItem';

function CardsDes() {
  return (
    <div className='cards_des'>
      <h1>Popular Destinations</h1>
      <p>World's best tourist destinations</p>
      <div className='cards_container'>
        <div className='cards_wrapper'>
          <ul className='cards__items'>
            <CardDesItem
              src='images/1.jpg'
              label='Tokyo'
              path='/'
            />
            <CardDesItem
              src='images/2.jpg'
              label='Seoul'
              path='/'
            />
            <CardDesItem
              src='images/3.jpg'
              label='Paris'
              path='/'
            />
            <CardDesItem
              src='images/5.jpeg'
              label='London'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsDes;
