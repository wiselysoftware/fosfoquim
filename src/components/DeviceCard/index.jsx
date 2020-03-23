import React, { Component }  from 'react';
import "./style.scss"

import { Link } from "react-router-dom";

class DeviceCard extends Component {
	constructor(){
		super();

		this.state = {

		}
	}

	render() {

		return(
            <div className="device-card">
				<div className="device-card-content">
					<div className="device-card-header">
						<div className="device-number">#3455</div>
						<div className="device-type">Type 1</div>
					</div>

					<div className="device-card-body">
						<div className="left">
							<p className="label">Device field 1</p>
							<p className="last-seen">Last seen 2 min ago</p>
						</div>
						<div className="right">
							<span>0</span> alerts
						</div>
					</div>
				</div>
				
				<div className="device-details">
					<Link to="/device">View Details</Link>
				</div>
			</div>
		)
	}
}

export default DeviceCard;
