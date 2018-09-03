import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addAboutThunk } from '../store'

export default class About extends Component {
    constructor() {
        super();
        this.state = {
            currentPic: 1,
            profileImg: '/img/profile.jpg',
            profileOne: '/img/profile.jpg',
            profileTwo: '/img/profile2.png',
            profileThree: '/img/profile3.jpg',
            
        }
    }


    
    handleClick = () => {
        console.log('before: ', this.state.currentPic)
        if (this.state.currentPic < 3) {
            this.setState({
                currentPic: this.state.currentPic + 1
            })
        } else {
            this.setState({
                currentPic: 1
            })
        }

        let currentPhoto = this.state.currentPic + 1
        if(currentPhoto === 4){
            currentPhoto = 1
        }
        
        if (currentPhoto === 1) {
            this.setState({
                profileImg: this.state.profileOne
            })
        }
        if (currentPhoto === 2) {
            this.setState({
                profileImg: this.state.profileTwo
            })
        }
        if (currentPhoto === 3) {
            this.setState({
                profileImg: this.state.profileThree
            })
        }

    }

    render() {

        return (
            <div className="aboutWrapper">
                <img className="profileImg" src={this.state.profileImg} />
                {/* <div className='navdot'>
                    <span id={this.state.currentPic === 1 ? 'clickedNavDot' : ''} onClick={() => this.setState({currentPic: 1, profileImg: this.state.profileOne})}></span>
                    <span id={this.state.currentPic === 2 ? 'clickedNavDot' : ''} onClick={() => this.setState({currentPic: 2, profileImg: this.state.profileTwo})}></span>
                    <span id={this.state.currentPic === 3 ? 'clickedNavDot' : ''} onClick={() => this.setState({currentPic: 3, profileImg: this.state.profileThree})}></span>
                </div> */}
                <div className="aboutParagraph">
                <div className='aboutSection1'>
                    <div className='aboutTitle'>MY STORY</div>
                    <p>My name is Dan Gutt, and I am software engineer with a background in law and biology. 
                    After practicing law in a firm that focused on Bankruptcy and Secured Transactions, I started thinking 
                    about all the processes that could be automated in my office. Interestingly enough, this led to my experimentation with 
                    writing code, initially in Python. It was there that I fell in love with the problem solving process that makes software engineering 
                    such a rewarding and fascinating profession.</p>
                </div>
                <div className='aboutSection2'>
                    <div className='aboutTitle'>TECHNICAL SKILLS</div>
                    <div className='techSkills'>
                        <div className='proficient'>
                            <div>Proficient:</div>
                            <div>
                                <ul>
                                    <li><img src='/img/javascript.png'/></li>
                                    <li><img src='/img/react.png' /></li>
                                    <li><img src='/img/redux.png' /></li>
                                    <li><img src='/img/node.png' /></li>
                                    <li><img src='/img/express.png' /></li>
                                    <li><img src='/img/sequelize.png' /></li>
                                    <li><img src='/img/git.png' /></li>
                                    <li><img src='/img/github4.png'/></li>
                                    <li><img src='/img/html.png'/></li>
                                    <li><img src='/img/css.png'/></li>
                                </ul>
                            </div>
                        </div>
                        <div className='knowledgable'>
                            <div>Knowledgeable:</div>
                            <div>
                                <ul>
                                    <li><img src='/img/postgresql.png'/></li>
                                    <li><img src='/img/reactnative.png'/></li>
                                    <li><img src='/img/mocha.png'/></li>
                                    <li><img src='/img/chai.png'/></li>
                                    <li><img src='/img/phaser.png'/></li>
                                    <li><img src='/img/python.png'/></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}