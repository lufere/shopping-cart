import React from 'react';
import './card.css'

const Card = props =>{
    return(
        <div className='card' id={props.id}>
            <header>{props.title}</header>
            <img
                alt={props.title}
                src={props.img}
            />
            <footer>
                <p>{props.price}$</p>
                <select type='select' name='quantity'>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select>
                <button>Add</button>
            </footer>
        </div>
    );
}

export default Card

