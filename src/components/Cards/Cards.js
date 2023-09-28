import React from 'react';
import './Cards.scss';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Best Value Trips</h1>
      <p>Best offers trips from us</p>
      <div className='cards_container'>
        <div className='cards_wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='$5,000'
              path='/'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='$3̶̶0̶̶0̶̶0̶ $2,500'
              sale='sale'
              path='/'
            />
            <CardItem
              src='images/img-3.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='$3̶̶0̶̶0̶̶0̶ $2,500'
              sale='sale'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
