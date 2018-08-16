import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import {HomePage, About, Portfolio, Contact} from './components';

export default class Routes extends Component {
    render (){
        return (
            <div>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/about' component={About} />
                <Route exact path='/portfolio' component={Portfolio} />
                <Route exact path='/contact' component={Contact} />
            </div>
        )
    }
}