import React, { Component }  from 'react';
import "./style.scss"

import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.svg";
import logOut from "../../assets/images/logout.svg";

class Header extends Component {
	constructor(){
		super();

		this.state = {
			
		}
	}

	render() {

		return(
            <header className="main-header">
				<Link to="/devices">
					<div className="logo">
						<img src={logo} alt=""/>
					</div>
				</Link>

				{!this.props.guest ? <div className="header-controls">
					<div className="user">
						<p className="user-name">John Doe</p>
						<p className="user-role">admin</p>
					</div>

					<div className="logout">
						<img src={logOut} alt=""/>
					</div>
				</div>
				:
				<div className="guest-label">
					Guest Access
				</div>}
            </header>
		)
	}
}

export default Header;
