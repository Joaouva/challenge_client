import './App.css';
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Route, Switch } from 'react-router-dom';
import AuthService from './utils/auth';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Homepage from './components/HomePage';
import Login from './components/Login';
import Menus from './components/Menus';
import NavigationBar from './components/NavigationBar';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './components/Footer';

class App extends React.Component {
	state = {
		loggedInUser: null,
	};

	setCurrentUser = (user) => {
		this.setState({
			loggedInUser: user,
		});
	};

	componentDidMount() {
		if (this.state.loggedInUser === null) {
			const authService = new AuthService();
			authService.loggedin().then((response) => {
				if (response.data._id) {
					this.setCurrentUser(response.data);
					localStorage.setItem("loggedInUser", response.data._id);
				} else {
					localStorage.removeItem("loggedInUser");
				}
			});
		}
	}

	render() {
		return (
			<div className="App">
				<ToastContainer />
				<NavigationBar
					loggedInUser={this.state.loggedInUser}
					setCurrentUser={this.setCurrentUser}
				/>
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route
						path="/login"
						render={() => {
							return (
								<Login setCurrentUser={this.setCurrentUser} />
							);
						}}
					/>
					<Route exact path="/signup" component={Signup} />
					<Route exact path="/profile/:id" component={Profile} />
					<Route exact path="/menus" component={Menus} />
				</Switch>
				<Footer/>
			</div>
		);
	}
}

export default App;
