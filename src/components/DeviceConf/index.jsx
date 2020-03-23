import React, { Component }  from 'react';
import "./style.scss"

import back from "../../assets/images/down-arrow.svg";

class DeviceConf extends Component {
	constructor(){
		super();

		this.state = {
			aliasInput: 'Field Device 3',
			companyLocation: 'Main plant',
			channelAlias: 'Mixture 1',
			companyUnits: 'ppm'
		}
	}

	changeAlias(e){
		this.setState({aliasInput: e.target.value});
	}
	
	changeLocations(e){
		this.setState({companyLocation: e.target.value});
	}
	
	changeChannelAlias(e){
		this.setState({channelAlias: e.target.value});
	}

	changeUnits(e){
		this.setState({companyUnits: e.target.value});
	}

	close(){
		this.props.close();
	}

	render() {
		let { aliasInput, companyLocation, channelAlias, companyUnits } = this.state;

 		return(
			<div className="dialog-container">
				<div className="section-header">
					<div className="title">
						<span className="back" onClick={() => {this.close()}}>
							<img src={back} alt=""/>
						</span>
						<h3>Device config</h3>
					</div>
				</div>

				<div className="device-config-container">
					<div className="device-config">
						<div className="device-details">
							<div className="row">
								<div className="type-select">
									<span className="date-header-label">Device ID:</span>
									<span>3</span>
								</div>

								<div className="type-select">
									<span className="date-header-label">Alias:</span>
									<input type="text" className="textfield" value={aliasInput} onChange={(e)=>{this.changeAlias(e)}}/>
								</div>
							</div>

							<div className="row">
								<div className="type-select">
									<span className="date-header-label">Device Type:</span>
									<span>Type 3</span>
								</div>

								<div className="type-select">
									<span className="date-header-label">Location:</span>
									<input type="text" className="textfield" value={companyLocation} onChange={(e)=>{this.changeLocations(e)}}/>
								</div>
							</div>
						</div>

						<div className="device-channels">
							<div className="label">Channels</div>
							<div className="row">
								<div className="name">Channel 1</div>
								<div className="type-select">
									<span className="date-header-label">Alias:</span>
									<input type="text" className="textfield" value={channelAlias} onChange={(e)=>{this.changeChannelAlias(e)}}/>
								</div>
								<div className="type-select">
									<span className="date-header-label">Units:</span>
									<input type="text" className="textfield" value={companyUnits} onChange={(e)=>{this.changeUnits(e)}}/>
								</div>
							</div>
						</div>
					</div>

					<div className="buttons">
						<button className="main-btn">Save</button>
					</div>
				</div>
			</div>
		)
	}
}

export default DeviceConf;
