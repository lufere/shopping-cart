import React from 'react';
import './card.css'

const Card = props =>{
    return(
        <div className='card'>
            <header>{props.title}</header>
            <img
                alt={props.title}
                src={props.img}
            />
            <footer>
                <p>{props.price}$</p>
                <form id={props.id}>
                    <input type='number' name='quantity' defaultValue='1' min='1'></input>
                    <button type='submit' onClick={props.addToCart}>Add</button>
                </form>
            </footer>
        </div>
    );
}

export default Card

