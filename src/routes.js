import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainHome from './Components/Home/MainHome';
import Home4 from './Components/Home/Home4';
import FAQ from './Components/FAQ/FAQ';

export default (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={MainHome}/>
            <Route path='/home4' component={Home4} />
            <Route path='/FAQ' component={FAQ} />
        </Switch>
    </BrowserRouter>
)