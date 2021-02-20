import React from "react";
import MenusFromDb from "../utils/getMenus"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import './Menus.css';


class Menus extends React.Component {
	state = {
		menus: [],
		mondaySoup: [],
		mondayMain: [],
		mondayDessert: [],
		tuesdaySoup: [],
		tuesdayMain: [],
		tuesdayDessert: [],
		wednesdaySoup: [],
		wednesdayMain: [],
		wednesdayDessert: [],
		thursdaySoup: [],
		thursdayMain: [],
		thursdayDessert: [],
		fridaySoup: [],
		fridayMain: [],
		fridayDessert: [],
	};

	componentDidMount() {
		const menusFromDb = new MenusFromDb();
		menusFromDb.getAll().then((response) => {
			console.log(response);
			this.setState({
				menus: response.data,
				mondaySoup: response.data.filter(
					(menu) =>
						menu.day.includes("monday") &&
						menu.type.includes("soup")
				),
				mondayMain: response.data.filter(
					(menu) =>
						menu.day.includes("monday") &&
						menu.type.includes("main")
				),
				mondayDessert: response.data.filter(
					(menu) =>
						menu.day.includes("monday") &&
						menu.type.includes("dessert")
				),
				tuesdaySoup: response.data.filter(
					(menu) =>
						menu.day.includes("tuesday") &&
						menu.type.includes("soup")
				),
				tuesdayMain: response.data.filter(
					(menu) =>
						menu.day.includes("tuesday") &&
						menu.type.includes("main")
				),
				tuesdayDessert: response.data.filter(
					(menu) =>
						menu.day.includes("tuesday") &&
						menu.type.includes("dessert")
				),
				wednesdaySoup: response.data.filter(
					(menu) =>
						menu.day.includes("wednesday") &&
						menu.type.includes("soup")
				),
				wednesdayMain: response.data.filter(
					(menu) =>
						menu.day.includes("wednesday") &&
						menu.type.includes("main")
				),
				wednesdayDessert: response.data.filter(
					(menu) =>
						menu.day.includes("wednesday") &&
						menu.type.includes("dessert")
				),
				thursdaySoup: response.data.filter(
					(menu) =>
						menu.day.includes("thursday") &&
						menu.type.includes("soup")
				),
				thursdayMain: response.data.filter(
					(menu) =>
						menu.day.includes("thursday") &&
						menu.type.includes("main")
				),
				thursdayDessert: response.data.filter(
					(menu) =>
						menu.day.includes("thursday") &&
						menu.type.includes("dessert")
				),
				fridaySoup: response.data.filter(
					(menu) =>
						menu.day.includes("friday") &&
						menu.type.includes("soup")
				),
				fridayMain: response.data.filter(
					(menu) =>
						menu.day.includes("friday") &&
						menu.type.includes("main")
				),
				fridayDessert: response.data.filter(
					(menu) =>
						menu.day.includes("friday") &&
						menu.type.includes("dessert")
				),
			});
		});
	}


