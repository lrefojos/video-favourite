import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Details from './Details';
import List from './List';

const Root = () => (
    <BrowserRouter>
    <div>
        <Route exact path="/" component={List}/>
        <Route exact path="/:id" component={Details}/>
    </div>
    </BrowserRouter>
)

export default Root;