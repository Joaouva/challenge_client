import React from "react";
import "./Footer.css";


class Footer extends React.Component {
	render() {
		return (
			<div className="footer-component">
				<div className="footer" id="footer">
					<div className="icons">
						<img
							className="icon"
							src="../../images/facebook.svg"
							alt="facebook"
						/>

						<img
							className="icon"
							src="../../images/twitter.svg"
							alt="twiiter"
						/>

						<img
							className="icon"
							src="../../images/instagram.svg"
							alt="instagram"
						/>
					</div>
					<h4>
						Made with{" "}
						<span role="img" aria-label="heart">
							❤️
						</span>
					</h4>
					<h3>Copyright © 2021 João Uva</h3>
				</div>
			</div>
		);
	}
}

export default Footer;
