import React,{useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Welcome from './Welcome';
import Shop from './Shop';
import Header from './Header';
import Checkout from './Checkout';

const Routes = () => {
    const [cart, setCart] = useState([
        {title:'In Rainbows',
        img: 'https://upload.wikimedia.org/wikipedia/en/1/14/Inrainbowscover.png',
        price: '30',
        qty:0,
        id:'rhIR',},
        {title:'A Moon Shaped Pool',
        img: 'https://images-na.ssl-images-amazon.com/images/I/815bmGN5LML._AC_SL1200_.jpg',
        price: '20',
        qty:0,
        id:'rhAMSP',},
        {title:'Ok Computer',
        img: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Radioheadokcomputer.png',
        price: '100',
        qty:0,
        id:'rhOKC',},
    ]);
    
    const addToCart = (e)=>{
        e.preventDefault();
        let id = e.currentTarget.parentElement.id;
        let cardQty = parseInt(e.currentTarget.parentElement.quantity.value);
        setCart(
            cart.map((item)=>{
                if (item.id===id) return({...item, qty:item.qty+cardQty})
                return item
            })
        );
        // let pos = cart.findIndex(e => e.id===id);
        // let newCart = [...cart];
        // newCart[pos].qty=parseInt(newCart[pos].qty)+parseInt(cardQty);
        // setCart(newCart);
        // console.log(cart.map(item=>item.qty));
    }

    return(
        <BrowserRouter>
            <Header
                cart={cart}
            />
            <Switch>
                <Route exact path='/'>
                    <Welcome/>
                </Route>
                <Route exact path='/shop'>
                    <Shop
                        products={cart}
                        addToCart={addToCart}
                    />
                </Route>
                <Route exact path='/checkout'>
                    <Checkout
                        products={cart}
                    />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes
