import React from 'react';
import './header.css';

const Header = props => {
    return(
        <header className='navHeader'>
            <img
                alt='Logo'
                src='https://icons-for-free.com/iconfiles/png/512/vinyl-131994967757554091.png'
            />
            <a href='/products'>PRODUCTS</a>
            <div className='cartStatus'>
                <p>{props.cart.length}</p>
                <img
                    alt='Shopping Cart'
                    src='https://image.flaticon.com/icons/png/512/126/126083.png'
                />
            </div>
            
        </header>
    );
}

export default Header