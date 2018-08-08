import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import {HomePage, About} from './components';

export default class Routes extends Component {
    render (){
        return (
            <div>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/about' component={About} />
            </div>
        )
    }
}