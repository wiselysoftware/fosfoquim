import React, { Component }  from 'react';
import "./style.scss"

import moreIcon from "../../assets/images/down-arrow.svg";

class DeviceAlerts extends Component {
	constructor(){
		super();

		this.state = {
			alerts: [
				{id: 0},
				{id: 1},
				{id: 2},
				{id: 3},
				{id: 4},
				{id: 5},
				{id: 6},
				{id: 7},
				{id: 8},
				{id: 9}
			]
		}
	}

	render() {
		let alerts = this.state.alerts;

		return(
            <main className="main-section alert-section">
				<div className="alerts">
					{alerts.map((item)=>{
						return(<div className="alert-item" key={item.id}>
							<div className="label">Value over 20ppm - Channel A</div>

							<div className="actions">
								<span className="last-seen">20 min ago</span>

								<div className="expand-btn">
									<img src={moreIcon} alt=""/>
								</div>
							</div>
						</div>)
					})}
				</div>

				<div className="buttons">
					<button className="main-btn" onClick={()=>{this.props.openConfig(1)}}>Alerts Config</button>
					<button className="main-btn" onClick={()=>{this.props.openConfig(2)}}>Device Config</button>
				</div>
            </main>
		)
	}
}

export default DeviceAlerts;
