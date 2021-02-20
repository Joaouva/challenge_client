import axios from "axios";

class AuthService {
	constructor() {
		let service = axios.create({
			baseURL: `http://localhost:5000/user`,
			withCredentials: true,
		});
		this.service = service;
	}

	signup = (username, password, email) => {
		return this.service.post("/signup", { username, password, email });
	};

	login = (username, password) => {
		return this.service.post("/login", { username, password });
	};

	logout = () => {
		return this.service.post("/logout");
	};
	//this returns if the user is either with an active session or not
	loggedin = () => {
		return this.service.get(`/loggedin`);
	};

	getUser(id) {
		return this.service.get(`/${id}`);
	}

	updateUser(updateUser) {
		return this.service.put(`/${updateUser.id}`, { ...updateUser });
	}
}

export default AuthService;
