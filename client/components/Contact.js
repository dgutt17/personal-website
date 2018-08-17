import React, { Component } from 'react';

export default class Portfolio extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div id='contactWrapper'>
                <div id='contactTitle'>Contact Info</div>
                <div className='contactItem'>Linkedin: <a href='https://linkedin.com/in/danielgutt/'>linkedin.com/in/danielgutt/</a></div>
                <div className='contactItem'>Github: <a href='https://github.com/dgutt17'>github.com/dgutt17</a></div>
                <div className='contactItem'>Email: <p>dgutt10@gmail.com</p></div>
            </div> 
        )
    }
}