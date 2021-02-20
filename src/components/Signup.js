import React from "react";
import AuthService from "../utils/auth";
import { Link, withRouter } from "react-router-dom";
import "./Signup.css";
import { toast } from "react-toastify";

class Signup extends React.Component {
	state = {
		username: "",
		password: "",
		email: "",
	};

	handleChange = (event) => {
		let { name, value } = event.target;
		this.setState({ [name]: value });
	};

	handleFormSubmit = (event) => {
		event.preventDefault();
		const authService = new AuthService();
	authService
		.signup(
			this.state.username,
			this.state.password,
			this.state.email
		)
		.then(() => {
			this.props.history.push("/");
			toast(`Welcome!`, {
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
			toast.warn("Ups! Try again", {
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
			<div className="signup-main-div">
				<div id="login-box">
						<h1>Sign up</h1>
						<form onSubmit={this.handleFormSubmit}>
							<input
								placeholder="username"
								type="text"
								name="username"
								value={this.state.username}
								onChange={this.handleChange}
								required
							/>
							<input
								placeholder="password"
								type="password"
								name="password"
								value={this.state.password}
								onChange={this.handleChange}
								required
							/>
							<input
								placeholder="emai@laddress"
								type="text"
								name="email"
								value={this.state.email}
								onChange={this.handleChange}
								required
							/>
							<input
								id="btn-signup"
								type="submit"
								value="Signup"
							/>
					</form>
					<hr></hr>
						<button type="button" className="btn btn-danger" id="google-button">
							Log in with Google
						</button>
						<p>
							Already have account?
							<Link to={"/login"}> Login</Link>
						</p>
				</div>
			</div>
		);
	}
}

export default withRouter(Signup);
