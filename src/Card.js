import React, {useState} from 'react';
import './card.css'

const Card = props =>{
    const [quantity, setQuantity] = useState(0);
    return(
        <div className='card'>
            <header>{props.title}</header>
            <img
                alt={props.title}
                src={props.img}
            />
            <footer>
                <p>{props.price}</p>
                <button>Add</button>
                <div>
                    <button onClick={()=>setQuantity(quantity-1)}>-</button>
                    <p>{quantity}</p>
                    <button onClick={()=>setQuantity(quantity+1)}>+</button>
                </div>
            </footer>
        </div>
    );
}

export default Card

