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
                <img className="card-img-top" src={'img/favicon.ico'} alt={'Test'} />
                <div className="card-body">
                    <h5>
                        <a href='https://grace-shopper-steeds.herokuapp.com/'>Car Shopper</a>
                    </h5>

                    <p className="card-text">Summary:</p>
                    <p className="card-text">Lorem ipsum dolar site emit</p>

                </div>
            </div>

            <div className="card product-card" style={style.component}>
                <img className="card-img-top" src={'img/geostories.png'} alt={'Test'} />
                <div className="card-body">
                    <h5>
                        <a href='https://www.youtube.com/watch?v=-LbCIy1dxss&feature=youtu.be'>GeoStories</a>
                    </h5>

                    <p className="card-text">Summary:</p>
                    <p className="card-text">Lorem ipsum dolar site emit</p>

                </div>
            </div>

            <div className="card product-card" style={style.component}>
                <img className="card-img-top" src={'img/profile.jpg'} alt={'Test'} />
                <div className="card-body">
                    <h5>
                        <a href='https://www.youtube.com/watch?v=afl0tILY7yc'>Minefield</a>
                    </h5>

                    <p className="card-text">Summary:</p>
                    <p className="card-text">Lorem ipsum dolar site emit</p>

                </div>
            </div>
            <div className="card product-card" style={style.component}>
                <img className="card-img-top" src={'img/construction.jpg'} alt={'Test'} />
                <div className="card-body">
                    <h5>
                        <a href=''>Fresh Tomatoes</a>
                    </h5>

                    <p className="card-text">Summary:</p>
                    <p className="card-text">Lorem ipsum dolar site emit</p>

                </div>
            </div>
            </div>
            </div>
        )
    }
}