	render() {
		return (
			<div className="menus-main-div">
				<div className="menus-div">
					<Tabs>
						<TabList className="label">
							<Tab>Monday</Tab>
							<Tab>Tuesday</Tab>
							<Tab>Wednesday</Tab>
							<Tab>Thursday</Tab>
							<Tab>Friday</Tab>
						</TabList>
						<TabPanel className="tab-panel">
							{this.state.mondaySoup.map((soup, index) => {
								return (
									<div key={index} className="card">
										<div className="menu-image">
											<img src={soup.image} alt="soup" />
										</div>
										<div className="bottom">
											<h1>{soup.name}</h1>
											<h5>{soup.description}</h5>
											<p>{soup.price}</p>
											<div className="separator"></div>
											<button
												type="button"
												className="btn btn-warning"
											>
												Add
											</button>
										</div>
									</div>
								);
							})}
							{this.state.mondayMain.map((item, index) => {
								return (
									<div key={index} className="card">
										<div className="menu-image">
											<img
												src={item.image}
												alt="main dish"
											/>
										</div>
										<div className="bottom">
											<h1>{item.name}</h1>
											<h5>{item.description}</h5>
											<p>{item.price}</p>
											<div className="separator"></div>
											<button
												type="button"
												className="btn btn-warning"
											>
												Add
											</button>
										</div>
									</div>
								);
							})}
							{this.state.mondayDessert.map((item, index) => {
								return (
									<div key={index} className="card">
										<div className="menu-image">
											<img
												src={item.image}
												alt="dessert"
											/>
										</div>
										<div className="bottom">
											<h1>{item.name}</h1>
											<h5>{item.description}</h5>
											<p>{item.price}</p>
											<div className="separator"></div>
											<button
												type="button"
												className="btn btn-warning"
											>
												Add
											</button>
										</div>
									</div>
								);
							})}
						</TabPanel>
						<TabPanel>
							{this.state.tuesdaySoup.map((item, index) => {
								return (
									<div key={index} className="card">
										<div className="menu-image">
											<img src={item.image} alt="soup" />
										</div>
										<div className="bottom">
											<h1>{item.name}</h1>
											<h5>{item.description}</h5>
											<p>{item.price}</p>
											<div className="separator"></div>
											<button
												type="button"
												className="btn btn-warning"
											>
												Add
											</button>
										</div>
									</div>
								);
							})}
							{this.state.tuesdayMain.map((item, index) => {
								return (
									<div key={index} className="card">
										<div className="menu-image">
											<img
												src={item.image}
												alt="main dish"
											/>
										</div>
										<div className="bottom">
											<h1>{item.name}</h1>
											<h5>{item.description}</h5>
											<p>{item.price}</p>
											<div className="separator"></div>
											<button
												type="button"
												className="btn btn-warning"
											>
												Add
											</button>
										</div>
									</div>
								);
							})}
							{this.state.tuesdayDessert.map((item, index) => {
								return (
									<div key={index} className="card">
										<div className="menu-image">
											<img
												src={item.image}
												alt="dessert"
											/>
										</div>
										<div className="bottom">
											<h1>{item.name}</h1>
											<h5>{item.description}</h5>
											<p>{item.price}</p>
											<div className="separator"></div>
											<button
												type="button"
												className="btn btn-warning"
											>
												Add
											</button>
										</div>
									</div>
								);
							})}
						</TabPanel>
						<TabPanel>
							{this.state.wednesdaySoup.map((item, index) => {
								return (
									<div key={index} className="card">
										<div className="menu-image">
											<img src={item.image} alt="soup" />
										</div>
										<div className="bottom">
											<h1>{item.name}</h1>
											<h5>{item.description}</h5>
											<p>{item.price}</p>
											<div className="separator"></div>
											<button
												type="button"
												className="btn btn-warning"
											>
												Add
											</button>
										</div>
									</div>
								);
							})}
							{this.state.wednesdayMain.map((item, index) => {
								return (
									<div key={index} className="card">
										<div className="menu-image">
											<img
												src={item.image}
												alt="mains dish"
											/>
										</div>
										<div className="bottom">
											<h1>{item.name}</h1>
											<h5>{item.description}</h5>
											<p>{item.price}</p>
											<div className="separator"></div>
											<button
												type="button"
												className="btn btn-warning"
											>
												Add
											</button>
										</div>
									</div>
								);
							})}
							{this.state.wednesdayDessert.map((item, index) => {
								return (
									<div key={index} className="card">
										<div className="menu-image">
											<img
												src={item.image}
												alt="dessert"
											/>
										</div>
										<div className="bottom">
											<h1>{item.name}</h1>
											<h5>{item.description}</h5>
											<p>{item.price}</p>
											<div className="separator"></div>
											<button
												type="button"
												className="btn btn-warning"
											>
												Add
											</button>
										</div>
									</div>
								);
							})}
						</TabPanel>
						<TabPanel>
							{this.state.thursdaySoup.map((item, index) => {
								return (
									<div key={index} className="card">
										<div className="menu-image">
											<img src={item.image} alt="soup" />
										</div>
										<div className="bottom">
											<h1>{item.name}</h1>
											<h5>{item.description}</h5>
											<p>{item.price}</p>
											<div className="separator"></div>
											<button
												type="button"
												className="btn btn-warning"
											>
												Add
											</button>
										</div>
									</div>
								);
							})}
							{this.state.thursdayMain.map((item, index) => {
								return (
									<div key={index} className="card">
										<div className="menu-image">
											<img
												src={item.image}
												alt="main dish"
											/>
										</div>
										<div className="bottom">
											<h1>{item.name}</h1>
											<h5>{item.description}</h5>
											<p>{item.price}</p>
											<div className="separator"></div>
											<button
												type="button"
												className="btn btn-warning"
											>
												Add
											</button>
										</div>
									</div>
								);
							})}
							{this.state.thursdayDessert.map((item, index) => {
								return (
									<div key={index} className="card">
										<div className="menu-image">
											<img
												src={item.image}
												alt="dessert"
											/>
										</div>
										<div className="bottom">
											<h1>{item.name}</h1>
											<h5>{item.description}</h5>
											<p>{item.price}</p>
											<div className="separator"></div>
											<button
												type="button"
												className="btn btn-warning"
											>
												Add
											</button>
										</div>
									</div>
								);
							})}
						</TabPanel>
						<TabPanel>
							{this.state.fridaySoup.map((item, index) => {
								return (
									<div key={index} className="card">
										<div className="menu-image">
											<img src={item.image} alt="soup" />
										</div>
										<div className="bottom">
											<h1>{item.name}</h1>
											<h5>{item.description}</h5>
											<p>{item.price}</p>
											<div className="separator"></div>
											<button
												type="button"
												className="btn btn-warning"
											>
												Add
											</button>
										</div>
									</div>
								);
							})}
							{this.state.fridayMain.map((item, index) => {
								return (
									<div key={index} className="card">
										<div className="menu-image">
											<img
												src={item.image}
												alt="main dish"
											/>
										</div>
										<div className="bottom">
											<h1>{item.name}</h1>
											<h5>{item.description}</h5>
											<p>{item.price}</p>
											<div className="separator"></div>
											<button
												type="button"
												className="btn btn-warning"
											>
												Add
											</button>
										</div>
									</div>
								);
							})}
							{this.state.fridayDessert.map((item, index) => {
								return (
									<div key={index} className="card">
										<div className="menu-image">
											<img
												src={item.image}
												alt="dessert"
											/>
										</div>
										<div className="bottom">
											<h1>{item.name}</h1>
											<h5>{item.description}</h5>
											<p>{item.price}</p>
											<div className="separator"></div>
											<button
												type="button"
												className="btn btn-warning"
											>
												Add
											</button>
										</div>
									</div>
								);
							})}
						</TabPanel>
					</Tabs>
				</div>
			</div>
		);
	}
}

export default Menus;
