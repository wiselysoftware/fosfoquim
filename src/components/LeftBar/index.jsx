import React, { Component }  from 'react';
import "./style.scss"

import { Link } from "react-router-dom";

import Drawer from '@material-ui/core/Drawer';

import { connect } from "react-redux";

import { toggleNav } from '../../actions';

import DeviceIcon from "../../assets/images/chip.svg";
import SettingIcon from "../../assets/images/gear.svg";
import ClientsIcon from "../../assets/images/team.svg";
import DeviceActiveIcon from "../../assets/images/device-active.svg";
import ClientsActiveIcon from "../../assets/images/clients-active.svg";
import SettingActiveIcon from "../../assets/images/accounts-active.svg";

import back from "../../assets/images/down-arrow.svg";
import logo from "../../assets/images/logo.svg";

const mapStateToProps = state => {
    return { navOpened: state.navOpened };
};

function mapDispatchToProps(dispatch) {
    return {
        toggleNav: () => dispatch(toggleNav())
    };
}

class LeftBar extends Component {
	constructor(){
		super();

		this.state = {
			active: 0
		}
	}

	componentDidMount(){
		let location = window.location.pathname,
			active = 0;

		switch(location){
			case "/devices":
				active = 0;
			break;

			case "/clients":
				active = 1;
			break;

			case "/accounts":
				active = 2;
			break;

			default:
				active = 0;
		}

		this.setState({ active });
	}

	setActive(index){
		this.setState({active: index});
		this.props.toggleNav();
	}

	render() {
		let { active } = this.state;

		return(
            <Drawer className="main-menu" open={this.props.navOpened} onClose={() => {this.props.toggleNav()}}>
				<ul>
					<div className="header-line">
						<div className="logo">
							<img src={logo} alt=""/>
						</div>
						<div className="close" onClick={() => {this.props.toggleNav()}}>
							<img src={back} alt=""/>
						</div>
					</div>
					<li className={active === 0 ? "active" : ""}>
						<Link to="/devices" onClick={()=>{this.setActive(0)}}>
							{active === 0 ? <img src={DeviceActiveIcon} alt=""/> : <img src={DeviceIcon} alt=""/>}
							<span>Devices</span>
						</Link>
					</li>
					<li className={active === 1 ? "active" : ""}>
						<Link to="/clients" onClick={()=>{this.setActive(1)}}>
							{active === 1 ? <img src={ClientsActiveIcon} alt=""/> : <img src={ClientsIcon} alt=""/>}
							<span>Clients</span>
						</Link>
					</li>
					<li className={active === 2 ? "active" : ""}>
						<Link to="/accounts" onClick={()=>{this.setActive(2)}}>
							{active === 2 ? <img src={SettingActiveIcon} alt=""/> : <img src={SettingIcon} alt=""/>}
							<span>Accounts</span>
						</Link>
					</li>
				</ul>

				<Link className="guest-link" to="/temporary-access">Guest Access</Link>
			</Drawer>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftBar);
