import React, { Component } from 'react';


export default class HomePage extends Component {
    constructor (){
        super();
        this.state ={}
    }

    render(){
        return (
            <div className='homeWrapper'>
                <img src='/img/glacier6.jpg' />
                <div className="websiteTitle">
                    <h1>
                        <div>Hello, I'm Daniel Gutt.</div>
                        <div>I'm a fullstack software engineer.</div>
                    </h1> 
                </div>
            </div>
        )
    }
}