import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Startbar from "./Components/Startbar/Startbar";

import StartMenu from './Components/StartMenu/StartMenu';


class App extends Component {

	page = (newTitle, newText) => {
		var pageObject = {
			title: newTitle,
			text: newText
		}
		return pageObject;
	}

	Home = this.page("Home", "This is your home!");
	Market = this.page("Market", "Welcome to the store!");
	Forum = this.page("Forum", "Chat with friends");
	Info = this.page("Info", "What do you need to know.");


	render() {
		return (
			<Router>
				<div className="App">

					<Startbar />

					<Route exact path="/" />
					<Route exact path="/start" render={() => <StartMenu />}/>
					<Route exact path="/market" />
					<Route exact path="/forum" />
					<Route exact path="/info" />

				</div>
			</Router>
		);
	}
}

export default App;
