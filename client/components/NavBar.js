import React, { Component } from 'react';
import {Link} from 'react-router-dom'



export default class NavBar extends Component {
    constructor (){
        super();
        this.state ={}
    }

    render(){
        return (
            <div className='wrapper'>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Portfolio</li>
                        <li>Contact</li>
                    </ul>
                    <ul>
                        <li>Github</li>
                        <li>LinkedIn</li>
                        <li>Gmail</li>
                    </ul>
                </nav>
            </div>
        )
    }
}