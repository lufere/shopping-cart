import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = props => {
    const cartQty = props.cart.reduce((accumulator,value)=>accumulator+value.qty,0);
    return(
        <header className='navHeader'>
            <Link id='logo' to='/'>
                <img
                    alt='Logo'
                    src='https://icons-for-free.com/iconfiles/png/512/vinyl-131994967757554091.png'
                />
            </Link>
            <Link to='/shop'>SHOP</Link>
            <div className='cartStatus'>
                <p>{cartQty}</p>
                <img
                    alt='Shopping Cart'
                    src='https://image.flaticon.com/icons/png/512/126/126083.png'
                />
            </div>
            
        </header>
    );
}

export default Header