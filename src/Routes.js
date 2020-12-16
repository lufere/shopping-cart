import React,{useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App';
import Shop from './Shop';
import Header from './Header';

const Routes = () => {
    const [cart, setCart] = useState([
        {title:'In Rainbows',
        img: 'https://upload.wikimedia.org/wikipedia/en/1/14/Inrainbowscover.png',
        price: '30',
        cardQty:0,
        qty:0,
        id:'rhIR',},
        {title:'A Moon Shaped Pool',
        img: 'https://images-na.ssl-images-amazon.com/images/I/815bmGN5LML._AC_SL1200_.jpg',
        price: '20',
        cardQty:0,
        qty:0,
        id:'rhAMSP',},
        {title:'Ok Computer',
        img: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Radioheadokcomputer.png',
        price: '100',
        cardQty:0,
        qty:0,
        id:'rhOKC',},
    ]);
    
    return(
        <BrowserRouter>
        <Header
        cart={[1,2,3,4]}
        />
            <Switch>
                <Route exact path='/'>
                    <App/>
                </Route>
                <Route exact path='/shop'>
                    <Shop
                        products={cart}
                    />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes
