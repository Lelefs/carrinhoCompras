import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Produtos from './pages/Produtos';
import Cart from './pages/Cart';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/produto" component={Produtos} />
                <Route path="/carrinho" component={Cart} />
            </Switch>
        </BrowserRouter>
    );
}