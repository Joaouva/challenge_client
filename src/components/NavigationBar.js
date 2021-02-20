import React from "react";
import AuthService from "../utils/auth"
import "./NavigationBar.css"
import { Link, withRouter } from "react-router-dom";
import { stack as Menu } from "react-burger-menu";
import ScrollTop from "./ScrollTop";


class NavigationBar extends React.Component {
	state = {
		userID: 0,
	}


	showSettings(event) {
		event.preventDefault();
	}

	constructor(props) {
		super(props);
		this.state = {
			menuOpen: false,
		};
	}

	handleStateChange(state) {
		this.setState({ menuOpen: state.isOpen });
	}

	closeMenu() {
		this.setState({ menuOpen: false });
	}

	toggleMenu() {
		this.setState((state) => ({ menuOpen: !state.menuOpen }));
	}

	logoutUser = () => {
		const authService = new AuthService();
		authService.logout().then(() => {
			this.props.setCurrentUser(null);
			localStorage.removeItem("loggedInUser");
			this.props.history.push("/");
		});
	};

	render() {
		if (this.props.loggedInUser) {
			return (
				<div>
					<Menu
						customBurgerIcon={
							<img src="../../images/profile.png" alt="profile" />
						}
						isOpen={this.state.menuOpen}
						onStateChange={(state) => this.handleStateChange(state)}
					>
						<div className="profile-nav-img">
							<img
								src="../../images/profile-nav.png"
								alt="profile"
							/>
							<h2>{this.props.loggedInUser.username}</h2>
						</div>
						<Link
							to={`/profile/${this.props.loggedInUser._id}`}
							offset={-70}
							duration={500}
							onClick={() => this.closeMenu()}
							className="menu-item"
						>
							My Account
						</Link>

						<Link
							to={"/menus"}
							offset={-70}
							duration={500}
							onClick={() => this.closeMenu()}
							className="menu-item"
						>
							Menus
						</Link>
						<span>
							<Link
								to="/"
								variant="outline-secondary"
								onClick={this.logoutUser}
							>
								Log Out
							</Link>
						</span>
						<div className="nav-bar-img">
							<img
								src="../../images/eat-tasty.png"
								alt="eat tasty logo"
							/>
						</div>
					</Menu>
					<div className="to-home-div">
						<Link
							to={"/"}
							offset={-70}
							duration={500}
							onClick={() => this.closeMenu()}
							className="menu-item"
						>
							<img
								src="../../images/home.svg"
								alt="Go to top"
							/>
						</Link>
					</div>
					<ScrollTop />
				</div>
			);
		} else {
			return (
				<div>
					<Menu
						customBurgerIcon={
							<img src="../../images/profile.png" alt="profile" />
						}
						isOpen={this.state.menuOpen}
						onStateChange={(state) => this.handleStateChange(state)}
					>
						<Link
							to={"/login"}
							offset={-70}
							duration={500}
							onClick={() => this.closeMenu()}
							className="menu-item"
						>
							Login
						</Link>

						<Link
							to={"/signup"}
							offset={-70}
							duration={500}
							onClick={() => this.closeMenu()}
							className="menu-item"
						>
							Signup
						</Link>
					</Menu>
					<ScrollTop />
					<div className="to-home-div">
						<Link
							to={"/"}
							offset={-70}
							duration={500}
							onClick={() => this.closeMenu()}
							className="menu-item"
						>
							<img src="../../images/home.svg" alt="Go to top" />
						</Link>
					</div>
				</div>
			);
		}
	}
}

export default withRouter (NavigationBar);