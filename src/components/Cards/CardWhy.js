import React from 'react';
import './CardWhy.scss';
import CardWhyItem from './CardWhyItem';

function CardWhy() {
    return (
        <>
            <div className='cards'>
                <h1>Why Choose Us</h1>
                <p>Here are reasons you should plan trip with us</p>
                <div className='cards_container'>
                    <div className='cards_wrapper'>
                        <ul className='cards__items'>
                            <CardWhyItem
                                src='images/map.png'
                                text='Handpicked Hotels'
                                path='/'
                            />
                            <CardWhyItem
                                src='images/location.png'
                                text='World Class Service'
                                path='/'
                            />
                            <CardWhyItem
                                src='images/air.png'
                                text='Best Price Guarantee'
                                path='/'
                            />
                        </ul>
                    </div>
                </div>
            </div>
            <div className='background_why'></div>
        </>
    );
}

export default CardWhy;
