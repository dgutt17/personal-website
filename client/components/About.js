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
                <img className="profileImg" onClick={this.handleClick} src={this.state.profileImg} />
                <div className='navdot'>
                    <span id={this.state.currentPic === 1 ? 'clickedNavDot' : ''} onClick={() => this.setState({currentPic: 1, profileImg: this.state.profileOne})}></span>
                    <span id={this.state.currentPic === 2 ? 'clickedNavDot' : ''} onClick={() => this.setState({currentPic: 2, profileImg: this.state.profileTwo})}></span>
                    <span id={this.state.currentPic === 3 ? 'clickedNavDot' : ''} onClick={() => this.setState({currentPic: 3, profileImg: this.state.profileThree})}></span>
                </div>
                <div className="aboutParagraph">
                <div className='aboutSection1'>
                    <div className='aboutTitle'>MY STORY</div>
                    <p>My name is Dan Gutt, and I am software engineer with a background in law and biology. 
                    After practicing law in a firm that focused on Bankruptcy and Secured Transactions, I started thinking 
                    about all the processes that could be automated in my office. Interestingly enough, this led to my experimentation with 
                    writing code, initially in Python. It was there that I fell in love with the problem solving process that makes software engineering 
                    such a rewarding and fascinating profession. Thus, I decided to begin a journey to change my career. Soon after I joined 
                    Fullstack Academy of Code, an intensive 13 week software engineering bootcamp, where I become proficient in the 
                    NERD stack, and where I built three separate applications. These projects included a mobile social media app that geolocated user 
                    videos and images, a fun 2D single-player space shooter that resembles Atari's asteroids, and e-commerce web app that sold cars. 
                    Now, I am currently working on a movie recommendation engine. 

                    I enjoy all aspects of software development from the backend to the frontend, and I believe my programming skills, analytical abilities, 
                    detail oriented nature, and understanding of computer fundamentals will make me a value added software engineer to any team.</p>
                </div>
                <div className='aboutSection2'>
                    <div className='aboutTitle'>TECHNICAL SKILLS</div>
                    <div className='techSkills'>
                        <div className='proficient'>
                            <div>Proficient:</div>
                            <div>
                                <ul>
                                    <li>JavaScript</li>
                                    <li>React</li>
                                    <li>Redux</li>
                                    <li>Node.js</li>
                                    <li>Express</li>
                                    <li>Sequelize</li>
                                    <li>Git</li>
                                    <li>Github</li>
                                </ul>
                            </div>
                        </div>
                        <div className='knowledgable'>
                            <div>Knowledgeable:</div>
                            <div>
                                <ul>
                                    <li>PostgreSQL</li>
                                    <li>React Native</li>
                                    <li>Mocha</li>
                                    <li>Chai</li>
                                    <li>Phaser.js</li>
                                    <li>CSS</li>
                                    <li>HTML</li>
                                    <li>Python</li>
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