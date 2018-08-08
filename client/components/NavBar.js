import React, { Component } from 'react';
import { Link } from 'react-router-dom'



export default class NavBar extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {

        return (
            <div className='wrapper'>
                <nav>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/about'}>About</Link></li>
                        <li><Link to={'/portfolio'}>Portfolio</Link></li>
                        <li><Link to={'/contact'}>Contact</Link></li>
                    </ul>
                    <ul className='social'>
                        <li className='github'><a>Github</a></li>
                        <li className='linkedin'><a>LinkedIn</a></li>
                        <li className='email'><a>Gmail</a></li>
                    </ul>
                </nav>
            </div>
            // <div className="ui secondary  menu">
            //     <a className="active item">Home</a>
            //     <a className="item">About</a>
            //     <a className="item">Portfolio</a>
            //     <a className="item">Contact</a>
            //     <div className="right menu">
            //         {/* <div className="item"> */}
            //             <div><a className="ui item">Github</a></div>
            //             <div><a className="ui item">Linkedin</a></div>
            //             {/* <div className="ui icon input">
            //                 <input type="text" placeholder="Search..." />
            //                     <i className="search link icon"></i>
            //             </div> */}
            //                 {/* </div> */}
            //                 <a className="ui item">Gmail</a>
            //             </div>
            //     </div>
                )
            }
}