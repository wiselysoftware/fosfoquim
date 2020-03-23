import React, { Component }  from 'react';
import "./style.scss"

import DeviceData from "../../components/DeviceData/index.jsx";
import DeviceAlerts from "../../components/DeviceAlerts/index.jsx";

import AlertsConf from "../../components/AlertsConf/index.jsx";
import DeviceConf from "../../components/DeviceConf/index.jsx";
import ReportConf from "../../components/ReportConf/index.jsx";

import back from "../../assets/images/down-arrow.svg";

class SingleDevice extends Component {
	constructor(){
		super();

		this.state = {
			tabValue: 0,
			openConfig: 0
		}
	}

	changeTab(index){
		this.setState({tabValue: index});
	}

	setOpeningPopup(index){
		this.setState({openConfig: index});
	}

	close(){
		this.setState({openConfig: 0});
	}

	render() {
		let {tabValue, openConfig} = this.state;
		
		return(
            <main className="main-section">
				<div className="section-header">
					<div className="title">
						<span className="back" onClick={() => {this.props.history.goBack()}}>
							<img src={back} alt=""/>
						</span>
						<h3>Field device (#1456) - Type 1</h3>
					</div>

					<p className="last-seen"> Last seen 2 min ago </p>
				</div>

				<div className="tabs-header">
					<div className="tabs">
						<div className={tabValue === 0 ? "tab active" : "tab"} onClick={()=>{this.changeTab(0)}}>Data</div>
						<div className={tabValue === 1 ? "tab active" : "tab"} onClick={()=>{this.changeTab(1)}}>Alerts and Config</div>
					</div>

					<div className="buttons">
						<button className="main-btn">Download Data</button>
						<button className="main-btn" onClick={()=>{this.setOpeningPopup(3)}}>Create Report</button>
					</div>
				</div>

				<div className="tab-content">
					{tabValue === 0 ?
					<div className="tab-item">
						<DeviceData/>
					</div>
					:
					<div className="tab-item">
						<DeviceAlerts openConfig={(index)=>{this.setOpeningPopup(index)}} close={()=>{this.close()}}/>
					</div>}
				</div>
				
				{openConfig === 1 ? 
					<div className="dialog-wrapp">
						<AlertsConf close={()=>{this.close()}}/>
					</div>
				: ''}

				{openConfig === 2 ? 
					<div className="dialog-wrapp">
						<DeviceConf close={()=>{this.close()}}/>
					</div>
				: ''}

				{openConfig === 3 ? 
					<div className="dialog-wrapp">
						<ReportConf close={()=>{this.close()}}/>
					</div>
				: ""}
            </main>
		)
	}
}

export default SingleDevice;
