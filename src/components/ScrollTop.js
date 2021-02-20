import React from "react";
import { animateScroll as scroll } from "react-scroll";
import "./ScrollTop.css";

class ScrollTop extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			is_visible: false,
		};
	}

	scrollToTop = () => {
		scroll.scrollToTop();
	};

	componentDidMount() {
		var scrollComponent = this;
		document.addEventListener("scroll", function (e) {
			scrollComponent.toggleVisibility();
		});
	}

	toggleVisibility() {
		if (window.pageYOffset > 300) {
			this.setState({
				is_visible: true,
			});
		} else {
			this.setState({
				is_visible: false,
			});
		}
    }
    
    render() {
    const { is_visible } = this.state;
    return (
      <div className="to-top-div">
        {is_visible && (
          <div onClick={() => this.scrollToTop()}>
            <img src='../../images/up-arrow.png' alt='Go to top'/>
          </div>
        )}
      </div>
    );
  }
}


export default ScrollTop;

