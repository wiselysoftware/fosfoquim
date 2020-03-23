import React, { Component }  from 'react';
import "./style.scss"

import { Route, Switch } from "react-router-dom"

import Devices from "../Devices/index.jsx";
import SingleDevice from "../SingleDevice/index.jsx";
import Clients from "../Clients/index.jsx";
import Accounts from "../Accounts/index.jsx";

import Header from "../../components/Header/index.jsx";
import LeftBar from "../../components/LeftBar/index.jsx";

class Layout extends Component {
	constructor(){
		super();

		this.state = {
			
		}
	}

	render() {

		return(
            <div className="wrapp">
				<Header/>
			
				<div className="view-wrapp">
					<LeftBar/>
					
					<div className="view">
						<Switch>
							<Route path="/devices" component={Devices}/>
							<Route path="/device" component={SingleDevice}/>
							<Route path="/clients" component={Clients}/>
							<Route path="/accounts" component={Accounts}/>
							<Route component={Devices}/>
						</Switch>
					</div>
				</div>
			</div>
		)
	}
}

export default Layout;
