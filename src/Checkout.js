import React from 'react';

const Checkout = props => {
    var cartItems = props.products.filter(album=>album.qty>0);
    var results = cartItems.map((album)=>{
        return <li key={album.id}>{`${album.title}, ${album.qty}, ${album.qty*album.price}$`}</li>
    });
    var total = cartItems.reduce((accumulator,currentVal)=>accumulator+(currentVal.qty*currentVal.price),0);
    return(
        <div>
            <ul>
                {results}
            </ul>
                Total: {total}$
        </div>
    );
}

export default Checkout;