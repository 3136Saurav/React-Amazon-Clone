import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromProduct = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }

    return (
        <div className='checkoutProduct'>
            <img className="checkoutProduct__image" src={image} />
        
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {"⭐".repeat(rating)}
                </div>
                <button className='checkoutProduct__removeBtn' onClick={removeFromProduct}>Remove from Basket</button>
            </div>

        </div>
    )
}

export default CheckoutProduct;