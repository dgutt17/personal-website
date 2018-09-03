import React, { Component } from 'react';

const style = {
    component: {
        width: '15rem',
        marginBottom: 10
    },
    link: {
        paddingTop: '.375rem'
    }
}
export default class Portfolio extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div>
            <h1 className='portfolioTitle'>Projects</h1>
            <div className="portfolioWrapper">
            <div className="card product-card" style={style.component}>
                <img className="card-img-top" src={'img/geostories.png'} alt={'Test'} />
                <div className="card-body">
                    <h5>
                        <a href='https://www.youtube.com/watch?v=-LbCIy1dxss&feature=youtu.be'>GeoStories</a>
                    </h5>

                    <a className="card-text" href='https://github.com/userStories'>Github</a>
                    <p className="card-text">Summary:</p>
                    <p className="card-text">Social-media mobile app that helps users explore their hometown for fun events or to explore new locales.</p>
                </div>
            </div>

            <div className="card product-card" style={style.component}>
                <img className="card-img-top" src={'img/favicon.ico'} alt={'Test'} />
                <div className="card-body">
                    <h5>
                        <a href='https://grace-shopper-steeds.herokuapp.com/'>Car Shopper</a>
                    </h5>

                    <a className="card-text" href='https://github.com/grace-shopper-shaheeds-steeds/car-shopper'>Github</a>
                    <p className="card-text">Summary:</p>
                    <p className="card-text">An E-commerce web app that allows users to buy cars.</p>
                </div>
            </div>

            <div className="card product-card" style={style.component}>
                <img className="card-img-top" src={'img/profile.jpg'} alt={'Test'} />
                <div className="card-body">
                    <h5>
                        <a href='https://www.youtube.com/watch?v=afl0tILY7yc'>Minefield</a>
                    </h5>

                    <a className="card-text" href='https://github.com/dgutt17/Minefield'>Github</a>
                    <p className="card-text">Summary:</p>
                    <p className="card-text">Minefield is a fun 2D single-player space shooter video game that resembles Atari's asteroids.</p>
                </div>
            </div>
            <div className="card product-card" style={style.component}>
                <img className="card-img-top" src={'img/construction.jpg'} alt={'Test'} />
                <div className="card-body">
                    <h5>
                        <a href=''>Fresh Tomatoes</a>
                    </h5>

                    <a className="card-text" href='https://github.com/dgutt17/movieWebsite'>Github</a>
                    <p className="card-text">Summary:</p>
                    <p className="card-text">A movie web app that aggregates movie ratings, recommends movies to users, and displays movie showtimes.</p>

                </div>
            </div>
            </div>
            </div>
        )
    }
}