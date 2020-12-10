import React, {useState} from 'react';
import './card.css'

const Card = props =>{
    const [quantity, setQuantity] = useState(0);
    
    function downCount(){
        if(quantity>0)setQuantity(quantity-1)
    }

    return(
        <div className='card'>
            <header>{props.title}</header>
            <img
                alt={props.title}
                src={props.img}
            />
            <footer>
                <p>{props.price}</p>
                <div>
                    <button onClick={downCount}>-</button>
                    <p>{quantity}</p>
                    <button onClick={()=>setQuantity(quantity+1)}>+</button>
                </div>
                <button>Add</button>
            </footer>
        </div>
    );
}

export default Card

