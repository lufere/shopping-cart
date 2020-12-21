import React from 'react';
import './checkout.css';
import CheckoutCard from './CheckoutCard';

const Checkout = props => {
    var cartItems = props.products.filter(album=>album.qty>0);
    var results = cartItems.map((album)=>{
        // return <li key={album.id}>{`${album.title}, ${album.qty}, ${album.qty*album.price}$`}</li>
        return <div className='checkoutRow'>
                    <p>{album.title}</p>
                    <p>{album.qty}</p>
                    <p>{album.qty*album.price}$</p>
                </div>
    });
    var cartCards = cartItems.map((card)=>{
        return <CheckoutCard
            img = {card.img}
            title = {card.title}
            price = {card.price}
            qty = {card.qty}
        />
    })
    var total = cartItems.reduce((accumulator,currentVal)=>accumulator+(currentVal.qty*currentVal.price),0);
    return(
        <div className='checkout'>
            <div className='cartItems'>
                {cartCards}
            </div>
            <div className='total'>
                <h1>CHECKOUT</h1>
                <div className='checkoutRow'>
                    <p>Album</p>
                    <p>Qty</p>
                    <p>Price</p>
                </div>
                <ul>
                    {results}
                </ul>
                <div className='checkoutRow'>
                    <p>TOTAL</p>
                    <p></p>
                    <p>{total}$</p>
                </div>
                <button className='payment'>Proceed to payment</button>
            </div>
        </div>
    );
}

export default Checkout;