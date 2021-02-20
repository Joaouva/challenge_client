import axios from "axios";

class MenusFromDb {
	constructor() {
		let service = axios.create({
			baseURL: `http://localhost:5000/menus`,
			withCredentials: true,
		});
		this.service = service;
	}

	getAll() {
		return this.service.get("/allmenus");
	}

	getMenu(id) {
		return this.service.get(`/menu/${id}`);
	}

	addMenu(newMenu) {
		return this.service.post("/menu/associate", { ...newMenu });
	}
}

export default MenusFromDb;