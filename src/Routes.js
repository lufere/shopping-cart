import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App';
import Products from './Products';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App}></Route>
                <Route exact path='/products' component={Products}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes
