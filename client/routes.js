import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import {HomePage, About, Portfolio} from './components';

export default class Routes extends Component {
    render (){
        return (
            <div>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/test' component={About} />
                <Route exact path='/portfolio' component={Portfolio} />
            </div>
        )
    }
}