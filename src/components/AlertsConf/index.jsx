import React, { Component }  from 'react';
import "./style.scss"

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import back from "../../assets/images/down-arrow.svg";

class AlertsConf extends Component {
	constructor(){
		super();

		this.state = {
			data: [
				{id: 1, name: 'Max Thresh', channel: '2', value: '20 ppm', recipients: 'john.doe@gmail.com', valid: 'Permanent'},
				{id: 2, name: 'Max Thresh', channel: '2', value: '20 ppm', recipients: 'john.doe@gmail.com', valid: 'Permanent'},
				{id: 3, name: 'Max Thresh', channel: '2', value: '20 ppm', recipients: 'john.doe@gmail.com', valid: 'Permanent'},
				{id: 4, name: 'Max Thresh', channel: '2', value: '20 ppm', recipients: 'john.doe@gmail.com', valid: 'Permanent'}
			],
			active: 0
		}
	}

	close(){
		this.props.close();
	}

	setActive(id){
		this.setState({active: id});
	}

	render() {
		let { data, active } = this.state;

		return(
            <div className="dialog-container">
				<div className="section-header">
					<div className="title">
						<span className="back" onClick={() => {this.close()}}>
							<img src={back} alt=""/>
						</span>
						<h3>Alerts set</h3>
					</div>
				</div>

				<div className="alerts-set-table">
					<TableContainer component={Paper} className="clients-list table-container">
						<Table stickyHeader aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell>Alert Name</TableCell>
									<TableCell>Channel</TableCell>
									<TableCell>Value</TableCell>
									<TableCell>Recipients</TableCell>
									<TableCell>Valid Until</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
							{data.map(item => (
								<TableRow key={item.id} onClick={()=>{this.setActive(item.id)}} className={item.id === active ? "active" : ""}>
									<TableCell>{item.name}</TableCell>
									<TableCell>{item.channel}</TableCell>
									<TableCell>{item.value}</TableCell>
									<TableCell>{item.recipients}</TableCell>
									<TableCell>{item.valid}</TableCell>
								</TableRow>
							))}
							</TableBody>
						</Table>
					</TableContainer>

					<div className="buttons">
						<button className="main-btn">New</button>
						<button className="main-btn">Edit</button>
						<button className="main-btn">Delete</button>
					</div>
				</div>
			</div>
		)
	}
}

export default AlertsConf;
