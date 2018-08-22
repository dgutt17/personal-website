import React, { Component } from 'react';
import { Link } from 'react-router-dom'



export default class NavBar extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {

        return (
            <div id='wrapper'>
                <nav id='navbar'>
                    <ul>
                        <li id='listItem'><Link to={'/'}>Home</Link></li>
                        <li id='listItem'><Link to={'/about'}>About</Link></li>
                        <li id='listItem'><Link to={'/portfolio'}>Portfolio</Link></li>
                        <li id='listItem'><Link to={'/contact'}>Contact</Link></li>
                    </ul>
                    <ul id='social'>
                        <li className='github' id='listItem'><a href="https://github.com/dgutt17">Github</a></li>
                        <li className='linkedin' id='listItem'><a href="https://www.linkedin.com/in/danielgutt/">LinkedIn</a></li>
                    </ul>
                </nav>
            </div>
                )
            }
}