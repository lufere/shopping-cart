import React from 'react';
import './checkoutCard.css';

const CheckoutCard = props =>{
    return(
        <div className='checkoutCard'>
            <img
                alt={props.title}
                src={props.img}
            />
            <div className='cartCardInfo'>
                <h2>{props.title}</h2>
                <div id={props.id}>
                    <p>{props.price}$</p>
                    <div className='cartButtons'>
                        <button className='-' onClick={props.modify}>-</button>
                        <p>{props.qty}</p>
                        <button className='+' onClick={props.modify}>+</button>
                    </div>
                    <div className='remove' onClick={props.remove}>
                        <img
                            alt='Remove item from cart'
                            src='https://cdn4.iconfinder.com/data/icons/social-messaging-ui-coloricon-1/21/52-512.png'
                        ></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckoutCard