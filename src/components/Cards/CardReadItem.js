import React from 'react';
import { Link } from 'react-router-dom';

function CardReadItem(props) {
    return (
        <>
            <li className='cards_item_read'>
                <Link className='cards__item__link' to={props.path}>

                    <figure className='cards__item__pic-wrap'>
                        <img
                            className='cards__item__img'
                            alt='Travel'
                            src={props.src}
                        />
                    </figure>
                    <div className='cards__item__info'>
                        <p className='date'>DECEMBER 10, 2016</p>
                        <h5 className='cards__item__text'>{props.text}</h5>
                        <p className='description'>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...</p>
                        <div className='read'>Read More <i className="fas fa-chevron-right"></i></div>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default CardReadItem;
