import React, { Component } from 'react';
import { connect } from 'react-redux'
import {addAboutThunk} from '../store'


export default class About extends Component {
    constructor (){
        super();
        this.state ={
            currentPic: 2,
            profileImg: '/img/profile.jpg',
            profileOne: '/img/profile.jpg',
            profileTwo: '/img/profile2.png',
            profileThree: '/img/profile3.jpg'
        }
    }

    handleClick = () => {
        if(this.state.currentPic < 3){
            this.setState({
               currentPic: this.state.currentPic + 1 
            })
        } else {
            this.setState({
                currentPic:1
            })
        }

        if(this.state.currentPic === 1) {
            this.setState({
                profileImg: this.state.profileOne
            })
        }
        else if(this.state.currentPic === 2) {
            this.setState({
                profileImg: this.state.profileTwo
            })
        }
        else if(this.state.currentPic === 3) {
            this.setState({
                profileImg: this.state.profileThree
            })
        }

    }

    render(){
        console.log('currentPic:', this.state.currentPic)
        return (
            <div className="aboutWrapper">
                <img className="profileImg" onClick={this.handleClick} src={this.state.profileImg}/>
                <div className="aboutParagraph">
                    <p>
                    <div className='aboutTitle'>MY STORY</div>
                    <div>I am a former attorney turned software engineer.
                    One day I realized my favorite part of the day was my commute, and that certainly was not because of my 1 hour and 15 minute train ride. 
                    It was because I had started to teach myself how to code on my commute. 
                    I plunged into the world of software development first by teaching myself. 
                    Then I enrolled at Fullstack Academy of Code to further my training. 
                    I am interested in fullstack or backend work, and I have made several fullstack JavaScript applications. 
                    As of right now, I am currently working on a movie recommendation engine.</div>
                    </p>
                    <p>
                    <div className='aboutTitle'>TECHNICAL SKILLS</div>
                    <div>Proficient: JavaScript, Node.js, Express, React, Sequelize, Redux, Git, Github</div>
                    <div>Knowledgeable: React Native, PostgreSQL, Mocha, Chai, Phaser.js, HTML, CSS, Python</div>
                    </p>
                </div>
            </div>
        )
    }
}