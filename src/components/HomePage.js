import React from "react";
import "./Homepage.css";
import TextTransition, { presets } from "react-text-transition";


const TEXTS = ["Food", "Price", "Meal", "Lunch"];


const Homepage = () => {

	const [index, setIndex] = React.useState(0);

	React.useEffect(() => {
		const intervalId = setInterval(
		() => setIndex((index) => index + 1),
		2000 
		);
	
		return () => clearTimeout(intervalId);
	}, []);

	
		return (
			<div className="homepage-div">
				<div className="homepage-first-section">
					<div className="homepage-title">
						<div>
							<h1>Delicious.</h1>
						</div>
						<div>
							<h2>
								<TextTransition
									text={TEXTS[index % TEXTS.length]}
									springConfig={presets.wobbly}
								/>
							</h2>
						</div>
						<div className="homepage-order">
							<a href="/menus">
								<h1>Order Now!</h1>
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}

export default Homepage;