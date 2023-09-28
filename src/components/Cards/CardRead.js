import React from 'react';
import './CardRead.scss';
import CardReadItem from './CardReadItem';

function CardRead() {
    return (
        <div className='cards'>
            <h1>Articles & Tips</h1>
            <p>Explore some of the best tips from around the world</p>
            <div className='cards_container'>
                <div className='cards_wrapper'>
                    <ul className='cards__items'>
                        <CardReadItem
                            src='images/img-1.jpg'
                            text='Memorial Day to Someone Told Me to Travel'
                            path='/'
                        />
                        <CardReadItem
                            src='images/img-8.jpg'
                            text='7 Tips For Nomads On A Budget Trips'
                            path='/'
                        />
                        <CardReadItem
                            src='images/img-5.jpg'
                            text='Taking A Travel Blog Victory Lap'
                            path='/'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CardRead;
