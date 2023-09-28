import React from 'react';
import { Link } from 'react-router-dom';

function CardWhyItem(props) {
    return (
        <>
            <li className='cards_item_why'>
                <Link className='cards__item__link' to={props.path}>
                    <figure className='cards__item__pic-wrap'>
                        <img
                            className='cards__item__img'
                            alt='Travel'
                            src={props.src}
                        />
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{props.text}</h5>
                        <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</p>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default CardWhyItem;
