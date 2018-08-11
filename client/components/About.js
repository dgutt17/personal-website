import React, { Component } from 'react';
import { connect } from 'react-redux'
import {addAboutThunk} from '../store'


export default class About extends Component {
    constructor (){
        super();
        this.state ={}
    }

    // componentDidMount(){
    //     this.props.displayAbout()
    // }

    render(){
        return (
            <div className="aboutWrapper">
                <img className="profileImg" src='/img/profile.jpg'/>
                <div className="aboutParagraph">
                    <p>
                    I am a former attorney turned software engineer.
                    One day I realized my favorite part of the day was my commute, and that certainly was not because of my 1 hour and 15 minute train ride. 
                    It was because I had started to teach myself how to code on my commute. 
                    I plunged into the world of software development first by teaching myself. 
                    Then I enrolled at Fullstack Academy of Code to further my training. 
                    I am interested in fullstack or backend work, and I have made several fullstack JavaScript applications. 
                    As of right now, I am currently working on a movie recommendation engine.
                    </p>
                </div>
            </div>
        )
    }
}


// const mapStateToProps = state => {
//     return {
//         newAbout: state.newAbout
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         displayAbout: () => {
//             dispatch(addAboutThunk())
//         }
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(About)