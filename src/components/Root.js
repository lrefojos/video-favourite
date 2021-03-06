import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Details from './Details';
import List from './List';
import About from './About';

const Root = () => (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={List}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/:id" component={Details}/>
    </Switch>
    </BrowserRouter>
)

export default Root;