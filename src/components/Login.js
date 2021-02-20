import React from "react";
import AuthService from "../utils/auth";
import { Link, withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import "./Login.css";


class Login extends React.Component {
	state = {
		username: "",
		password: "",
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	handleFormSubmit = (event) => {
		event.preventDefault();
		const { username, password } = this.state;
		const authService = new AuthService();
		authService
			.login(username, password)
			.then((response) => {
				this.props.setCurrentUser(response.data);
				localStorage.setItem("loggedInUser", response.data._id);
				this.props.history.push("/");
				toast(`Welcome! ${this.state.username}`, {
					position: "bottom-center",
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			})
			.catch(() => {
				toast.warn("Invalid login!", {
					position: "bottom-center",
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			});
	};

	render() {
		return (
			<div className="login-main-div">
				<form className="Login-form" onSubmit={this.handleFormSubmit}>
					<h1 className="Login-text" align="center">
						Login
					</h1>
					<hr></hr>
					<input
						placeholder="username"
						className="username-input"
						type="text"
						name="username"
						value={this.state.username}
						onChange={this.handleChange}
					/>
					<input
						placeholder="password"
						className="pass-input"
						type="password"
						name="password"
						value={this.state.password}
						onChange={this.handleChange}
					/>
					<button type="submit" className="btn btn-warning">
						Login
					</button>
					<p className="forgot">
						Don't have account?
						<Link to={"/signup"}> Signup</Link>
					</p>
				</form>
			</div>
		);
	}
}

export default withRouter(Login);
