import React, { Component } from 'react';
import logo from '../../logo.svg';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Startbar extends Component {

	Home = <p>home dawg</p>;

	Market = <p>market gangstar</p>

	render() {
		return (
			<div className="Startbar">
                <Link className="link-clear" to="/start">
                    <div className="home-button start" onClick={() => console.log("Menu One")}>
                        <img height="25px" width="25px" src="https://orig00.deviantart.net/a6f8/f/2012/246/0/d/0ddaff69b6a31f3f3299ca6fd0e27c44-d5dgti7.png" alt="logo" />
                        Home
                    </div>
                </Link>
                <Link className="link-clear" to="/files">
                    <div className="home-button startItem" onClick={() => console.log("Menu One")}>Files</div>
                </Link>
                <Link className="link-clear" to="/internetexplorer">
                    <div className="home-button startItem" onClick={() => console.log("Menu One")}>Internet Explorer</div>
                </Link>
                <Link className="link-clear" to="/mycomputer">
                    <div className="home-button startItem" onClick={() => console.log("Menu One")}>My Computer</div>
                </Link>
                <img className="logo-main" src={logo} alt="logo" />
            </div>
		);
	}
}

export default Startbar;