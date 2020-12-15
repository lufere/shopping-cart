import React,{useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App';
import Shop from './Shop';
import Header from './Header';

const Routes = () => {
    const [cartQty, setCartQty] = useState(3);
    return(
        <BrowserRouter>
        <Header
        cart={[1,2,3]}
        />
            <Switch>
                <Route exact path='/'>
                    <App/>
                </Route>
                <Route exact path='/shop'>
                    <Shop
                        qty={cartQty}
                    />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes
