import React from "react";
import AuthService from "../utils/auth"
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import "./Profile.css";


    class Profile extends React.Component {
		state = {
			id: "",
			username: "",
			name: "",
			address: "",
			email: "",
		};

		componentDidMount() {
			const authService = new AuthService();
			const id = this.props.match.params.id;
			authService.getUser(id).then((response) => {
				this.setState({
					id: response.data._id,
					username: response.data.username,
					email: response.data.email,
					name: response.data.name,
					address: response.data.address
				});
			});
		}

		handleChange = (event) => {
			let { name, value } = event.target;
			this.setState({
				[name]: value,
			});
		};

		handleFormSubmit = (event) => {
			event.preventDefault();
			const authService = new AuthService();

			authService.updateUser(this.state).then((response) => {
				toast(`Profile Updated!`, {
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
				<div className="profile-main-div">
					<div className="profile-box">
						<h1>Welcome {this.state.username}</h1>
						<form onSubmit={this.handleFormSubmit}>
							<Form.Label>
								<b> Username </b>
							</Form.Label>
							<input
								placeholder={this.state.username}
								type="text"
								name="username"
								value={this.state.username}
								onChange={this.handleChange}
								required
							/>
							<Form.Label>
								<b> Name </b>
							</Form.Label>
							<input
								placeholder={this.state.name}
								type="text"
								name="name"
								value={this.state.password}
								onChange={this.handleChange}
								required
							/>
							<Form.Label>
								<b> Email</b>
							</Form.Label>
							<input
								type="email"
								name="email"
								value={this.state.email}
								onChange={this.handleChange}
								required
							/>
							<Form.Label>
								<b> Address</b>
							</Form.Label>
							<input
								type="text"
								name="address"
								value={this.state.address}
								onChange={this.handleChange}
								required
							/>
							<Button
								type="submit"
								variant="warning"
								onClick={this.handleFormSubmit}
							>
								Save
							</Button>
						</form>
					</div>
				</div>
			);
		}
	}

export default Profile;
